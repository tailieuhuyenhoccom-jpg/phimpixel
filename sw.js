const CACHE_NAME = 'phim-pixel-cache-v1';
const PRECACHE_ASSETS = [
    '/',
    '/index.html',
    '/vite.svg',
    'https://cdn.tailwindcss.com',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache and caching app shell');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  // Strategy: Cache-first, then network.
  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      }
      
      try {
        const networkResponse = await fetch(event.request);
        
        if (networkResponse.ok || networkResponse.type === 'opaque') {
            await cache.put(event.request, networkResponse.clone());
        }
        
        return networkResponse;
      } catch (error) {
        console.error('Fetch failed:', error);
        throw error;
      }
    })
  );
});