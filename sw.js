importScripts('bundle.js');
importScripts('config.js');
importScripts('the.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(async () => {
    return new Response(event.request.url || "slos");
}));


//self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
