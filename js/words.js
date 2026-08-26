/**
 * Base de données de paires de mots en français pour Espionnage
 * Les mots d'une même paire sont interchangeables et partagent un champ lexical proche sans être synonymes.
 */

export const WORD_CATEGORIES = {
  general: { id: 'general', name: '🌍 Général & Quotidien', icon: '🌍', description: 'Objets, concepts et situations de la vie courante' },
  food: { id: 'food', name: '🍕 Nourriture & Boissons', icon: '🍕', description: 'Plats, desserts, ingrédients et boissons' },
  animals: { id: 'animals', name: '🦁 Animaux & Nature', icon: '🦁', description: 'Faune, flore, paysages et météo' },
  places: { id: 'places', name: '✈️ Lieux & Voyages', icon: '✈️', description: 'Villes, monuments, pays et transports' },
  popculture: { id: 'popculture', name: '🎬 Cinéma & Séries', icon: '🎬', description: 'Films, séries, célébrités et héros' },
  jobs: { id: 'jobs', name: '💼 Métiers & Société', icon: '💼', description: 'Professions, outils et vie active' },
  party: { id: 'party', name: '🎉 Soirée & Fun', icon: '🎉', description: 'Fêtes, jeux, sorties et moments décalés' },
  geek: { id: 'geek', name: '🕹️ Geek & Jeux Vidéo', icon: '🕹️', description: 'Tech, gaming, internet et science-fiction' },
  sport: { id: 'sport', name: '⚽ Sports & Loisirs', icon: '⚽', description: 'Disciplines, activités et équipements sportifs' }
};

