/**
 * ==========================================================================
 * UNDERCOVER - APPLICATION WEB & MOBILE COMPLETE (STANDALONE)
 * Compatible avec tous les navigateurs et protocoles (file://, http://, https://)
 * ==========================================================================
 */

// ==========================================================================
// 1. BASE DE DONNÉES DE MOTS & CATÉGORIES
// ==========================================================================

const WORD_CATEGORIES = {
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

const INITIAL_WORD_PAIRS = [
  // 🌍 GÉNÉRAL & QUOTIDIEN
  { word1: "Stylo", word2: "Crayon", category: "general", age: "kids" },
  { word1: "Lunettes", word2: "Lentilles", category: "general", age: "standard" },
  { word1: "Montre", word2: "Horloge", category: "general", age: "kids" },
  { word1: "Coussin", word2: "Oreiller", category: "general", age: "kids" },
  { word1: "Couette", word2: "Couverture", category: "general", age: "kids" },
  { word1: "Savon", word2: "Gel douche", category: "general", age: "kids" },
  { word1: "Shampoing", word2: "Après-shampoing", category: "general", age: "standard" },
  { word1: "Brosse à dents", word2: "Dentifrice", category: "general", age: "kids" },
  { word1: "Miroir", word2: "Vitre", category: "general", age: "kids" },
  { word1: "Chaise", word2: "Fauteuil", category: "general", age: "kids" },
  { word1: "Canapé", word2: "Banquette", category: "general", age: "kids" },
  { word1: "Table", word2: "Bureau", category: "general", age: "kids" },
  { word1: "Porte", word2: "Fenêtre", category: "general", age: "kids" },
  { word1: "Lampe", word2: "Bougie", category: "general", age: "kids" },
  { word1: "Valise", word2: "Sac à dos", category: "general", age: "kids" },
  { word1: "Parapluie", word2: "Imperméable", category: "general", age: "kids" },
  { word1: "Écharpe", word2: "Foulard", category: "general", age: "kids" },
  { word1: "Bonnet", word2: "Casquette", category: "general", age: "kids" },
  { word1: "Gants", word2: "Moufles", category: "general", age: "kids" },
  { word1: "Chaussettes", word2: "Collants", category: "general", age: "kids" },
  { word1: "Baskets", word2: "Chaussures", category: "general", age: "kids" },
  { word1: "Bottes", word2: "Bottines", category: "general", age: "kids" },
  { word1: "Manteau", word2: "Veste", category: "general", age: "kids" },
  { word1: "Chemise", word2: "T-shirt", category: "general", age: "kids" },
  { word1: "Pantalon", word2: "Jean", category: "general", age: "kids" },
  { word1: "Short", word2: "Bermuda", category: "general", age: "standard" },
  { word1: "Ceinture", word2: "Bretelles", category: "general", age: "kids" },
  { word1: "Ciseaux", word2: "Cutter", category: "general", age: "standard" },
  { word1: "Colle", word2: "Scotch", category: "general", age: "kids" },
  { word1: "Cahier", word2: "Carnet", category: "general", age: "kids" },
  { word1: "Feuille", word2: "Carton", category: "general", age: "kids" },
  { word1: "Livre", word2: "Magazine", category: "general", age: "kids" },
  { word1: "Journal", word2: "Gazette", category: "general", age: "standard" },
  { word1: "Roman", word2: "Bande dessinée", category: "general", age: "kids" },
  { word1: "Clé", word2: "Badge", category: "general", age: "kids" },
  { word1: "Serrure", word2: "Cadenas", category: "general", age: "kids" },
  { word1: "Pile", word2: "Batterie", category: "general", age: "kids" },
  { word1: "Prise", word2: "Rallonge", category: "general", age: "standard" },
  { word1: "Poubelle", word2: "Benne", category: "general", age: "standard" },
  { word1: "Balai", word2: "Aspirateur", category: "general", age: "kids" },
  { word1: "Serpillière", word2: "Éponge", category: "general", age: "kids" },
  { word1: "Assiette", word2: "Bol", category: "general", age: "kids" },
  { word1: "Verre", word2: "Tasse", category: "general", age: "kids" },
  { word1: "Fourchette", word2: "Cuillère", category: "general", age: "kids" },
  { word1: "Couteau", word2: "Économe", category: "general", age: "standard" },
  { word1: "Poêle", word2: "Casserole", category: "general", age: "kids" },
  { word1: "Four", word2: "Micro-ondes", category: "general", age: "kids" },
  { word1: "Frigo", word2: "Congélateur", category: "general", age: "kids" },
  { word1: "Bouteille", word2: "Gourde", category: "general", age: "kids" },
  { word1: "Bouilloire", word2: "Cafetière", category: "general", age: "standard" },
  { word1: "Placard", word2: "Armoire", category: "general", age: "kids" },
  { word1: "Tiroir", word2: "Boîte", category: "general", age: "kids" },
  { word1: "Tapis", word2: "Moquette", category: "general", age: "kids" },
  { word1: "Rideau", word2: "Store", category: "general", age: "kids" },
  { word1: "Peigne", word2: "Brosse", category: "general", age: "kids" },
  { word1: "Baignoire", word2: "Douche", category: "general", age: "kids" },
  { word1: "Lavabo", word2: "Évier", category: "general", age: "kids" },
  { word1: "Serviette", word2: "Peignoir", category: "general", age: "kids" },
  { word1: "Bague", word2: "Alliance", category: "general", age: "standard" },
  { word1: "Collier", word2: "Bracelet", category: "general", age: "kids" },
  { word1: "Portefeuille", word2: "Porte-monnaie", category: "general", age: "kids" },
  { word1: "Billet", word2: "Pièce de monnaie", category: "general", age: "kids" },
  { word1: "Carte bancaire", word2: "Chéquier", category: "general", age: "standard" },
  { word1: "Ascenseur", word2: "Escalier", category: "general", age: "kids" },
  { word1: "Balcon", word2: "Terrasse", category: "general", age: "kids" },
  { word1: "Grenier", word2: "Cave", category: "general", age: "kids" },
  { word1: "Toit", word2: "Plafond", category: "general", age: "kids" },
  { word1: "Mur", word2: "Cloison", category: "general", age: "standard" },
  { word1: "Feu", word2: "Flamme", category: "general", age: "kids" },
  { word1: "Fumée", word2: "Brouillard", category: "general", age: "kids" },
  { word1: "Pluie", word2: "Averse", category: "general", age: "kids" },
  { word1: "Neige", word2: "Grêle", category: "general", age: "kids" },
  { word1: "Vent", word2: "Tempête", category: "general", age: "kids" },
  { word1: "Ombre", word2: "Reflet", category: "general", age: "kids" },
  { word1: "Soleil", word2: "Lune", category: "general", age: "kids" },
  { word1: "Étoile", word2: "Planète", category: "general", age: "kids" },
  { word1: "Silence", word2: "Chuchotement", category: "general", age: "kids" },
  { word1: "Cri", word2: "Hurlement", category: "general", age: "kids" },
  { word1: "Rêve", word2: "Cauchemar", category: "general", age: "kids" },
  { word1: "Secret", word2: "Mystère", category: "general", age: "kids" },
  { word1: "Béret", word2: "Chapeau", category: "general", age: "kids" },
  { word1: "Tricot", word2: "Couture", category: "general", age: "standard" },
  { word1: "Chaussons", word2: "Pantoufles", category: "general", age: "kids" },
  { word1: "Parfum", word2: "Déodorant", category: "general", age: "standard" },
  { word1: "Briquet", word2: "Allumette", category: "general", age: "standard" },
  { word1: "Trombone", word2: "Punaise", category: "general", age: "kids" },
  { word1: "Règle", word2: "Équerre", category: "general", age: "kids" },
  { word1: "Gomme", word2: "Correcteur", category: "general", age: "kids" },
  { word1: "Poussette", word2: "Landeau", category: "general", age: "kids" },
  { word1: "Doudou", word2: "Peluche", category: "general", age: "kids" },
  { word1: "Biberon", word2: "Tétine", category: "general", age: "kids" },
  { word1: "Marteau", word2: "Maillet", category: "general", age: "kids" },
  { word1: "Tournevis", word2: "Clé à molette", category: "general", age: "kids" },
  { word1: "Perceuse", word2: "Visseuse", category: "general", age: "standard" },
  { word1: "Tente", word2: "Caravane", category: "general", age: "kids" },
  { word1: "Sac de couchage", word2: "Matelas gonflable", category: "general", age: "kids" },
  { word1: "Lampe torche", word2: "Frontale", category: "general", age: "kids" },

  // 🍕 NOURRITURE & BOISSONS
  { word1: "Croissant", word2: "Pain au chocolat", category: "food", age: "kids" },
  { word1: "Baguette", word2: "Pain de mie", category: "food", age: "kids" },
  { word1: "Café", word2: "Thé", category: "food", age: "standard" },
  { word1: "Chocolat chaud", word2: "Cappuccino", category: "food", age: "kids" },
  { word1: "Bière", word2: "Cidre", category: "food", age: "adult" },
  { word1: "Vin rouge", word2: "Vin blanc", category: "food", age: "adult" },
  { word1: "Champagne", word2: "Prosecco", category: "food", age: "adult" },
  { word1: "Eau plate", word2: "Eau gazeuse", category: "food", age: "kids" },
  { word1: "Coca-Cola", word2: "Pepsi", category: "food", age: "kids" },
  { word1: "Jus d'orange", word2: "Jus de pomme", category: "food", age: "kids" },
  { word1: "Limonade", word2: "Citronnade", category: "food", age: "kids" },
  { word1: "Pizza", word2: "Flammekueche", category: "food", age: "standard" },
  { word1: "Burger", word2: "Sandwich", category: "food", age: "kids" },
  { word1: "Frites", word2: "Pommes noisettes", category: "food", age: "kids" },
  { word1: "Chips", word2: "Pop-corn", category: "food", age: "kids" },
  { word1: "Pâtes", word2: "Riz", category: "food", age: "kids" },
  { word1: "Spaghetti", word2: "Tagliatelles", category: "food", age: "kids" },
  { word1: "Lasagnes", word2: "Gratin", category: "food", age: "kids" },
  { word1: "Raclette", word2: "Fondue", category: "food", age: "standard" },
  { word1: "Tartiflette", word2: "Gratin dauphinois", category: "food", age: "standard" },
  { word1: "Crêpe", word2: "Gaufre", category: "food", age: "kids" },
  { word1: "Pancake", word2: "Crêpe", category: "food", age: "kids" },
  { word1: "Gâteau", word2: "Tarte", category: "food", age: "kids" },
  { word1: "Éclair", word2: "Religieuse", category: "food", age: "kids" },
  { word1: "Macaron", word2: "Meringue", category: "food", age: "kids" },
  { word1: "Donut", word2: "Beignet", category: "food", age: "kids" },
  { word1: "Glace", word2: "Sorbet", category: "food", age: "kids" },
  { word1: "Yaourt", word2: "Fromage blanc", category: "food", age: "kids" },
  { word1: "Beurre", word2: "Margarine", category: "food", age: "standard" },
  { word1: "Lait", word2: "Crème fraîche", category: "food", age: "kids" },
  { word1: "Confiture", word2: "Marmelade", category: "food", age: "kids" },
  { word1: "Nutella", word2: "Pâte à tartiner", category: "food", age: "kids" },
  { word1: "Miel", word2: "Sirop d'érable", category: "food", age: "kids" },
  { word1: "Sucre", word2: "Édulcorant", category: "food", age: "standard" },
  { word1: "Sel", word2: "Poivre", category: "food", age: "kids" },
  { word1: "Ketchup", word2: "Mayonnaise", category: "food", age: "kids" },
  { word1: "Moutarde", word2: "Sauce burger", category: "food", age: "standard" },
  { word1: "Huile d'olive", word2: "Vinaigre", category: "food", age: "standard" },
  { word1: "Pomme", word2: "Poire", category: "food", age: "kids" },
  { word1: "Orange", word2: "Clémentine", category: "food", age: "kids" },
  { word1: "Citron", word2: "Pamplemousse", category: "food", age: "kids" },
  { word1: "Fraise", word2: "Framboise", category: "food", age: "kids" },
  { word1: "Cerise", word2: "Prune", category: "food", age: "kids" },
  { word1: "Banane", word2: "Plantain", category: "food", age: "standard" },
  { word1: "Pastèque", word2: "Melon", category: "food", age: "kids" },
  { word1: "Pêche", word2: "Nectarine", category: "food", age: "kids" },
  { word1: "Raisin", word2: "Figue", category: "food", age: "kids" },
  { word1: "Tomate", word2: "Poivron", category: "food", age: "kids" },
  { word1: "Carotte", word2: "Panais", category: "food", age: "standard" },
  { word1: "Pomme de terre", word2: "Patate douce", category: "food", age: "kids" },
  { word1: "Courgette", word2: "Concombre", category: "food", age: "kids" },
  { word1: "Oignon", word2: "Échalote", category: "food", age: "standard" },
  { word1: "Ail", word2: "Oignon", category: "food", age: "kids" },
  { word1: "Brocoli", word2: "Chou-fleur", category: "food", age: "kids" },
  { word1: "Salade", word2: "Épinards", category: "food", age: "kids" },
  { word1: "Poulet", word2: "Dinde", category: "food", age: "kids" },
  { word1: "Bœuf", word2: "Veau", category: "food", age: "standard" },
  { word1: "Porc", word2: "Agneau", category: "food", age: "standard" },
  { word1: "Jambon", word2: "Bacon", category: "food", age: "kids" },
  { word1: "Saucisson", word2: "Chorizo", category: "food", age: "standard" },
  { word1: "Saumon", word2: "Truite", category: "food", age: "kids" },
  { word1: "Thon", word2: "Sardine", category: "food", age: "kids" },
  { word1: "Crevette", word2: "Gambas", category: "food", age: "standard" },
  { word1: "Sushi", word2: "Maki", category: "food", age: "standard" },
  { word1: "Tacos", word2: "Burrito", category: "food", age: "standard" },
  { word1: "Soupe", word2: "Bouillon", category: "food", age: "kids" },
  { word1: "Camembert", word2: "Brie", category: "food", age: "standard" },
  { word1: "Comté", word2: "Emmental", category: "food", age: "kids" },
  { word1: "Roquefort", word2: "Bleu d'Auvergne", category: "food", age: "standard" },
  { word1: "Mozzarella", word2: "Burrata", category: "food", age: "standard" },
  { word1: "Parmesan", word2: "Pecorino", category: "food", age: "standard" },
  { word1: "Tiramisu", word2: "Panna Cotta", category: "food", age: "standard" },
  { word1: "Millefeuille", word2: "Opéra", category: "food", age: "standard" },
  { word1: "Mousse au chocolat", word2: "Crème brûlée", category: "food", age: "kids" },
  { word1: "Fondant au chocolat", word2: "Brownie", category: "food", age: "kids" },
  { word1: "Cookie", word2: "Muffin", category: "food", age: "kids" },
  { word1: "Pastis", word2: "Ricard", category: "food", age: "adult" },
  { word1: "Kir", word2: "Sangria", category: "food", age: "adult" },
  { word1: "Thé vert", word2: "Thé noir", category: "food", age: "standard" },
  { word1: "Infusion", word2: "Tisane", category: "food", age: "standard" },
  { word1: "Sirop de grenadine", word2: "Sirop de menthe", category: "food", age: "kids" },
  { word1: "Foie gras", word2: "Pâté", category: "food", age: "standard" },
  { word1: "Huître", word2: "Moule", category: "food", age: "standard" },
  { word1: "Ratatouille", word2: "Piperade", category: "food", age: "standard" },
  { word1: "Couscous", word2: "Tajine", category: "food", age: "standard" },
  { word1: "Paëlla", word2: "Risotto", category: "food", age: "standard" },
  { word1: "Ramen", word2: "Nouilles sautées", category: "food", age: "standard" },
  { word1: "Croque-monsieur", word2: "Panini", category: "food", age: "kids" },
  { word1: "Quiche lorraine", word2: "Tarte aux poireaux", category: "food", age: "standard" },

  // 🦁 ANIMAUX & NATURE
  { word1: "Chien", word2: "Loup", category: "animals", age: "kids" },
  { word1: "Chat", word2: "Tigre", category: "animals", age: "kids" },
  { word1: "Lion", word2: "Léopard", category: "animals", age: "kids" },
  { word1: "Guépard", word2: "Jaguar", category: "animals", age: "kids" },
  { word1: "Cheval", word2: "Poney", category: "animals", age: "kids" },
  { word1: "Âne", word2: "Mule", category: "animals", age: "kids" },
  { word1: "Vache", word2: "Taureau", category: "animals", age: "kids" },
  { word1: "Mouton", word2: "Chèvre", category: "animals", age: "kids" },
  { word1: "Cochon", word2: "Sanglier", category: "animals", age: "kids" },
  { word1: "Lapin", word2: "Lièvre", category: "animals", age: "kids" },
  { word1: "Souris", word2: "Rat", category: "animals", age: "kids" },
  { word1: "Hamster", word2: "Cochon d'Inde", category: "animals", age: "kids" },
  { word1: "Écureuil", word2: "Marmotte", category: "animals", age: "kids" },
  { word1: "Ours", word2: "Panda", category: "animals", age: "kids" },
  { word1: "Renard", word2: "Chacal", category: "animals", age: "kids" },
  { word1: "Hérisson", word2: "Porc-épic", category: "animals", age: "kids" },
  { word1: "Cerf", word2: "Chevreuil", category: "animals", age: "kids" },
  { word1: "Élan", word2: "Renne", category: "animals", age: "kids" },
  { word1: "Kangourou", word2: "Wallaby", category: "animals", age: "kids" },
  { word1: "Singe", word2: "Chimpanzé", category: "animals", age: "kids" },
  { word1: "Gorille", word2: "Orang-outan", category: "animals", age: "kids" },
  { word1: "Aigle", word2: "Faucon", category: "animals", age: "kids" },
  { word1: "Chouette", word2: "Hibou", category: "animals", age: "kids" },
  { word1: "Pigeon", word2: "Tourterelle", category: "animals", age: "kids" },
  { word1: "Canard", word2: "Oie", category: "animals", age: "kids" },
  { word1: "Cygne", word2: "Pélican", category: "animals", age: "kids" },
  { word1: "Mouette", word2: "Goéland", category: "animals", age: "kids" },
  { word1: "Perroquet", word2: "Perruche", category: "animals", age: "kids" },
  { word1: "Corbeau", word2: "Pie", category: "animals", age: "kids" },
  { word1: "Moineau", word2: "Rouge-gorge", category: "animals", age: "kids" },
  { word1: "Manchot", word2: "Pingouin", category: "animals", age: "kids" },
  { word1: "Dauphin", word2: "Baleine", category: "animals", age: "kids" },
  { word1: "Requin", word2: "Orque", category: "animals", age: "kids" },
  { word1: "Poulpe", word2: "Calmar", category: "animals", age: "kids" },
  { word1: "Crabe", word2: "Homard", category: "animals", age: "kids" },
  { word1: "Tortue de terre", word2: "Tortue de mer", category: "animals", age: "kids" },
  { word1: "Grenouille", word2: "Crapaud", category: "animals", age: "kids" },
  { word1: "Lézard", word2: "Caméléon", category: "animals", age: "kids" },
  { word1: "Crocodile", word2: "Alligator", category: "animals", age: "kids" },
  { word1: "Serpent", word2: "Vipère", category: "animals", age: "kids" },
  { word1: "Abeille", word2: "Guêpe", category: "animals", age: "kids" },
  { word1: "Bourdon", word2: "Frelon", category: "animals", age: "kids" },
  { word1: "Papillon", word2: "Libellule", category: "animals", age: "kids" },
  { word1: "Mouche", word2: "Moustique", category: "animals", age: "kids" },
  { word1: "Araignée", word2: "Scorpion", category: "animals", age: "kids" },
  { word1: "Fourmi", word2: "Termite", category: "animals", age: "kids" },
  { word1: "Forêt", word2: "Jungle", category: "animals", age: "kids" },
  { word1: "Montagne", word2: "Colline", category: "animals", age: "kids" },
  { word1: "Rivière", word2: "Fleuve", category: "animals", age: "kids" },
  { word1: "Lac", word2: "Étang", category: "animals", age: "kids" },
  { word1: "Océan", word2: "Mer", category: "animals", age: "kids" },
  { word1: "Plage", word2: "Dune", category: "animals", age: "kids" },
  { word1: "Désert", word2: "Savane", category: "animals", age: "kids" },
  { word1: "Cascade", word2: "Fontaine", category: "animals", age: "kids" },
  { word1: "Volcan", word2: "Geyser", category: "animals", age: "kids" },

  // ✈️ LIEUX & VOYAGES
  { word1: "Avion", word2: "Hélicoptère", category: "places", age: "kids" },
  { word1: "Train", word2: "Métro", category: "places", age: "kids" },
  { word1: "Tramway", word2: "Bus", category: "places", age: "kids" },
  { word1: "Voiture", word2: "Camion", category: "places", age: "kids" },
  { word1: "Moto", word2: "Scooter", category: "places", age: "kids" },
  { word1: "Vélo", word2: "Trottinette", category: "places", age: "kids" },
  { word1: "Bateau", word2: "Yacht", category: "places", age: "kids" },
  { word1: "Sous-marin", word2: "Paquebot", category: "places", age: "kids" },
  { word1: "Aéroport", word2: "Gare", category: "places", age: "kids" },
  { word1: "Hôtel", word2: "Auberge", category: "places", age: "kids" },
  { word1: "Camping", word2: "Bivouac", category: "places", age: "standard" },
  { word1: "Musée", word2: "Galerie d'art", category: "places", age: "standard" },
  { word1: "Cinéma", word2: "Théâtre", category: "places", age: "kids" },
  { word1: "Stade", word2: "Gymnase", category: "places", age: "kids" },
  { word1: "Piscine", word2: "Plage", category: "places", age: "kids" },
  { word1: "Parc", word2: "Jardin", category: "places", age: "kids" },
  { word1: "Château", word2: "Palais", category: "places", age: "kids" },
  { word1: "Église", word2: "Cathédrale", category: "places", age: "kids" },
  { word1: "Tour Eiffel", word2: "Arc de Triomphe", category: "places", age: "kids" },
  { word1: "Pyramide", word2: "Sphinx", category: "places", age: "kids" },
  { word1: "Paris", word2: "Londres", category: "places", age: "kids" },
  { word1: "New York", word2: "Los Angeles", category: "places", age: "standard" },
  { word1: "Tokyo", word2: "Séoul", category: "places", age: "standard" },
  { word1: "Rome", word2: "Venise", category: "places", age: "standard" },
  { word1: "Madrid", word2: "Barcelone", category: "places", age: "standard" },
  { word1: "Marseille", word2: "Lyon", category: "places", age: "kids" },
  { word1: "Bordeaux", word2: "Toulouse", category: "places", age: "standard" },
  { word1: "Nice", word2: "Cannes", category: "places", age: "standard" },
  { word1: "Mont Saint-Michel", word2: "Château de Versailles", category: "places", age: "standard" },
  { word1: "Corse", word2: "Sardaigne", category: "places", age: "standard" },
  { word1: "Alpes", word2: "Pyrénées", category: "places", age: "kids" },
  { word1: "Mont Blanc", word2: "Everest", category: "places", age: "kids" },
  { word1: "Dubaï", word2: "Doha", category: "places", age: "standard" },
  { word1: "Rio de Janeiro", word2: "Buenos Aires", category: "places", age: "standard" },
  { word1: "Marrakech", word2: "Casablanca", category: "places", age: "standard" },

  // 🎬 CINÉMA & CULTURE POP
  { word1: "Batman", word2: "Superman", category: "popculture", age: "kids" },
  { word1: "Spider-Man", word2: "Iron Man", category: "popculture", age: "kids" },
  { word1: "Hulk", word2: "Thor", category: "popculture", age: "kids" },
  { word1: "Joker", word2: "Pingouin", category: "popculture", age: "kids" },
  { word1: "Harry Potter", word2: "Le Seigneur des Anneaux", category: "popculture", age: "kids" },
  { word1: "Voldemort", word2: "Sauron", category: "popculture", age: "standard" },
  { word1: "Dumbledore", word2: "Gandalf", category: "popculture", age: "standard" },
  { word1: "Star Wars", word2: "Star Trek", category: "popculture", age: "kids" },
  { word1: "Luke Skywalker", word2: "Han Solo", category: "popculture", age: "kids" },
  { word1: "Dark Vador", word2: "Empereur Palpatine", category: "popculture", age: "kids" },
  { word1: "Sabre laser", word2: "Baguette magique", category: "popculture", age: "kids" },
  { word1: "Marvel", word2: "DC Comics", category: "popculture", age: "kids" },
  { word1: "Disney", word2: "Pixar", category: "popculture", age: "kids" },
  { word1: "Le Roi Lion", word2: "Le Livre de la Jungle", category: "popculture", age: "kids" },
  { word1: "La Reine des Neiges", word2: "Raiponce", category: "popculture", age: "kids" },
  { word1: "Mickey", word2: "Donald", category: "popculture", age: "kids" },
  { word1: "Tom et Jerry", word2: "Bugs Bunny", category: "popculture", age: "kids" },
  { word1: "Les Simpson", word2: "Futurama", category: "popculture", age: "standard" },
  { word1: "Homer", word2: "Peter Griffin", category: "popculture", age: "standard" },
  { word1: "Game of Thrones", word2: "Vikings", category: "popculture", age: "adult" },
  { word1: "Stranger Things", word2: "Dark", category: "popculture", age: "standard" },
  { word1: "Squid Game", word2: "Alice in Borderland", category: "popculture", age: "adult" },
  { word1: "La Casa de Papel", word2: "Lupin", category: "popculture", age: "standard" },
  { word1: "Friends", word2: "How I Met Your Mother", category: "popculture", age: "standard" },
  { word1: "The Walking Dead", word2: "The Last of Us", category: "popculture", age: "standard" },
  { word1: "Zombie", word2: "Vampire", category: "popculture", age: "kids" },
  { word1: "Loup-garou", word2: "Fantôme", category: "popculture", age: "kids" },
  { word1: "Momie", word2: "Squelette", category: "popculture", age: "kids" },
  { word1: "Alien", word2: "Predator", category: "popculture", age: "standard" },
  { word1: "James Bond", word2: "Mission Impossible", category: "popculture", age: "standard" },
  { word1: "Kaamelott", word2: "Astérix Mission Cléopâtre", category: "popculture", age: "standard" },
  { word1: "Arthur", word2: "Perceval", category: "popculture", age: "standard" },
  { word1: "Le Dîner de Cons", word2: "Les Visiteurs", category: "popculture", age: "standard" },
  { word1: "OSS 117", word2: "James Bond", category: "popculture", age: "standard" },
  { word1: "One Piece", word2: "Naruto", category: "popculture", age: "kids" },
  { word1: "Luffy", word2: "Zoro", category: "popculture", age: "kids" },
  { word1: "Dragon Ball", word2: "Bleach", category: "popculture", age: "kids" },
  { word1: "Death Note", word2: "Attack on Titan", category: "popculture", age: "standard" },
  { word1: "Pikachu", word2: "Évoli", category: "popculture", age: "kids" },
  { word1: "Dracaufeu", word2: "Tortank", category: "popculture", age: "kids" },

  // 💼 MÉTIERS & SOCIÉTÉ
  { word1: "Médecin", word2: "Infirmier", category: "jobs", age: "kids" },
  { word1: "Chirurgien", word2: "Dentiste", category: "jobs", age: "kids" },
  { word1: "Pharmacien", word2: "Biologiste", category: "jobs", age: "standard" },
  { word1: "Vétérinaire", word2: "Zoologiste", category: "jobs", age: "kids" },
  { word1: "Pompier", word2: "Policier", category: "jobs", age: "kids" },
  { word1: "Gendarme", word2: "Militaire", category: "jobs", age: "kids" },
  { word1: "Juge", word2: "Avocat", category: "jobs", age: "standard" },
  { word1: "Détective", word2: "Espion", category: "jobs", age: "kids" },
  { word1: "Professeur", word2: "Instituteur", category: "jobs", age: "kids" },
  { word1: "Élève", word2: "Étudiant", category: "jobs", age: "kids" },
  { word1: "Cuisinier", word2: "Pâtissier", category: "jobs", age: "kids" },
  { word1: "Serveur", word2: "Barman", category: "jobs", age: "kids" },
  { word1: "Boulanger", word2: "Boucher", category: "jobs", age: "kids" },
  { word1: "Architecte", word2: "Ingénieur", category: "jobs", age: "standard" },
  { word1: "Électricien", word2: "Plombier", category: "jobs", age: "kids" },
  { word1: "Chanteur", word2: "Musicien", category: "jobs", age: "kids" },
  { word1: "Acteur", word2: "Doubleur", category: "jobs", age: "standard" },
  { word1: "Pilote d'avion", word2: "Astronaute", category: "jobs", age: "kids" },
  { word1: "Président", word2: "Premier ministre", category: "jobs", age: "kids" },
  { word1: "Roi", word2: "Empereur", category: "jobs", age: "kids" },

  // 🎉 SOIRÉE & FUN
  { word1: "Soirée", word2: "Fête", category: "party", age: "kids" },
  { word1: "Apéro", word2: "Dîner", category: "party", age: "standard" },
  { word1: "Tequila", word2: "Vodka", category: "party", age: "adult" },
  { word1: "Rhum", word2: "Whisky", category: "party", age: "adult" },
  { word1: "Mojito", word2: "Caïpirinha", category: "party", age: "adult" },
  { word1: "Shot", word2: "Cocktail", category: "party", age: "adult" },
  { word1: "Karaoké", word2: "Blind test", category: "party", age: "kids" },
  { word1: "Action ou Vérité", word2: "Je n'ai jamais", category: "party", age: "adult" },
  { word1: "Beer Pong", word2: "Flip Cup", category: "party", age: "adult" },
  { word1: "Anniversaire", word2: "Nouvel An", category: "party", age: "kids" },
  { word1: "Halloween", word2: "Carnaval", category: "party", age: "kids" },
  { word1: "Cadeau", word2: "Surprise", category: "party", age: "kids" },

  // 🕹️ GEEK & GAMING
  { word1: "PlayStation", word2: "Xbox", category: "geek", age: "kids" },
  { word1: "Nintendo Switch", word2: "Game Boy", category: "geek", age: "kids" },
  { word1: "Mario", word2: "Luigi", category: "geek", age: "kids" },
  { word1: "Peach", word2: "Zelda", category: "geek", age: "kids" },
  { word1: "Minecraft", word2: "Roblox", category: "geek", age: "kids" },
  { word1: "Fortnite", word2: "PUBG", category: "geek", age: "standard" },
  { word1: "Call of Duty", word2: "Battlefield", category: "geek", age: "standard" },
  { word1: "GTA", word2: "Red Dead Redemption", category: "geek", age: "adult" },
  { word1: "Among Us", word2: "Loup-Garou", category: "geek", age: "kids" },
  { word1: "Souris", word2: "Manette", category: "geek", age: "kids" },
  { word1: "Clavier", word2: "Écran", category: "geek", age: "kids" },
  { word1: "Casque", word2: "Écouteurs", category: "geek", age: "kids" },
  { word1: "YouTube", word2: "Twitch", category: "geek", age: "kids" },
  { word1: "TikTok", word2: "Instagram", category: "geek", age: "standard" },
  { word1: "ChatGPT", word2: "Siri", category: "geek", age: "kids" },
  { word1: "Développeur", word2: "Hacker", category: "geek", age: "standard" },

  // ⚽ SPORTS & LOISIRS
  { word1: "Football", word2: "Rugby", category: "sport", age: "kids" },
  { word1: "Basketball", word2: "Handball", category: "sport", age: "kids" },
  { word1: "Tennis", word2: "Badminton", category: "sport", age: "kids" },
  { word1: "Tennis de table", word2: "Baby-foot", category: "sport", age: "kids" },
  { word1: "Natation", word2: "Plongée", category: "sport", age: "kids" },
  { word1: "Ski", word2: "Snowboard", category: "sport", age: "kids" },
  { word1: "Surf", word2: "Bodyboard", category: "sport", age: "kids" },
  { word1: "Boxe", word2: "Karaté", category: "sport", age: "kids" },
  { word1: "Course à pied", word2: "Marathon", category: "sport", age: "kids" },
  { word1: "Escalade", word2: "Randonnée", category: "sport", age: "kids" },
  { word1: "Échecs", word2: "Dames", category: "sport", age: "kids" },
  { word1: "Poker", word2: "Blackjack", category: "sport", age: "adult" },
  { word1: "Bowling", word2: "Pétanque", category: "sport", age: "kids" },
  { word1: "Formule 1", word2: "MotoGP", category: "sport", age: "kids" },
  { word1: "Karting", word2: "Quad", category: "sport", age: "kids" }
];

class WordRepository {
  constructor() {
    this.customPairs = this.loadCustomPairs();
  }

  loadCustomPairs() {
    try {
      const stored = localStorage.getItem('undercover_custom_words');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn("Impossible de charger les mots personnalisés", e);
      return [];
    }
  }

  saveCustomPairs(pairs) {
    this.customPairs = pairs;
    try {
      localStorage.setItem('undercover_custom_words', JSON.stringify(pairs));
    } catch (e) {
      console.warn("Impossible de sauvegarder les mots personnalisés", e);
    }
  }

  addCustomPair(word1, word2, category = 'custom') {
    const pair = {
      word1: word1.trim(),
      word2: word2.trim(),
      category: category,
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
    // Si ageFilter === 'adult', tous les mots (kids, standard, adult) sont inclus

    if (selectedCategories && selectedCategories.length > 0) {
      list = list.filter(pair => {
        if (pair.category === 'custom') return true;
        return selectedCategories.includes(pair.category);
      });
    }

    return list;
  }

  getRandomPair(selectedCategories = null, excludedWords = [], ageFilter = 'standard') {
    const pool = this.getAllPairs(selectedCategories, ageFilter);
    if (pool.length === 0) {
      const fallbackList = INITIAL_WORD_PAIRS.filter(p => ageFilter === 'kids' ? p.age === 'kids' : true);
      const chosenFallback = fallbackList.length > 0 ? fallbackList : INITIAL_WORD_PAIRS;
      const picked = chosenFallback[Math.floor(Math.random() * chosenFallback.length)];
      return { ...picked };
    }

    const available = pool.filter(p => !excludedWords.includes(`${p.word1}-${p.word2}`));
    const chosenList = available.length > 0 ? available : pool;
    const picked = chosenList[Math.floor(Math.random() * chosenList.length)];

    if (Math.random() > 0.5) {
      return {
        word1: picked.word2,
        word2: picked.word1,
        category: picked.category,
        age: picked.age
      };
    }

    return { ...picked };
  }
}

// ==========================================================================
// 2. MOTEUR AUDIO (WEB AUDIO API)
// ==========================================================================

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.soundEnabled = true;
    this.initOnUserGesture = this.initOnUserGesture.bind(this);
    
    const saved = localStorage.getItem('undercover_sound_enabled');
    if (saved !== null) {
      this.soundEnabled = saved === 'true';
    }

    window.addEventListener('pointerdown', this.initOnUserGesture, { once: true });
    window.addEventListener('keydown', this.initOnUserGesture, { once: true });
  }

  initOnUserGesture() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem('undercover_sound_enabled', this.soundEnabled);
    if (this.soundEnabled) {
      this.playTap();
    }
    return this.soundEnabled;
  }

  playTap() {
    if (!this.soundEnabled) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch (e) {}
  }

  playReveal() {
    if (!this.soundEnabled) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const freqs = [330, 440, 554.37, 659.25, 880];
      freqs.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + i * 0.04);
        osc.frequency.exponentialRampToValueAtTime(f * 1.5, now + i * 0.04 + 0.2);
        gain.gain.setValueAtTime(0, now + i * 0.04);
        gain.gain.linearRampToValueAtTime(0.1, now + i * 0.04 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.04 + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.04);
        osc.stop(now + i * 0.04 + 0.25);
      });
    } catch (e) {}
  }

  playElimination() {
    if (!this.soundEnabled) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.6);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.6);
    } catch (e) {}
  }

  playTick() {
    if (!this.soundEnabled) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.02);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.02);
    } catch (e) {}
  }

  playTimerAlert() {
    if (!this.soundEnabled) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      [660, 880, 660, 880].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.1);
        gain.gain.setValueAtTime(0.15, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.08);
      });
    } catch (e) {}
  }

  playVictory() {
    if (!this.soundEnabled) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    try {
      const notes = [
        { f: 523.25, d: 0.12 },
        { f: 659.25, d: 0.12 },
        { f: 783.99, d: 0.12 },
        { f: 1046.50, d: 0.4 }
      ];
      let t = ctx.currentTime;
      notes.forEach(note => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, t);
        gain.gain.setValueAtTime(0.25, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + note.d);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + note.d);
        t += note.d * 0.85;
      });
    } catch (e) {}
  }

  playWhiteVictory() {
    if (!this.soundEnabled) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    try {
      const notes = [
        { f: 440, d: 0.15 },
        { f: 554.37, d: 0.15 },
        { f: 659.25, d: 0.15 },
        { f: 830.61, d: 0.2 },
        { f: 880, d: 0.5 }
      ];
      let t = ctx.currentTime;
      notes.forEach(note => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(note.f, t);
        gain.gain.setValueAtTime(0.18, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + note.d);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + note.d);
        t += note.d * 0.9;
      });
    } catch (e) {}
  }

  playBuzz() {
    if (!this.soundEnabled) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(130, ctx.currentTime);
      osc.frequency.setValueAtTime(110, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch (e) {}
  }
}

