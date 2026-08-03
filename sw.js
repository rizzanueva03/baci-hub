/* Baci Logs — Service Worker v1 */
var CACHE = 'baci-logs-v1';
var SHELL = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){ return c.addAll(SHELL); })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k!==CACHE; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e){
  /* Only cache same-origin requests */
  if(e.request.url.indexOf(self.location.origin)!==0) return;
  e.respondWith(
    caches.match(e.request).then(function(cached){
      if(cached) return cached;
      return fetch(e.request).then(function(res){
        var clone=res.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request,clone); });
        return res;
      }).catch(function(){
        return caches.match('/index.html');
      });
    })
  );
});