export const INITIAL_WORD_PAIRS = [
  // ==========================================
  // 🌍 GÉNÉRAL & QUOTIDIEN
  // ==========================================
  { word1: "Mer", word2: "Plage", category: "general", age: "kids" },
  { word1: "Soleil", word2: "Lune", category: "general", age: "kids" },
  { word1: "Jour", word2: "Nuit", category: "general", age: "kids" },
  { word1: "Ciel", word2: "Terre", category: "general", age: "kids" },
  { word1: "Feu", word2: "Cendre", category: "general", age: "kids" },
  { word1: "Fumée", word2: "Brouillard", category: "general", age: "kids" },
  { word1: "Pluie", word2: "Neige", category: "general", age: "kids" },
  { word1: "Vent", word2: "Orage", category: "general", age: "kids" },
  { word1: "Étoile", word2: "Planète", category: "general", age: "kids" },
  { word1: "Ombre", word2: "Reflet", category: "general", age: "kids" },
  { word1: "Stylo", word2: "Crayon", category: "general", age: "kids" },
  { word1: "Cahier", word2: "Classeur", category: "general", age: "kids" },
  { word1: "Feuille", word2: "Carton", category: "general", age: "kids" },
  { word1: "Livre", word2: "Magazine", category: "general", age: "kids" },
  { word1: "Roman", word2: "Bande dessinée", category: "general", age: "kids" },
  { word1: "Colle", word2: "Ciseaux", category: "general", age: "kids" },
  { word1: "Règle", word2: "Équerre", category: "general", age: "kids" },
  { word1: "Gomme", word2: "Taille-crayon", category: "general", age: "kids" },
  { word1: "Lunettes", word2: "Lentilles", category: "general", age: "standard" },
  { word1: "Montre", word2: "Horloge", category: "general", age: "kids" },
  { word1: "Lit", word2: "Canapé", category: "general", age: "kids" },
  { word1: "Couverture", word2: "Matelas", category: "general", age: "kids" },
  { word1: "Savon", word2: "Shampoing", category: "general", age: "kids" },
  { word1: "Brosse à dents", word2: "Dentifrice", category: "general", age: "kids" },
  { word1: "Peigne", word2: "Sèche-cheveux", category: "general", age: "kids" },
  { word1: "Baignoire", word2: "Douche", category: "general", age: "kids" },
  { word1: "Lavabo", word2: "Évier", category: "general", age: "kids" },
  { word1: "Serviette", word2: "Peignoir", category: "general", age: "kids" },
  { word1: "Chaise", word2: "Tabouret", category: "general", age: "kids" },
  { word1: "Table", word2: "Bureau", category: "general", age: "kids" },
  { word1: "Porte", word2: "Fenêtre", category: "general", age: "kids" },
  { word1: "Lampe", word2: "Bougie", category: "general", age: "kids" },
  { word1: "Valise", word2: "Sac à dos", category: "general", age: "kids" },
  { word1: "Parapluie", word2: "Bottes de pluie", category: "general", age: "kids" },
  { word1: "Écharpe", word2: "Bonnet", category: "general", age: "kids" },
  { word1: "Gants", word2: "Manteau", category: "general", age: "kids" },
  { word1: "Chapeau", word2: "Casquette", category: "general", age: "kids" },
  { word1: "Chaussettes", word2: "Chaussures", category: "general", age: "kids" },
  { word1: "Baskets", word2: "Sandales", category: "general", age: "kids" },
  { word1: "Pull", word2: "T-shirt", category: "general", age: "kids" },
  { word1: "Pantalon", word2: "Short", category: "general", age: "kids" },
  { word1: "Robe", word2: "Jupe", category: "general", age: "kids" },
  { word1: "Ceinture", word2: "Bretelles", category: "general", age: "kids" },
  { word1: "Clé", word2: "Serrure", category: "general", age: "kids" },
  { word1: "Cadenas", word2: "Chaîne", category: "general", age: "kids" },
  { word1: "Pile", word2: "Chargeur", category: "general", age: "kids" },
  { word1: "Prise", word2: "Rallonge", category: "general", age: "standard" },
  { word1: "Aspirateur", word2: "Balai", category: "general", age: "kids" },
  { word1: "Éponge", word2: "Torchon", category: "general", age: "kids" },
  { word1: "Assiette", word2: "Bol", category: "general", age: "kids" },
  { word1: "Verre", word2: "Tasse", category: "general", age: "kids" },
  { word1: "Fourchette", word2: "Couteau", category: "general", age: "kids" },
  { word1: "Cuillère", word2: "Fourchette", category: "general", age: "kids" },
  { word1: "Poêle", word2: "Casserole", category: "general", age: "kids" },
  { word1: "Four", word2: "Micro-ondes", category: "general", age: "kids" },
  { word1: "Frigo", word2: "Congélateur", category: "general", age: "kids" },
  { word1: "Bouteille", word2: "Gourde", category: "general", age: "kids" },
  { word1: "Bouilloire", word2: "Cafetière", category: "general", age: "standard" },
  { word1: "Tiroir", word2: "Étagère", category: "general", age: "kids" },
  { word1: "Tapis", word2: "Carrelage", category: "general", age: "kids" },
  { word1: "Rideau", word2: "Volet", category: "general", age: "kids" },
  { word1: "Bague", word2: "Bracelet", category: "general", age: "kids" },
  { word1: "Collier", word2: "Boucles d'oreilles", category: "general", age: "kids" },
  { word1: "Portefeuille", word2: "Sac à main", category: "general", age: "kids" },
  { word1: "Billet", word2: "Pièce de monnaie", category: "general", age: "kids" },
  { word1: "Carte bancaire", word2: "Chèque", category: "general", age: "standard" },
  { word1: "Ascenseur", word2: "Escalier", category: "general", age: "kids" },
  { word1: "Balcon", word2: "Terrasse", category: "general", age: "kids" },
  { word1: "Grenier", word2: "Cave", category: "general", age: "kids" },
  { word1: "Toit", word2: "Cheminée", category: "general", age: "kids" },
  { word1: "Mur", word2: "Clôture", category: "general", age: "kids" },
  { word1: "Rêve", word2: "Cauchemar", category: "general", age: "kids" },
  { word1: "Larme", word2: "Sourire", category: "general", age: "kids" },
  { word1: "Cadeau", word2: "Surprise", category: "general", age: "kids" },
  { word1: "Fête", word2: "Anniversaire", category: "general", age: "kids" },
  { word1: "Secret", word2: "Mystère", category: "general", age: "kids" },
  { word1: "Boussole", word2: "Carte routière", category: "general", age: "standard" },
  { word1: "Savon", word2: "Gel douche", category: "general", age: "kids" },
  { word1: "Coussin", word2: "Oreiller", category: "general", age: "kids" },
  { word1: "Stylo à bille", word2: "Feutre", category: "general", age: "kids" },
  { word1: "Agenda", word2: "Calendrier", category: "general", age: "kids" },
  { word1: "Télécommande", word2: "Manette", category: "general", age: "kids" },
  { word1: "Bouton", word2: "Fermeture éclair", category: "general", age: "kids" },
  { word1: "Miroir", word2: "Fenêtre", category: "general", age: "kids" },
  { word1: "Poubelle", word2: "Recyclage", category: "general", age: "kids" },
  { word1: "Parfum", word2: "Déodorant", category: "general", age: "standard" },
  { word1: "Maquillage", word2: "Peinture", category: "general", age: "kids" },
  { word1: "Bague", word2: "Alliance", category: "general", age: "standard" },
  { word1: "Tatouage", word2: "Piercing", category: "general", age: "adult" },
  { word1: "Robe de chambre", word2: "Pyjama", category: "general", age: "kids" },
  { word1: "Casque audio", word2: "Écouteurs", category: "general", age: "kids" },
  { word1: "Tente", word2: "Caravane", category: "general", age: "kids" },
  { word1: "Guitare", word2: "Violon", category: "general", age: "kids" },
  { word1: "Piano", word2: "Synthétiseur", category: "general", age: "kids" },
  { word1: "Batterie", word2: "Tambour", category: "general", age: "kids" },
  { word1: "Tableau", word2: "Affiche", category: "general", age: "kids" },
  { word1: "Vase", word2: "Pot de fleurs", category: "general", age: "kids" },
  { word1: "Bougie", word2: "Torche", category: "general", age: "kids" },
  { word1: "Casserole", word2: "Faitout", category: "general", age: "kids" },
  { word1: "Marmite", word2: "Cocotte-minute", category: "general", age: "standard" },
  { word1: "Mixeur", word2: "Batteur", category: "general", age: "kids" },
  { word1: "Grille-pain", word2: "Four", category: "general", age: "kids" },
  { word1: "Drap", word2: "Couette", category: "general", age: "kids" },
  { word1: "Oreiller", word2: "Traversin", category: "general", age: "standard" },
  { word1: "Trousse", word2: "Cartable", category: "general", age: "kids" },
  { word1: "Baignoire", word2: "Jacuzzi", category: "general", age: "standard" },
  { word1: "Balai", word2: "Serpillère", category: "general", age: "kids" },
  { word1: "Fer à repasser", word2: "Défroisseur", category: "general", age: "standard" },

  // ==========================================
  // 🍕 NOURRITURE & BOISSONS
  // ==========================================
  { word1: "Croissant", word2: "Pain au chocolat", category: "food", age: "kids" },
  { word1: "Pain", word2: "Brioche", category: "food", age: "kids" },
  { word1: "Baguette", word2: "Biscotte", category: "food", age: "kids" },
  { word1: "Café", word2: "Thé", category: "food", age: "standard" },
  { word1: "Chocolat chaud", word2: "Lait fraise", category: "food", age: "kids" },
  { word1: "Bière", word2: "Vin", category: "food", age: "adult" },
  { word1: "Vin rouge", word2: "Vin rosé", category: "food", age: "adult" },
  { word1: "Champagne", word2: "Cidre", category: "food", age: "adult" },
  { word1: "Eau plate", word2: "Eau gazeuse", category: "food", age: "kids" },
  { word1: "Coca-Cola", word2: "Limonade", category: "food", age: "kids" },
  { word1: "Jus d'orange", word2: "Jus de pomme", category: "food", age: "kids" },
  { word1: "Pizza", word2: "Burger", category: "food", age: "kids" },
  { word1: "Frites", word2: "Purée", category: "food", age: "kids" },
  { word1: "Chips", word2: "Pop-corn", category: "food", age: "kids" },
  { word1: "Pâtes", word2: "Riz", category: "food", age: "kids" },
  { word1: "Lasagnes", word2: "Pizza", category: "food", age: "kids" },
  { word1: "Raclette", word2: "Fondue", category: "food", age: "standard" },
  { word1: "Crêpe", word2: "Gaufre", category: "food", age: "kids" },
  { word1: "Gâteau", word2: "Tarte", category: "food", age: "kids" },
  { word1: "Éclair", word2: "Tarte aux fraises", category: "food", age: "kids" },
  { word1: "Macaron", word2: "Cookie", category: "food", age: "kids" },
  { word1: "Muffin", word2: "Donut", category: "food", age: "kids" },
  { word1: "Glace", word2: "Sorbet", category: "food", age: "kids" },
  { word1: "Yaourt", word2: "Compote", category: "food", age: "kids" },
  { word1: "Beurre", word2: "Confiture", category: "food", age: "kids" },
  { word1: "Nutella", word2: "Confiture", category: "food", age: "kids" },
  { word1: "Miel", word2: "Sirop d'érable", category: "food", age: "kids" },
  { word1: "Sucre", word2: "Sel", category: "food", age: "kids" },
  { word1: "Sel", word2: "Poivre", category: "food", age: "kids" },
  { word1: "Ketchup", word2: "Moutarde", category: "food", age: "kids" },
  { word1: "Mayonnaise", word2: "Ketchup", category: "food", age: "kids" },
  { word1: "Huile d'olive", word2: "Vinaigre", category: "food", age: "standard" },
  { word1: "Pomme", word2: "Poire", category: "food", age: "kids" },
  { word1: "Orange", word2: "Citron", category: "food", age: "kids" },
  { word1: "Fraise", word2: "Framboise", category: "food", age: "kids" },
  { word1: "Cerise", word2: "Prune", category: "food", age: "kids" },
  { word1: "Banane", word2: "Ananas", category: "food", age: "kids" },
  { word1: "Pastèque", word2: "Melon", category: "food", age: "kids" },
  { word1: "Pêche", word2: "Abricot", category: "food", age: "kids" },
  { word1: "Raisin", word2: "Figue", category: "food", age: "kids" },
  { word1: "Tomate", word2: "Concombre", category: "food", age: "kids" },
  { word1: "Carotte", word2: "Radis", category: "food", age: "kids" },
  { word1: "Pomme de terre", word2: "Carotte", category: "food", age: "kids" },
  { word1: "Courgette", word2: "Aubergine", category: "food", age: "kids" },
  { word1: "Oignon", word2: "Ail", category: "food", age: "kids" },
  { word1: "Brocoli", word2: "Chou-fleur", category: "food", age: "kids" },
  { word1: "Salade", word2: "Épinards", category: "food", age: "kids" },
  { word1: "Poulet", word2: "Canard", category: "food", age: "kids" },
  { word1: "Bœuf", word2: "Poulet", category: "food", age: "kids" },
  { word1: "Jambon", word2: "Saucisson", category: "food", age: "kids" },
  { word1: "Saumon", word2: "Thon", category: "food", age: "kids" },
  { word1: "Crevette", word2: "Crabe", category: "food", age: "kids" },
  { word1: "Sushi", word2: "Ramen", category: "food", age: "standard" },
  { word1: "Tacos", word2: "Burger", category: "food", age: "kids" },
  { word1: "Soupe", word2: "Salade", category: "food", age: "kids" },
  { word1: "Camembert", word2: "Chèvre", category: "food", age: "standard" },
  { word1: "Comté", word2: "Mozzarella", category: "food", age: "standard" },
  { word1: "Tiramisu", word2: "Mousse au chocolat", category: "food", age: "kids" },
  { word1: "Crème brûlée", word2: "Île flottante", category: "food", age: "kids" },
  { word1: "Pastis", word2: "Bière", category: "food", age: "adult" },
  { word1: "Mojito", word2: "Piña Colada", category: "food", age: "adult" },
  { word1: "Thé", word2: "Tisane", category: "food", age: "kids" },
  { word1: "Foie gras", word2: "Caviar", category: "food", age: "adult" },
  { word1: "Huître", word2: "Moule", category: "food", age: "standard" },
  { word1: "Couscous", word2: "Paëlla", category: "food", age: "standard" },
  { word1: "Croque-monsieur", word2: "Hot-dog", category: "food", age: "kids" },
  { word1: "Quiche lorraine", word2: "Pizza", category: "food", age: "kids" },
  { word1: "Chocolat noir", word2: "Chocolat au lait", category: "food", age: "kids" },
  { word1: "Bonbon", word2: "Chocolat", category: "food", age: "kids" },

  // ==========================================
  // 🦁 ANIMAUX & NATURE
  // ==========================================
  { word1: "Chien", word2: "Chat", category: "animals", age: "kids" },
  { word1: "Chien", word2: "Loup", category: "animals", age: "kids" },
  { word1: "Chat", word2: "Tigre", category: "animals", age: "kids" },
  { word1: "Lion", word2: "Tigre", category: "animals", age: "kids" },
  { word1: "Guépard", word2: "Gazelle", category: "animals", age: "kids" },
  { word1: "Cheval", word2: "Zèbre", category: "animals", age: "kids" },
  { word1: "Âne", word2: "Chameau", category: "animals", age: "kids" },
  { word1: "Vache", word2: "Mouton", category: "animals", age: "kids" },
  { word1: "Cochon", word2: "Mouton", category: "animals", age: "kids" },
  { word1: "Lapin", word2: "Écureuil", category: "animals", age: "kids" },
  { word1: "Souris", word2: "Hamster", category: "animals", age: "kids" },
  { word1: "Ours", word2: "Loup", category: "animals", age: "kids" },
  { word1: "Renard", word2: "Loup", category: "animals", age: "kids" },
  { word1: "Hérisson", word2: "Tortue", category: "animals", age: "kids" },
  { word1: "Cerf", word2: "Sanglier", category: "animals", age: "kids" },
  { word1: "Kangourou", word2: "Koala", category: "animals", age: "kids" },
  { word1: "Singe", word2: "Paresseux", category: "animals", age: "kids" },
  { word1: "Aigle", word2: "Chouette", category: "animals", age: "kids" },
  { word1: "Pigeon", word2: "Mouette", category: "animals", age: "kids" },
  { word1: "Canard", word2: "Cygne", category: "animals", age: "kids" },
  { word1: "Perroquet", word2: "Toucan", category: "animals", age: "kids" },
  { word1: "Corbeau", word2: "Chouette", category: "animals", age: "kids" },
  { word1: "Pingouin", word2: "Phoque", category: "animals", age: "kids" },
  { word1: "Dauphin", word2: "Baleine", category: "animals", age: "kids" },
  { word1: "Requin", word2: "Dauphin", category: "animals", age: "kids" },
  { word1: "Poulpe", word2: "Crabe", category: "animals", age: "kids" },
  { word1: "Tortue", word2: "Escargot", category: "animals", age: "kids" },
  { word1: "Grenouille", word2: "Lézard", category: "animals", age: "kids" },
  { word1: "Crocodile", word2: "Serpent", category: "animals", age: "kids" },
  { word1: "Abeille", word2: "Papillon", category: "animals", age: "kids" },
  { word1: "Moustique", word2: "Mouche", category: "animals", age: "kids" },
  { word1: "Araignée", word2: "Scorpion", category: "animals", age: "kids" },
  { word1: "Fourmi", word2: "Abeille", category: "animals", age: "kids" },
  { word1: "Forêt", word2: "Jungle", category: "animals", age: "kids" },
  { word1: "Montagne", word2: "Colline", category: "animals", age: "kids" },
  { word1: "Rivière", word2: "Cascade", category: "animals", age: "kids" },
  { word1: "Lac", word2: "Mer", category: "animals", age: "kids" },
  { word1: "Désert", word2: "Oasis", category: "animals", age: "kids" },
  { word1: "Volcan", word2: "Montagne", category: "animals", age: "kids" },
  { word1: "Grotte", word2: "Falaise", category: "animals", age: "kids" },
  { word1: "Rose", word2: "Tulipe", category: "animals", age: "kids" },
  { word1: "Chêne", word2: "Sapin", category: "animals", age: "kids" },

  // ==========================================
  // ✈️ LIEUX & VOYAGES
  // ==========================================
  { word1: "Avion", word2: "Train", category: "places", age: "kids" },
  { word1: "Hélicoptère", word2: "Avion", category: "places", age: "kids" },
  { word1: "Train", word2: "Bus", category: "places", age: "kids" },
  { word1: "Voiture", word2: "Moto", category: "places", age: "kids" },
  { word1: "Vélo", word2: "Trottinette", category: "places", age: "kids" },
  { word1: "Bateau", word2: "Sous-marin", category: "places", age: "kids" },
  { word1: "Aéroport", word2: "Gare", category: "places", age: "kids" },
  { word1: "Hôtel", word2: "Camping", category: "places", age: "kids" },
  { word1: "Musée", word2: "Cinéma", category: "places", age: "kids" },
  { word1: "Cinéma", word2: "Théâtre", category: "places", age: "kids" },
  { word1: "Stade", word2: "Piscine", category: "places", age: "kids" },
  { word1: "Piscine", word2: "Plage", category: "places", age: "kids" },
  { word1: "Parc", word2: "Forêt", category: "places", age: "kids" },
  { word1: "Château", word2: "Cathédrale", category: "places", age: "kids" },
  { word1: "Tour Eiffel", word2: "Arc de Triomphe", category: "places", age: "kids" },
  { word1: "Pyramide", word2: "Sphinx", category: "places", age: "kids" },
  { word1: "Paris", word2: "Londres", category: "places", age: "kids" },
  { word1: "New York", word2: "Tokyo", category: "places", age: "standard" },
  { word1: "Rome", word2: "Venise", category: "places", age: "standard" },
  { word1: "Marseille", word2: "Lyon", category: "places", age: "kids" },
  { word1: "Corse", word2: "Bretagne", category: "places", age: "standard" },
  { word1: "Everest", word2: "Kilimandjaro", category: "places", age: "kids" },
  { word1: "Désert", word2: "Plage", category: "places", age: "kids" },
  { word1: "Île", word2: "Presqu'île", category: "places", age: "kids" },
  { word1: "Village", word2: "Ville", category: "places", age: "kids" },
  { word1: "Supermarché", word2: "Marché", category: "places", age: "kids" },
  { word1: "Boulangerie", word2: "Boucherie", category: "places", age: "kids" },
  { word1: "Pharmacie", word2: "Hôpital", category: "places", age: "kids" },
  { word1: "Poste", word2: "Banque", category: "places", age: "kids" },
  { word1: "Restaurant", word2: "Fast-food", category: "places", age: "kids" },
  { word1: "Bar", word2: "Boîte de nuit", category: "places", age: "adult" },
  { word1: "Zoo", word2: "Aquarium", category: "places", age: "kids" },
  { word1: "Cirque", word2: "Fête foraine", category: "places", age: "kids" },

  // ==========================================
  // 🎬 CINÉMA & CULTURE POP
  // ==========================================
  { word1: "Batman", word2: "Superman", category: "popculture", age: "kids" },
  { word1: "Spider-Man", word2: "Iron Man", category: "popculture", age: "kids" },
  { word1: "Hulk", word2: "Thor", category: "popculture", age: "kids" },
  { word1: "Joker", word2: "Batman", category: "popculture", age: "kids" },
  { word1: "Harry Potter", word2: "Le Seigneur des Anneaux", category: "popculture", age: "kids" },
  { word1: "Voldemort", word2: "Dark Vador", category: "popculture", age: "kids" },
  { word1: "Dumbledore", word2: "Gandalf", category: "popculture", age: "standard" },
  { word1: "Star Wars", word2: "Star Trek", category: "popculture", age: "kids" },
  { word1: "Luke Skywalker", word2: "Han Solo", category: "popculture", age: "kids" },
  { word1: "Sabre laser", word2: "Baguette magique", category: "popculture", age: "kids" },
  { word1: "Marvel", word2: "DC Comics", category: "popculture", age: "kids" },
  { word1: "Disney", word2: "Pixar", category: "popculture", age: "kids" },
  { word1: "Le Roi Lion", word2: "Le Livre de la Jungle", category: "popculture", age: "kids" },
  { word1: "La Reine des Neiges", word2: "Raiponce", category: "popculture", age: "kids" },
  { word1: "Mickey", word2: "Donald", category: "popculture", age: "kids" },
  { word1: "Tom et Jerry", word2: "Titi et Grosminet", category: "popculture", age: "kids" },
  { word1: "Les Simpson", word2: "South Park", category: "popculture", age: "standard" },
  { word1: "Game of Thrones", word2: "Vikings", category: "popculture", age: "adult" },
  { word1: "Stranger Things", word2: "Harry Potter", category: "popculture", age: "standard" },
  { word1: "Squid Game", word2: "Hunger Games", category: "popculture", age: "standard" },
  { word1: "La Casa de Papel", word2: "Lupin", category: "popculture", age: "standard" },
  { word1: "Friends", word2: "How I Met Your Mother", category: "popculture", age: "standard" },
  { word1: "Zombie", word2: "Vampire", category: "popculture", age: "kids" },
  { word1: "Fantôme", word2: "Momie", category: "popculture", age: "kids" },
  { word1: "Alien", word2: "Robot", category: "popculture", age: "kids" },
  { word1: "James Bond", word2: "Sherlock Holmes", category: "popculture", age: "standard" },
  { word1: "Indiana Jones", word2: "Lara Croft", category: "popculture", age: "standard" },
  { word1: "Titanic", word2: "Avatar", category: "popculture", age: "standard" },
  { word1: "Matrix", word2: "Inception", category: "popculture", age: "standard" },
  { word1: "Jurassic Park", word2: "King Kong", category: "popculture", age: "kids" },
  { word1: "Astérix", word2: "Tintin", category: "popculture", age: "kids" },
  { word1: "One Piece", word2: "Naruto", category: "popculture", age: "kids" },
  { word1: "Dragon Ball", word2: "Pokemon", category: "popculture", age: "kids" },
  { word1: "Pikachu", word2: "Évoli", category: "popculture", age: "kids" },
  { word1: "Dracaufeu", word2: "Tortank", category: "popculture", age: "kids" },

  // ==========================================
  // 💼 MÉTIERS & SOCIÉTÉ
  // ==========================================
  { word1: "Médecin", word2: "Infirmier", category: "jobs", age: "kids" },
  { word1: "Chirurgien", word2: "Dentiste", category: "jobs", age: "kids" },
  { word1: "Pharmacien", word2: "Médecin", category: "jobs", age: "kids" },
  { word1: "Vétérinaire", word2: "Médecin", category: "jobs", age: "kids" },
  { word1: "Pompier", word2: "Policier", category: "jobs", age: "kids" },
  { word1: "Militaire", word2: "Policier", category: "jobs", age: "kids" },
  { word1: "Juge", word2: "Avocat", category: "jobs", age: "standard" },
  { word1: "Détective", word2: "Espion", category: "jobs", age: "kids" },
  { word1: "Professeur", word2: "Élève", category: "jobs", age: "kids" },
  { word1: "Cuisinier", word2: "Serveur", category: "jobs", age: "kids" },
  { word1: "Boulanger", word2: "Boucher", category: "jobs", age: "kids" },
  { word1: "Architecte", word2: "Maçon", category: "jobs", age: "kids" },
  { word1: "Électricien", word2: "Plombier", category: "jobs", age: "kids" },
  { word1: "Peintre", word2: "Sculpteur", category: "jobs", age: "kids" },
  { word1: "Chanteur", word2: "Acteur", category: "jobs", age: "kids" },
  { word1: "Journaliste", word2: "Écrivain", category: "jobs", age: "standard" },
  { word1: "Photographe", word2: "Caméraman", category: "jobs", age: "kids" },
  { word1: "Pilote d'avion", word2: "Astronaute", category: "jobs", age: "kids" },
  { word1: "Facteur", word2: "Livreur", category: "jobs", age: "kids" },
  { word1: "Président", word2: "Maire", category: "jobs", age: "kids" },
  { word1: "Roi", word2: "Reine", category: "jobs", age: "kids" },
  { word1: "Coiffeur", word2: "Esthéticienne", category: "jobs", age: "kids" },
  { word1: "Jardinier", word2: "Agriculteur", category: "jobs", age: "kids" },

  // ==========================================
  // 🎉 SOIRÉE & FUN
  // ==========================================
  { word1: "Soirée", word2: "Festival", category: "party", age: "kids" },
  { word1: "Apéro", word2: "Barbecue", category: "party", age: "standard" },
  { word1: "Tequila", word2: "Vodka", category: "party", age: "adult" },
  { word1: "Rhum", word2: "Whisky", category: "party", age: "adult" },
  { word1: "Mojito", word2: "Piña Colada", category: "party", age: "adult" },
  { word1: "Shot", word2: "Cocktail", category: "party", age: "adult" },
  { word1: "Karaoké", word2: "Blind test", category: "party", age: "kids" },
  { word1: "Danse", word2: "Chant", category: "party", age: "kids" },
  { word1: "Action ou Vérité", word2: "Je n'ai jamais", category: "party", age: "adult" },
  { word1: "Beer Pong", word2: "Fléchettes", category: "party", age: "adult" },
  { word1: "Confetti", word2: "Feu d'artifice", category: "party", age: "kids" },
  { word1: "Déguisement", word2: "Masque", category: "party", age: "kids" },
  { word1: "Anniversaire", word2: "Mariage", category: "party", age: "kids" },
  { word1: "Halloween", word2: "Noël", category: "party", age: "kids" },
  { word1: "Cadeau", word2: "Gâteau", category: "party", age: "kids" },
  { word1: "DJ", word2: "Orchestre", category: "party", age: "kids" },
  { word1: "Selfie", word2: "Autographe", category: "party", age: "kids" },

  // ==========================================
  // 🕹️ GEEK & JEUX VIDÉO
  // ==========================================
  { word1: "PlayStation", word2: "Xbox", category: "geek", age: "kids" },
  { word1: "Nintendo", word2: "PlayStation", category: "geek", age: "kids" },
  { word1: "Mario", word2: "Sonic", category: "geek", age: "kids" },
  { word1: "Minecraft", word2: "Roblox", category: "geek", age: "kids" },
  { word1: "Fortnite", word2: "Minecraft", category: "geek", age: "kids" },
  { word1: "GTA", word2: "Cyberpunk", category: "geek", age: "adult" },
  { word1: "FIFA", word2: "Mario Kart", category: "geek", age: "kids" },
  { word1: "League of Legends", word2: "World of Warcraft", category: "geek", age: "standard" },
  { word1: "Among Us", word2: "Loup-Garou", category: "geek", age: "kids" },
  { word1: "Clavier", word2: "Manette", category: "geek", age: "kids" },
  { word1: "Souris", word2: "Tapis de souris", category: "geek", age: "kids" },
  { word1: "Casque", word2: "Micro", category: "geek", age: "kids" },
  { word1: "Ordinateur", word2: "Tablette", category: "geek", age: "kids" },
  { word1: "Smartphone", word2: "Ordinateur", category: "geek", age: "kids" },
  { word1: "Wi-Fi", word2: "Bluetooth", category: "geek", age: "kids" },
  { word1: "YouTube", word2: "Twitch", category: "geek", age: "kids" },
  { word1: "TikTok", word2: "Instagram", category: "geek", age: "standard" },
  { word1: "Discord", word2: "WhatsApp", category: "geek", age: "kids" },
  { word1: "ChatGPT", word2: "Google", category: "geek", age: "kids" },
  { word1: "Robot", word2: "Humain", category: "geek", age: "kids" },
  { word1: "Développeur", word2: "Hacker", category: "geek", age: "standard" },

  // ==========================================
  // ⚽ SPORTS & LOISIRS
  // ==========================================
  { word1: "Football", word2: "Rugby", category: "sport", age: "kids" },
  { word1: "Basketball", word2: "Handball", category: "sport", age: "kids" },
  { word1: "Tennis", word2: "Badminton", category: "sport", age: "kids" },
  { word1: "Tennis de table", word2: "Baby-foot", category: "sport", age: "kids" },
  { word1: "Natation", word2: "Plongée", category: "sport", age: "kids" },
  { word1: "Ski", word2: "Snowboard", category: "sport", age: "kids" },
  { word1: "Surf", word2: "Skateboard", category: "sport", age: "kids" },
  { word1: "Patin à glace", word2: "Roller", category: "sport", age: "kids" },
  { word1: "Boxe", word2: "Judo", category: "sport", age: "kids" },
  { word1: "Course à pied", word2: "Vélo", category: "sport", age: "kids" },
  { word1: "Escalade", word2: "Randonnée", category: "sport", age: "kids" },
  { word1: "Yoga", word2: "Musculation", category: "sport", age: "standard" },
  { word1: "Échecs", word2: "Dames", category: "sport", age: "kids" },
  { word1: "Poker", word2: "Blackjack", category: "sport", age: "adult" },
  { word1: "Monopoly", word2: "Scrabble", category: "sport", age: "kids" },
  { word1: "Bowling", word2: "Pétanque", category: "sport", age: "kids" },
  { word1: "Fléchettes", word2: "Billard", category: "sport", age: "kids" },
  { word1: "Golf", word2: "Tennis", category: "sport", age: "kids" },
  { word1: "Formule 1", word2: "MotoGP", category: "sport", age: "kids" },
  { word1: "Karting", word2: "Quad", category: "sport", age: "kids" },
  { word1: "Kayak", word2: "Planche à voile", category: "sport", age: "kids" },
  { word1: "Guitare", word2: "Piano", category: "sport", age: "kids" },
  { word1: "Batterie", word2: "Trompette", category: "sport", age: "kids" }
];

