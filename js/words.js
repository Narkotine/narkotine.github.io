/**
 * Base de données de paires de mots en français pour Undercover
 * Chaque paire comprend word1 (Civils), word2 (Undercover) et une catégorie.
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
  { word1: "Stylo", word2: "Crayon", category: "general" },
  { word1: "Lunettes", word2: "Lentilles", category: "general" },
  { word1: "Montre", word2: "Horloge", category: "general" },
  { word1: "Coussin", word2: "Oreiller", category: "general" },
  { word1: "Couette", word2: "Couverture", category: "general" },
  { word1: "Savon", word2: "Gel douche", category: "general" },
  { word1: "Shampoing", word2: "Après-shampoing", category: "general" },
  { word1: "Brosse à dents", word2: "Dentifrice", category: "general" },
  { word1: "Miroir", word2: "Vitre", category: "general" },
  { word1: "Chaise", word2: "Fauteuil", category: "general" },
  { word1: "Canapé", word2: "Banquette", category: "general" },
  { word1: "Table", word2: "Bureau", category: "general" },
  { word1: "Porte", word2: "Fenêtre", category: "general" },
  { word1: "Lampe", word2: "Bougie", category: "general" },
  { word1: "Valise", word2: "Sac à dos", category: "general" },
  { word1: "Parapluie", word2: "Imperméable", category: "general" },
  { word1: "Écharpe", word2: "Foulard", category: "general" },
  { word1: "Bonnet", word2: "Casquette", category: "general" },
  { word1: "Gants", word2: "Moufles", category: "general" },
  { word1: "Chaussettes", word2: "Collants", category: "general" },
  { word1: "Baskets", word2: "Chaussures", category: "general" },
  { word1: "Bottes", word2: "Bottines", category: "general" },
  { word1: "Manteau", word2: "Veste", category: "general" },
  { word1: "Chemise", word2: "T-shirt", category: "general" },
  { word1: "Pantalon", word2: "Jean", category: "general" },
  { word1: "Short", word2: "Bermuda", category: "general" },
  { word1: "Ceinture", word2: "Bretelles", category: "general" },
  { word1: "Ciseaux", word2: "Cutter", category: "general" },
  { word1: "Colle", word2: "Scotch", category: "general" },
  { word1: "Cahier", word2: "Carnet", category: "general" },
  { word1: "Feuille", word2: "Carton", category: "general" },
  { word1: "Livre", word2: "Magazine", category: "general" },
  { word1: "Journal", word2: "Gazette", category: "general" },
  { word1: "Roman", word2: "Bande dessinée", category: "general" },
  { word1: "Clé", word2: "Badge", category: "general" },
  { word1: "Serrure", word2: "Cadenas", category: "general" },
  { word1: "Pile", word2: "Batterie", category: "general" },
  { word1: "Prise", word2: "Rallonge", category: "general" },
  { word1: "Poubelle", word2: "Benne", category: "general" },
  { word1: "Balai", word2: "Aspirateur", category: "general" },
  { word1: "Serpillière", word2: "Éponge", category: "general" },
  { word1: "Assiette", word2: "Bol", category: "general" },
  { word1: "Verre", word2: "Tasse", category: "general" },
  { word1: "Fourchette", word2: "Cuillère", category: "general" },
  { word1: "Couteau", word2: "Économe", category: "general" },
  { word1: "Poêle", word2: "Casserole", category: "general" },
  { word1: "Four", word2: "Micro-ondes", category: "general" },
  { word1: "Frigo", word2: "Congélateur", category: "general" },
  { word1: "Bouteille", word2: "Gourde", category: "general" },
  { word1: "Bouilloire", word2: "Cafetière", category: "general" },
  { word1: "Placard", word2: "Armoire", category: "general" },
  { word1: "Tiroir", word2: "Boîte", category: "general" },
  { word1: "Tapis", word2: "Moquette", category: "general" },
  { word1: "Rideau", word2: "Store", category: "general" },
  { word1: "Peigne", word2: "Brosse", category: "general" },
  { word1: "Baignoire", word2: "Douche", category: "general" },
  { word1: "Lavabo", word2: "Évier", category: "general" },
  { word1: "Serviette", word2: "Peignoir", category: "general" },
  { word1: "Bague", word2: "Alliance", category: "general" },
  { word1: "Collier", word2: "Bracelet", category: "general" },
  { word1: "Portefeuille", word2: "Porte-monnaie", category: "general" },
  { word1: "Billet", word2: "Pièce de monnaie", category: "general" },
  { word1: "Carte bancaire", word2: "Chéquier", category: "general" },
  { word1: "Ascenseur", word2: "Escalier", category: "general" },
  { word1: "Balcon", word2: "Terrasse", category: "general" },
  { word1: "Grenier", word2: "Cave", category: "general" },
  { word1: "Toit", word2: "Plafond", category: "general" },
  { word1: "Mur", word2: "Cloison", category: "general" },
  { word1: "Feu", word2: "Flamme", category: "general" },
  { word1: "Fumée", word2: "Brouillard", category: "general" },
  { word1: "Pluie", word2: "Averse", category: "general" },
  { word1: "Neige", word2: "Grêle", category: "general" },
  { word1: "Vent", word2: "Tempête", category: "general" },
  { word1: "Ombre", word2: "Reflet", category: "general" },
  { word1: "Soleil", word2: "Lune", category: "general" },
  { word1: "Étoile", word2: "Planète", category: "general" },
  { word1: "Silence", word2: "Chuchotement", category: "general" },
  { word1: "Cri", word2: "Hurlement", category: "general" },
  { word1: "Rêve", word2: "Cauchemar", category: "general" },
  { word1: "Secret", word2: "Mystère", category: "general" },

  // ==========================================
  // 🍕 NOURRITURE & BOISSONS
  // ==========================================
  { word1: "Croissant", word2: "Pain au chocolat", category: "food" },
  { word1: "Baguette", word2: "Pain de mie", category: "food" },
  { word1: "Café", word2: "Thé", category: "food" },
  { word1: "Chocolat chaud", word2: "Cappuccino", category: "food" },
  { word1: "Bière", word2: "Cidre", category: "food" },
  { word1: "Vin rouge", word2: "Vin blanc", category: "food" },
  { word1: "Champagne", word2: "Prosecco", category: "food" },
  { word1: "Eau plate", word2: "Eau gazeuse", category: "food" },
  { word1: "Coca-Cola", word2: "Pepsi", category: "food" },
  { word1: "Jus d'orange", word2: "Jus de pomme", category: "food" },
  { word1: "Limonade", word2: "Citronnade", category: "food" },
  { word1: "Pizza", word2: "Flammekueche", category: "food" },
  { word1: "Burger", word2: "Sandwich", category: "food" },
  { word1: "Frites", word2: "Pommes noisettes", category: "food" },
  { word1: "Chips", word2: "Pop-corn", category: "food" },
  { word1: "Pâtes", word2: "Riz", category: "food" },
  { word1: "Spaghetti", word2: "Tagliatelles", category: "food" },
  { word1: "Lasagnes", word2: "Gratin", category: "food" },
  { word1: "Raclette", word2: "Fondue", category: "food" },
  { word1: "Tartiflette", word2: "Gratin dauphinois", category: "food" },
  { word1: "Crêpe", word2: "Gaufre", category: "food" },
  { word1: "Pancake", word2: "Crêpe", category: "food" },
  { word1: "Gâteau", word2: "Tarte", category: "food" },
  { word1: "Éclair", word2: "Religieuse", category: "food" },
  { word1: "Macaron", word2: "Meringue", category: "food" },
  { word1: "Donut", word2: "Beignet", category: "food" },
  { word1: "Glace", word2: "Sorbet", category: "food" },
  { word1: "Yaourt", word2: "Fromage blanc", category: "food" },
  { word1: "Beurre", word2: "Margarine", category: "food" },
  { word1: "Lait", word2: "Crème fraîche", category: "food" },
  { word1: "Confiture", word2: "Marmelade", category: "food" },
  { word1: "Nutella", word2: "Pâte à tartiner", category: "food" },
  { word1: "Miel", word2: "Sirop d'érable", category: "food" },
  { word1: "Sucre", word2: "Édulcorant", category: "food" },
  { word1: "Sel", word2: "Poivre", category: "food" },
  { word1: "Ketchup", word2: "Mayonnaise", category: "food" },
  { word1: "Moutarde", word2: "Sauce burger", category: "food" },
  { word1: "Huile d'olive", word2: "Vinaigre", category: "food" },
  { word1: "Pomme", word2: "Poire", category: "food" },
  { word1: "Orange", word2: "Clémentine", category: "food" },
  { word1: "Citron", word2: "Pamplemousse", category: "food" },
  { word1: "Fraise", word2: "Framboise", category: "food" },
  { word1: "Cerise", word2: "Prune", category: "food" },
  { word1: "Banane", word2: "Plantain", category: "food" },
  { word1: "Pastèque", word2: "Melon", category: "food" },
  { word1: "Pêche", word2: "Nectarine", category: "food" },
  { word1: "Raisin", word2: "Figue", category: "food" },
  { word1: "Tomate", word2: "Poivron", category: "food" },
  { word1: "Carotte", word2: "Panais", category: "food" },
  { word1: "Pomme de terre", word2: "Patate douce", category: "food" },
  { word1: "Courgette", word2: "Concombre", category: "food" },
  { word1: "Oignon", word2: "Échalote", category: "food" },
  { word1: "Ail", word2: "Oignon", category: "food" },
  { word1: "Brocoli", word2: "Chou-fleur", category: "food" },
  { word1: "Salade", word2: "Épinards", category: "food" },
  { word1: "Poulet", word2: "Dinde", category: "food" },
  { word1: "Bœuf", word2: "Veau", category: "food" },
  { word1: "Porc", word2: "Agneau", category: "food" },
  { word1: "Jambon", word2: "Bacon", category: "food" },
  { word1: "Saucisson", word2: "Chorizo", category: "food" },
  { word1: "Saumon", word2: "Truite", category: "food" },
  { word1: "Thon", word2: "Sardine", category: "food" },
  { word1: "Crevette", word2: "Gambas", category: "food" },
  { word1: "Sushi", word2: "Maki", category: "food" },
  { word1: "Tacos", word2: "Burrito", category: "food" },
  { word1: "Soupe", word2: "Bouillon", category: "food" },
  { word1: "Camembert", word2: "Brie", category: "food" },
  { word1: "Comté", word2: "Emmental", category: "food" },
  { word1: "Roquefort", word2: "Bleu d'Auvergne", category: "food" },
  { word1: "Mozzarella", word2: "Burrata", category: "food" },
  { word1: "Parmesan", word2: "Pecorino", category: "food" },

  // ==========================================
  // 🦁 ANIMAUX & NATURE
  // ==========================================
  { word1: "Chien", word2: "Loup", category: "animals" },
  { word1: "Chat", word2: "Tigre", category: "animals" },
  { word1: "Lion", word2: "Léopard", category: "animals" },
  { word1: "Guépard", word2: "Jaguar", category: "animals" },
  { word1: "Cheval", word2: "Poney", category: "animals" },
  { word1: "Âne", word2: "Mule", category: "animals" },
  { word1: "Vache", word2: "Taureau", category: "animals" },
  { word1: "Mouton", word2: "Chèvre", category: "animals" },
  { word1: "Cochon", word2: "Sanglier", category: "animals" },
  { word1: "Lapin", word2: "Lièvre", category: "animals" },
  { word1: "Souris", word2: "Rat", category: "animals" },
  { word1: "Hamster", word2: "Cochon d'Inde", category: "animals" },
  { word1: "Écureuil", word2: "Marmotte", category: "animals" },
  { word1: "Ours", word2: "Panda", category: "animals" },
  { word1: "Renard", word2: "Chacal", category: "animals" },
  { word1: "Hérisson", word2: "Porc-épic", category: "animals" },
  { word1: "Cerf", word2: "Chevreuil", category: "animals" },
  { word1: "Élan", word2: "Renne", category: "animals" },
  { word1: "Kangourou", word2: "Wallaby", category: "animals" },
  { word1: "Singe", word2: "Chimpanzé", category: "animals" },
  { word1: "Gorille", word2: "Orang-outan", category: "animals" },
  { word1: "Aigle", word2: "Faucon", category: "animals" },
  { word1: "Chouette", word2: "Hibou", category: "animals" },
  { word1: "Pigeon", word2: "Tourterelle", category: "animals" },
  { word1: "Canard", word2: "Oie", category: "animals" },
  { word1: "Cygne", word2: "Pélican", category: "animals" },
  { word1: "Mouette", word2: "Goéland", category: "animals" },
  { word1: "Perroquet", word2: "Perruche", category: "animals" },
  { word1: "Corbeau", word2: "Pie", category: "animals" },
  { word1: "Moineau", word2: "Rouge-gorge", category: "animals" },
  { word1: "Manchot", word2: "Pingouin", category: "animals" },
  { word1: "Dauphin", word2: "Baleine", category: "animals" },
  { word1: "Requin", word2: "Orque", category: "animals" },
  { word1: "Poulpe", word2: "Calmar", category: "animals" },
  { word1: "Crabe", word2: "Homard", category: "animals" },
  { word1: "Tortue de terre", word2: "Tortue de mer", category: "animals" },
  { word1: "Grenouille", word2: "Crapaud", category: "animals" },
  { word1: "Lézard", word2: "Caméléon", category: "animals" },
  { word1: "Crocodile", word2: "Alligator", category: "animals" },
  { word1: "Serpent", word2: "Vipère", category: "animals" },
  { word1: "Abeille", word2: "Guêpe", category: "animals" },
  { word1: "Bourdon", word2: "Frelon", category: "animals" },
  { word1: "Papillon", word2: "Libellule", category: "animals" },
  { word1: "Mouche", word2: "Moustique", category: "animals" },
  { word1: "Araignée", word2: "Scorpion", category: "animals" },
  { word1: "Fourmi", word2: "Termite", category: "animals" },
  { word1: "Arbre", word2: "Arbuste", category: "animals" },
  { word1: "Chêne", word2: "Hêtre", category: "animals" },
  { word1: "Sapin", word2: "Pin", category: "animals" },
  { word1: "Rose", word2: "Tulipe", category: "animals" },
  { word1: "Marguerite", word2: "Pâquerette", category: "animals" },
  { word1: "Tournesol", word2: "Coquelicot", category: "animals" },
  { word1: "Forêt", word2: "Jungle", category: "animals" },
  { word1: "Montagne", word2: "Colline", category: "animals" },
  { word1: "Rivière", word2: "Fleuve", category: "animals" },
  { word1: "Lac", word2: "Étang", category: "animals" },
  { word1: "Océan", word2: "Mer", category: "animals" },
  { word1: "Plage", word2: "Dune", category: "animals" },
  { word1: "Désert", word2: "Savane", category: "animals" },
  { word1: "Cascade", word2: "Fontaine", category: "animals" },
  { word1: "Grotte", word2: "Caverne", category: "animals" },
  { word1: "Volcan", word2: "Geyser", category: "animals" },

  // ==========================================
  // ✈️ LIEUX & VOYAGES
  // ==========================================
  { word1: "Avion", word2: "Hélicoptère", category: "places" },
  { word1: "Train", word2: "Métro", category: "places" },
  { word1: "Tramway", word2: "Bus", category: "places" },
  { word1: "Voiture", word2: "Camion", category: "places" },
  { word1: "Moto", word2: "Scooter", category: "places" },
  { word1: "Vélo", word2: "Trottinette", category: "places" },
  { word1: "Bateau", word2: "Yacht", category: "places" },
  { word1: "Sous-marin", word2: "Paquebot", category: "places" },
  { word1: "Aéroport", word2: "Gare", category: "places" },
  { word1: "Hôtel", word2: "Auberge", category: "places" },
  { word1: "Camping", word2: "Bivouac", category: "places" },
  { word1: "Musée", word2: "Galerie d'art", category: "places" },
  { word1: "Cinéma", word2: "Théâtre", category: "places" },
  { word1: "Stade", word2: "Gymnase", category: "places" },
  { word1: "Piscine", word2: "Plage", category: "places" },
  { word1: "Parc", word2: "Jardin", category: "places" },
  { word1: "Château", word2: "Palais", category: "places" },
  { word1: "Église", word2: "Cathédrale", category: "places" },
  { word1: "Tour Eiffel", word2: "Arc de Triomphe", category: "places" },
  { word1: "Pyramide", word2: "Sphinx", category: "places" },
  { word1: "Paris", word2: "Londres", category: "places" },
  { word1: "New York", word2: "Los Angeles", category: "places" },
  { word1: "Tokyo", word2: "Séoul", category: "places" },
  { word1: "Rome", word2: "Venise", category: "places" },
  { word1: "Madrid", word2: "Barcelone", category: "places" },
  { word1: "Berlin", word2: "Munich", category: "places" },
  { word1: "France", word2: "Belgique", category: "places" },
  { word1: "Espagne", word2: "Portugal", category: "places" },
  { word1: "Canada", word2: "États-Unis", category: "places" },
  { word1: "Japon", word2: "Chine", category: "places" },
  { word1: "Australie", word2: "Nouvelle-Zélande", category: "places" },
  { word1: "Île", word2: "Presqu'île", category: "places" },
  { word1: "Pôle Nord", word2: "Pôle Sud", category: "places" },
  { word1: "Village", word2: "Hameau", category: "places" },
  { word1: "Ville", word2: "Mégalopole", category: "places" },
  { word1: "Supermarché", word2: "Épicerie", category: "places" },
  { word1: "Boulangerie", word2: "Pâtisserie", category: "places" },
  { word1: "Pharmacie", word2: "Hôpital", category: "places" },
  { word1: "Poste", word2: "Banque", category: "places" },
  { word1: "Restaurant", word2: "Bistrot", category: "places" },
  { word1: "Bar", word2: "Pub", category: "places" },
  { word1: "Boîte de nuit", word2: "Festival", category: "places" },

  // ==========================================
  // 🎬 CINÉMA, SÉRIES & CULTURE POP
  // ==========================================
  { word1: "Batman", word2: "Superman", category: "popculture" },
  { word1: "Spider-Man", word2: "Iron Man", category: "popculture" },
  { word1: "Hulk", word2: "Thor", category: "popculture" },
  { word1: "Joker", word2: "Pingouin", category: "popculture" },
  { word1: "Harry Potter", word2: "Le Seigneur des Anneaux", category: "popculture" },
  { word1: "Voldemort", word2: "Sauron", category: "popculture" },
  { word1: "Dumbledore", word2: "Gandalf", category: "popculture" },
  { word1: "Star Wars", word2: "Star Trek", category: "popculture" },
  { word1: "Luke Skywalker", word2: "Han Solo", category: "popculture" },
  { word1: "Dark Vador", word2: "Empereur Palpatine", category: "popculture" },
  { word1: "Sabre laser", word2: "Baguette magique", category: "popculture" },
  { word1: "Marvel", word2: "DC Comics", category: "popculture" },
  { word1: "Disney", word2: "Pixar", category: "popculture" },
  { word1: "Le Roi Lion", word2: "Le Livre de la Jungle", category: "popculture" },
  { word1: "La Reine des Neiges", word2: "Raiponce", category: "popculture" },
  { word1: "Mickey", word2: "Donald", category: "popculture" },
  { word1: "Tom et Jerry", word2: "Bugs Bunny", category: "popculture" },
  { word1: "Les Simpson", word2: "Futurama", category: "popculture" },
  { word1: "Homer", word2: "Peter Griffin", category: "popculture" },
  { word1: "Game of Thrones", word2: "Vikings", category: "popculture" },
  { word1: "Stranger Things", word2: "Dark", category: "popculture" },
  { word1: "Squid Game", word2: "Alice in Borderland", category: "popculture" },
  { word1: "La Casa de Papel", word2: "Lupin", category: "popculture" },
  { word1: "Friends", word2: "How I Met Your Mother", category: "popculture" },
  { word1: "The Walking Dead", word2: "The Last of Us", category: "popculture" },
  { word1: "Zombie", word2: "Vampire", category: "popculture" },
  { word1: "Loup-garou", word2: "Fantôme", category: "popculture" },
  { word1: "Momie", word2: "Squelette", category: "popculture" },
  { word1: "Alien", word2: "Predator", category: "popculture" },
  { word1: "James Bond", word2: "Mission Impossible", category: "popculture" },
  { word1: "Sherlock Holmes", word2: "Hercule Poirot", category: "popculture" },
  { word1: "Indiana Jones", word2: "Lara Croft", category: "popculture" },
  { word1: "Titanic", word2: "Avatar", category: "popculture" },
  { word1: "Matrix", word2: "Inception", category: "popculture" },
  { word1: "Jurassic Park", word2: "King Kong", category: "popculture" },
  { word1: "Barbie", word2: "Oppenheimer", category: "popculture" },
  { word1: "Astérix", word2: "Tintin", category: "popculture" },
  { word1: "Obélix", word2: "Capitaine Haddock", category: "popculture" },
  { word1: "Gaston Lagaffe", word2: "Lucky Luke", category: "popculture" },

  // ==========================================
  // 💼 MÉTIERS & SOCIÉTÉ
  // ==========================================
  { word1: "Médecin", word2: "Infirmier", category: "jobs" },
  { word1: "Chirurgien", word2: "Dentiste", category: "jobs" },
  { word1: "Pharmacien", word2: "Biologiste", category: "jobs" },
  { word1: "Vétérinaire", word2: "Zoologiste", category: "jobs" },
  { word1: "Pompier", word2: "Policier", category: "jobs" },
  { word1: "Gendarme", word2: "Militaire", category: "jobs" },
  { word1: "Juge", word2: "Avocat", category: "jobs" },
  { word1: "Détective", word2: "Espion", category: "jobs" },
  { word1: "Professeur", word2: "Instituteur", category: "jobs" },
  { word1: "Élève", word2: "Étudiant", category: "jobs" },
  { word1: "Cuisinier", word2: "Pâtissier", category: "jobs" },
  { word1: "Serveur", word2: "Barman", category: "jobs" },
  { word1: "Boulanger", word2: "Boucher", category: "jobs" },
  { word1: "Poissonnier", word2: "Maraîcher", category: "jobs" },
  { word1: "Architecte", word2: "Ingénieur", category: "jobs" },
  { word1: "Maçon", word2: "Charpentier", category: "jobs" },
  { word1: "Électricien", word2: "Plombier", category: "jobs" },
  { word1: "Peintre", word2: "Sculpteur", category: "jobs" },
  { word1: "Chanteur", word2: "Musicien", category: "jobs" },
  { word1: "Acteur", word2: "Doubleur", category: "jobs" },
  { word1: "Réalisateur", word2: "Producteur", category: "jobs" },
  { word1: "Écrivain", word2: "Journaliste", category: "jobs" },
  { word1: "Photographe", word2: "Caméraman", category: "jobs" },
  { word1: "Pilote d'avion", word2: "Astronaute", category: "jobs" },
  { word1: "Conducteur de train", word2: "Chauffeur de taxi", category: "jobs" },
  { word1: "Livreur", word2: "Facteur", category: "jobs" },
  { word1: "Président", word2: "Premier ministre", category: "jobs" },
  { word1: "Roi", word2: "Empereur", category: "jobs" },
  { word1: "Maire", word2: "Député", category: "jobs" },

  // ==========================================
  // 🎉 SOIRÉE & FUN
  // ==========================================
  { word1: "Soirée", word2: "Fête", category: "party" },
  { word1: "Apéro", word2: "Dîner", category: "party" },
  { word1: "Tequila", word2: "Vodka", category: "party" },
  { word1: "Rhum", word2: "Whisky", category: "party" },
  { word1: "Mojito", word2: "Caïpirinha", category: "party" },
  { word1: "Gin Tonic", word2: "Spritz", category: "party" },
  { word1: "Shot", word2: "Cocktail", category: "party" },
  { word1: "Karaoké", word2: "Blind test", category: "party" },
  { word1: "Danse", word2: "Chant", category: "party" },
  { word1: "Gueule de bois", word2: "Migraine", category: "party" },
  { word1: "Action ou Vérité", word2: "Je n'ai jamais", category: "party" },
  { word1: "Beer Pong", word2: "Flip Cup", category: "party" },
  { word1: "Confetti", word2: "Serpentin", category: "party" },
  { word1: "Feu d'artifice", word2: "Pétard", category: "party" },
  { word1: "Costume", word2: "Déguisement", category: "party" },
  { word1: "Masque", word2: "Maquillage", category: "party" },
  { word1: "Anniversaire", word2: "Nouvel An", category: "party" },
  { word1: "Halloween", word2: "Carnaval", category: "party" },
  { word1: "Noël", word2: "Pâques", category: "party" },
  { word1: "Cadeau", word2: "Surprise", category: "party" },
  { word1: "DJ", word2: "Enceinte Bluetooth", category: "party" },
  { word1: "Selfie", word2: "Photo de groupe", category: "party" },

  // ==========================================
  // 🕹️ GEEK & JEUX VIDÉO
  // ==========================================
  { word1: "PlayStation", word2: "Xbox", category: "geek" },
  { word1: "Nintendo Switch", word2: "Game Boy", category: "geek" },
  { word1: "Mario", word2: "Luigi", category: "geek" },
  { word1: "Peach", word2: "Zelda", category: "geek" },
  { word1: "Bowser", word2: "Ganon", category: "geek" },
  { word1: "Sonic", word2: "Crash Bandicoot", category: "geek" },
  { word1: "Pikachu", word2: "Salamèche", category: "geek" },
  { word1: "Minecraft", word2: "Roblox", category: "geek" },
  { word1: "Fortnite", word2: "PUBG", category: "geek" },
  { word1: "Call of Duty", word2: "Battlefield", category: "geek" },
  { word1: "GTA", word2: "Red Dead Redemption", category: "geek" },
  { word1: "FIFA", word2: "PES", category: "geek" },
  { word1: "League of Legends", word2: "Dota 2", category: "geek" },
  { word1: "World of Warcraft", word2: "Final Fantasy", category: "geek" },
  { word1: "Among Us", word2: "Loup-Garou", category: "geek" },
  { word1: "Souris", word2: "Manette", category: "geek" },
  { word1: "Clavier", word2: "Écran", category: "geek" },
  { word1: "Casque", word2: "Écouteurs", category: "geek" },
  { word1: "Ordinateur", word2: "Tablette", category: "geek" },
  { word1: "Smartphone", word2: "Téléphone fixe", category: "geek" },
  { word1: "Wi-Fi", word2: "Bluetooth", category: "geek" },
  { word1: "Fibre", word2: "4G / 5G", category: "geek" },
  { word1: "YouTube", word2: "Twitch", category: "geek" },
  { word1: "TikTok", word2: "Instagram", category: "geek" },
  { word1: "Twitter (X)", word2: "Facebook", category: "geek" },
  { word1: "Discord", word2: "WhatsApp", category: "geek" },
  { word1: "Google", word2: "Wikipedia", category: "geek" },
  { word1: "ChatGPT", word2: "Siri", category: "geek" },
  { word1: "Robot", word2: "Cyborg", category: "geek" },
  { word1: "Intelligence Artificielle", word2: "Humain", category: "geek" },

  // ==========================================
  // ⚽ SPORTS & LOISIRS
  // ==========================================
  { word1: "Football", word2: "Rugby", category: "sport" },
  { word1: "Basketball", word2: "Handball", category: "sport" },
  { word1: "Tennis", word2: "Badminton", category: "sport" },
  { word1: "Tennis de table", word2: "Baby-foot", category: "sport" },
  { word1: "Volleyball", word2: "Beach-volley", category: "sport" },
  { word1: "Natation", word2: "Plongée", category: "sport" },
  { word1: "Ski", word2: "Snowboard", category: "sport" },
  { word1: "Surf", word2: "Planche à voile", category: "sport" },
  { word1: "Patin à glace", word2: "Roller", category: "sport" },
  { word1: "Boxe", word2: "Karaté", category: "sport" },
  { word1: "Judo", word2: "Taekwondo", category: "sport" },
  { word1: "Course à pied", word2: "Marathon", category: "sport" },
  { word1: "Escalade", word2: "Randonnée", category: "sport" },
  { word1: "Yoga", word2: "Méditation", category: "sport" },
  { word1: "Échecs", word2: "Dames", category: "sport" },
  { word1: "Cartes", word2: "Poker", category: "sport" },
  { word1: "Monopoly", word2: "Scrabble", category: "sport" },
  { word1: "Bowling", word2: "Pétanque", category: "sport" },
  { word1: "Fléchettes", word2: "Tir à l'arc", category: "sport" },
  { word1: "Golf", word2: "Mini-golf", category: "sport" },
  { word1: "Formule 1", word2: "MotoGP", category: "sport" },
  { word1: "Karting", word2: "Quad", category: "sport" },
  { word1: "Surf", word2: "Bodyboard", category: "sport" },
  { word1: "Kayak", word2: "Canoë", category: "sport" },
  { word1: "Rameur", word2: "Tapis de course", category: "sport" },
  { word1: "Haltères", word2: "Kettlebell", category: "sport" },
  { word1: "Javelot", word2: "Disque", category: "sport" },
  { word1: "Escrime", word2: "Tir au pistolet", category: "sport" },
  { word1: "Golf", word2: "Croquet", category: "sport" },
  { word1: "Patinette", word2: "Skateboard", category: "sport" },

  // ==========================================
  // 🌍 CULTURE FRANÇAISE & QUOTIDIEN SUPPLÉMENTAIRE
  // ==========================================
  { word1: "Béret", word2: "Chapeau", category: "general" },
  { word1: "Tricot", word2: "Couture", category: "general" },
  { word1: "Chaussons", word2: "Pantoufles", category: "general" },
  { word1: "Peignoir", word2: "Kimono", category: "general" },
  { word1: "Parfum", word2: "Déodorant", category: "general" },
  { word1: "Valise à roulettes", word2: "Sac de voyage", category: "general" },
  { word1: "Porte-clés", word2: "Mousqueton", category: "general" },
  { word1: "Briquet", word2: "Allumette", category: "general" },
  { word1: "Trombone", word2: "Punaise", category: "general" },
  { word1: "Scotch", word2: "Pâte à fixe", category: "general" },
  { word1: "Règle", word2: "Équerre", category: "general" },
  { word1: "Gomme", word2: "Correcteur", category: "general" },
  { word1: "Enveloppe", word2: "Carte postale", category: "general" },
  { word1: "Tampon", word2: "Signature", category: "general" },
  { word1: "Calculatrice", word2: "Abaque", category: "general" },
  { word1: "Poussette", word2: "Landeau", category: "general" },
  { word1: "Berceau", word2: "Lit parapluie", category: "general" },
  { word1: "Doudou", word2: "Peluche", category: "general" },
  { word1: "Biberon", word2: "Tétine", category: "general" },
  { word1: "Tondeuse à gazon", word2: "Taille-haie", category: "general" },
  { word1: "Arrosoir", word2: "Tuyau d'arrosage", category: "general" },
  { word1: "Brouette", word2: "Chariot", category: "general" },
  { word1: "Pelle", word2: "Râteau", category: "general" },
  { word1: "Marteau", word2: "Maillet", category: "general" },
  { word1: "Tournevis", word2: "Clé à molette", category: "general" },
  { word1: "Perceuse", word2: "Visseuse", category: "general" },
  { word1: "Escabeau", word2: "Échelle", category: "general" },
  { word1: "Tente", word2: "Caravane", category: "general" },
  { word1: "Sac de couchage", word2: "Matelas gonflable", category: "general" },
  { word1: "Lampe torche", word2: "Frontale", category: "general" },

  // ==========================================
  // 🍕 NOURRITURE SUPPLÉMENTAIRE
  // ==========================================
  { word1: "Éclair au café", word2: "Éclair au chocolat", category: "food" },
  { word1: "Tiramisu", word2: "Panna Cotta", category: "food" },
  { word1: "Millefeuille", word2: "Opéra", category: "food" },
  { word1: "Pain perdu", word2: "Brioche dorée", category: "food" },
  { word1: "Chouquette", word2: "Profiterole", category: "food" },
  { word1: "Mousse au chocolat", word2: "Crème brûlée", category: "food" },
  { word1: "Fondant au chocolat", word2: "Brownie", category: "food" },
  { word1: "Cookie", word2: "Muffin", category: "food" },
  { word1: "Guimauve", word2: "Chamallow", category: "food" },
  { word1: "Barbe à papa", word2: "Pomme d'amour", category: "food" },
  { word1: "Pastis", word2: "Ricard", category: "food" },
  { word1: "Kir", word2: "Sangria", category: "food" },
  { word1: "Cidre doux", word2: "Cidre brut", category: "food" },
  { word1: "Thé vert", word2: "Thé noir", category: "food" },
  { word1: "Infusion", word2: "Tisane", category: "food" },
  { word1: "Sirop de grenadine", word2: "Sirop de menthe", category: "food" },
  { word1: "Diabolo", word2: "Panaché", category: "food" },
  { word1: "Foie gras", word2: "Pâté", category: "food" },
  { word1: "Huître", word2: "Moule", category: "food" },
  { word1: "Escargot", word2: "Bulot", category: "food" },
  { word1: "Cuisse de grenouille", word2: "Aileron de poulet", category: "food" },
  { word1: "Ratatouille", word2: "Piperade", category: "food" },
  { word1: "Couscous", word2: "Tajine", category: "food" },
  { word1: "Paëlla", word2: "Risotto", category: "food" },
  { word1: "Ramen", word2: "Nouilles sautées", category: "food" },
  { word1: "Nuggets", word2: "Tenders", category: "food" },
  { word1: "Hot-dog", word2: "Burger", category: "food" },
  { word1: "Croque-monsieur", word2: "Panini", category: "food" },
  { word1: "Quiche lorraine", word2: "Tarte aux poireaux", category: "food" },

  // ==========================================
  // 🎬 CULTURE POP SUPPLÉMENTAIRE
  // ==========================================
  { word1: "Kaamelott", word2: "Astérix Mission Cléopâtre", category: "popculture" },
  { word1: "Arthur", word2: "Perceval", category: "popculture" },
  { word1: "Le Dîner de Cons", word2: "Les Visiteurs", category: "popculture" },
  { word1: "Jacquouille", word2: "Godefroy", category: "popculture" },
  { word1: "OSS 117", word2: "James Bond", category: "popculture" },
  { word1: "Hubert Bonisseur", word2: "Austin Powers", category: "popculture" },
  { word1: "La Grande Vadrouille", word2: "Le Gendarme de Saint-Tropez", category: "popculture" },
  { word1: "Louis de Funès", word2: "Bourvil", category: "popculture" },
  { word1: "One Piece", word2: "Naruto", category: "popculture" },
  { word1: "Luffy", word2: "Zoro", category: "popculture" },
  { word1: "Goku", word2: "Vegeta", category: "popculture" },
  { word1: "Dragon Ball", word2: "Bleach", category: "popculture" },
  { word1: "Death Note", word2: "Attack on Titan", category: "popculture" },
  { word1: "Manga", word2: "Comics", category: "popculture" },
  { word1: "Pikachu", word2: "Évoli", category: "popculture" },
  { word1: "Dracaufeu", word2: "Tortank", category: "popculture" },

  // ==========================================
  // ✈️ LIEUX & VOYAGES SUPPLÉMENTAIRES
  // ==========================================
  { word1: "Marseille", word2: "Lyon", category: "places" },
  { word1: "Bordeaux", word2: "Toulouse", category: "places" },
  { word1: "Nice", word2: "Cannes", category: "places" },
  { word1: "Strasbourg", word2: "Lille", category: "places" },
  { word1: "Mont Saint-Michel", word2: "Château de Versailles", category: "places" },
  { word1: "Corse", word2: "Sardaigne", category: "places" },
  { word1: "Alpes", word2: "Pyrénées", category: "places" },
  { word1: "Mont Blanc", word2: "Everest", category: "places" },
  { word1: "Dubaï", word2: "Doha", category: "places" },
  { word1: "Londres", word2: "Dublin", category: "places" },
  { word1: "Rome", word2: "Florence", category: "places" },
  { word1: "Barcelone", word2: "Séville", category: "places" },
  { word1: "Rio de Janeiro", word2: "Buenos Aires", category: "places" },
  { word1: "Marrakech", word2: "Casablanca", category: "places" },
  { word1: "Le Caire", word2: "Istanbul", category: "places" },
  { word1: "Taj Mahal", word2: "Grande Muraille", category: "places" },
  { word1: "Colisée", word2: "Panthéon", category: "places" },

  // ==========================================
  // 💼 MÉTIERS & GEEK SUPPLÉMENTAIRES
  // ==========================================
  { word1: "Développeur", word2: "Hacker", category: "geek" },
  { word1: "Streamer", word2: "YouTuber", category: "geek" },
  { word1: "Gamer", word2: "Geek", category: "geek" },
  { word1: "Clavier mécanique", word2: "Clavier standard", category: "geek" },
  { word1: "Écran incurvé", word2: "Double écran", category: "geek" },
  { word1: "Carte graphique", word2: "Processeur", category: "geek" },
  { word1: "Disque SSD", word2: "Clé USB", category: "geek" },
  { word1: "Serveur", word2: "Cloud", category: "geek" },
  { word1: "Mot de passe", word2: "Empreinte digitale", category: "geek" },
  { word1: "Banquier", word2: "Comptable", category: "jobs" },
  { word1: "Notaire", word2: "Avocat", category: "jobs" },
  { word1: "Agent immobilier", word2: "Assureur", category: "jobs" },
  { word1: "Bibliothécaire", word2: "Libraire", category: "jobs" },
  { word1: "Jardinier", word2: "Fleuriste", category: "jobs" },
  { word1: "Garagiste", word2: "Mécanicien", category: "jobs" },
  { word1: "Coiffeur", word2: "Barbier", category: "jobs" },
  { word1: "Opticien", word2: "Ophtalmologue", category: "jobs" },
  { word1: "Kinésithérapeute", word2: "Ostéopathe", category: "jobs" },
  { word1: "Pilote de chasse", word2: "Pilote de ligne", category: "jobs" },
  { word1: "Astronome", word2: "Astrologue", category: "jobs" }
];

export class WordRepository {
  constructor() {
    this.customPairs = this.loadCustomPairs();
    this.playedPairs = this.loadPlayedPairs();
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

  getPairCanonicalKey(word1, word2) {
    const w1 = String(word1 || '').trim().toLowerCase();
    const w2 = String(word2 || '').trim().toLowerCase();
    return w1 < w2 ? `${w1}::${w2}` : `${w2}::${w1}`;
  }

  loadPlayedPairs() {
    try {
      const stored = localStorage.getItem('undercover_played_word_pairs');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn("Impossible de charger l'historique des mots joués", e);
      return [];
    }
  }

  savePlayedPairs() {
    try {
      localStorage.setItem('undercover_played_word_pairs', JSON.stringify(this.playedPairs));
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
      localStorage.removeItem('undercover_played_word_pairs');
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
   * Sélectionne une paire de mots aléatoire selon les catégories et filtre d'âge choisis
   * en évitant les doublons tant que la liste n'est pas épuisée.
   */
  getRandomPair(selectedCategories = null, ageFilter = 'standard') {
    const stats = this.getPoolStats(selectedCategories, ageFilter);
    
    if (stats.totalCount === 0) {
      const fallbackList = INITIAL_WORD_PAIRS.filter(p => ageFilter === 'kids' ? p.age === 'kids' : true);
      const chosenFallback = fallbackList.length > 0 ? fallbackList : INITIAL_WORD_PAIRS;
      const picked = chosenFallback[Math.floor(Math.random() * chosenFallback.length)];
      return { ...picked, exhausted: false };
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
