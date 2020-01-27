self.importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    workbox.routing.registerRoute(
        /\.(?:js|css|json|txt)$/,
        new workbox.strategies.NetworkFirst(),
    );
    workbox.routing.registerRoute(
        new RegExp('\\.html$'),
        new workbox.strategies.NetworkFirst(),
    );
    self.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SKIP_WAITING') {
            self.skipWaiting();
        }
    });

} else {
    console.log(`Oh no! Workbox didn't load 😬`);
}
