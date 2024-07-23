'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "27d138c9ae3e251e03431ebe0758481b",
".git/config": "875b67a77a35b1f912d7789bc2742c93",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "15ccafa5c638d80dd8be0ea0cec484f3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1a71400be790a661f0c39973d14b0929",
".git/logs/refs/heads/master": "1a71400be790a661f0c39973d14b0929",
".git/logs/refs/remotes/origin/master": "3aaed7360e988368e2a5fcab4ac6cee5",
".git/objects/00/07b16ec87d28747a27d8dc4d49d4768266ccbb": "3ec98149bd7e54d58cc74ab776a7afe2",
".git/objects/0e/98d1d381da7be8c648cc3ff73b4a04d9ee53db": "043484cf9796eb748c8298ea482e87eb",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "52815189e89c41b9dd2454241dbbf30b",
".git/objects/11/938fef3567e51e66946283376f15c181e89bb5": "2f511bd7441df8abcf6d3cb7077a9b5b",
".git/objects/13/82b8bd3dd63c1423a828f65ee89fe3b0d67124": "543684476d8ff9a9469de1fae3f11719",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "f6c569ef70469cd83a4ab33010f83d45",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "d7947f223c44c0e877fdc0eddaa85181",
".git/objects/21/45ae2bccb534b648483c0f9e49a1d3e059c177": "b159d3457050fd30eb01ce295e4399a2",
".git/objects/28/f9e49758e27bc2c4afbe8ac95659732946db05": "9198ee4f3078f595f8ac71b66f5c4df4",
".git/objects/29/cc889c5159cdc179d8ccbe77af6c336551b636": "21e147d750ef686c6d0ac07c0dcc2a24",
".git/objects/2b/056541ddfa10af1efc646f88506584c9f5ebdb": "bdf67e39c3588a80d12ce322a66ccbae",
".git/objects/32/deec44af26e43743979835da9eefd2ed245e60": "67e9a2aebb12f11de5263029a66617c5",
".git/objects/33/56a6aef1360d346add65cbfdcd970e7278a165": "b2b96caff5e75f9c5810578280b0cdc3",
".git/objects/41/a6bb1296164297ae556fcbdf562d417d64a5de": "89cd19f3581756517a7f84f6060b269e",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "81ef0ed892ac844ebc65145150ca7534",
".git/objects/4e/6ba283be415a1ab305a469c8a4d0851093cd1c": "428d63bd5812497c2660e743becb4a2e",
".git/objects/4f/fe29f7fb4695623e532b5228998f2cc246e114": "b0509274a7e781b21e720f16b69970dd",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "f074d68db6a8d60f7a342d33a00bd1e5",
".git/objects/53/91d48f5f848d9514ad090463607243a661d928": "743528047a4cdc4416b25d95947073b8",
".git/objects/55/32125495658df13ee839075ce4521d1417dac1": "99dd9ea23f21b37f5dd24d1f9ecc35a3",
".git/objects/55/c989ec124276fba0ff23bcda177d1ec3919cb4": "4977fa4b33f9405f27b0ade5a14aaaa1",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "a5139be2d64fbf291c1118a06e2877ae",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "c9afe800e603c7935de25bc40ffd8226",
".git/objects/59/eaf19ecdffebf4df403b383eeaf9fb972eb8c0": "a55f2cadf8fe0708c56bd7bf329c108e",
".git/objects/61/451e545ca86a90d30a7314e14b985162d14f25": "9a6c9aef9f985ddfe144ca3f875b2164",
".git/objects/61/ab28b57806e6a781beb53ee11080ee5d958f08": "ef5fc833c602b5c12ec5eaebb846f29e",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "f3689ac7c02f4de317cd4075064badde",
".git/objects/63/af5eb901ef9a35e7ef06035df7a58521d10fe0": "7dcc44e9a83849dcc41a4a772dfe20ed",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "7825fa2a8de4953cac3eb1b68e02600a",
".git/objects/77/835fc8583fc54a2c94d9a93f539ae8e0001927": "f99a06a621390e00753a3bd7b747f620",
".git/objects/7b/9c21f42896e8c9a6aa65f316799ab8c67947a5": "6b7f049bfee97605d90df7de5e650134",
".git/objects/80/b41254faaf41ebc6c8e2486f8ff38ee6c9f7ee": "54463aed42eac1cbdbd197fccee2f8f1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/89/cd525bd7d7cdd8d4e4e07def93a6147c50b5f8": "dc453b45a7a8d7bc90759743b0960e49",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8b/d5f48364c9db68cec580a78050a74b300967ce": "6777395fc13f25edf282ce09d4d626a8",
".git/objects/8b/f9c66bb145aa3d739fbc06951e1ab3c2e981bd": "ce956a8d00f49bf2107a3acb294d3765",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "8a68cf9111e34dab3527830024de996f",
".git/objects/9b/667ec72dd9fbcaf72f5025de884d5e6de86d47": "ae19c79ca0f12872eba2b329a9849d0a",
".git/objects/a1/4d456e42e5f41b30e9ec8e81bf00aab7d9f40e": "8c1e6a1488a342653a2b06a206743f28",
".git/objects/a1/a61e8de0341ce224ca2bb4dcbe7c6134111faa": "77528519b7daf0ff5530cea6b71cd06f",
".git/objects/a2/fb5b6a3cd9496a348e5f778a3ee4778e0c5187": "f1d8f7c1646f70a211f96ccf266f6eae",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "eb3281696880d690bdce53639613dde5",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "5110ec697534feee9d97421c47d78964",
".git/objects/af/1e0ae45cdb647f71753ab9090ceba7125021b5": "d4b29ebaff2eae16ca3c2789a9b6d08c",
".git/objects/b0/28177ff36062e4f932edb8db2f036ac15fe0ff": "58b2ed0ae5edffb9025c95c50da50f1c",
".git/objects/b1/cc5c554a036b58387db6b5c33522d81f2d9729": "8060d1c9d589a2066d31c35740a3b5cd",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "acffaef415384586af017e5ae7f0d1fd",
".git/objects/b5/6e9fdded9b9e0e342fe0c6ec7d71192b81337d": "60e8c2f6a7db0071e772d3c6c42c42a7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "335043d4459101b7d18e321be7579883",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/c3/c61418b796913400e280247dc46e2112c2acb5": "2367cb53448922f3a1968059b1a3b553",
".git/objects/c7/cbbe8a12ecca61caaa707866fdd0c86f716450": "a23b825defae74d82402fa327048b779",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "5fa10c835c8e287b1fb7beb9ce0f5bbd",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "89d33e0dd661f2efa9067d9bb6202d62",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "5f32ac9757f448a77d70bf96052de5dd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/e0/c95a98c15feaf5c3b67cb42ee6fe147e9ed451": "6ae061a46573330537651d0432daa533",
".git/objects/e2/8b350cde1eb8c9caa397bcd468af00e0f2b4e8": "7faf867436d7e8edf1b31ae0bd71888e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ee/8b1bce66358cc45018672f0ab422a461a8875e": "113a33f92a52cb2aed5b7bf2b926d469",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f3/01a75e94d7475701a8cfc5cf581da5f75aee6b": "8793ef50a5286a185b27c35dc16c20b7",
".git/objects/f8/216f2baf980bbb60c2af107ed71c6d11edeb20": "f103b8316a4b7930b46e1a343c44ecc5",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "941036d48701554b79d35e2c0884184d",
".git/refs/heads/master": "871a5b17f9b6607b9b920d2764e21c91",
".git/refs/remotes/origin/master": "871a5b17f9b6607b9b920d2764e21c91",
"assets/AssetManifest.bin": "bc3692bd925bbf44f12a415487d195e4",
"assets/AssetManifest.bin.json": "6a3c57b14b8f7813225efd47a7c944e0",
"assets/AssetManifest.json": "98e629df299a7fed20a494b7d0a8b1ef",
"assets/assets/images/background.jpg": "3bc9b8c50647d45adffd07c4e0d50b1e",
"assets/assets/images/home/back1.png": "2879f35eb57e568a9de2cd7ca157dc40",
"assets/assets/images/home/back2.png": "e48a1953fc1e543a3ba53981a969adba",
"assets/assets/images/home/bird.png": "051b8d6083439f7e209d638633ec8a42",
"assets/assets/images/home/mobile-app1.png": "b185981b1b4b1d3188c8d40a44e0fe4f",
"assets/assets/images/home/mobile-app2.png": "286bf0e96e710aff0fcb7dc871aa919c",
"assets/assets/images/profile_image.jpeg": "f47a80ef0a670ff1f99c106ca300b044",
"assets/assets/images/projects/app_store.png": "6af8f0c41ee8185107d3b47992f13fe0",
"assets/assets/images/projects/BMI_app.png": "862f611e42ca01f3b05b848eaba699ff",
"assets/assets/images/projects/library_system.png": "201fd525166ff78f023abb93707d4082",
"assets/assets/images/projects/news_app.png": "d7dc7d71dd12a71fc582849b1b8db1af",
"assets/assets/images/projects/note_app.png": "bd234c2146dcbfda6a0157723557db20",
"assets/assets/images/projects/rick_morty_app.png": "891f551b0a41ac8a73425d78d47f414c",
"assets/assets/images/projects/toku_app.png": "7397ac0837101c314f55a84bdf67a27d",
"assets/assets/images/projects/virus_classification.png": "8ca4d877e44e3630f52de57a287934bb",
"assets/assets/images/projects/weather_app.png": "bf2a4f6ba22349e9d708280f2a1fd802",
"assets/FontManifest.json": "c6b115e9ab2ac9308748c8767ca04429",
"assets/fonts/MaterialIcons-Regular.otf": "1e478c7dd88a8a58a4d47ca6dcf83cc0",
"assets/NOTICES": "48c5ef8510ee6bccf17e3947c808b29e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "dc9dbf4fac2e283771b3f17ef7c434e1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf7aaf771b219fe9a81c32fd0c3cbafc",
"/": "bf7aaf771b219fe9a81c32fd0c3cbafc",
"main.dart.js": "5900ba68e254e4d7c43e66438a3b3b17",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
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
