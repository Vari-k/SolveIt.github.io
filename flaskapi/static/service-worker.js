// static/service-worker.js

self.addEventListener("install", event => {
    console.log("[Service Worker] Installed");
    self.skipWaiting();
  });
  
  self.addEventListener("activate", event => {
    console.log("[Service Worker] Activated");
  });
  
  self.addEventListener("fetch", event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  