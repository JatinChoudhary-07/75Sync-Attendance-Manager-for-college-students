const CACHE_NAME = '75sync-v1';
const ASSETS = [
  'index.html',
  'https://cdn.tailwindcss.com'
];

// Install the Service Worker and cache the core UI
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Serve cached assets when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});