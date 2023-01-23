const cacheName = 'app';

this.addEventListener('install', function (event) {
  console.log('installing...');

  let coreAssets = [
    './',
    './beginnings-of-mobile-gaming/',
    './classic-mobile-genres/',
    './newer-mobile-genres/',
    './mobile-gaming-today/',
    './css/style.css',
    './js/copyrightYear.js',
    './js/handle-yt-offline.js',
    './js/openDialog.js',
    './js/socialHandles.js',
    './favicon-light.ico',
    './favicon-dark.ico',
    './favicon.ico',
    './favicon-light.png',
    './favicon-dark.png',
    './safari-pinned-tab-icon.svg',
  ];

  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(coreAssets);
    })
  );
});

this.addEventListener('fetch', function (event) {
  console.log('fetch some data!');

  if (event.request.headers.has('range')) {
    return;
  }

  event.respondWith(
    caches.open(cacheName).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return (
          response ||
          fetch(event.request).then(function (response) {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});

this.addEventListener('activate', function activator(event) {
  console.log('activate!');

  caches.keys().then(function (keys) {
    return Promise.all(
      keys
        .filter(function (key) {
          return key.indexOf(cacheName) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
    );
  });
});