const sounds = new SoundEngine();

// ==========================================================================
// 3. MOTEUR DE RÈGLES ET ÉTAT DE JEU
// ==========================================================================

const ROLES = {
  CIVIL: 'civil',
  UNDERCOVER: 'undercover',
  MR_WHITE: 'mrwhite'
};

const PHASES = {
  SETUP: 'setup',
  REVEAL: 'reveal',
  CLUES: 'clues',
  VOTING: 'voting',
  MR_WHITE_GUESS: 'mr_white_guess',
  GAME_OVER: 'game_over'
};

class UndercoverGame {
  constructor(wordRepository) {
    this.wordRepo = wordRepository;
    this.players = [];
    this.wordPair = null;
    this.civilWord = '';
    this.undercoverWord = '';
    this.phase = PHASES.SETUP;
    this.currentRevealIndex = 0;
    this.roundNumber = 1;
    this.startingPlayerIndex = 0;
    this.clueCurrentPlayerIndex = 0;
    this.eliminatedThisRound = null;
    this.mrWhiteAwaitingGuess = null;
    this.winner = null;
    this.winReason = '';
    this.playedWordPairs = [];
  }

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
    
    const uc = Math.max(2, Math.floor(playerCount / 4));
    const mw = Math.max(1, Math.floor(playerCount / 6));
    const civ = playerCount - uc - mw;
    return { civils: civ, undercovers: uc, mrWhite: mw };
  }

  startNewGame(playerNames, roleConfig, selectedCategories = [], ageFilter = 'standard') {
    if (playerNames.length < 3) {
      throw new Error("Il faut au moins 3 joueurs pour démarrer.");
    }

    const totalRoles = roleConfig.civils + roleConfig.undercovers + roleConfig.mrWhite;
    if (totalRoles !== playerNames.length) {
      throw new Error(`La somme des rôles (${totalRoles}) ne correspond pas au nombre de joueurs (${playerNames.length}).`);
    }

    const excluded = this.playedWordPairs.slice(-20);
    this.wordPair = this.wordRepo.getRandomPair(selectedCategories, excluded, ageFilter);
    this.civilWord = this.wordPair.word1;
    this.undercoverWord = this.wordPair.word2;
    this.playedWordPairs.push(`${this.wordPair.word1}-${this.wordPair.word2}`);

    const rolesPool = [];
    for (let i = 0; i < roleConfig.civils; i++) rolesPool.push(ROLES.CIVIL);
    for (let i = 0; i < roleConfig.undercovers; i++) rolesPool.push(ROLES.UNDERCOVER);
    for (let i = 0; i < roleConfig.mrWhite; i++) rolesPool.push(ROLES.MR_WHITE);

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

    this.players = playerNames.map((name, index) => {
      const role = rolesPool[index];
      let word = '';
      if (role === ROLES.CIVIL) word = this.civilWord;
      else if (role === ROLES.UNDERCOVER) word = this.undercoverWord;
      else word = null;

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

  getCurrentRevealPlayer() {
    return this.players[this.currentRevealIndex] || null;
  }

  nextRevealPlayer() {
    this.currentRevealIndex++;
    if (this.currentRevealIndex >= this.players.length) {
      this.startCluePhase();
    }
    return this.getCurrentRevealPlayer();
  }

  startCluePhase() {
    this.phase = PHASES.CLUES;
    if (this.roundNumber === 1) {
      const aliveIndexes = this.getAlivePlayerIndexes();
      this.startingPlayerIndex = aliveIndexes[Math.floor(Math.random() * aliveIndexes.length)];
    } else {
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
  }

  eliminatePlayer(playerId) {
    const target = this.players.find(p => p.id === playerId);
    if (!target || !target.isAlive) {
      throw new Error("Joueur introuvable ou déjà éliminé.");
    }

    target.isAlive = false;
    this.eliminatedThisRound = target;

    if (target.role === ROLES.MR_WHITE) {
      this.phase = PHASES.MR_WHITE_GUESS;
      this.mrWhiteAwaitingGuess = target;
      return {
        eliminatedPlayer: target,
        requiresMrWhiteGuess: true,
        winStatus: null
      };
    }

    const winStatus = this.checkWinCondition();
    if (winStatus) {
      this.phase = PHASES.GAME_OVER;
      this.winner = winStatus.winner;
      this.winReason = winStatus.reason;
      this.recordGameStats(winStatus.winner);
    } else {
      this.roundNumber++;
    }

    return {
      eliminatedPlayer: target,
      requiresMrWhiteGuess: false,
      winStatus: winStatus
    };
  }

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

    this.roundNumber++;
    this.phase = PHASES.CLUES;
    this.startCluePhase();
    return {
      isCorrect: false,
      winner: null,
      reason: "Mauvaise réponse ! La partie continue."
    };
  }

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

  checkWinCondition() {
    const alive = this.getAlivePlayers();
    const aliveCivils = alive.filter(p => p.role === ROLES.CIVIL);
    const aliveUndercovers = alive.filter(p => p.role === ROLES.UNDERCOVER);
    const aliveWhites = alive.filter(p => p.role === ROLES.MR_WHITE);

    if (aliveUndercovers.length === 0 && aliveWhites.length === 0) {
      return {
        winner: ROLES.CIVIL,
        reason: "Les Civils ont éliminé tous les imposteurs !"
      };
    }

    if (aliveUndercovers.length > 0 && aliveWhites.length === 0) {
      if (aliveUndercovers.length >= aliveCivils.length || aliveCivils.length <= 1) {
        return {
          winner: ROLES.UNDERCOVER,
          reason: "Les Undercovers sont désormais en supériorité !"
        };
      }
    }

    if (aliveWhites.length > 0 && alive.length <= 2) {
      return {
        winner: ROLES.MR_WHITE,
        reason: "M. Blanc a réussi à survivre jusqu'au duel final !"
      };
    }

    if (alive.length === 1) {
      const last = alive[0];
      return {
        winner: last.role,
        reason: `${last.name} est le dernier survivant !`
      };
    }

    return null;
  }

  normalizeWord(str) {
    if (!str) return '';
    return str
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");
  }

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

// ==========================================================================
// 4. CONTRÔLEUR D'INTERFACE UTILISATEUR (APPLICATION)
// ==========================================================================

class UndercoverApp {
  constructor() {
    this.wordRepo = new WordRepository();
    this.game = new UndercoverGame(this.wordRepo);

    this.players = this.loadSavedPlayers();
    this.roleConfig = UndercoverGame.getRecommendedRoles(Math.max(3, this.players.length));
    this.currentAgeFilter = 'standard';
    this.selectedCategories = Object.keys(WORD_CATEGORIES);
    this.selectedSuspectId = null;

    this.timerSeconds = 45;
    this.timerInitial = 45;
    this.timerInterval = null;
    this.isTimerRunning = false;

    this.hasRevealedCurrentCard = false;

    // Options de jeu & Vote anonyme
    this.options = this.loadOptions();
    this.anonCurrentVoterIndex = 0;
    this.anonVoters = [];
    this.anonSelectedSuspectId = null;
    this.anonTiedSelectedSuspectId = null;

    this.cacheDom();
    this.bindEvents();
    this.initUi();
  }

  loadSavedPlayers() {
    try {
      const saved = localStorage.getItem('undercover_saved_players');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.warn("Impossible de charger les joueurs", e);
    }
    return []; // Démarrage avec liste vierge par défaut
  }

  savePlayers() {
    try {
      localStorage.setItem('undercover_saved_players', JSON.stringify(this.players));
    } catch (e) {
      console.warn("Impossible de sauvegarder les joueurs", e);
    }
  }

  loadOptions() {
    try {
      const saved = localStorage.getItem('undercover_game_options');
      if (saved) {
        const parsed = JSON.parse(saved);
        return Object.assign({ showRoles: false, anonymousVoting: false, showDetails: true }, parsed);
      }
    } catch (e) {
      console.warn("Impossible de charger les options", e);
    }
    return { showRoles: false, anonymousVoting: false, showDetails: true };
  }

  saveOptions() {
    try {
      localStorage.setItem('undercover_game_options', JSON.stringify(this.options));
      if (this.game) this.game.setOptions(this.options);
      this.syncOptionsUi();
    } catch (e) {
      console.warn("Impossible de sauvegarder les options", e);
    }
  }

  applyDetailsMode() {
    const show = this.options.showDetails !== false;
    document.body.classList.toggle('hide-details', !show);
  }

  setOption(key, value) {
    this.options[key] = Boolean(value);
    this.saveOptions();
    sounds.playTap();

    if (key === 'showRoles') {
      this.showToast(this.options.showRoles ? "Rôles connus activés 👁️" : "Rôles masqués par défaut 🤫");
    } else if (key === 'anonymousVoting') {
      this.showToast(this.options.anonymousVoting ? "Vote anonyme activé 🗳️" : "Vote public activé 🗣️");
      if (this.game && this.game.phase === PHASES.VOTING) {
        this.renderVotingScreen();
      }
    } else if (key === 'showDetails') {
      this.applyDetailsMode();
      this.showToast(this.options.showDetails ? "Mode détaillé activé 💡" : "Mode épuré activé (détails masqués) ⚡");
    }
  }

  syncOptionsUi() {
    if (this.optShowRoles) this.optShowRoles.checked = this.options.showRoles;
    if (this.modalOptShowRoles) this.modalOptShowRoles.checked = this.options.showRoles;
    if (this.optAnonVoting) this.optAnonVoting.checked = this.options.anonymousVoting;
    if (this.modalOptAnonVoting) this.modalOptAnonVoting.checked = this.options.anonymousVoting;
    if (this.optShowDetails) this.optShowDetails.checked = this.options.showDetails !== false;
    if (this.modalOptShowDetails) this.modalOptShowDetails.checked = this.options.showDetails !== false;
    this.applyDetailsMode();
  }

  cacheDom() {
    this.screens = {
      setup: document.getElementById('screen-setup'),
      review: document.getElementById('screen-review'),
      reveal: document.getElementById('screen-reveal'),
      clues: document.getElementById('screen-clues'),
      voting: document.getElementById('screen-voting'),
      gameOver: document.getElementById('screen-game-over')
    };

    this.brandHomeBtn = document.getElementById('brand-home-btn');
    this.btnSoundToggle = document.getElementById('btn-sound-toggle');
    this.soundIcon = document.getElementById('sound-icon');
    this.btnSettingsModal = document.getElementById('btn-settings-modal');
    this.btnWordsModal = document.getElementById('btn-words-modal');
    this.btnRulesModal = document.getElementById('btn-rules-modal');
    this.btnStatsModal = document.getElementById('btn-stats-modal');

    // Étape 1 : Saisie
    this.playerCountBadge = document.getElementById('player-count-badge');
    this.playerInputsList = document.getElementById('player-inputs-list');
    this.playersEmptyHint = document.getElementById('players-empty-hint');
    this.formAddPlayer = document.getElementById('form-add-player');
    this.inputNewPlayerName = document.getElementById('input-new-player-name');
    this.btnAddPlayer = document.getElementById('btn-add-player');
    this.btnClearPlayers = document.getElementById('btn-clear-players');
    this.btnToReview = document.getElementById('btn-to-review');

    // Étape 2 : Vérification & Réglages
    this.reviewPlayerCountBadge = document.getElementById('review-player-count-badge');
    this.reviewPlayersChips = document.getElementById('review-players-chips');
    this.btnBackToPlayers = document.getElementById('btn-back-to-players');
    this.btnBackToSetup = document.getElementById('btn-back-to-setup');
    this.btnAutoBalance = document.getElementById('btn-auto-balance');
    
    this.btnAgeKids = document.getElementById('btn-age-kids');
    this.btnAgeStandard = document.getElementById('btn-age-standard');
    this.btnAgeAdult = document.getElementById('btn-age-adult');

    this.valCivils = document.getElementById('val-civils');
    this.valUndercovers = document.getElementById('val-undercovers');
    this.valMrWhite = document.getElementById('val-mrwhite');
    this.btnDecCivils = document.getElementById('btn-dec-civils');
    this.btnIncCivils = document.getElementById('btn-inc-civils');
    this.btnDecUndercovers = document.getElementById('btn-dec-undercovers');
    this.btnIncUndercovers = document.getElementById('btn-inc-undercovers');
    this.btnDecMrWhite = document.getElementById('btn-dec-mrwhite');
    this.btnIncMrWhite = document.getElementById('btn-inc-mrwhite');
    this.roleValidationHint = document.getElementById('role-validation-hint');
    
    this.categoriesChipsContainer = document.getElementById('categories-chips-container');
    this.btnSelectAllCats = document.getElementById('btn-select-all-cats');
    this.optShowRoles = document.getElementById('opt-show-roles');
    this.optAnonVoting = document.getElementById('opt-anon-voting');
    this.optShowDetails = document.getElementById('opt-show-details');
    this.btnStartGame = document.getElementById('btn-start-game');

    // Écran Reveal (Passe & Joue)
    this.revealProgressBar = document.getElementById('reveal-progress-bar');
    this.revealStepText = document.getElementById('reveal-step-text');
    this.revealPlayerAvatar = document.getElementById('reveal-player-avatar');
    this.revealPlayerName = document.getElementById('reveal-player-name');
    this.secretCard = document.getElementById('secret-card');
    this.btnRevealCard = document.getElementById('btn-reveal-card');
    this.btnHideCard = document.getElementById('btn-hide-card');
    this.revealRoleFlag = document.getElementById('reveal-role-flag');
    this.revealWordDisplay = document.getElementById('reveal-word-display');
    this.revealDescDisplay = document.getElementById('reveal-desc-display');
    this.btnNextPlayer = document.getElementById('btn-next-player');

    // Écran Clues (Indices)
    this.clueRoundTitle = document.getElementById('clue-round-title');
    this.starterPlayerName = document.getElementById('starter-player-name');
    this.cluesPlayersList = document.getElementById('clues-players-list');
    this.aliveCountBadge = document.getElementById('alive-count-badge');
    this.timerDisplay = document.getElementById('timer-display');
    this.btnTimerToggle = document.getElementById('btn-timer-toggle');
    this.btnTimerReset = document.getElementById('btn-timer-reset');
    this.btnGoToVote = document.getElementById('btn-go-to-vote');

    // Écran Voting (Vote Public & Anonyme)
    this.votingPublicMode = document.getElementById('voting-public-mode');
    this.votingPlayersGrid = document.getElementById('voting-players-grid');
    this.selectedSuspectBanner = document.getElementById('selected-suspect-banner');
    this.selectedSuspectName = document.getElementById('selected-suspect-name');
    this.btnConfirmElimination = document.getElementById('btn-confirm-elimination');

    this.votingAnonymousMode = document.getElementById('voting-anonymous-mode');
    this.anonPassScreen = document.getElementById('anon-pass-screen');
    this.anonVoterAvatar = document.getElementById('anon-voter-avatar');
    this.anonVoterName = document.getElementById('anon-voter-name');
    this.anonVoterStepBadge = document.getElementById('anon-voter-step-badge');
    this.btnAnonStartVote = document.getElementById('btn-anon-start-vote');

    this.anonBallotScreen = document.getElementById('anon-ballot-screen');
    this.anonCurrentVoterBadge = document.getElementById('anon-current-voter-badge');
    this.anonSuspectsGrid = document.getElementById('anon-suspects-grid');
    this.btnAnonSubmitVote = document.getElementById('btn-anon-submit-vote');

    this.anonResultsScreen = document.getElementById('anon-results-screen');
    this.anonTalliesList = document.getElementById('anon-tallies-list');
    this.anonVerdictBanner = document.getElementById('anon-verdict-banner');
    this.anonVerdictTitle = document.getElementById('anon-verdict-title');
    this.anonVerdictSubtitle = document.getElementById('anon-verdict-subtitle');
    this.btnAnonConfirmElim = document.getElementById('btn-anon-confirm-elim');

    this.anonTieBanner = document.getElementById('anon-tie-banner');
    this.anonTieTitle = document.getElementById('anon-tie-title');
    this.anonTiedSuspectsGrid = document.getElementById('anon-tied-suspects-grid');
    this.btnAnonEliminateTied = document.getElementById('btn-anon-eliminate-tied');
    this.btnAnonRevote = document.getElementById('btn-anon-revote');

    // Écran Game Over
    this.victoryIcon = document.getElementById('victory-icon');
    this.victoryTitle = document.getElementById('victory-title');
    this.victoryReason = document.getElementById('victory-reason');
    this.endCivilWord = document.getElementById('end-civil-word');
    this.endUndercoverWord = document.getElementById('end-undercover-word');
    this.endPlayersList = document.getElementById('end-players-list');
    this.btnPlayAgainSame = document.getElementById('btn-play-again-same');
    this.btnNewGameSetup = document.getElementById('btn-new-game-setup');

    // Modales
    this.modalSettings = document.getElementById('modal-settings');
    this.modalOptShowRoles = document.getElementById('modal-opt-show-roles');
    this.modalOptAnonVoting = document.getElementById('modal-opt-anon-voting');
    this.modalOptShowDetails = document.getElementById('modal-opt-show-details');

    this.modalRules = document.getElementById('modal-rules');
    this.modalMrWhiteGuess = document.getElementById('modal-mrwhite-guess');
    this.mrwhiteGuessIntro = document.getElementById('mrwhite-guess-intro');
    this.inputMrwhiteGuess = document.getElementById('input-mrwhite-guess');
    this.btnSubmitMrwhiteGuess = document.getElementById('btn-submit-mrwhite-guess');
    this.btnSkipMrwhiteGuess = document.getElementById('btn-skip-mrwhite-guess');
    
    this.modalWords = document.getElementById('modal-words');
    this.wordsTotalCount = document.getElementById('words-total-count');
    this.formCustomWords = document.getElementById('form-custom-words');
    this.inputCustomWord1 = document.getElementById('input-custom-word1');
    this.inputCustomWord2 = document.getElementById('input-custom-word2');
    this.customWordsItems = document.getElementById('custom-words-items');

    this.modalStats = document.getElementById('modal-stats');
    this.statTotalGames = document.getElementById('stat-total-games');
    this.statCivilPct = document.getElementById('stat-civil-pct');
    this.statCivilBar = document.getElementById('stat-civil-bar');
    this.statUndercoverPct = document.getElementById('stat-undercover-pct');
    this.statUndercoverBar = document.getElementById('stat-undercover-bar');
    this.statWhitePct = document.getElementById('stat-white-pct');
    this.statWhiteBar = document.getElementById('stat-white-bar');
    this.btnResetStats = document.getElementById('btn-reset-stats');

    this.toastContainer = document.getElementById('toast-container');

    // Thème de l'interface
    this.currentTheme = localStorage.getItem('undercover_ui_theme') || 'dark';
    this.themeCardBtns = document.querySelectorAll('[data-theme-val]');
  }

  bindEvents() {
    if (this.brandHomeBtn) {
      this.brandHomeBtn.addEventListener('click', () => {
        sounds.playTap();
        if (this.game.phase !== PHASES.SETUP && this.game.phase !== PHASES.GAME_OVER) {
          if (confirm("Une partie est en cours. Revenir à la sélection des joueurs ?")) {
            this.showScreen('setup');
          }
        } else {
          this.showScreen('setup');
        }
      });
    }

    if (this.btnSoundToggle) {
      this.btnSoundToggle.addEventListener('click', () => {
        const enabled = sounds.toggleSound();
        if (this.soundIcon) this.soundIcon.textContent = enabled ? '🔊' : '🔇';
        this.showToast(enabled ? 'Son activé 🔊' : 'Son désactivé 🔇');
      });
    }

    if (this.btnSettingsModal) {
      this.btnSettingsModal.addEventListener('click', () => {
        sounds.playTap();
        this.syncOptionsUi();
        this.openModal(this.modalSettings);
      });
    }

    if (this.btnRulesModal) {
      this.btnRulesModal.addEventListener('click', () => {
        sounds.playTap();
        this.openModal(this.modalRules);
      });
    }

    if (this.btnWordsModal) {
      this.btnWordsModal.addEventListener('click', () => {
        sounds.playTap();
        this.renderCustomWordsList();
        this.openModal(this.modalWords);
      });
    }

    if (this.btnStatsModal) {
      this.btnStatsModal.addEventListener('click', () => {
        sounds.playTap();
        this.renderStatsModal();
        this.openModal(this.modalStats);
      });
    }

    // Sélection du thème d'ambiance UI
    if (this.themeCardBtns) {
      this.themeCardBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          sounds.playTap();
          const theme = btn.getAttribute('data-theme-val');
          this.applyTheme(theme, true);
        });
      });
    }

    document.querySelectorAll('[data-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        sounds.playTap();
        const targetId = btn.getAttribute('data-close');
        const modal = document.getElementById(targetId);
        if (modal) this.closeModal(modal);
      });
    });

    [this.modalRules, this.modalWords, this.modalStats, this.modalSettings].forEach(modal => {
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            sounds.playTap();
            this.closeModal(modal);
          }
        });
      }
    });

    // Toggles d'options (Étape 2 et Modale Live)
    if (this.optShowRoles) {
      this.optShowRoles.addEventListener('change', (e) => this.setOption('showRoles', e.target.checked));
    }
    if (this.modalOptShowRoles) {
      this.modalOptShowRoles.addEventListener('change', (e) => this.setOption('showRoles', e.target.checked));
    }
    if (this.optAnonVoting) {
      this.optAnonVoting.addEventListener('change', (e) => this.setOption('anonymousVoting', e.target.checked));
    }
    if (this.modalOptAnonVoting) {
      this.modalOptAnonVoting.addEventListener('change', (e) => this.setOption('anonymousVoting', e.target.checked));
    }
    if (this.optShowDetails) {
      this.optShowDetails.addEventListener('change', (e) => this.setOption('showDetails', e.target.checked));
    }
    if (this.modalOptShowDetails) {
      this.modalOptShowDetails.addEventListener('change', (e) => this.setOption('showDetails', e.target.checked));
    }

    // Formulaire d'ajout joueur
    if (this.formAddPlayer) {
      this.formAddPlayer.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleAddPlayer();
      });
    }

    if (this.btnAddPlayer) {
      this.btnAddPlayer.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleAddPlayer();
      });
    }

    if (this.btnClearPlayers) {
      this.btnClearPlayers.addEventListener('click', () => {
        sounds.playTap();
        if (this.players.length > 0) {
          this.players = [];
          this.savePlayers();
          this.renderPlayersList();
          this.showToast('Liste des joueurs effacée 🗑️');
        }
      });
    }

    // Passage à l'étape 2 (Vérification)
    if (this.btnToReview) {
      this.btnToReview.addEventListener('click', () => {
        sounds.playTap();
        this.renderReviewScreen();
        this.showScreen('review');
      });
    }

    // Retour à l'étape 1
    const backToSetup = () => {
      sounds.playTap();
      this.showScreen('setup');
      setTimeout(() => {
        if (this.inputNewPlayerName) this.inputNewPlayerName.focus();
      }, 100);
    };

    if (this.btnBackToPlayers) this.btnBackToPlayers.addEventListener('click', backToSetup);
    if (this.btnBackToSetup) this.btnBackToSetup.addEventListener('click', backToSetup);

    if (this.btnAutoBalance) {
      this.btnAutoBalance.addEventListener('click', () => {
        sounds.playTap();
        this.applyRecommendedRoles();
        this.showToast('Rôles rééquilibrés ⚖️');
      });
    }

    const setAgeFilter = (age) => {
      sounds.playTap();
      this.currentAgeFilter = age;
      [this.btnAgeKids, this.btnAgeStandard, this.btnAgeAdult].forEach(btn => {
        if (btn) {
          btn.classList.toggle('active', btn.getAttribute('data-age') === age);
        }
      });
      if (age === 'kids') {
        this.selectedCategories = this.selectedCategories.filter(c => c !== 'party' && c !== 'popculture' && c !== 'geek');
        this.showToast('Mode Enfants (-8 ans) activé 👶');
      } else if (age === 'standard') {
        this.selectedCategories = this.selectedCategories.filter(c => c !== 'party');
        if (!this.selectedCategories.includes('popculture')) this.selectedCategories.push('popculture');
        if (!this.selectedCategories.includes('geek')) this.selectedCategories.push('geek');
        this.showToast('Mode Tout public (+8 ans) activé 👥');
      } else {
        if (!this.selectedCategories.includes('party')) this.selectedCategories.push('party');
        if (!this.selectedCategories.includes('popculture')) this.selectedCategories.push('popculture');
        if (!this.selectedCategories.includes('geek')) this.selectedCategories.push('geek');
        this.showToast('Mode Ados & Adultes (16+) activé 🎉');
      }
      this.renderCategoryChips();
      this.updateWordsCountBadge();
    };

    if (this.btnAgeKids) this.btnAgeKids.addEventListener('click', () => setAgeFilter('kids'));
    if (this.btnAgeStandard) this.btnAgeStandard.addEventListener('click', () => setAgeFilter('standard'));
    if (this.btnAgeAdult) this.btnAgeAdult.addEventListener('click', () => setAgeFilter('adult'));

    if (this.btnDecCivils) this.btnDecCivils.addEventListener('click', () => this.adjustRole('civils', -1));
    if (this.btnIncCivils) this.btnIncCivils.addEventListener('click', () => this.adjustRole('civils', 1));
    if (this.btnDecUndercovers) this.btnDecUndercovers.addEventListener('click', () => this.adjustRole('undercovers', -1));
    if (this.btnIncUndercovers) this.btnIncUndercovers.addEventListener('click', () => this.adjustRole('undercovers', 1));
    if (this.btnDecMrWhite) this.btnDecMrWhite.addEventListener('click', () => this.adjustRole('mrWhite', -1));
    if (this.btnIncMrWhite) this.btnIncMrWhite.addEventListener('click', () => this.adjustRole('mrWhite', 1));

    if (this.btnSelectAllCats) {
      this.btnSelectAllCats.addEventListener('click', () => {
        sounds.playTap();
        this.selectedCategories = Object.keys(WORD_CATEGORIES);
        if (this.currentAgeFilter === 'kids') {
          this.selectedCategories = this.selectedCategories.filter(c => c !== 'party' && c !== 'popculture' && c !== 'geek');
        } else if (this.currentAgeFilter === 'standard') {
          this.selectedCategories = this.selectedCategories.filter(c => c !== 'party');
        }
        this.renderCategoryChips();
        this.showToast('Tous les thèmes sélectionnés');
      });
    }

    if (this.btnStartGame) {
      this.btnStartGame.addEventListener('click', () => {
        this.handleStartGame();
      });
    }

    const revealCard = () => {
      if (this.secretCard && this.secretCard.classList.contains('locked')) {
        const player = this.game.getCurrentRevealPlayer();
        if (!player) return;

        // Remplir le mot secret UNIQUEMENT au moment où le joueur clique sur Révéler
        if (this.revealRoleFlag) {
          if (player.role === ROLES.MR_WHITE) {
            this.revealRoleFlag.className = 'role-flag mrwhite';
            this.revealRoleFlag.textContent = '🎭 VOUS ÊTES M. BLANC';
            if (this.revealWordDisplay) this.revealWordDisplay.textContent = 'CARTE BLANCHE';
            if (this.revealDescDisplay) this.revealDescDisplay.textContent = "Vous n'avez aucun mot secret ! Écoutez attentivement les indices pour bluffer.";
          } else if (this.options.showRoles) {
            this.revealRoleFlag.className = `role-flag ${player.role}`;
            if (player.role === ROLES.CIVIL) {
              this.revealRoleFlag.textContent = '🛡️ VOUS ÊTES CIVIL';
              if (this.revealWordDisplay) this.revealWordDisplay.textContent = player.word;
              if (this.revealDescDisplay) this.revealDescDisplay.textContent = "Donnez un indice subtil pour vous faire reconnaître des autres Civils sans aider M. Blanc !";
            } else if (player.role === ROLES.UNDERCOVER) {
              this.revealRoleFlag.textContent = '🕶️ VOUS ÊTES UNDERCOVER';
              if (this.revealWordDisplay) this.revealWordDisplay.textContent = player.word;
              if (this.revealDescDisplay) this.revealDescDisplay.textContent = "Votre mot est légèrement différent des civils. Fondez-vous dans la masse !";
            }
          } else {
            // RÈGLES PAR DÉFAUT : Rôles masqués pour Civils & Undercovers
            this.revealRoleFlag.className = 'role-flag secret';
            this.revealRoleFlag.textContent = '🤫 MOT SECRET';
            if (this.revealWordDisplay) this.revealWordDisplay.textContent = player.word;
            if (this.revealDescDisplay) this.revealDescDisplay.textContent = "Mémorisez bien votre mot ! Donnez un indice subtil sans vous faire repérer.";
          }
        }

        sounds.playReveal();
        this.vibrate(40);
        this.secretCard.classList.remove('locked');
        this.secretCard.classList.add('revealed');
        this.hasRevealedCurrentCard = true;
        if (this.btnNextPlayer) this.btnNextPlayer.disabled = false;
      }
    };

    const hideCard = () => {
      if (this.secretCard && this.secretCard.classList.contains('revealed')) {
        sounds.playTap();
        this.secretCard.classList.remove('revealed');
        this.secretCard.classList.add('locked');
        // Masquer et vider le texte pour éviter toute fuite visuelle
        setTimeout(() => {
          if (this.secretCard && this.secretCard.classList.contains('locked')) {
            if (this.revealWordDisplay) this.revealWordDisplay.textContent = '••••••••';
            if (this.revealRoleFlag) {
              this.revealRoleFlag.textContent = 'VOTRE RÔLE';
              this.revealRoleFlag.className = 'role-flag';
            }
            if (this.revealDescDisplay) this.revealDescDisplay.textContent = '';
          }
        }, 150);
      }
    };

    if (this.btnRevealCard) this.btnRevealCard.addEventListener('click', (e) => {
      e.stopPropagation();
      revealCard();
    });
    if (this.btnHideCard) this.btnHideCard.addEventListener('click', (e) => {
      e.stopPropagation();
      hideCard();
    });

    if (this.secretCard) {
      this.secretCard.addEventListener('pointerdown', (e) => {
        if (e.target.closest('#btn-next-player')) return;
        if (this.secretCard.classList.contains('locked')) {
          revealCard();
        } else if (this.secretCard.classList.contains('revealed')) {
          hideCard();
        }
      });
    }

    if (this.btnNextPlayer) {
      this.btnNextPlayer.addEventListener('click', () => {
        sounds.playTap();
        // Vider immédiatement les textes secrets avant toute transition
        if (this.revealWordDisplay) this.revealWordDisplay.textContent = '••••••••';
        if (this.revealRoleFlag) {
          this.revealRoleFlag.textContent = 'VOTRE RÔLE';
          this.revealRoleFlag.className = 'role-flag';
        }
        if (this.revealDescDisplay) this.revealDescDisplay.textContent = '';

        if (this.secretCard) {
          this.secretCard.classList.remove('revealed');
          this.secretCard.classList.add('locked');
        }

        // Transition propre au joueur suivant
        this.handleNextReveal();
      });
    }

    if (this.btnTimerToggle) {
      this.btnTimerToggle.addEventListener('click', () => {
        sounds.playTap();
        this.toggleTimer();
      });
    }

    if (this.btnTimerReset) {
      this.btnTimerReset.addEventListener('click', () => {
        sounds.playTap();
        this.resetTimer();
      });
    }

    if (this.btnGoToVote) {
      this.btnGoToVote.addEventListener('click', () => {
        sounds.playTap();
        this.stopTimer();
        this.game.startVotingPhase();
        this.renderVotingScreen();
        this.showScreen('voting');
      });
    }

    if (this.btnConfirmElimination) {
      this.btnConfirmElimination.addEventListener('click', () => {
        this.handleConfirmElimination();
      });
    }

    if (this.btnSubmitMrwhiteGuess) {
      this.btnSubmitMrwhiteGuess.addEventListener('click', () => {
        this.handleSubmitMrWhiteGuess();
      });
    }

    if (this.inputMrwhiteGuess) {
      this.inputMrwhiteGuess.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.handleSubmitMrWhiteGuess();
        }
      });
    }

    if (this.btnSkipMrwhiteGuess) {
      this.btnSkipMrwhiteGuess.addEventListener('click', () => {
        sounds.playTap();
        this.closeModal(this.modalMrWhiteGuess);
        const res = this.game.skipMrWhiteGuess();
        if (res) {
          this.renderGameOverScreen();
          this.showScreen('gameOver');
        } else {
          this.showToast(`Mauvaise réponse ! Manche ${this.game.roundNumber}.`);
          this.renderCluesScreen();
          this.showScreen('clues');
        }
      });
    }

    if (this.btnPlayAgainSame) {
      this.btnPlayAgainSame.addEventListener('click', () => {
        sounds.playTap();
        this.handleStartGame();
      });
    }

    if (this.btnNewGameSetup) {
      this.btnNewGameSetup.addEventListener('click', () => {
        sounds.playTap();
        this.renderReviewScreen();
        this.showScreen('review');
      });
    }

    if (this.formCustomWords) {
      this.formCustomWords.addEventListener('submit', (e) => {
        e.preventDefault();
        const w1 = this.inputCustomWord1.value.trim();
        const w2 = this.inputCustomWord2.value.trim();
        if (w1 && w2) {
          sounds.playTap();
          this.wordRepo.addCustomPair(w1, w2);
          this.inputCustomWord1.value = '';
          this.inputCustomWord2.value = '';
          this.renderCustomWordsList();
          this.showToast(`Paire « ${w1} / ${w2} » ajoutée ! 🎉`);
        }
      });
    }

    if (this.btnResetStats) {
      this.btnResetStats.addEventListener('click', () => {
        sounds.playTap();
        if (confirm("Réinitialiser les statistiques ?")) {
          localStorage.removeItem('undercover_game_stats');
          this.renderStatsModal();
          this.showToast('Statistiques réinitialisées');
        }
      });
    }
  }

  initUi() {
    this.applyTheme(this.currentTheme, false);
    this.applyDetailsMode();
    this.renderPlayersList();
    this.updateWordsCountBadge();
    if (this.soundIcon) {
      this.soundIcon.textContent = sounds.soundEnabled ? '🔊' : '🔇';
    }
  }

  applyTheme(theme, notify = true) {
    const validThemes = ['dark', 'light', 'midnight', 'oled'];
    if (!validThemes.includes(theme)) theme = 'dark';
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('undercover_ui_theme', theme);
    } catch (e) {}

    // Mise à jour de la couleur de la barre de statut pour mobile/PWA
    const themeColors = {
      dark: '#0b0f19',
      light: '#f8f6f0',
      midnight: '#060d19',
      oled: '#000000'
    };
    const metaThemeColor = document.getElementById('meta-theme-color') || document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor && themeColors[theme]) {
      metaThemeColor.setAttribute('content', themeColors[theme]);
    }

    // Mise à jour de l'état actif sur les cartes de sélection de thème
    if (this.themeCardBtns) {
      this.themeCardBtns.forEach(btn => {
        const val = btn.getAttribute('data-theme-val');
        btn.classList.toggle('active', val === theme);
      });
    }

    if (notify) {
      const themeLabels = {
        dark: 'Nébuleuse Sombre 🌌',
        light: 'Ivoire Raffiné ✨',
        midnight: 'Minuit Saphir 🌊',
        oled: 'Obsidienne OLED 🌑'
      };
      this.showToast(`Thème « ${themeLabels[theme] || theme} » appliqué`);
    }
  }

  showScreen(name) {
    Object.values(this.screens).forEach(screen => {
      if (screen) screen.classList.remove('active');
    });
    if (this.screens[name]) {
      this.screens[name].classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  openModal(modal) {
    if (modal) modal.classList.remove('hidden');
  }

  closeModal(modal) {
    if (modal) modal.classList.add('hidden');
  }

  vibrate(pattern) {
    if (navigator.vibrate) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {}
    }
  }

  showToast(message) {
    if (!this.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    this.toastContainer.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3000);
  }

  // =========================================================================
  // ÉTAPE 1 : GESTION ET SAISIE DES JOUEURS
  // =========================================================================

  handleAddPlayer() {
    if (!this.inputNewPlayerName) return;
    const name = this.inputNewPlayerName.value.trim();
    if (!name) return;

    if (this.players.length >= 20) {
      this.showToast("Maximum 20 joueurs.");
      return;
    }

    if (this.players.some(p => p.toLowerCase() === name.toLowerCase())) {
      this.showToast("Un joueur porte déjà ce prénom !");
      return;
    }

    sounds.playTap();
    this.players.push(name);
    this.savePlayers();
    this.inputNewPlayerName.value = '';
    this.renderPlayersList();
    
    // Garder le focus pour taper le nom suivant sans recliquer
    this.inputNewPlayerName.focus();
  }

  removePlayer(index) {
    sounds.playTap();
    this.players.splice(index, 1);
    this.savePlayers();
    this.renderPlayersList();
  }

  renderPlayersList() {
    const count = this.players.length;
    if (this.playerCountBadge) this.playerCountBadge.textContent = count;
    if (!this.playerInputsList) return;
    this.playerInputsList.innerHTML = '';

    if (this.playersEmptyHint) {
      if (count === 0) {
        this.playersEmptyHint.classList.remove('hidden');
      } else {
        this.playersEmptyHint.classList.add('hidden');
      }
    }

    const AVATAR_COLORS = [
      '#FF5E7E', '#4D96FF', '#6BCB77', '#FFD93D',
      '#9D4EDD', '#FF9F45', '#00C9A7', '#E056FD',
      '#00B4D8', '#FF6B6B', '#F368E0', '#10AC84'
    ];

    this.players.forEach((name, index) => {
      const item = document.createElement('div');
      item.className = 'player-input-item';

      const color = AVATAR_COLORS[index % AVATAR_COLORS.length];
      const initial = name.charAt(0).toUpperCase();

      item.innerHTML = `
        <div class="player-avatar" style="background: ${color};">${initial}</div>
        <div class="player-item-name">Joueur ${index + 1} : <strong>${name}</strong></div>
        <button class="btn-remove-player" title="Supprimer">✕</button>
      `;

      item.querySelector('.btn-remove-player').addEventListener('click', () => {
        this.removePlayer(index);
      });

      this.playerInputsList.appendChild(item);
    });

    // Activation du bouton étape 2 si au moins 3 joueurs
    if (this.btnToReview) {
      if (count >= 3) {
        this.btnToReview.disabled = false;
        this.btnToReview.innerHTML = `<span>Valider (${count} joueurs) & Régler la partie</span> ➡️`;
      } else {
        this.btnToReview.disabled = true;
        const missing = 3 - count;
        this.btnToReview.innerHTML = `<span>Ajoutez encore ${missing} joueur${missing > 1 ? 's' : ''} (min: 3)</span> ➡️`;
      }
    }
  }

  // =========================================================================
  // ÉTAPE 2 : VÉRIFICATION & RÉGLAGES DES RÔLES
  // =========================================================================

  renderReviewScreen() {
    const count = this.players.length;
    if (this.reviewPlayerCountBadge) this.reviewPlayerCountBadge.textContent = count;

    if (this.reviewPlayersChips) {
      this.reviewPlayersChips.innerHTML = '';
      const AVATAR_COLORS = [
        '#FF5E7E', '#4D96FF', '#6BCB77', '#FFD93D',
        '#9D4EDD', '#FF9F45', '#00C9A7', '#E056FD',
        '#00B4D8', '#FF6B6B', '#F368E0', '#10AC84'
      ];
      this.players.forEach((name, index) => {
        const chip = document.createElement('div');
        chip.className = 'review-player-chip';
        const color = AVATAR_COLORS[index % AVATAR_COLORS.length];
        chip.innerHTML = `
          <div class="player-avatar" style="background: ${color}; width: 26px; height: 26px; font-size: 0.75rem;">
            ${name.charAt(0).toUpperCase()}
          </div>
          <span>${name}</span>
        `;
        this.reviewPlayersChips.appendChild(chip);
      });
    }

    this.applyRecommendedRoles();
    this.renderCategoryChips();
    this.syncOptionsUi();
  }

  applyRecommendedRoles() {
    this.roleConfig = UndercoverGame.getRecommendedRoles(this.players.length);
    this.updateRoleUi();
  }

  adjustRole(roleKey, delta) {
    sounds.playTap();
    const current = this.roleConfig[roleKey];
    const next = current + delta;
    if (next < 0) return;
    if (roleKey === 'civils' && next < 1) return;

    this.roleConfig[roleKey] = next;
    this.updateRoleUi();
  }

  updateRoleUi() {
    if (this.valCivils) this.valCivils.textContent = this.roleConfig.civils;
    if (this.valUndercovers) this.valUndercovers.textContent = this.roleConfig.undercovers;
    if (this.valMrWhite) this.valMrWhite.textContent = this.roleConfig.mrWhite;

    const totalRoles = this.roleConfig.civils + this.roleConfig.undercovers + this.roleConfig.mrWhite;
    const count = this.players.length;

    if (!this.roleValidationHint) return;

    if (totalRoles === count) {
      this.roleValidationHint.className = 'role-hint valid';
      this.roleValidationHint.textContent = `✅ Parfait ! ${totalRoles} rôles pour vos ${count} participants.`;
      if (this.btnStartGame) this.btnStartGame.disabled = false;
    } else if (totalRoles < count) {
      this.roleValidationHint.className = 'role-hint error';
      this.roleValidationHint.textContent = `⚠️ Il manque ${count - totalRoles} rôle(s) à attribuer.`;
      if (this.btnStartGame) this.btnStartGame.disabled = true;
    } else {
      this.roleValidationHint.className = 'role-hint error';
      this.roleValidationHint.textContent = `⚠️ Il y a ${totalRoles - count} rôle(s) en trop.`;
      if (this.btnStartGame) this.btnStartGame.disabled = true;
    }
  }

  renderCategoryChips() {
    if (!this.categoriesChipsContainer) return;
    this.categoriesChipsContainer.innerHTML = '';
    Object.values(WORD_CATEGORIES).forEach(cat => {
      // En mode enfants (-8 ans), masquer le thème soirée
      if (this.currentAgeFilter === 'kids' && cat.id === 'party') {
        return;
      }

      const chip = document.createElement('button');
      const isActive = this.selectedCategories.includes(cat.id);
      chip.className = `cat-chip ${isActive ? 'active' : ''}`;
      chip.textContent = cat.name;

      chip.addEventListener('click', () => {
        sounds.playTap();
        if (this.selectedCategories.includes(cat.id)) {
          if (this.selectedCategories.length > 1) {
            this.selectedCategories = this.selectedCategories.filter(id => id !== cat.id);
          } else {
            this.showToast("Gardez au moins un thème.");
            return;
          }
        } else {
          this.selectedCategories.push(cat.id);
        }
        this.renderCategoryChips();
        this.updateWordsCountBadge();
      });

      this.categoriesChipsContainer.appendChild(chip);
    });
  }

  updateWordsCountBadge() {
    if (!this.wordsTotalCount) return;
    const total = this.wordRepo.getAllPairs(this.selectedCategories, this.currentAgeFilter).length;
    let ageSuffix = '';
    if (this.currentAgeFilter === 'kids') ageSuffix = ' (👶 -8 ans)';
    else if (this.currentAgeFilter === 'adult') ageSuffix = ' (🎉 16+)';
    else ageSuffix = ' (👥 +8 ans)';
    this.wordsTotalCount.textContent = `${total} paires${ageSuffix}`;
  }

  handleStartGame() {
    try {
      sounds.playTap();
      this.game.startNewGame(this.players, this.roleConfig, this.selectedCategories, this.currentAgeFilter, this.options);
      this.renderRevealScreen();
      this.showScreen('reveal');
    } catch (e) {
      alert(e.message);
    }
  }

  renderRevealScreen() {
    const player = this.game.getCurrentRevealPlayer();
    if (!player) return;

    const total = this.game.players.length;
    const current = this.game.currentRevealIndex + 1;
    const pct = Math.round((current / total) * 100);

    if (this.revealProgressBar) this.revealProgressBar.style.width = `${pct}%`;
    if (this.revealStepText) this.revealStepText.textContent = `Joueur ${current} sur ${total}`;

    if (this.revealPlayerAvatar) {
      this.revealPlayerAvatar.style.background = player.avatarColor;
      this.revealPlayerAvatar.textContent = player.name.charAt(0).toUpperCase();
    }
    if (this.revealPlayerName) this.revealPlayerName.textContent = player.name;

    if (this.secretCard) {
      this.secretCard.classList.remove('revealed');
      this.secretCard.classList.add('locked');
    }
    this.hasRevealedCurrentCard = false;
    if (this.btnNextPlayer) {
      this.btnNextPlayer.disabled = true;
      if (current === total) {
        this.btnNextPlayer.innerHTML = `<span>Passer au Débat & Vote</span> ➡️`;
      } else {
        this.btnNextPlayer.innerHTML = `<span>Joueur suivant</span> ➡️`;
      }
    }

    // Le mot reste masqué et anonymisé tant que le joueur n'a pas cliqué sur Révéler
    if (this.revealWordDisplay) this.revealWordDisplay.textContent = '••••••••';
    if (this.revealRoleFlag) {
      this.revealRoleFlag.textContent = 'VOTRE RÔLE';
      this.revealRoleFlag.className = 'role-flag';
    }
    if (this.revealDescDisplay) this.revealDescDisplay.textContent = '';
  }

  handleNextReveal() {
    const nextPlayer = this.game.nextRevealPlayer();
    if (nextPlayer) {
      this.renderRevealScreen();
    } else {
      sounds.playTap();
      this.showToast("Tous les joueurs sont prêts !");
      this.renderCluesScreen();
      this.showScreen('clues');
    }
  }

  renderCluesScreen() {
    if (this.clueRoundTitle) this.clueRoundTitle.textContent = `Manche ${this.game.roundNumber} : Tour de table`;
    const alive = this.game.getAlivePlayers();
    if (this.aliveCountBadge) this.aliveCountBadge.textContent = `${alive.length} survivants`;

    const starter = this.game.players[this.game.startingPlayerIndex];
    if (this.starterPlayerName) {
      this.starterPlayerName.textContent = starter ? starter.name : (alive[0] ? alive[0].name : '');
    }

    const ordered = this.game.getClueOrder();
    if (!this.cluesPlayersList) return;
    this.cluesPlayersList.innerHTML = '';

    ordered.forEach((p, idx) => {
      const isStarter = p.id === (starter ? starter.id : '');
      const row = document.createElement('div');
      row.className = `clue-player-row ${isStarter ? 'is-starter' : ''}`;
      row.innerHTML = `
        <div class="clue-player-left">
          <span class="player-turn-num">#${idx + 1}</span>
          <div class="player-avatar" style="background: ${p.avatarColor}; width: 28px; height: 28px; font-size: 0.8rem;">
            ${p.name.charAt(0).toUpperCase()}
          </div>
          <strong>${p.name}</strong>
        </div>
        ${isStarter ? '<span class="badge" style="background: rgba(99, 102, 241, 0.3); color: #a5b4fc;">🎙️ Commence</span>' : ''}
      `;
      this.cluesPlayersList.appendChild(row);
    });

    this.resetTimer();
  }

  toggleTimer() {
    if (this.isTimerRunning) {
      this.stopTimer();
      if (this.btnTimerToggle) this.btnTimerToggle.textContent = '▶️';
    } else {
      this.startTimer();
      if (this.btnTimerToggle) this.btnTimerToggle.textContent = '⏸️';
    }
  }

  startTimer() {
    if (this.isTimerRunning) return;
    this.isTimerRunning = true;
    this.timerInterval = setInterval(() => {
      if (this.timerSeconds > 0) {
        this.timerSeconds--;
        this.updateTimerDisplay();
        if (this.timerSeconds <= 5 && this.timerSeconds > 0) {
          sounds.playTick();
        }
      } else {
        this.stopTimer();
        sounds.playTimerAlert();
        if (this.btnTimerToggle) this.btnTimerToggle.textContent = '▶️';
        this.showToast("Temps écoulé ! ⏰");
      }
    }, 1000);
  }

  stopTimer() {
    this.isTimerRunning = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  resetTimer() {
    this.stopTimer();
    this.timerSeconds = this.timerInitial;
    this.updateTimerDisplay();
    if (this.btnTimerToggle) this.btnTimerToggle.textContent = '▶️';
  }

  updateTimerDisplay() {
    if (!this.timerDisplay) return;
    const mins = Math.floor(this.timerSeconds / 60).toString().padStart(2, '0');
    const secs = (this.timerSeconds % 60).toString().padStart(2, '0');
    this.timerDisplay.textContent = `${mins}:${secs}`;
    if (this.timerSeconds <= 5) {
      this.timerDisplay.style.color = 'var(--color-danger)';
    } else {
      this.timerDisplay.style.color = 'var(--text-primary)';
    }
  }

  renderVotingScreen() {
    if (this.options.anonymousVoting) {
      if (this.votingPublicMode) this.votingPublicMode.classList.add('hidden');
      if (this.votingAnonymousMode) this.votingAnonymousMode.classList.remove('hidden');
      this.startAnonymousVoting();
    } else {
      if (this.votingPublicMode) this.votingPublicMode.classList.remove('hidden');
      if (this.votingAnonymousMode) this.votingAnonymousMode.classList.add('hidden');
      this.renderPublicVotingGrid();
    }
  }

  renderPublicVotingGrid() {
    this.selectedSuspectId = null;
    if (this.selectedSuspectBanner) this.selectedSuspectBanner.classList.add('hidden');
    if (this.btnConfirmElimination) this.btnConfirmElimination.disabled = true;
    if (!this.votingPlayersGrid) return;
    this.votingPlayersGrid.innerHTML = '';

    const alive = this.game.getAlivePlayers();
    alive.forEach(player => {
      const card = document.createElement('div');
      card.className = 'suspect-card';
      card.setAttribute('data-id', player.id);
      card.innerHTML = `
        <div class="player-avatar large" style="background: ${player.avatarColor}; width: 56px; height: 56px; font-size: 1.4rem;">
          ${player.name.charAt(0).toUpperCase()}
        </div>
        <div class="suspect-name">${player.name}</div>
      `;

      card.addEventListener('click', () => {
        sounds.playTap();
        this.vibrate(30);
        document.querySelectorAll('.suspect-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.selectedSuspectId = player.id;
        if (this.selectedSuspectName) this.selectedSuspectName.textContent = player.name;
        if (this.selectedSuspectBanner) this.selectedSuspectBanner.classList.remove('hidden');
        if (this.btnConfirmElimination) this.btnConfirmElimination.disabled = false;
      });

      this.votingPlayersGrid.appendChild(card);
    });
  }

  startAnonymousVoting() {
    this.anonVoters = this.game.getAlivePlayers();
    this.anonCurrentVoterIndex = 0;
    this.anonSelectedSuspectId = null;
    this.anonTiedSelectedSuspectId = null;
    this.game.resetAnonymousVotes();
    this.showAnonPassScreen();
  }

  showAnonPassScreen() {
    if (this.anonCurrentVoterIndex >= this.anonVoters.length) {
      this.renderAnonymousVoteResults();
      return;
    }

    const voter = this.anonVoters[this.anonCurrentVoterIndex];
    if (this.anonVoterStepBadge) {
      this.anonVoterStepBadge.textContent = `Vote ${this.anonCurrentVoterIndex + 1} sur ${this.anonVoters.length}`;
    }
    if (this.anonVoterAvatar) {
      this.anonVoterAvatar.style.background = voter.avatarColor;
      this.anonVoterAvatar.textContent = voter.name.charAt(0).toUpperCase();
    }
    if (this.anonVoterName) {
      this.anonVoterName.textContent = voter.name;
    }

    if (this.anonPassScreen) this.anonPassScreen.classList.remove('hidden');
    if (this.anonBallotScreen) this.anonBallotScreen.classList.add('hidden');
    if (this.anonResultsScreen) this.anonResultsScreen.classList.add('hidden');

    if (this.btnAnonStartVote) {
      this.btnAnonStartVote.onclick = () => {
        sounds.playTap();
        this.showAnonBallotScreen();
      };
    }
  }

  showAnonBallotScreen() {
    const voter = this.anonVoters[this.anonCurrentVoterIndex];
    if (this.anonCurrentVoterBadge) {
      this.anonCurrentVoterBadge.textContent = voter.name;
    }

    this.anonSelectedSuspectId = null;
    if (this.btnAnonSubmitVote) this.btnAnonSubmitVote.disabled = true;

    if (this.anonSuspectsGrid) {
      this.anonSuspectsGrid.innerHTML = '';
      const alive = this.game.getAlivePlayers();

      alive.forEach(player => {
        const card = document.createElement('div');
        card.className = 'suspect-card';
        card.setAttribute('data-id', player.id);
        const isSelf = player.id === voter.id;
        card.innerHTML = `
          <div class="player-avatar large" style="background: ${player.avatarColor}; width: 56px; height: 56px; font-size: 1.4rem;">
            ${player.name.charAt(0).toUpperCase()}
          </div>
          <div class="suspect-name">${player.name} ${isSelf ? '<small style="display:block;font-size:0.75rem;color:var(--text-muted);">(Vous)</small>' : ''}</div>
        `;

        card.addEventListener('click', () => {
          sounds.playTap();
          this.vibrate(30);
          this.anonSuspectsGrid.querySelectorAll('.suspect-card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          this.anonSelectedSuspectId = player.id;
          if (this.btnAnonSubmitVote) this.btnAnonSubmitVote.disabled = false;
        });

        this.anonSuspectsGrid.appendChild(card);
      });
    }

    if (this.btnAnonSubmitVote) {
      this.btnAnonSubmitVote.onclick = () => {
        this.handleAnonVoteSubmit();
      };
    }

    if (this.anonPassScreen) this.anonPassScreen.classList.add('hidden');
    if (this.anonBallotScreen) this.anonBallotScreen.classList.remove('hidden');
    if (this.anonResultsScreen) this.anonResultsScreen.classList.add('hidden');
  }

  handleAnonVoteSubmit() {
    if (!this.anonSelectedSuspectId) return;
    const voter = this.anonVoters[this.anonCurrentVoterIndex];
    this.game.recordAnonymousVote(voter.id, this.anonSelectedSuspectId);

    sounds.playTap();
    this.vibrate(40);
    this.showToast(`Vote de ${voter.name} enregistré 🔒`);

    this.anonCurrentVoterIndex++;
    if (this.anonCurrentVoterIndex < this.anonVoters.length) {
      this.showAnonPassScreen();
    } else {
      sounds.playReveal();
      this.renderAnonymousVoteResults();
    }
  }

  renderAnonymousVoteResults() {
    if (this.anonPassScreen) this.anonPassScreen.classList.add('hidden');
    if (this.anonBallotScreen) this.anonBallotScreen.classList.add('hidden');
    if (this.anonResultsScreen) this.anonResultsScreen.classList.remove('hidden');

    const { tallies, maxVotes, topCandidates, isTie, totalVotes } = this.game.getAnonymousVoteResults();

    // Remplir la liste des scores
    if (this.anonTalliesList) {
      this.anonTalliesList.innerHTML = '';
      tallies.forEach(item => {
        const row = document.createElement('div');
        const isTop = item.votes === maxVotes && maxVotes > 0;
        row.className = `anon-tally-item ${isTop ? 'is-top' : ''}`;

        const pct = totalVotes > 0 ? Math.round((item.votes / totalVotes) * 100) : 0;
        row.innerHTML = `
          <div class="anon-tally-header">
            <div class="anon-tally-user">
              <div class="player-avatar" style="background: ${item.player.avatarColor}; width: 26px; height: 26px; font-size: 0.75rem;">
                ${item.player.name.charAt(0).toUpperCase()}
              </div>
              <span>${item.player.name}</span>
            </div>
            <div class="anon-tally-votes">${item.votes} vote${item.votes > 1 ? 's' : ''} (${pct}%)</div>
          </div>
          <div class="anon-tally-track">
            <div class="anon-tally-fill" style="width: ${pct}%;"></div>
          </div>
        `;
        this.anonTalliesList.appendChild(row);
      });
    }

    if (!isTie && topCandidates.length === 1 && maxVotes > 0) {
      // Majorité nette
      const target = topCandidates[0];
      if (this.anonVerdictBanner) this.anonVerdictBanner.classList.remove('hidden');
      if (this.anonTieBanner) this.anonTieBanner.classList.add('hidden');

      if (this.anonVerdictTitle) this.anonVerdictTitle.textContent = `Majorité contre ${target.name} !`;
      if (this.anonVerdictSubtitle) this.anonVerdictSubtitle.textContent = `Ce joueur a recueilli le plus de voix (${maxVotes} vote${maxVotes > 1 ? 's' : ''} sur ${totalVotes}).`;

      if (this.btnAnonConfirmElim) {
        this.btnAnonConfirmElim.onclick = () => {
          this.handleElimination(target.id);
        };
      }
    } else {
      // Égalité (Ex æquo)
      if (this.anonVerdictBanner) this.anonVerdictBanner.classList.add('hidden');
      if (this.anonTieBanner) this.anonTieBanner.classList.remove('hidden');

      const candidates = topCandidates.length > 0 ? topCandidates : this.game.getAlivePlayers();
      if (this.anonTieTitle) {
        this.anonTieTitle.textContent = `Égalité ! (${candidates.map(p => p.name).join(' & ')})`;
      }

      this.anonTiedSelectedSuspectId = null;
      if (this.btnAnonEliminateTied) {
        this.btnAnonEliminateTied.disabled = true;
        this.btnAnonEliminateTied.innerHTML = `<span>Éliminer après débat</span> ⚡`;
      }

      if (this.anonTiedSuspectsGrid) {
        this.anonTiedSuspectsGrid.innerHTML = '';
        candidates.forEach(player => {
          const card = document.createElement('div');
          card.className = 'suspect-card';
          card.setAttribute('data-id', player.id);
          card.innerHTML = `
            <div class="player-avatar large" style="background: ${player.avatarColor}; width: 56px; height: 56px; font-size: 1.4rem;">
              ${player.name.charAt(0).toUpperCase()}
            </div>
            <div class="suspect-name">${player.name}</div>
          `;

          card.addEventListener('click', () => {
            sounds.playTap();
            this.vibrate(30);
            this.anonTiedSuspectsGrid.querySelectorAll('.suspect-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            this.anonTiedSelectedSuspectId = player.id;
            if (this.btnAnonEliminateTied) {
              this.btnAnonEliminateTied.disabled = false;
              this.btnAnonEliminateTied.innerHTML = `<span>Éliminer <strong>${player.name}</strong> après débat</span> ⚡`;
            }
          });

          this.anonTiedSuspectsGrid.appendChild(card);
        });
      }

      if (this.btnAnonEliminateTied) {
        this.btnAnonEliminateTied.onclick = () => {
          if (this.anonTiedSelectedSuspectId) {
            this.handleElimination(this.anonTiedSelectedSuspectId);
          }
        };
      }

      if (this.btnAnonRevote) {
        this.btnAnonRevote.onclick = () => {
          sounds.playTap();
          this.showToast("Nouveau vote secret lancé ! 🔄");
          this.startAnonymousVoting();
        };
      }
    }
  }

  handleConfirmElimination() {
    if (!this.selectedSuspectId) return;
    this.handleElimination(this.selectedSuspectId);
  }

  handleElimination(playerId) {
    sounds.playElimination();
    this.vibrate([100, 60, 100]);

    const result = this.game.eliminatePlayer(playerId);

    if (result.requiresMrWhiteGuess) {
      if (this.mrwhiteGuessIntro) {
        this.mrwhiteGuessIntro.innerHTML = `<strong>${result.eliminatedPlayer.name}</strong> a été éliminé et était <strong>M. Blanc</strong> !`;
      }
      if (this.inputMrwhiteGuess) this.inputMrwhiteGuess.value = '';
      this.openModal(this.modalMrWhiteGuess);
      setTimeout(() => {
        if (this.inputMrwhiteGuess) this.inputMrwhiteGuess.focus();
      }, 300);
      return;
    }

    if (result.winStatus) {
      this.renderGameOverScreen();
      this.showScreen('gameOver');
    } else {
      const roleLabel = result.eliminatedPlayer.role === ROLES.CIVIL ? 'Civil 🛡️' : 'Undercover 🕶️';
      this.showToast(`${result.eliminatedPlayer.name} (${roleLabel}) est éliminé. Manche ${this.game.roundNumber} !`);
      this.renderCluesScreen();
      this.showScreen('clues');
    }
  }

  handleSubmitMrWhiteGuess() {
    if (!this.inputMrwhiteGuess) return;
    const guess = this.inputMrwhiteGuess.value.trim();
    if (!guess) {
      this.showToast("Veuillez saisir un mot.");
      return;
    }

    this.closeModal(this.modalMrWhiteGuess);
    const result = this.game.handleMrWhiteGuess(guess);

    if (result.isCorrect) {
      sounds.playWhiteVictory();
      this.renderGameOverScreen();
      this.showScreen('gameOver');
    } else {
      sounds.playBuzz();
      if (result.winner) {
        this.renderGameOverScreen();
        this.showScreen('gameOver');
      } else {
        this.showToast(`Mauvaise réponse ! Manche ${this.game.roundNumber}.`);
        this.renderCluesScreen();
        this.showScreen('clues');
      }
    }
  }

  renderGameOverScreen() {
    sounds.playVictory();
    this.vibrate([150, 100, 200, 100, 300]);

    const winner = this.game.winner;

    if (this.victoryTitle) {
      if (winner === ROLES.CIVIL) {
        if (this.victoryIcon) this.victoryIcon.textContent = '🛡️';
        this.victoryTitle.textContent = 'Victoire des Civils !';
        this.victoryTitle.style.color = 'var(--color-civil)';
      } else if (winner === ROLES.UNDERCOVER) {
        if (this.victoryIcon) this.victoryIcon.textContent = '🕶️';
        this.victoryTitle.textContent = 'Victoire des Undercovers !';
        this.victoryTitle.style.color = 'var(--color-undercover)';
      } else if (winner === ROLES.MR_WHITE) {
        if (this.victoryIcon) this.victoryIcon.textContent = '🎭';
        this.victoryTitle.textContent = 'Victoire de M. Blanc !';
        this.victoryTitle.style.color = 'var(--color-mrwhite)';
      }
    }

    if (this.victoryReason) this.victoryReason.textContent = this.game.winReason;
    if (this.endCivilWord) this.endCivilWord.textContent = this.game.civilWord;
    if (this.endUndercoverWord) this.endUndercoverWord.textContent = this.game.undercoverWord;

    if (!this.endPlayersList) return;
    this.endPlayersList.innerHTML = '';
    this.game.players.forEach(p => {
      const row = document.createElement('div');
      row.className = 'end-player-row';

      let roleBadge = '';
      let wordLabel = p.word ? `« ${p.word} »` : 'Aucun mot';

      if (p.role === ROLES.CIVIL) {
        roleBadge = `<span class="role-badge-tag civil">Civil</span>`;
      } else if (p.role === ROLES.UNDERCOVER) {
        roleBadge = `<span class="role-badge-tag undercover">Undercover</span>`;
      } else {
        roleBadge = `<span class="role-badge-tag mrwhite">M. Blanc</span>`;
      }

      const statusBadge = p.isAlive
        ? `<span class="badge" style="background: rgba(16, 185, 129, 0.2); color: var(--color-success);">Vivant</span>`
        : `<span class="badge" style="background: rgba(239, 68, 68, 0.2); color: var(--color-danger);">Éliminé</span>`;

      row.innerHTML = `
        <div class="end-player-info">
          <div class="player-avatar" style="background: ${p.avatarColor}; width: 32px; height: 32px;">
            ${p.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <strong>${p.name}</strong>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${wordLabel}</div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          ${roleBadge}
          ${statusBadge}
        </div>
      `;

      this.endPlayersList.appendChild(row);
    });
  }

  renderCustomWordsList() {
    this.updateWordsCountBadge();
    const custom = this.wordRepo.customPairs;
    if (!this.customWordsItems) return;
    this.customWordsItems.innerHTML = '';

    if (custom.length === 0) {
      this.customWordsItems.innerHTML = `<div style="text-align: center; color: var(--text-muted); font-size: 0.85rem; padding: 8px;">Aucun mot personnalisé pour le moment.</div>`;
      return;
    }

    custom.forEach(pair => {
      const item = document.createElement('div');
      item.className = 'custom-word-item';
      item.innerHTML = `
        <div><strong>${pair.word1}</strong> / <span>${pair.word2}</span></div>
        <button class="btn-remove-player" title="Supprimer">✕</button>
      `;
      item.querySelector('.btn-remove-player').addEventListener('click', () => {
        sounds.playTap();
        this.wordRepo.removeCustomPair(pair.id);
        this.renderCustomWordsList();
        this.showToast('Paire supprimée');
      });
      this.customWordsItems.appendChild(item);
    });
  }

  renderStatsModal() {
    const stats = UndercoverGame.getGameStats();
    if (this.statTotalGames) this.statTotalGames.textContent = stats.totalGames;

    const total = stats.totalGames || 1;
    const civilPct = Math.round((stats.civilWins / total) * 100);
    const undercoverPct = Math.round((stats.undercoverWins / total) * 100);
    const whitePct = Math.round((stats.whiteWins / total) * 100);

    if (this.statCivilPct) this.statCivilPct.textContent = `${stats.civilWins} (${civilPct}%)`;
    if (this.statCivilBar) this.statCivilBar.style.width = `${civilPct}%`;

    if (this.statUndercoverPct) this.statUndercoverPct.textContent = `${stats.undercoverWins} (${undercoverPct}%)`;
    if (this.statUndercoverBar) this.statUndercoverBar.style.width = `${undercoverPct}%`;

    if (this.statWhitePct) this.statWhitePct.textContent = `${stats.whiteWins} (${whitePct}%)`;
    if (this.statWhiteBar) this.statWhiteBar.style.width = `${whitePct}%`;
  }
}

// Initialisation globale au chargement de la page
window.addEventListener('DOMContentLoaded', () => {
  window.undercoverApp = new UndercoverApp();

  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js').then(reg => {
      // Force la vérification de mise à jour dès le lancement
      reg.update();
    }).catch(err => {
      console.log('SW non enregistré:', err);
    });
  }
});