export class WordRepository {
  constructor() {
    this.customPairs = this.loadCustomPairs();
    this.playedPairs = this.loadPlayedPairs();
  }

  loadCustomPairs() {
    try {
      const stored = localStorage.getItem('espionnage_custom_words');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn("Impossible de charger les mots personnalisés", e);
      return [];
    }
  }

  saveCustomPairs(pairs) {
    this.customPairs = pairs;
    try {
      localStorage.setItem('espionnage_custom_words', JSON.stringify(pairs));
    } catch (e) {
      console.warn("Impossible de sauvegarder les mots personnalisés", e);
    }
  }

  getPairCanonicalKey(word1, word2) {
    const w1 = String(word1 || '').trim().toLowerCase();
    const w2 = String(word2 || '').trim().toLowerCase();
    return w1 < w2 ? `${w1}::${w2}` : `${w2}::${w1}`;
  }

  loadPlayedPairs() {
    try {
      const stored = localStorage.getItem('espionnage_played_word_pairs');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn("Impossible de charger l'historique des mots joués", e);
      return [];
    }
  }

  savePlayedPairs() {
    try {
      localStorage.setItem('espionnage_played_word_pairs', JSON.stringify(this.playedPairs));
    } catch (e) {
      console.warn("Impossible de sauvegarder l'historique des mots joués", e);
    }
  }

