/**
 * Moteur de règles et état de jeu pour Espionnage
 */

export const ROLES = {
  CIVIL: 'civil',
  SPY: 'spy',
  DIPLOMAT: 'diplomat'
};

export const POINTS_CONFIG = {
  [ROLES.CIVIL]: 2,
  [ROLES.DIPLOMAT]: 6,
  [ROLES.SPY]: 10
};

export const PHASES = {
  SETUP: 'setup',
  REVEAL: 'reveal',
  CLUES: 'clues',
  VOTING: 'voting',
  DIPLOMAT_GUESS: 'diplomat_guess',
  GAME_OVER: 'game_over'
};

export class EspionnageGame {
  constructor(wordRepository) {
    this.wordRepo = wordRepository;
    this.players = []; // [{ id, name, role, word, isAlive, avatarColor }]
    this.wordPair = null; // { word1, word2, category }
    this.civilWord = '';
    this.spyWord = '';
    this.phase = PHASES.SETUP;
    
    // Suivi de la distribution
    this.currentRevealIndex = 0;

    // Suivi de la partie
    this.roundNumber = 1;
    this.startingPlayerIndex = 0;
    this.clueCurrentPlayerIndex = 0;
    this.eliminatedThisRound = null;
    this.diplomatAwaitingGuess = null;

    // Résultat final & Points de manche
    this.winner = null; // 'civil' | 'spy' | 'diplomat' | 'infiltrators'
    this.winReason = '';
    this.roundPoints = {}; // { [playerId]: number }
    this.playedWordPairs = [];

    // Options et vote anonyme
    this.options = {
      showRoles: false,
      anonymousVoting: false
    };
    this.anonymousVotes = {}; // { [voterId]: targetPlayerId }
  }

  /**
   * Calcule la recommandation de rôles par défaut selon le nombre de joueurs
   */
  static getRecommendedRoles(playerCount) {
    if (playerCount < 3) return { civils: 3, spies: 0, diplomats: 0 };
    if (playerCount === 3) return { civils: 2, spies: 1, diplomats: 0 };
    if (playerCount === 4) return { civils: 3, spies: 1, diplomats: 0 };
    if (playerCount === 5) return { civils: 3, spies: 1, diplomats: 1 };
    if (playerCount === 6) return { civils: 4, spies: 1, diplomats: 1 };
    if (playerCount === 7) return { civils: 5, spies: 1, diplomats: 1 };
    if (playerCount === 8) return { civils: 5, spies: 2, diplomats: 1 };
    if (playerCount === 9) return { civils: 6, spies: 2, diplomats: 1 };
    if (playerCount === 10) return { civils: 6, spies: 2, diplomats: 2 };
    if (playerCount <= 12) return { civils: playerCount - 4, spies: 3, diplomats: 1 };
    
    // 13+ joueurs
    const sp = Math.max(2, Math.floor(playerCount / 4));
    const dip = Math.max(1, Math.floor(playerCount / 6));
    const civ = playerCount - sp - dip;
    return { civils: civ, spies: sp, diplomats: dip };
  }

  /**
   * Initialise une nouvelle partie
   */
  startNewGame(playerNames, roleConfig, selectedCategories = [], options = {}) {
    if (playerNames.length < 3) {
      throw new Error("Il faut au moins 3 joueurs pour démarrer.");
    }

    this.options = Object.assign({ showRoles: false, anonymousVoting: false }, options);
    this.anonymousVotes = {};

    const totalRoles = roleConfig.civils + roleConfig.spies + roleConfig.diplomats;
    if (totalRoles !== playerNames.length) {
      throw new Error(`La somme des rôles (${totalRoles}) ne correspond pas au nombre de joueurs (${playerNames.length}).`);
    }

    // Choisir une paire de mots
    const pairResult = this.wordRepo.getRandomPair(selectedCategories, options.ageFilter || 'standard');
    if (pairResult.exhausted) {
      const err = new Error("WORDS_EXHAUSTED");
      err.stats = pairResult.stats;
      throw err;
    }
    this.wordPair = pairResult;
    this.civilWord = this.wordPair.word1;
    this.spyWord = this.wordPair.word2;

    // Créer la liste des rôles
    const rolesPool = [];
    for (let i = 0; i < roleConfig.civils; i++) rolesPool.push(ROLES.CIVIL);
    for (let i = 0; i < roleConfig.spies; i++) rolesPool.push(ROLES.SPY);
    for (let i = 0; i < roleConfig.diplomats; i++) rolesPool.push(ROLES.DIPLOMAT);

    // Mélanger les rôles (Fisher-Yates)
    for (let i = rolesPool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rolesPool[i], rolesPool[j]] = [rolesPool[j], rolesPool[i]];
    }

    const AVATAR_COLORS = [
      '#FF5E7E', '#4D96FF', '#6BCB77', '#FFD93D',
      '#9D4EDD', '#FF9F45', '#00C9A7', '#E056FD',
      '#00B4D8', '#FF6B6B', '#F368E0', '#10AC84',
      '#EE5253', '#0ABDE3', '#1DD1A1', '#5f27cd'
    ];

    // Assigner aux joueurs
    this.players = playerNames.map((name, index) => {
      const role = rolesPool[index];
      let word = '';
      if (role === ROLES.CIVIL) word = this.civilWord;
      else if (role === ROLES.SPY) word = this.spyWord;
      else word = null; // Diplomate

      return {
        id: `p_${index}_${Date.now()}`,
        name: name.trim() || `Joueur ${index + 1}`,
        role: role,
        word: word,
        isAlive: true,
        avatarColor: AVATAR_COLORS[index % AVATAR_COLORS.length]
      };
    });

    this.phase = PHASES.REVEAL;
    this.currentRevealIndex = 0;
    this.roundNumber = 1;
    this.eliminatedThisRound = null;
    this.diplomatAwaitingGuess = null;
    this.winner = null;
    this.winReason = '';
    this.roundPoints = {};
  }

  setOptions(options) {
    this.options = Object.assign(this.options, options);
  }

  getCurrentRevealPlayer() {
    return this.players[this.currentRevealIndex] || null;
  }

  nextRevealPlayer() {
    this.currentRevealIndex++;
    if (this.currentRevealIndex >= this.players.length) {
      // Tous les joueurs ont vu leur mot, passage à la phase d'indices !
      this.startCluePhase();
    }
    return this.getCurrentRevealPlayer();
  }

  startCluePhase() {
    this.phase = PHASES.CLUES;
    // Choisir aléatoirement qui commence pour le Round 1
    if (this.roundNumber === 1) {
      const aliveIndexes = this.getAlivePlayerIndexes();
      this.startingPlayerIndex = aliveIndexes[Math.floor(Math.random() * aliveIndexes.length)];
    } else {
      // Décaler au joueur vivant suivant pour varier
      const aliveIndexes = this.getAlivePlayerIndexes();
      const currentIdx = aliveIndexes.indexOf(this.startingPlayerIndex);
      this.startingPlayerIndex = aliveIndexes[(currentIdx + 1) % aliveIndexes.length];
    }
    this.clueCurrentPlayerIndex = this.startingPlayerIndex;
  }

  getAlivePlayers() {
    return this.players.filter(p => p.isAlive);
  }

  getAlivePlayerIndexes() {
    return this.players
      .map((p, idx) => p.isAlive ? idx : -1)
      .filter(idx => idx !== -1);
  }

  /**
   * Retourne la liste ordonnée des joueurs vivants pour le tour de parole
   */
  getClueOrder() {
    const alive = this.getAlivePlayers();
    if (alive.length === 0) return [];

    const startPlayer = this.players[this.startingPlayerIndex];
    let startIndex = alive.findIndex(p => p.id === (startPlayer && startPlayer.isAlive ? startPlayer.id : alive[0].id));
    if (startIndex === -1) startIndex = 0;

    const ordered = [];
    for (let i = 0; i < alive.length; i++) {
      ordered.push(alive[(startIndex + i) % alive.length]);
    }
    return ordered;
  }

  startVotingPhase() {
    this.phase = PHASES.VOTING;
    this.resetAnonymousVotes();
  }

  /**
   * Enregistre le vote anonyme d'un joueur
   */
  recordAnonymousVote(voterId, targetPlayerId) {
    this.anonymousVotes[voterId] = targetPlayerId;
  }

  resetAnonymousVotes() {
    this.anonymousVotes = {};
  }

  /**
   * Calcule les résultats du vote anonyme
   * @returns {Object} { tallies: [{ player, votes }], maxVotes, topCandidates: [player], isTie: boolean, totalVotes }
   */
  getAnonymousVoteResults() {
    const alive = this.getAlivePlayers();
    const counts = {};
    alive.forEach(p => { counts[p.id] = 0; });

    Object.values(this.anonymousVotes).forEach(targetId => {
      if (counts[targetId] !== undefined) {
        counts[targetId]++;
      }
    });

    const tallies = alive.map(p => ({
      player: p,
      votes: counts[p.id] || 0
    })).sort((a, b) => b.votes - a.votes);

    const maxVotes = tallies.length > 0 ? tallies[0].votes : 0;
    const topCandidates = tallies.filter(t => t.votes === maxVotes && maxVotes > 0).map(t => t.player);
    const isTie = topCandidates.length > 1;
    const totalVotes = Object.keys(this.anonymousVotes).length;

    return {
      tallies,
      maxVotes,
      topCandidates,
      isTie,
      totalVotes
    };
  }

  /**
   * Élimine un joueur selon le vote
   * @param {string} playerId 
   * @returns {Object} { eliminatedPlayer, winStatus, requiresDiplomatGuess }
   */
  eliminatePlayer(playerId) {
    const target = this.players.find(p => p.id === playerId);
    if (!target || !target.isAlive) {
      throw new Error("Joueur introuvable ou déjà éliminé.");
    }

    target.isAlive = false;
    this.eliminatedThisRound = target;

    // Si le joueur éliminé est le Diplomate, il a le droit à une devinette finale !
    if (target.role === ROLES.DIPLOMAT) {
      this.phase = PHASES.DIPLOMAT_GUESS;
      this.diplomatAwaitingGuess = target;
      return {
        eliminatedPlayer: target,
        requiresDiplomatGuess: true,
        winStatus: null,
        roundPoints: {}
      };
    }

    // Vérifier les conditions de victoire normales
    const winStatus = this.checkWinCondition();
    if (winStatus) {
      this.phase = PHASES.GAME_OVER;
      this.winner = winStatus.winner;
      this.winReason = winStatus.reason;
      this.roundPoints = this.calculateRoundPoints(winStatus.winner);
      this.recordGameStats(winStatus.winner);
    } else {
      // Pas de victoire immédiate, préparer le tour suivant
      this.roundNumber++;
    }

    return {
      eliminatedPlayer: target,
      requiresDiplomatGuess: false,
      winStatus: winStatus,
      roundPoints: this.roundPoints
    };
  }

  /**
   * Calcule les points remportés par chaque joueur lors de la manche
   * @param {string} winner
   * @returns {Object} { [playerId]: points }
   */
  calculateRoundPoints(winner) {
    const pointsMap = {};
    this.players.forEach(player => {
      let earned = 0;
      if (winner === ROLES.CIVIL && player.role === ROLES.CIVIL) {
        earned = POINTS_CONFIG[ROLES.CIVIL];
      } else if (winner === ROLES.SPY && player.role === ROLES.SPY) {
        earned = POINTS_CONFIG[ROLES.SPY];
      } else if (winner === ROLES.DIPLOMAT && player.role === ROLES.DIPLOMAT) {
        earned = POINTS_CONFIG[ROLES.DIPLOMAT];
      } else if (winner === 'infiltrators') {
        if (player.role === ROLES.SPY) earned = POINTS_CONFIG[ROLES.SPY];
        else if (player.role === ROLES.DIPLOMAT) earned = POINTS_CONFIG[ROLES.DIPLOMAT];
      }
      pointsMap[player.id] = earned;
    });
    return pointsMap;
  }

  /**
   * Traitement de la tentative de devinette du Diplomate
   * @param {string} guessedWord 
   */
  handleDiplomatGuess(guessedWord) {
    if (!this.diplomatAwaitingGuess) return null;

    const cleanGuess = this.normalizeWord(guessedWord);
    const cleanCivil = this.normalizeWord(this.civilWord);

    const isCorrect = cleanGuess === cleanCivil;

    if (isCorrect) {
      this.phase = PHASES.GAME_OVER;
      this.winner = ROLES.DIPLOMAT;
      this.winReason = `${this.diplomatAwaitingGuess.name} (le Diplomate) a trouvé le mot exact des Civils : « ${this.civilWord} » !`;
      this.roundPoints = this.calculateRoundPoints(ROLES.DIPLOMAT);
      this.recordGameStats(ROLES.DIPLOMAT);
      return {
        isCorrect: true,
        winner: ROLES.DIPLOMAT,
        reason: this.winReason,
        roundPoints: this.roundPoints
      };
    }

    // Devinette ratée -> continuer la partie normalement
    this.diplomatAwaitingGuess = null;
    const winStatus = this.checkWinCondition();
    if (winStatus) {
      this.phase = PHASES.GAME_OVER;
      this.winner = winStatus.winner;
      this.winReason = winStatus.reason;
      this.roundPoints = this.calculateRoundPoints(winStatus.winner);
      this.recordGameStats(winStatus.winner);
      return {
        isCorrect: false,
        winner: winStatus.winner,
        reason: winStatus.reason,
        roundPoints: this.roundPoints
      };
    }

    // La partie continue
    this.roundNumber++;
    this.phase = PHASES.CLUES;
    this.startCluePhase();
    return {
      isCorrect: false,
      winner: null,
      reason: "Mauvaise réponse ! La partie continue.",
      roundPoints: {}
    };
  }

  /**
   * Ignore la devinette du Diplomate (s'il ne souhaite pas deviner ou passe)
   */
  skipDiplomatGuess() {
    this.diplomatAwaitingGuess = null;
    const winStatus = this.checkWinCondition();
    if (winStatus) {
      this.phase = PHASES.GAME_OVER;
      this.winner = winStatus.winner;
      this.winReason = winStatus.reason;
      this.roundPoints = this.calculateRoundPoints(winStatus.winner);
      this.recordGameStats(winStatus.winner);
      return {
        ...winStatus,
        roundPoints: this.roundPoints
      };
    }

    this.roundNumber++;
    this.phase = PHASES.CLUES;
    this.startCluePhase();
    return null;
  }

  /**
   * Vérifie les conditions de victoire selon les règles officielles d'Espionnage
   */
  checkWinCondition() {
    const alive = this.getAlivePlayers();
    const aliveCivils = alive.filter(p => p.role === ROLES.CIVIL);
    const aliveSpies = alive.filter(p => p.role === ROLES.SPY);
    const aliveDiplomats = alive.filter(p => p.role === ROLES.DIPLOMAT);

    // 1. Les Civils gagnent s'il n'y a plus AUCUN Espion ni AUCUN Diplomate
    if (aliveSpies.length === 0 && aliveDiplomats.length === 0) {
      return {
        winner: ROLES.CIVIL,
        reason: "Les Civils ont éliminé tous les imposteurs !"
      };
    }

    // 2. Les Infiltrés gagnent s'il ne reste qu'un seul Civil (ou zéro)
    if (aliveCivils.length <= 1 && (aliveSpies.length > 0 || aliveDiplomats.length > 0)) {
      if (aliveSpies.length > 0 && aliveDiplomats.length > 0) {
        return {
          winner: 'infiltrators',
          reason: "Victoire conjointe des Infiltrés (Espions & Diplomates) !"
        };
      } else if (aliveSpies.length > 0) {
        return {
          winner: ROLES.SPY,
          reason: "Les Espions ont pris le contrôle et éliminé la menace !"
        };
      } else {
        return {
          winner: ROLES.DIPLOMAT,
          reason: "Le Diplomate a réussi à survivre jusqu'à la fin !"
        };
      }
    }

    // 3. Supériorité numérique des infiltrés
    const totalInfiltrators = aliveSpies.length + aliveDiplomats.length;
    if (totalInfiltrators >= aliveCivils.length && totalInfiltrators > 0) {
      if (aliveSpies.length > 0 && aliveDiplomats.length > 0) {
        return {
          winner: 'infiltrators',
          reason: "Les Infiltrés sont désormais en supériorité numérique !"
        };
      } else if (aliveSpies.length > 0) {
        return {
          winner: ROLES.SPY,
          reason: "Les Espions sont désormais en supériorité numérique !"
        };
      } else {
        return {
          winner: ROLES.DIPLOMAT,
          reason: "Le Diplomate a pris le dessus !"
        };
      }
    }

    // 4. Cas où il ne reste qu'un seul joueur au total (cas limite)
    if (alive.length === 1) {
      const last = alive[0];
      return {
        winner: last.role,
        reason: `${last.name} est le dernier survivant !`
      };
    }

    // La partie continue
    return null;
  }

  normalizeWord(str) {
    if (!str) return '';
    return str
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
      .replace(/[^a-z0-9]/g, ""); // Supprime ponctuation/espaces
  }

  /**
   * Enregistre les statistiques de la partie
   */
  recordGameStats(winningRole) {
    try {
      const statsStr = localStorage.getItem('espionnage_game_stats');
      const stats = statsStr ? JSON.parse(statsStr) : {
        totalGames: 0,
        civilWins: 0,
        spyWins: 0,
        diplomatWins: 0
      };

      stats.totalGames++;
      if (winningRole === ROLES.CIVIL) stats.civilWins++;
      else if (winningRole === ROLES.SPY) stats.spyWins++;
      else if (winningRole === ROLES.DIPLOMAT) stats.diplomatWins++;
      else if (winningRole === 'infiltrators') {
        stats.spyWins++;
        stats.diplomatWins++;
      }

      localStorage.setItem('espionnage_game_stats', JSON.stringify(stats));
    } catch (e) {
      console.warn("Erreur sauvegarde stats", e);
    }
  }

  static getGameStats() {
    try {
      const statsStr = localStorage.getItem('espionnage_game_stats');
      return statsStr ? JSON.parse(statsStr) : {
        totalGames: 0,
        civilWins: 0,
        spyWins: 0,
        diplomatWins: 0
      };
    } catch (e) {
      return { totalGames: 0, civilWins: 0, spyWins: 0, diplomatWins: 0 };
    }
  }
}
