/**
 * ==========================================================================
 * ESPIONNAGE - APPLICATION WEB & MOBILE COMPLETE (STANDALONE)
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
  { word1: "Secret", word2: "Rumeur", category: "general", age: "standard" },
  { word1: "Briquet", word2: "Allumette", category: "general", age: "standard" },
  { word1: "Parfum", word2: "Savon", category: "general", age: "kids" },
  { word1: "Marteau", word2: "Clou", category: "general", age: "kids" },
  { word1: "Tournevis", word2: "Vis", category: "general", age: "kids" },
  { word1: "Poussette", word2: "Tricycle", category: "general", age: "kids" },
  { word1: "Doudou", word2: "Tétine", category: "general", age: "kids" },
  { word1: "Tente", word2: "Sac de couchage", category: "general", age: "kids" },
  { word1: "Lampe torche", word2: "Lanterne", category: "general", age: "kids" },

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

class WordRepository {
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
    // Si ageFilter === 'adult', tous les mots (kids, standard, adult) sont inclus

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

// ==========================================================================
// 2. MOTEUR AUDIO (WEB AUDIO API)
// ==========================================================================

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.soundEnabled = true;
    this.initOnUserGesture = this.initOnUserGesture.bind(this);
    
    const saved = localStorage.getItem('espionnage_sound_enabled');
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
    localStorage.setItem('espionnage_sound_enabled', this.soundEnabled);
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

  playDiplomatVictory() {
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
  SPY: 'spy',
  DIPLOMAT: 'diplomat'
};

const POINTS_CONFIG = {
  [ROLES.CIVIL]: 2,
  [ROLES.DIPLOMAT]: 6,
  [ROLES.SPY]: 10
};

const PHASES = {
  SETUP: 'setup',
  REVEAL: 'reveal',
  CLUES: 'clues',
  VOTING: 'voting',
  DIPLOMAT_GUESS: 'diplomat_guess',
  GAME_OVER: 'game_over'
};

class EspionnageGame {
  constructor(wordRepository) {
    this.wordRepo = wordRepository;
    this.players = [];
    this.wordPair = null;
    this.civilWord = '';
    this.spyWord = '';
    this.phase = PHASES.SETUP;
    this.currentRevealIndex = 0;
    this.roundNumber = 1;
    this.startingPlayerIndex = 0;
    this.clueCurrentPlayerIndex = 0;
    this.eliminatedThisRound = null;
    this.diplomatAwaitingGuess = null;
    this.winner = null; // 'civil' | 'spy' | 'diplomat' | 'infiltrators'
    this.winReason = '';
    this.roundPoints = {}; // { [playerId]: number }
  }

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
    
    const sp = Math.max(2, Math.floor(playerCount / 4));
    const dip = Math.max(1, Math.floor(playerCount / 6));
    const civ = playerCount - sp - dip;
    return { civils: civ, spies: sp, diplomats: dip };
  }

  startNewGame(playerNames, roleConfig, selectedCategories = [], ageFilter = 'standard', options = {}) {
    if (playerNames.length < 3) {
      throw new Error("Il faut au moins 3 joueurs pour démarrer.");
    }

    this.options = Object.assign({ showRoles: false, anonymousVoting: false }, options);
    this.anonymousVotes = {};

    const totalRoles = roleConfig.civils + roleConfig.spies + roleConfig.diplomats;
    if (totalRoles !== playerNames.length) {
      throw new Error(`La somme des rôles (${totalRoles}) ne correspond pas au nombre de joueurs (${playerNames.length}).`);
    }

    const pairResult = this.wordRepo.getRandomPair(selectedCategories, ageFilter);
    if (pairResult.exhausted) {
      const err = new Error("WORDS_EXHAUSTED");
      err.stats = pairResult.stats;
      throw err;
    }

    this.wordPair = pairResult;
    this.civilWord = this.wordPair.word1;
    this.spyWord = this.wordPair.word2;

    const rolesPool = [];
    for (let i = 0; i < roleConfig.civils; i++) rolesPool.push(ROLES.CIVIL);
    for (let i = 0; i < roleConfig.spies; i++) rolesPool.push(ROLES.SPY);
    for (let i = 0; i < roleConfig.diplomats; i++) rolesPool.push(ROLES.DIPLOMAT);

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
      else if (role === ROLES.SPY) word = this.spyWord;
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
    this.diplomatAwaitingGuess = null;
    this.winner = null;
    this.winReason = '';
    this.roundPoints = {};
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

  setOptions(options) {
    this.options = Object.assign(this.options || {}, options);
  }

  startVotingPhase() {
    this.phase = PHASES.VOTING;
    this.resetAnonymousVotes();
  }

  recordAnonymousVote(voterId, targetPlayerId) {
    if (!this.anonymousVotes) this.anonymousVotes = {};
    this.anonymousVotes[voterId] = targetPlayerId;
  }

  resetAnonymousVotes() {
    this.anonymousVotes = {};
  }

  getAnonymousVoteResults() {
    const alive = this.getAlivePlayers();
    const counts = {};
    alive.forEach(p => { counts[p.id] = 0; });

    Object.values(this.anonymousVotes || {}).forEach(targetId => {
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
    const totalVotes = Object.keys(this.anonymousVotes || {}).length;

    return {
      tallies,
      maxVotes,
      topCandidates,
      isTie,
      totalVotes
    };
  }

  eliminatePlayer(playerId) {
    const target = this.players.find(p => p.id === playerId);
    if (!target || !target.isAlive) {
      throw new Error("Joueur introuvable ou déjà éliminé.");
    }

    target.isAlive = false;
    this.eliminatedThisRound = target;

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

    const winStatus = this.checkWinCondition();
    if (winStatus) {
      this.phase = PHASES.GAME_OVER;
      this.winner = winStatus.winner;
      this.winReason = winStatus.reason;
      this.roundPoints = this.calculateRoundPoints(winStatus.winner);
      this.recordGameStats(winStatus.winner);
    } else {
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

    // 4. Cas où il ne reste qu'un seul joueur au total
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

// ==========================================================================
// 4. CONTRÔLEUR D'INTERFACE UTILISATEUR (APPLICATION)
// ==========================================================================

class EspionnageApp {
  constructor() {
    this.wordRepo = new WordRepository();
    this.game = new EspionnageGame(this.wordRepo);

    this.players = this.loadSavedPlayers();
    this.sessionScores = this.loadSessionScores();
    this.roleConfig = EspionnageGame.getRecommendedRoles(Math.max(3, this.players.length));
    this.currentAgeFilter = 'standard';
    this.selectedCategories = Object.keys(WORD_CATEGORIES);
    this.selectedSuspectId = null;

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
      const saved = localStorage.getItem('espionnage_saved_players');
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
      localStorage.setItem('espionnage_saved_players', JSON.stringify(this.players));
    } catch (e) {
      console.warn("Impossible de sauvegarder les joueurs", e);
    }
  }

  loadSessionScores() {
    try {
      const saved = localStorage.getItem('espionnage_session_scores');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') return parsed;
      }
    } catch (e) {
      console.warn("Impossible de charger les scores de session", e);
    }
    return {};
  }

  saveSessionScores() {
    try {
      localStorage.setItem('espionnage_session_scores', JSON.stringify(this.sessionScores));
    } catch (e) {
      console.warn("Impossible de sauvegarder les scores de session", e);
    }
  }

  resetSessionScores() {
    this.sessionScores = {};
    if (this.players && this.players.length > 0) {
      this.players.forEach(name => {
        this.sessionScores[name] = 0;
      });
    }
    this.saveSessionScores();
    this.renderSessionLeaderboard();
  }

  loadOptions() {
    try {
      const saved = localStorage.getItem('espionnage_game_options');
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
      localStorage.setItem('espionnage_game_options', JSON.stringify(this.options));
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
    this.btnScoreboardModal = document.getElementById('btn-scoreboard-modal');
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
    this.valSpies = document.getElementById('val-spies');
    this.valDiplomats = document.getElementById('val-diplomats');
    this.btnDecCivils = document.getElementById('btn-dec-civils');
    this.btnIncCivils = document.getElementById('btn-inc-civils');
    this.btnDecSpies = document.getElementById('btn-dec-spies');
    this.btnIncSpies = document.getElementById('btn-inc-spies');
    this.btnDecDiplomats = document.getElementById('btn-dec-diplomats');
    this.btnIncDiplomats = document.getElementById('btn-inc-diplomats');
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
    this.endSpyWord = document.getElementById('end-spy-word');
    this.endPlayersList = document.getElementById('end-players-list');
    this.endSessionLeaderboard = document.getElementById('end-session-leaderboard');
    this.btnEndResetScores = document.getElementById('btn-end-reset-scores');
    this.btnPlayAgainSame = document.getElementById('btn-play-again-same');
    this.btnNewGameSetup = document.getElementById('btn-new-game-setup');

    // Modales
    this.modalSettings = document.getElementById('modal-settings');
    this.modalOptShowRoles = document.getElementById('modal-opt-show-roles');
    this.modalOptAnonVoting = document.getElementById('modal-opt-anon-voting');
    this.modalOptShowDetails = document.getElementById('modal-opt-show-details');

    this.modalRules = document.getElementById('modal-rules');
    this.modalDiplomatGuess = document.getElementById('modal-diplomat-guess');
    this.diplomatGuessIntro = document.getElementById('diplomat-guess-intro');
    this.inputDiplomatGuess = document.getElementById('input-diplomat-guess');
    this.btnSubmitDiplomatGuess = document.getElementById('btn-submit-diplomat-guess');
    this.btnSkipDiplomatGuess = document.getElementById('btn-skip-diplomat-guess');
    
    this.modalWords = document.getElementById('modal-words');
    this.wordsTotalCount = document.getElementById('words-total-count');
    this.formCustomWords = document.getElementById('form-custom-words');
    this.inputCustomWord1 = document.getElementById('input-custom-word1');
    this.inputCustomWord2 = document.getElementById('input-custom-word2');
    this.customWordsItems = document.getElementById('custom-words-items');

    this.modalScoreboard = document.getElementById('modal-scoreboard');
    this.scoreboardLeaderName = document.getElementById('scoreboard-leader-name');
    this.scoreboardLeaderPoints = document.getElementById('scoreboard-leader-points');
    this.scoreboardLeaderIcon = document.getElementById('scoreboard-leader-icon');
    this.modalScoreboardList = document.getElementById('modal-scoreboard-list');
    this.btnModalResetScores = document.getElementById('btn-modal-reset-scores');

    this.modalStats = document.getElementById('modal-stats');
    this.statTotalGames = document.getElementById('stat-total-games');
    this.statCivilPct = document.getElementById('stat-civil-pct');
    this.statCivilBar = document.getElementById('stat-civil-bar');
    this.statSpyPct = document.getElementById('stat-spy-pct');
    this.statSpyBar = document.getElementById('stat-spy-bar');
    this.statDiplomatPct = document.getElementById('stat-diplomat-pct');
    this.statDiplomatBar = document.getElementById('stat-diplomat-bar');
    this.btnResetStats = document.getElementById('btn-reset-stats');

    // Modale cycle épuisé & Mémoire des mots
    this.modalWordsExhausted = document.getElementById('modal-words-exhausted');
    this.exhaustedModalText = document.getElementById('exhausted-modal-text');
    this.exhaustedStatsCount = document.getElementById('exhausted-stats-count');
    this.btnExhaustedResetAndPlay = document.getElementById('btn-exhausted-reset-and-play');

    this.settingsPlayedWordsBadge = document.getElementById('settings-played-words-badge');
    this.settingsPlayedWordsDesc = document.getElementById('settings-played-words-desc');
    this.settingsAgeStatsList = document.getElementById('settings-age-stats-list');
    this.settingsCatStatsList = document.getElementById('settings-cat-stats-list');
    this.btnToggleCatStats = document.getElementById('btn-toggle-cat-stats');
    this.catStatsToggleLabel = document.getElementById('cat-stats-toggle-label');
    this.btnResetPlayedWords = document.getElementById('btn-reset-played-words');
    this.wordsPlayedCount = document.getElementById('words-played-count');

    this.toastContainer = document.getElementById('toast-container');

    // Thème de l'interface
    this.currentTheme = localStorage.getItem('espionnage_ui_theme') || 'dark';
    this.themeCardBtns = document.querySelectorAll('[data-theme-val]');
  }

  bindEvents() {
    if (this.brandHomeBtn) {
      this.brandHomeBtn.addEventListener('click', () => {
        sounds.playTap();
        if (this.game.phase !== PHASES.SETUP && this.game.phase !== PHASES.GAME_OVER) {
          if (confirm("Une partie est en cours. Revenir à la sélection des joueurs ? (Les scores seront remis à zéro)")) {
            this.resetSessionScores();
            this.showScreen('setup');
          }
        } else {
          this.resetSessionScores();
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

    if (this.btnScoreboardModal) {
      this.btnScoreboardModal.addEventListener('click', () => {
        sounds.playTap();
        this.renderSessionLeaderboard();
        this.openModal(this.modalScoreboard);
      });
    }

    if (this.btnSettingsModal) {
      this.btnSettingsModal.addEventListener('click', () => {
        sounds.playTap();
        this.syncOptionsUi();
        this.updatePlayedWordsStatusUi();
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
        this.updatePlayedWordsStatusUi();
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

    const handleResetScores = () => {
      sounds.playTap();
      if (confirm("Voulez-vous réinitialiser tous les scores de la session à zéro ?")) {
        this.resetSessionScores();
        this.showToast("Scores de session remis à zéro 🔄");
      }
    };

    if (this.btnModalResetScores) {
      this.btnModalResetScores.addEventListener('click', handleResetScores);
    }
    if (this.btnEndResetScores) {
      this.btnEndResetScores.addEventListener('click', handleResetScores);
    }

    // Toggle de la liste détaillée des thèmes dans la mémoire
    if (this.btnToggleCatStats) {
      this.btnToggleCatStats.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        sounds.playTap();
        if (this.settingsCatStatsList) {
          const isHidden = this.settingsCatStatsList.classList.toggle('hidden');
          this.btnToggleCatStats.innerHTML = `<span id="cat-stats-toggle-label">${isHidden ? 'Voir le détail' : 'Masquer le détail'}</span> ${isHidden ? '▾' : '▴'}`;
        }
      });
    }

    // Réinitialisation de la mémoire des mots
    if (this.btnResetPlayedWords) {
      this.btnResetPlayedWords.addEventListener('click', () => {
        sounds.playTap();
        this.wordRepo.resetPlayedPairs();
        this.updatePlayedWordsStatusUi();
        this.showToast('Mémoire des mots réinitialisée ! 🔄');
      });
    }

    // Bouton de reset direct depuis la modale d'épuisement
    if (this.btnExhaustedResetAndPlay) {
      this.btnExhaustedResetAndPlay.addEventListener('click', () => {
        sounds.playTap();
        this.wordRepo.resetPlayedPairs();
        this.closeModal(this.modalWordsExhausted);
        this.updatePlayedWordsStatusUi();
        this.showToast('Nouveau cycle commencé ! 🚀');
        this.handleStartGame();
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

    [this.modalRules, this.modalWords, this.modalStats, this.modalSettings, this.modalWordsExhausted, this.modalScoreboard].forEach(modal => {
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
          this.resetSessionScores();
          this.savePlayers();
          this.renderPlayersList();
          this.showToast('Joueurs et scores effacés 🗑️');
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
      this.updatePlayedWordsStatusUi();
    };

    if (this.btnAgeKids) this.btnAgeKids.addEventListener('click', () => setAgeFilter('kids'));
    if (this.btnAgeStandard) this.btnAgeStandard.addEventListener('click', () => setAgeFilter('standard'));
    if (this.btnAgeAdult) this.btnAgeAdult.addEventListener('click', () => setAgeFilter('adult'));

    if (this.btnDecCivils) this.btnDecCivils.addEventListener('click', () => this.adjustRole('civils', -1));
    if (this.btnIncCivils) this.btnIncCivils.addEventListener('click', () => this.adjustRole('civils', 1));
    if (this.btnDecSpies) this.btnDecSpies.addEventListener('click', () => this.adjustRole('spies', -1));
    if (this.btnIncSpies) this.btnIncSpies.addEventListener('click', () => this.adjustRole('spies', 1));
    if (this.btnDecDiplomats) this.btnDecDiplomats.addEventListener('click', () => this.adjustRole('diplomats', -1));
    if (this.btnIncDiplomats) this.btnIncDiplomats.addEventListener('click', () => this.adjustRole('diplomats', 1));

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
        this.updatePlayedWordsStatusUi();
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
          if (player.role === ROLES.DIPLOMAT) {
            this.revealRoleFlag.className = 'role-flag diplomat';
            this.revealRoleFlag.textContent = '🎭 VOUS ÊTES LE DIPLOMATE';
            if (this.revealWordDisplay) this.revealWordDisplay.textContent = 'AUCUN MOT';
            if (this.revealDescDisplay) this.revealDescDisplay.textContent = "Vous n'avez aucun mot secret ! Écoutez attentivement les indices pour bluffer.";
          } else if (this.options.showRoles) {
            this.revealRoleFlag.className = `role-flag ${player.role}`;
            if (player.role === ROLES.CIVIL) {
              this.revealRoleFlag.textContent = '🛡️ VOUS ÊTES CIVIL';
              if (this.revealWordDisplay) this.revealWordDisplay.textContent = player.word;
              if (this.revealDescDisplay) this.revealDescDisplay.textContent = "Donnez un indice subtil pour vous faire reconnaître des autres Civils sans aider le Diplomate !";
            } else if (player.role === ROLES.SPY) {
              this.revealRoleFlag.textContent = '🕶️ VOUS ÊTES L\'ESPION';
              if (this.revealWordDisplay) this.revealWordDisplay.textContent = player.word;
              if (this.revealDescDisplay) this.revealDescDisplay.textContent = "Votre mot est légèrement différent des civils. Fondez-vous dans la masse !";
            }
          } else {
            // RÈGLES PAR DÉFAUT : Rôles masqués pour Civils & Espions
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

    const toggleCard = (e) => {
      if (e) {
        e.preventDefault();
      }
      if (!this.secretCard) return;
      if (this.secretCard.classList.contains('locked')) {
        revealCard();
      } else if (this.secretCard.classList.contains('revealed')) {
        hideCard();
      }
    };

    if (this.secretCard) {
      this.secretCard.addEventListener('click', toggleCard);
      this.secretCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleCard(e);
        }
      });
    }

    if (this.btnNextPlayer) {
      this.btnNextPlayer.addEventListener('click', () => {
        this.handleNextReveal();
      });
    }

    if (this.btnGoToVote) {
      this.btnGoToVote.addEventListener('click', () => {
        sounds.playTap();
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

    if (this.btnSubmitDiplomatGuess) {
      this.btnSubmitDiplomatGuess.addEventListener('click', () => {
        this.handleSubmitDiplomatGuess();
      });
    }

    if (this.inputDiplomatGuess) {
      this.inputDiplomatGuess.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.handleSubmitDiplomatGuess();
        }
      });
    }

    if (this.btnSkipDiplomatGuess) {
      this.btnSkipDiplomatGuess.addEventListener('click', () => {
        sounds.playTap();
        this.closeModal(this.modalDiplomatGuess);
        const res = this.game.skipDiplomatGuess();
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
        this.resetSessionScores();
        this.renderReviewScreen();
        this.showScreen('review');
        this.showToast("Scores réinitialisés pour la nouvelle partie 🔄");
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
          this.updatePlayedWordsStatusUi();
          this.showToast(`Paire « ${w1} / ${w2} » ajoutée ! 🎉`);
        }
      });
    }

    if (this.btnResetStats) {
      this.btnResetStats.addEventListener('click', () => {
        sounds.playTap();
        if (confirm("Réinitialiser les statistiques ?")) {
          localStorage.removeItem('espionnage_game_stats');
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
    this.updatePlayedWordsStatusUi();
    this.renderSessionLeaderboard();
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
      localStorage.setItem('espionnage_ui_theme', theme);
    } catch (e) {}

    // Mise à jour de la couleur de la barre de statut pour mobile/PWA
    const themeColors = {
      dark: '#060810',
      light: '#f8f6f0',
      midnight: '#f2f8f4',
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
        midnight: 'Menthe Pastel 🌿',
        oled: 'Obsidienne OLED ✨'
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
    if (this.sessionScores[name] === undefined) {
      this.sessionScores[name] = 0;
      this.saveSessionScores();
    }
    this.savePlayers();
    this.inputNewPlayerName.value = '';
    this.renderPlayersList();
    
    // Garder le focus pour taper le nom suivant sans recliquer
    this.inputNewPlayerName.focus();
  }

  removePlayer(index) {
    sounds.playTap();
    const removedName = this.players[index];
    this.players.splice(index, 1);
    if (removedName && this.sessionScores[removedName] !== undefined) {
      delete this.sessionScores[removedName];
      this.saveSessionScores();
      this.renderSessionLeaderboard();
    }
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
    this.roleConfig = EspionnageGame.getRecommendedRoles(this.players.length);
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
    if (this.valSpies) this.valSpies.textContent = this.roleConfig.spies;
    if (this.valDiplomats) this.valDiplomats.textContent = this.roleConfig.diplomats;

    const totalRoles = this.roleConfig.civils + this.roleConfig.spies + this.roleConfig.diplomats;
    const count = this.players.length;

    if (!this.roleValidationHint) return;

    if (count < 3) {
      this.roleValidationHint.className = 'role-hint error';
      this.roleValidationHint.textContent = '⚠️ Il faut au moins 3 participants pour jouer.';
      if (this.btnStartGame) this.btnStartGame.disabled = true;
    } else if (totalRoles < count) {
      const missing = count - totalRoles;
      this.roleValidationHint.className = 'role-hint error';
      this.roleValidationHint.textContent = `⚠️ Il manque ${missing} rôle${missing > 1 ? 's' : ''} à attribuer.`;
      if (this.btnStartGame) this.btnStartGame.disabled = true;
    } else if (totalRoles > count) {
      const excess = totalRoles - count;
      this.roleValidationHint.className = 'role-hint error';
      this.roleValidationHint.textContent = `⚠️ Il y a ${excess} rôle${excess > 1 ? 's' : ''} en trop.`;
      if (this.btnStartGame) this.btnStartGame.disabled = true;
    } else if (this.roleConfig.spies + this.roleConfig.diplomats === 0) {
      this.roleValidationHint.className = 'role-hint error';
      this.roleValidationHint.textContent = '⚠️ Il faut au moins 1 Espion ou 1 Diplomate dans la partie.';
      if (this.btnStartGame) this.btnStartGame.disabled = true;
    } else {
      this.roleValidationHint.className = 'role-hint hidden';
      this.roleValidationHint.textContent = '';
      if (this.btnStartGame) this.btnStartGame.disabled = false;
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

      const allForCat = this.wordRepo.getAllPairs([cat.id], this.currentAgeFilter);
      const availableForCat = allForCat.filter(p => !this.wordRepo.isPairPlayed(p.word1, p.word2));

      const chip = document.createElement('button');
      const isActive = this.selectedCategories.includes(cat.id);
      chip.className = `cat-chip ${isActive ? 'active' : ''} ${availableForCat.length === 0 ? 'exhausted' : ''}`;
      chip.innerHTML = `<span>${cat.name}</span> <small style="opacity: 0.85; font-size: 0.72rem; margin-left: 4px;">(${availableForCat.length}/${allForCat.length})</small>`;

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
        this.updatePlayedWordsStatusUi();
      });

      this.categoriesChipsContainer.appendChild(chip);
    });
  }

  updatePlayedWordsStatusUi() {
    const detailed = this.wordRepo.getDetailedStats();
    const stats = this.wordRepo.getPoolStats(this.selectedCategories, this.currentAgeFilter);

    // 1. Résumé global
    if (this.settingsPlayedWordsBadge) {
      this.settingsPlayedWordsBadge.textContent = `${detailed.global.availableCount} restants / ${detailed.global.totalCount}`;
    }
    if (this.settingsPlayedWordsDesc) {
      if (detailed.global.isExhausted) {
        this.settingsPlayedWordsDesc.textContent = `⚠️ Catalogue complet épuisé (0 mot restant sur ${detailed.global.totalCount})`;
      } else {
        this.settingsPlayedWordsDesc.textContent = `${detailed.global.playedCount} paire(s) jouée(s) • ${detailed.global.availableCount} restante(s) sans répétition`;
      }
    }
    if (this.wordsPlayedCount) {
      this.wordsPlayedCount.textContent = `${detailed.global.playedCount} / ${detailed.global.totalCount}`;
    }

    // 2. Rendu des listes par tranche d'âge
    if (this.settingsAgeStatsList) {
      this.settingsAgeStatsList.innerHTML = '';
      detailed.byAge.forEach(item => {
        const row = document.createElement('div');
        row.className = 'stat-breakdown-row';
        const pct = item.totalCount > 0 ? Math.round((item.availableCount / item.totalCount) * 100) : 0;
        row.innerHTML = `
          <div class="stat-breakdown-info">
            <span class="stat-breakdown-name">${item.icon} ${item.name}</span>
            <div class="stat-breakdown-bar">
              <div class="stat-breakdown-fill ${item.isExhausted ? 'exhausted' : ''}" style="width: ${pct}%;"></div>
            </div>
          </div>
          <span class="stat-breakdown-badge ${item.isExhausted ? 'is-exhausted' : ''}">
            ${item.isExhausted ? '⚠️ Épuisé' : `${item.availableCount} restants / ${item.totalCount}`}
          </span>
        `;
        this.settingsAgeStatsList.appendChild(row);
      });
    }

    // 3. Rendu du détail par thème / catégorie
    if (this.settingsCatStatsList) {
      this.settingsCatStatsList.innerHTML = '';
      detailed.byCategory.forEach(cat => {
        const chip = document.createElement('div');
        chip.className = 'stat-category-chip';
        chip.innerHTML = `
          <span class="stat-category-name">${cat.icon || '🏷️'} ${cat.name.replace(/^[^\w\s]+/, '').trim()}</span>
          <span class="stat-category-val ${cat.isExhausted ? 'exhausted' : ''}">
            ${cat.isExhausted ? '0 restant' : `${cat.availableCount} / ${cat.totalCount}`}
          </span>
        `;
        this.settingsCatStatsList.appendChild(chip);
      });
    }

    this.updateWordsCountBadge(stats);
  }

  updateWordsCountBadge(stats = null) {
    if (!this.wordsTotalCount) return;
    if (!stats) {
      stats = this.wordRepo.getPoolStats(this.selectedCategories, this.currentAgeFilter);
    }
    let ageSuffix = '';
    if (this.currentAgeFilter === 'kids') ageSuffix = ' (👶 -8 ans)';
    else if (this.currentAgeFilter === 'adult') ageSuffix = ' (🎉 16+)';
    else ageSuffix = ' (👥 +8 ans)';
    this.wordsTotalCount.textContent = `${stats.availableCount} dispo / ${stats.totalCount} paires${ageSuffix}`;
  }

  showWordsExhaustedModal(stats) {
    if (this.exhaustedStatsCount) {
      this.exhaustedStatsCount.textContent = `${stats.playedCount} / ${stats.totalCount}`;
    }
    if (this.exhaustedModalText) {
      this.exhaustedModalText.textContent = `Toutes les ${stats.totalCount} paires de mots correspondant à vos thèmes et filtre d'âge ont déjà été jouées dans ce cycle.`;
    }
    this.openModal(this.modalWordsExhausted);
  }

  handleStartGame() {
    try {
      const stats = this.wordRepo.getPoolStats(this.selectedCategories, this.currentAgeFilter);
      if (stats.isExhausted) {
        sounds.playTap();
        this.showWordsExhaustedModal(stats);
        return;
      }

      sounds.playTap();
      this.game.startNewGame(this.players, this.roleConfig, this.selectedCategories, this.currentAgeFilter, this.options);
      this.updatePlayedWordsStatusUi();
      this.renderRevealScreen();
      this.showScreen('reveal');
    } catch (e) {
      if (e.message === 'WORDS_EXHAUSTED' || e.stats) {
        const stats = e.stats || this.wordRepo.getPoolStats(this.selectedCategories, this.currentAgeFilter);
        this.showWordsExhaustedModal(stats);
      } else {
        alert(e.message);
      }
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
        this.btnNextPlayer.innerHTML = `<span>Passer au Tour de parole</span> ➡️`;
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
        ${isStarter ? '<span class="badge" style="background: var(--color-accent-glow); color: var(--color-accent); border: 1px solid var(--color-accent-glow);">🎙️ Commence</span>' : ''}
      `;
      this.cluesPlayersList.appendChild(row);
    });

    if (this.btnGoToVote) {
      if (this.options.anonymousVoting) {
        this.btnGoToVote.innerHTML = `<span>Passer au Vote Secret</span> 🗳️`;
      } else {
        this.btnGoToVote.innerHTML = `<span>Passer au Débat & Vote</span> 🗳️`;
      }
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

    if (result.requiresDiplomatGuess) {
      if (this.diplomatGuessIntro) {
        this.diplomatGuessIntro.innerHTML = `<strong>${result.eliminatedPlayer.name}</strong> a été éliminé et était <strong>le Diplomate</strong> !`;
      }
      if (this.inputDiplomatGuess) this.inputDiplomatGuess.value = '';
      this.openModal(this.modalDiplomatGuess);
      setTimeout(() => {
        if (this.inputDiplomatGuess) this.inputDiplomatGuess.focus();
      }, 300);
      return;
    }

    if (result.winStatus) {
      this.renderGameOverScreen();
      this.showScreen('gameOver');
    } else {
      const roleLabel = result.eliminatedPlayer.role === ROLES.CIVIL ? 'Civil 🛡️' : 'Espion 🕶️';
      this.showToast(`${result.eliminatedPlayer.name} (${roleLabel}) est éliminé. Manche ${this.game.roundNumber} !`);
      this.renderCluesScreen();
      this.showScreen('clues');
    }
  }

  handleSubmitDiplomatGuess() {
    if (!this.inputDiplomatGuess) return;
    const guess = this.inputDiplomatGuess.value.trim();
    if (!guess) {
      this.showToast("Veuillez saisir un mot.");
      return;
    }

    this.closeModal(this.modalDiplomatGuess);
    const result = this.game.handleDiplomatGuess(guess);

    if (result.isCorrect) {
      sounds.playDiplomatVictory();
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
      } else if (winner === ROLES.SPY) {
        if (this.victoryIcon) this.victoryIcon.textContent = '🕶️';
        this.victoryTitle.textContent = 'Victoire des Espions !';
        this.victoryTitle.style.color = 'var(--color-spy)';
      } else if (winner === ROLES.DIPLOMAT) {
        if (this.victoryIcon) this.victoryIcon.textContent = '🎭';
        this.victoryTitle.textContent = 'Victoire du Diplomate !';
        this.victoryTitle.style.color = 'var(--color-diplomat)';
      } else if (winner === 'infiltrators') {
        if (this.victoryIcon) this.victoryIcon.textContent = '🕶️🎭';
        this.victoryTitle.textContent = 'Victoire des Infiltrés !';
        this.victoryTitle.style.color = 'var(--color-spy)';
      }
    }

    if (this.victoryReason) this.victoryReason.textContent = this.game.winReason;
    if (this.endCivilWord) this.endCivilWord.textContent = this.game.civilWord;
    if (this.endSpyWord) this.endSpyWord.textContent = this.game.spyWord;

    // Mise à jour et cumul des scores de la session
    const roundPoints = this.game.roundPoints || {};
    this.game.players.forEach(p => {
      const earned = roundPoints[p.id] || 0;
      this.sessionScores[p.name] = (this.sessionScores[p.name] || 0) + earned;
    });
    this.saveSessionScores();

    if (this.endPlayersList) {
      this.endPlayersList.innerHTML = '';
      this.game.players.forEach(p => {
        const row = document.createElement('div');
        row.className = 'end-player-row';

        let roleBadge = '';
        let wordLabel = p.word ? `« ${p.word} »` : 'Aucun mot';

        if (p.role === ROLES.CIVIL) {
          roleBadge = `<span class="role-badge-tag civil">Civil</span>`;
        } else if (p.role === ROLES.SPY) {
          roleBadge = `<span class="role-badge-tag spy">Espion</span>`;
        } else {
          roleBadge = `<span class="role-badge-tag diplomat">Diplomate</span>`;
        }

        const statusBadge = p.isAlive
          ? `<span class="badge" style="background: rgba(16, 185, 129, 0.2); color: var(--color-success);">Vivant</span>`
          : `<span class="badge" style="background: rgba(239, 68, 68, 0.2); color: var(--color-danger);">Éliminé</span>`;

        const earned = roundPoints[p.id] || 0;
        const total = this.sessionScores[p.name] || 0;
        const ptsBadge = earned > 0
          ? `<span class="points-gain-badge is-positive">+${earned} pts</span>`
          : `<span class="points-gain-badge is-zero">+0 pt</span>`;

        row.innerHTML = `
          <div class="end-player-info">
            <div class="player-avatar" style="background: ${p.avatarColor}; width: 34px; height: 34px;">
              ${p.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                <strong>${p.name}</strong>
                ${ptsBadge}
              </div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">
                ${wordLabel} • <span class="player-total-hint">Total session : <strong style="color: var(--text-primary);">${total} pt${total > 1 ? 's' : ''}</strong></span>
              </div>
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

    this.renderSessionLeaderboard();
  }

  renderSessionLeaderboard() {
    const playerNames = new Set(this.players);
    Object.keys(this.sessionScores || {}).forEach(name => playerNames.add(name));
    
    const nameColorMap = {};
    if (this.game && this.game.players) {
      this.game.players.forEach(p => { nameColorMap[p.name] = p.avatarColor; });
    }
    const defaultColors = [
      '#FF5E7E', '#4D96FF', '#6BCB77', '#FFD93D',
      '#9D4EDD', '#FF9F45', '#00C9A7', '#E056FD',
      '#00B4D8', '#FF6B6B', '#F368E0', '#10AC84'
    ];
    let colIdx = 0;

    const list = Array.from(playerNames).map(name => {
      const color = nameColorMap[name] || defaultColors[(colIdx++) % defaultColors.length];
      return {
        name,
        points: this.sessionScores[name] || 0,
        color
      };
    }).sort((a, b) => b.points - a.points);

    const maxPoints = list.length > 0 ? Math.max(list[0].points, 1) : 1;

    // Leader info pour le hero de la modale
    if (this.scoreboardLeaderName && this.scoreboardLeaderPoints) {
      if (list.length > 0 && list[0].points > 0) {
        this.scoreboardLeaderName.textContent = list[0].name;
        this.scoreboardLeaderPoints.textContent = `${list[0].points} point${list[0].points > 1 ? 's' : ''}`;
        if (this.scoreboardLeaderIcon) this.scoreboardLeaderIcon.textContent = '👑';
      } else if (list.length > 0) {
        this.scoreboardLeaderName.textContent = list[0].name;
        this.scoreboardLeaderPoints.textContent = `0 pt`;
        if (this.scoreboardLeaderIcon) this.scoreboardLeaderIcon.textContent = '🎲';
      } else {
        this.scoreboardLeaderName.textContent = 'Aucun joueur';
        this.scoreboardLeaderPoints.textContent = '0 pt';
        if (this.scoreboardLeaderIcon) this.scoreboardLeaderIcon.textContent = '🏆';
      }
    }

    const generateLeaderboardHtml = () => {
      if (list.length === 0) {
        return `<div class="empty-leaderboard-hint">Aucun score enregistré pour cette session. Lancez une partie pour commencer ! 🚀</div>`;
      }

      return list.map((item, index) => {
        const rank = index + 1;
        let rankBadge = '';
        let rankClass = '';
        if (rank === 1) {
          rankBadge = '🥇';
          rankClass = 'is-rank-1';
        } else if (rank === 2) {
          rankBadge = '🥈';
          rankClass = 'is-rank-2';
        } else if (rank === 3) {
          rankBadge = '🥉';
          rankClass = 'is-rank-3';
        } else {
          rankBadge = `#${rank}`;
          rankClass = 'is-rank-other';
        }

        const pct = Math.round((item.points / maxPoints) * 100);
        const playerInGame = this.game && this.game.players ? this.game.players.find(p => p.name === item.name) : null;
        const roundPts = (playerInGame && this.game.roundPoints) ? this.game.roundPoints[playerInGame.id] : null;
        const roundBonusPill = (roundPts !== null && roundPts !== undefined && roundPts > 0)
          ? `<span class="round-delta-tag">+${roundPts} ce tour</span>`
          : '';

        return `
          <div class="leaderboard-item ${rankClass}">
            <div class="leaderboard-item-header">
              <div class="leaderboard-player-col">
                <span class="leaderboard-rank-badge ${rankClass}">${rankBadge}</span>
                <div class="player-avatar" style="background: ${item.color}; width: 28px; height: 28px; font-size: 0.8rem;">
                  ${item.name.charAt(0).toUpperCase()}
                </div>
                <strong class="leaderboard-player-name">${item.name}</strong>
                ${roundBonusPill}
              </div>
              <div class="leaderboard-score-val">
                <strong>${item.points}</strong> <small>pt${item.points > 1 ? 's' : ''}</small>
              </div>
            </div>
            <div class="leaderboard-progress-track">
              <div class="leaderboard-progress-fill ${rankClass}" style="width: ${pct}%;"></div>
            </div>
          </div>
        `;
      }).join('');
    };

    if (this.modalScoreboardList) {
      this.modalScoreboardList.innerHTML = generateLeaderboardHtml();
    }
    if (this.endSessionLeaderboard) {
      this.endSessionLeaderboard.innerHTML = generateLeaderboardHtml();
    }
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
    const stats = EspionnageGame.getGameStats();
    if (this.statTotalGames) this.statTotalGames.textContent = stats.totalGames;

    const total = stats.totalGames || 1;
    const civilPct = Math.round((stats.civilWins / total) * 100);
    const spyPct = Math.round((stats.spyWins / total) * 100);
    const diplomatPct = Math.round((stats.diplomatWins / total) * 100);

    if (this.statCivilPct) this.statCivilPct.textContent = `${stats.civilWins} (${civilPct}%)`;
    if (this.statCivilBar) this.statCivilBar.style.width = `${civilPct}%`;

    if (this.statSpyPct) this.statSpyPct.textContent = `${stats.spyWins} (${spyPct}%)`;
    if (this.statSpyBar) this.statSpyBar.style.width = `${spyPct}%`;

    if (this.statDiplomatPct) this.statDiplomatPct.textContent = `${stats.diplomatWins} (${diplomatPct}%)`;
    if (this.statDiplomatBar) this.statDiplomatBar.style.width = `${diplomatPct}%`;
  }
}

// Initialisation globale au chargement de la page
window.addEventListener('DOMContentLoaded', () => {
  window.espionnageApp = new EspionnageApp();

  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js').then(reg => {
      // Force la vérification de mise à jour dès le lancement
      reg.update();
    }).catch(err => {
      console.log('SW non enregistré:', err);
    });
  }
});
