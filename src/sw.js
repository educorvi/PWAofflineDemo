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
//
// // Give the service worker access to Firebase Messaging.
// // Note that you can only use Firebase Messaging here, other Firebase libraries
// // are not available in the service worker.
// self.importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
// self.importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');
//
// // Initialize the Firebase app in the service worker by passing in the
// // messagingSenderId.
// firebase.initializeApp({
//   'messagingSenderId': '220573074761'
// });
//
// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = firebase.messaging();
// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };
//
//   return self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });
