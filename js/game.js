/**
 * Moteur de règles et état de jeu pour Undercover
 */

export const ROLES = {
  CIVIL: 'civil',
  UNDERCOVER: 'undercover',
  MR_WHITE: 'mrwhite'
};

export const PHASES = {
  SETUP: 'setup',
  REVEAL: 'reveal',
  CLUES: 'clues',
  VOTING: 'voting',
  MR_WHITE_GUESS: 'mr_white_guess',
  GAME_OVER: 'game_over'
};

export class UndercoverGame {
  constructor(wordRepository) {
    this.wordRepo = wordRepository;
    this.players = []; // [{ id, name, role, word, isAlive, avatarColor }]
    this.wordPair = null; // { word1, word2, category }
    this.civilWord = '';
    this.undercoverWord = '';
    this.phase = PHASES.SETUP;
    
    // Suivi de la distribution
    this.currentRevealIndex = 0;

    // Suivi de la partie
    this.roundNumber = 1;
    this.startingPlayerIndex = 0;
    this.clueCurrentPlayerIndex = 0;
    this.eliminatedThisRound = null;
    this.mrWhiteAwaitingGuess = null;

    // Résultat final
    this.winner = null; // 'civils' | 'undercovers' | 'mrwhite'
    this.winReason = '';
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
    if (playerCount < 3) return { civils: 3, undercovers: 0, mrWhite: 0 };
    if (playerCount === 3) return { civils: 2, undercovers: 1, mrWhite: 0 };
    if (playerCount === 4) return { civils: 3, undercovers: 1, mrWhite: 0 };
    if (playerCount === 5) return { civils: 3, undercovers: 1, mrWhite: 1 };
    if (playerCount === 6) return { civils: 4, undercovers: 1, mrWhite: 1 };
    if (playerCount === 7) return { civils: 5, undercovers: 1, mrWhite: 1 };
    if (playerCount === 8) return { civils: 5, undercovers: 2, mrWhite: 1 };
    if (playerCount === 9) return { civils: 6, undercovers: 2, mrWhite: 1 };
    if (playerCount === 10) return { civils: 6, undercovers: 2, mrWhite: 2 };
    if (playerCount <= 12) return { civils: playerCount - 4, undercovers: 3, mrWhite: 1 };
    
    // 13+ joueurs
    const uc = Math.max(2, Math.floor(playerCount / 4));
    const mw = Math.max(1, Math.floor(playerCount / 6));
    const civ = playerCount - uc - mw;
    return { civils: civ, undercovers: uc, mrWhite: mw };
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

    const totalRoles = roleConfig.civils + roleConfig.undercovers + roleConfig.mrWhite;
    if (totalRoles !== playerNames.length) {
      throw new Error(`La somme des rôles (${totalRoles}) ne correspond pas au nombre de joueurs (${playerNames.length}).`);
    }

    // Choisir une paire de mots
    const excluded = this.playedWordPairs.slice(-20);
    this.wordPair = this.wordRepo.getRandomPair(selectedCategories, excluded);
    this.civilWord = this.wordPair.word1;
    this.undercoverWord = this.wordPair.word2;
    this.playedWordPairs.push(`${this.wordPair.word1}-${this.wordPair.word2}`);

    // Créer la liste des rôles
    const rolesPool = [];
    for (let i = 0; i < roleConfig.civils; i++) rolesPool.push(ROLES.CIVIL);
    for (let i = 0; i < roleConfig.undercovers; i++) rolesPool.push(ROLES.UNDERCOVER);
    for (let i = 0; i < roleConfig.mrWhite; i++) rolesPool.push(ROLES.MR_WHITE);

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
      else if (role === ROLES.UNDERCOVER) word = this.undercoverWord;
      else word = null; // M. Blanc

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
    this.mrWhiteAwaitingGuess = null;
    this.winner = null;
    this.winReason = '';
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
   * @returns {Object} { eliminatedPlayer, winStatus, requiresMrWhiteGuess }
   */
  eliminatePlayer(playerId) {
    const target = this.players.find(p => p.id === playerId);
    if (!target || !target.isAlive) {
      throw new Error("Joueur introuvable ou déjà éliminé.");
    }

    target.isAlive = false;
    this.eliminatedThisRound = target;

    // Si le joueur éliminé est M. Blanc, il a le droit à une devinette finale !
    if (target.role === ROLES.MR_WHITE) {
      this.phase = PHASES.MR_WHITE_GUESS;
      this.mrWhiteAwaitingGuess = target;
      return {
        eliminatedPlayer: target,
        requiresMrWhiteGuess: true,
        winStatus: null
      };
    }

    // Vérifier les conditions de victoire normales
    const winStatus = this.checkWinCondition();
    if (winStatus) {
      this.phase = PHASES.GAME_OVER;
      this.winner = winStatus.winner;
      this.winReason = winStatus.reason;
      this.recordGameStats(winStatus.winner);
    } else {
      // Pas de victoire immédiate, préparer le tour suivant
      this.roundNumber++;
    }

    return {
      eliminatedPlayer: target,
      requiresMrWhiteGuess: false,
      winStatus: winStatus
    };
  }

  /**
   * Traitement de la tentative de devinette de M. Blanc
   * @param {string} guessedWord 
   */
  handleMrWhiteGuess(guessedWord) {
    if (!this.mrWhiteAwaitingGuess) return null;

    const cleanGuess = this.normalizeWord(guessedWord);
    const cleanCivil = this.normalizeWord(this.civilWord);

    const isCorrect = cleanGuess === cleanCivil;

    if (isCorrect) {
      this.phase = PHASES.GAME_OVER;
      this.winner = ROLES.MR_WHITE;
      this.winReason = `${this.mrWhiteAwaitingGuess.name} (M. Blanc) a trouvé le mot exact des Civils : « ${this.civilWord} » !`;
      this.recordGameStats(ROLES.MR_WHITE);
      return {
        isCorrect: true,
        winner: ROLES.MR_WHITE,
        reason: this.winReason
      };
    }

    // Devinette ratée -> continuer la partie normalement
    this.mrWhiteAwaitingGuess = null;
    const winStatus = this.checkWinCondition();
    if (winStatus) {
      this.phase = PHASES.GAME_OVER;
      this.winner = winStatus.winner;
      this.winReason = winStatus.reason;
      this.recordGameStats(winStatus.winner);
      return {
        isCorrect: false,
        winner: winStatus.winner,
        reason: winStatus.reason
      };
    }

    // La partie continue
    this.roundNumber++;
    this.phase = PHASES.CLUES;
    this.startCluePhase();
    return {
      isCorrect: false,
      winner: null,
      reason: "Mauvaise réponse ! La partie continue."
    };
  }

  /**
   * Ignore la devinette de M. Blanc (s'il ne souhaite pas deviner ou passe)
   */
  skipMrWhiteGuess() {
    this.mrWhiteAwaitingGuess = null;
    const winStatus = this.checkWinCondition();
    if (winStatus) {
      this.phase = PHASES.GAME_OVER;
      this.winner = winStatus.winner;
      this.winReason = winStatus.reason;
      this.recordGameStats(winStatus.winner);
      return winStatus;
    }

    this.roundNumber++;
    this.phase = PHASES.CLUES;
    this.startCluePhase();
    return null;
  }

  /**
   * Vérifie les conditions de victoire selon les règles officielles d'Undercover
   */
  checkWinCondition() {
    const alive = this.getAlivePlayers();
    const aliveCivils = alive.filter(p => p.role === ROLES.CIVIL);
    const aliveUndercovers = alive.filter(p => p.role === ROLES.UNDERCOVER);
    const aliveWhites = alive.filter(p => p.role === ROLES.MR_WHITE);

    // 1. Les Civils gagnent s'il n'y a plus AUCUN Undercover ni AUCUN M. Blanc
    if (aliveUndercovers.length === 0 && aliveWhites.length === 0) {
      return {
        winner: ROLES.CIVIL,
        reason: "Les Civils ont éliminé tous les imposteurs !"
      };
    }

    // 2. Les Undercovers gagnent s'il ne reste qu'un seul Civil (ou s'ils atteignent la parité avec 0 M. Blanc)
    if (aliveUndercovers.length > 0 && aliveWhites.length === 0) {
      if (aliveUndercovers.length >= aliveCivils.length || aliveCivils.length <= 1) {
        return {
          winner: ROLES.UNDERCOVER,
          reason: "Les Undercovers sont désormais en supériorité !"
        };
      }
    }

    // 3. Cas M. Blanc survit jusqu'aux 2 derniers joueurs
    if (aliveWhites.length > 0 && alive.length <= 2) {
      return {
        winner: ROLES.MR_WHITE,
        reason: "M. Blanc a réussi à survivre jusqu'au duel final !"
      };
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
      const statsStr = localStorage.getItem('undercover_game_stats');
      const stats = statsStr ? JSON.parse(statsStr) : {
        totalGames: 0,
        civilWins: 0,
        undercoverWins: 0,
        whiteWins: 0
      };

      stats.totalGames++;
      if (winningRole === ROLES.CIVIL) stats.civilWins++;
      else if (winningRole === ROLES.UNDERCOVER) stats.undercoverWins++;
      else if (winningRole === ROLES.MR_WHITE) stats.whiteWins++;

      localStorage.setItem('undercover_game_stats', JSON.stringify(stats));
    } catch (e) {
      console.warn("Erreur sauvegarde stats", e);
    }
  }

  static getGameStats() {
    try {
      const statsStr = localStorage.getItem('undercover_game_stats');
      return statsStr ? JSON.parse(statsStr) : {
        totalGames: 0,
        civilWins: 0,
        undercoverWins: 0,
        whiteWins: 0
      };
    } catch (e) {
      return { totalGames: 0, civilWins: 0, undercoverWins: 0, whiteWins: 0 };
    }
  }
}