  markPairPlayed(word1, word2) {
    const key = this.getPairCanonicalKey(word1, word2);
    if (!this.playedPairs.includes(key)) {
      this.playedPairs.push(key);
      this.savePlayedPairs();
    }
  }

  isPairPlayed(word1, word2) {
    return this.playedPairs.includes(this.getPairCanonicalKey(word1, word2));
  }

  resetPlayedPairs() {
    this.playedPairs = [];
    try {
      localStorage.removeItem('espionnage_played_word_pairs');
    } catch (e) {}
    return true;
  }

  getPlayedPairsCount() {
    return this.playedPairs.length;
  }

  addCustomPair(word1, word2, category = 'custom', age = 'standard') {
    const pair = {
      word1: word1.trim(),
      word2: word2.trim(),
      category: category,
      age: age,
      id: Date.now() + Math.random().toString(36).substr(2, 4)
    };
    const pairs = [...this.customPairs, pair];
    this.saveCustomPairs(pairs);
    return pair;
  }

  removeCustomPair(id) {
    const pairs = this.customPairs.filter(p => p.id !== id);
    this.saveCustomPairs(pairs);
  }

  getAllPairs(selectedCategories = null, ageFilter = 'standard') {
    let list = [...INITIAL_WORD_PAIRS];
    if (this.customPairs.length > 0) {
      list = list.concat(this.customPairs);
    }

    if (ageFilter === 'kids') {
      list = list.filter(pair => pair.age === 'kids');
    } else if (ageFilter === 'standard') {
      list = list.filter(pair => pair.age === 'kids' || pair.age === 'standard');
    }

    if (selectedCategories && selectedCategories.length > 0) {
      list = list.filter(pair => {
        if (pair.category === 'custom') return true;
        return selectedCategories.includes(pair.category);
      });
    }

    return list;
  }

