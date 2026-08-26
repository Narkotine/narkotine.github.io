const CACHE_NAME = 'espionnage-v13';
const ASSETS_TO_PRECACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/game.js',
  './js/words.js',
  './js/audio.js',
  './manifest.json'
];

// Installation : préchargement initial des fichiers en cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_PRECACHE);
    })
  );
  self.skipWaiting();
});

// Activation : suppression immédiate des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch : Stratégie Network-First (Priorité au direct) avec repli automatique sur le cache hors-ligne
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Mise à jour discrète du cache local avec la dernière version reçue
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Repli sur le cache si l'utilisateur est hors-ligne / sans réseau
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return new Response("Mode hors-ligne", { status: 503, statusText: "Offline" });
        });
      })
  );
});
