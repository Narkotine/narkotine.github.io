# 🕵️ Espionnage - Jeu d'Ambiance & Déduction (Web & Mobile PWA)

Application web et mobile complète de déduction et de bluff **Espionnage** en français, optimisée pour le mode **« Passe & Joue »** sur smartphone ou sur grand écran.

---

## ✨ Fonctionnalités

- **Mode « Passe & Joue » (Pass & Play)** : Un seul téléphone suffit pour tout le groupe avec révélation secrète anti-triche (appui / maintien / masquage instantané).
- **500+ paires de mots en français** réparties en 9 catégories thématiques (*Général & Quotidien*, *Nourriture & Gastronomie*, *Animaux & Nature*, *Lieux & Voyages*, *Cinéma & Séries*, *Métiers*, *Soirée & Fun*, *Geek & Gaming*, *Sports & Loisirs*).
- **Créateur de mots personnalisés** : Ajoutez vos propres paires de mots secrets directement depuis l'application !
- **Équilibrage automatique des rôles** (Civils 🛡️, Espions 🕶️, Diplomates 🎭) de 3 à 20+ joueurs avec mode personnalisé.
- **Règles officielles complètes** : Décompte des votes, éliminations animées, et **dernière chance du Diplomate** (devinette du mot civil pour voler la victoire).
- **Système de points Undercover & Classement de session** : Barème officiel (**Civils +2 pts**, **Diplomate +6 pts**, **Espion +10 pts**), suivi cumulatif des scores, podium (🥇 🥈 🥉) et tableau des scores accessible à tout moment.
- **Effets sonores & Retours haptiques** générés dynamiquement par l'API Web Audio (aucun fichier externe lourd, zéro coupure réseau).
- **PWA (Progressive Web App)** : Installable en 1 clic sur l'écran d'accueil Android / iOS et fonctionne à 100% hors-ligne.

---

## 🚀 Lancement rapide

### 1. Directement dans le navigateur
Ouvrez simplement le fichier `index.html` dans n'importe quel navigateur moderne (Chrome, Safari, Firefox, Edge, etc.) ou servez le dossier localement :

```bash
npx serve . -l 3000
```
Puis accédez à `http://localhost:3000`.

### 2. Sur mobile (Installation PWA)
- **Sur Android (Chrome)** : Ouvrez la page, appuyez sur le menu (les 3 points) puis sur **« Ajouter à l'écran d'accueil »** ou **« Installer l'application »**.
- **Sur iPhone (Safari)** : Ouvrez la page, appuyez sur le bouton de partage puis sur **« Sur l'écran d'accueil »**.

---

## 🎭 Les Règles du Jeu & Système de Points

1. **Distribution secrète** : Chaque joueur découvre discrètement son mot sur le téléphone.
   - Les **Civils** 🛡️ reçoivent tous le même mot secret (ex: *Chien*).
   - L'**Espion** 🕶️ reçoit un mot très proche (ex: *Loup*).
   - Le **Diplomate** 🎭 ne reçoit aucun mot !
2. **Tour de table (Indices)** : À tour de rôle, chaque joueur donne un mot ou un indice court décrivant son mot.
3. **Débat & Vote** : Après les indices, les joueurs votent pour éliminer le suspect principal.
4. **Dernière chance du Diplomate** : Si le Diplomate est éliminé, il a une chance unique de deviner le mot civil pour remporter immédiatement la partie !

### 🏆 Barème des Points

| Rôle | Points de victoire | Condition |
| :--- | :---: | :--- |
| **Civil** 🛡️ | **+2 pts** | Tous les Espions et Diplomates sont éliminés |
| **Diplomate** 🎭 *(Mr. White)* | **+6 pts** | Survie jusqu'au dernier Civil OU devinette exacte du mot civil |
| **Espion** 🕶️ *(Undercover)* | **+10 pts** | Survie jusqu'à ce qu'il ne reste qu'un seul Civil |
| **Victoire conjointe Infiltrés** | **+10 pts** (Espion) / **+6 pts** (Diplomate) | Au moins 1 Espion et 1 Diplomate en vie avec 1 seul Civil restant |
| **Perdants** | **+0 pt** | Aucun point attribué en cas de défaite |

