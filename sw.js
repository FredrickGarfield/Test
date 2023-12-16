importScripts('bundle.js');
importScripts('config.js');
importScripts('the.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(new Response(event.request.url || "hello world")));


//self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