  getPoolStats(selectedCategories = null, ageFilter = 'standard') {
    const totalPool = this.getAllPairs(selectedCategories, ageFilter);
    const available = totalPool.filter(p => !this.isPairPlayed(p.word1, p.word2));
    const playedCount = totalPool.length - available.length;
    const isExhausted = totalPool.length > 0 && available.length === 0;

    return {
      totalPool,
      available,
      playedCount,
      totalCount: totalPool.length,
      availableCount: available.length,
      isExhausted
    };
  }

  /**
   * Retourne les statistiques détaillées pour chaque liste (tranches d'âge et thèmes)
   */
  getDetailedStats() {
    const ageLevels = [
      { id: 'kids', name: 'Enfants (-8 ans)', icon: '👶', filter: 'kids' },
      { id: 'standard', name: 'Tout public (+8 ans)', icon: '👥', filter: 'standard' },
      { id: 'adult', name: 'Ados & Adultes (16+)', icon: '🎉', filter: 'adult' }
    ];

    const byAge = ageLevels.map(lvl => {
      const stats = this.getPoolStats(null, lvl.filter);
      return {
        ...lvl,
        totalCount: stats.totalCount,
        availableCount: stats.availableCount,
        playedCount: stats.playedCount,
        isExhausted: stats.isExhausted
      };
    });

    const global = this.getPoolStats(null, 'adult');

    const byCategory = Object.values(WORD_CATEGORIES).map(cat => {
      const allForCat = this.getAllPairs([cat.id], 'adult');
      const availableForCat = allForCat.filter(p => !this.isPairPlayed(p.word1, p.word2));
      return {
        id: cat.id,
        name: cat.name,
        icon: cat.icon,
        totalCount: allForCat.length,
        availableCount: availableForCat.length,
        playedCount: allForCat.length - availableForCat.length,
        isExhausted: allForCat.length > 0 && availableForCat.length === 0
      };
    });

    if (this.customPairs.length > 0) {
      const allCustom = this.customPairs;
      const availableCustom = allCustom.filter(p => !this.isPairPlayed(p.word1, p.word2));
      byCategory.push({
        id: 'custom',
        name: '✍️ Mots personnalisés',
        icon: '✍️',
        totalCount: allCustom.length,
        availableCount: availableCustom.length,
        playedCount: allCustom.length - availableCustom.length,
        isExhausted: allCustom.length > 0 && availableCustom.length === 0
      });
    }

    return {
      global,
      byAge,
      byCategory
    };
  }

