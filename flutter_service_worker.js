'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e402727b1b77b8bc25d625b0059212b9",
"assets/AssetManifest.bin.json": "a57f69b26e9e14b820a5ff57a229e86b",
"assets/AssetManifest.json": "a6e031bae1c33385d700ea478ddc1aae",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/icons/flag_ar.png": "49d0c41e7d5c91c8e315b4e7e4921cd6",
"assets/assets/icons/flag_en.png": "ff2034b982b3cee668316f244820cba6",
"assets/assets/icons/icon.png": "e068518ca340c60485fd116c7069985a",
"assets/assets/images/android12splash.png": "f9e227cf0d1208f2dbc5269b58d86338",
"assets/assets/images/ic_cover_placeholder.jpg": "197d6c92630dbfad282cf6c93f03b2b0",
"assets/assets/images/ic_profile_placeholder.png": "60c70b0f421792599a126305b83ae91e",
"assets/assets/images/onboarding_1.png": "de279d20a203a3d724c0ce716203f728",
"assets/assets/images/onboarding_2.png": "03b4e81052278eff1caa15d6e04aab66",
"assets/assets/images/onboarding_3.png": "4b1bff1ff8eb80c764321cb5ee4fb375",
"assets/assets/images/onboarding_4.png": "cdd7c098c7474fc765ef1fb4a80837f4",
"assets/assets/images/shadow.png": "ea25e39d33cbe1c1d484353331159e8f",
"assets/assets/images/shaghalni.png": "4a0109e2e030bad09a97a5c9958b9253",
"assets/assets/images/worker_home.png": "9a86a3ffe7362b25d443216caf1913ee",
"assets/assets/lottie/empty_service.json": "6431cf28736fcf316d1fb3fa70c2e282",
"assets/assets/lottie/loadingdots.json": "2e3360f029e05dadef8ae6e13f1160da",
"assets/assets/lottie/location.json": "4299b53ab3e916dc0dd127523f21414d",
"assets/assets/lottie/not_found.json": "0953d5f7bcf010c4b644e27a35d3f06e",
"assets/assets/lottie/review.json": "3af61d6ff68550aca224304186336ff5",
"assets/assets/lottie/verified.json": "7e4e4dea16f28a05bff29aa1e41b07a5",
"assets/assets/lottie/warning.json": "4366cdf894bb4e1215d09af413abb437",
"assets/assets/map/map_style.json": "45edcb14b95e12f17da6cd04dcc28b74",
"assets/assets/svgs/ic_close.svg": "77f57b9caed28d02e55dc89c2860ee66",
"assets/assets/svgs/ic_facebook.svg": "a2c36577b4ca873ff9fa9b58fac16641",
"assets/assets/svgs/ic_google.svg": "4269e6767e85bfa5e5087fd0cfc40732",
"assets/assets/svgs/ic_verified.svg": "bdaf98502a67415c31c5c3d8d0c15f5f",
"assets/assets/svgs/logo_app_with_text.svg": "a9dff4bb115ac894c14795c7cadd0626",
"assets/assets/svgs/notifications.svg": "68b43eb275885d2cc7a2ae84386e9ab8",
"assets/assets/svgs/no_data_found.svg": "ea72b25ff8f0fefe19f8e08c47bbe021",
"assets/assets/svgs/no_notification.svg": "5bbd28b28eda9c10b4ece4f96ec7ea7e",
"assets/assets/svgs/no_results_found.svg": "526f2cb7de50246b5e2f465d298d69f1",
"assets/assets/svgs/setting-tools-svgrepo-com.svg": "34339baedd2f3c071cabc26ec238644b",
"assets/FontManifest.json": "dab3f614203954489054edcabbb28517",
"assets/fonts/MaterialIcons-Regular.otf": "33d04be013c175030168f055b7d9e147",
"assets/NOTICES": "8b130c76a7788dcc07fd7d5f83d1a1de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "6391d535e33a7465d90d6f00c75fc402",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "53c12a37cffe4ef7fa66d7ca1ba0b57a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9c7d32f0c641b4297e19e9c29cf36139",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "c5b79ae94d9b5396400b4b6bfea4f34c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "eac7d5e7ac8f6d79008ed8e809d014f8",
"icons/Icon-192.png": "dbb426f048ab6f954c95e5b2475efa8c",
"icons/Icon-512.png": "f00297965e383b0150b2b7fe707432c9",
"icons/Icon-maskable-192.png": "dbb426f048ab6f954c95e5b2475efa8c",
"icons/Icon-maskable-512.png": "f00297965e383b0150b2b7fe707432c9",
"index.html": "eb65d7df07d53aed2e751def8ba34081",
"/": "eb65d7df07d53aed2e751def8ba34081",
"main.dart.js": "21a8e8f00b0d9610680c31341b726a34",
"manifest.json": "0e1e62bc99606a6b591d71bb044afa48",
"splash/img/dark-1x.png": "a16057703ce28bf3b9f3dd548a85528d",
"splash/img/dark-2x.png": "45e2039ae222e03364033092aad87a5c",
"splash/img/dark-3x.png": "28a3d90076d0de4fe35e352f6ccd7c73",
"splash/img/dark-4x.png": "25a372c30d7f71103f673516c8f0de73",
"splash/img/light-1x.png": "a16057703ce28bf3b9f3dd548a85528d",
"splash/img/light-2x.png": "45e2039ae222e03364033092aad87a5c",
"splash/img/light-3x.png": "28a3d90076d0de4fe35e352f6ccd7c73",
"splash/img/light-4x.png": "25a372c30d7f71103f673516c8f0de73",
"version.json": "6763df2efab97efe592d3c91d59b26b4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
