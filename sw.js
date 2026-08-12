const CACHE_NAME = 'quantum-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/css/quantum-supreme.css',
    '/css/quantum-theme.css',
    '/js/quantum-engine.js',
    '/js/quantum-3d-engine.js',
    '/js/quantum-ai-engine.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('chrome-extension')) return;
    
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) return response;
                
                return fetch(event.request)
                    .then(response => {
                        const clone = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(event.request, clone));
                        return response;
                    })
                    .catch(() => caches.match('/index.html'));
            })
    );
});