  /**
   * Sélectionne une paire de mots aléatoire selon les catégories et filtre d'âge choisis
   * en évitant les doublons tant que la liste n'est pas épuisée.
   */
  getRandomPair(selectedCategories = null, ageFilter = 'standard') {
    const stats = this.getPoolStats(selectedCategories, ageFilter);
    
    if (stats.totalCount === 0) {
      const fallbackList = INITIAL_WORD_PAIRS.filter(p => ageFilter === 'kids' ? p.age === 'kids' : true);
      const chosenFallback = fallbackList.length > 0 ? fallbackList : INITIAL_WORD_PAIRS;
      const picked = chosenFallback[Math.floor(Math.random() * chosenFallback.length)];
      const swap = Math.random() > 0.5;
      return {
        word1: swap ? picked.word2 : picked.word1,
        word2: swap ? picked.word1 : picked.word2,
        category: picked.category,
        age: picked.age,
        exhausted: false
      };
    }

    if (stats.isExhausted) {
      return {
        exhausted: true,
        stats: stats
      };
    }

    const picked = stats.available[Math.floor(Math.random() * stats.available.length)];
    this.markPairPlayed(picked.word1, picked.word2);

    if (Math.random() > 0.5) {
      return {
        word1: picked.word2,
        word2: picked.word1,
        category: picked.category,
        age: picked.age,
        exhausted: false
      };
    }

    return { ...picked, exhausted: false };
  }
}
