// This is a minimal service worker that does nothing
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Add minimal fetch handler
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
}); 