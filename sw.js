self.addEventListener("install", function (event) {
  event.waitUntil(caches.open("app")).then(function (cache) {
    let coreAssets = [
      "./css/style.css",
      "./js/copyrightYear.js",
      "./js/openDialog.js",
      "./js/socialHandles.js",
      "./js/handle-yt-offline.js",
      "./images/AngryBirds-bg.jpg",
      "./images/Bejeweled-bg.jpg",
      "./images/CODM-bg.jpg",
      "./images/Genshin-bg.jpg",
      "./images/bootstrap-icons.svg",
      "./images/angry-birds.mp3",
      "./images/bejeweled3-classic.mp3",
      "./images/codm-wild-west.mp3",
      "./images/sanctuary-of-surasthana-extended.mp3",
      "./fonts/PressStart2P-Regular.ttf",
      "./beginnings-of-mobile-gaming/index.html",
      "./classic-mobile-genres/index.html",
      "./newer-mobile-genres/index.html",
      "./mobile-gaming-today/index.html",
      "./favicon-light.ico",
      "./favicon-dark.ico",
      "./favicon-light.png",
      "./favicon-dark.png",
      "./favicon.ico",
    ];
    for (let asset of coreAssets) {
      cache.add(new Request(asset));
    }
    return cache;
  });
});

self.addEventListener("fetch", function (event) {
  let request = event.request;

  if (
    event.request.cache === "only-if-cached" &&
    event.request.mode !== "same-origin"
  ) {
    return;
  }

  if (request.headers.get("Accept").includes("text/html")) {
    event.respondWith(
      fetch(request)
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          return caches.match(request).then(function (response) {
            return response;
          });
        })
    );
  }

  if (
    request.headers.get("Accept").includes("text/css") ||
    request.headers.get("Accept").includes("text/javascript")
  ) {
    caches.match(request).then(function (response) {
      return (
        response ||
        fetch(request).then(function (response) {
          return response;
        })
      );
    });
  }

  if (request.headers.get("Accept").includes("image")) {
    caches.match(request).then(function (response) {
      return (
        response ||
        fetch(request).then(function (response) {
          return response;
        })
      );
    });
  }
});
