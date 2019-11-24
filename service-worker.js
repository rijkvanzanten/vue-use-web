/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8390bfea65f06424049870c15f81666e"
  },
  {
    "url": "assets/css/0.styles.f6ec81e7.css",
    "revision": "e6d58316f3d6676c8a765f0a10df07e9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3cbbf88e.js",
    "revision": "15b1fb52a29f1b1aec48cbb953dbeb04"
  },
  {
    "url": "assets/js/11.0658374e.js",
    "revision": "eed0dad1433fb4b7740fb835eaa5ac68"
  },
  {
    "url": "assets/js/12.e0a6c59a.js",
    "revision": "5f1e13a91889a3d6575588beec79fd59"
  },
  {
    "url": "assets/js/13.4018f304.js",
    "revision": "163426d0e233496284b7e47f43f4d4c1"
  },
  {
    "url": "assets/js/14.499a48fe.js",
    "revision": "e7c53216b8b7d8ee2c1a307c4738e8f5"
  },
  {
    "url": "assets/js/15.03ac4527.js",
    "revision": "e436a832c53d3440ecbb7cd2fe278ba4"
  },
  {
    "url": "assets/js/16.d76d20be.js",
    "revision": "28097435521ce9153c216093ff812bb7"
  },
  {
    "url": "assets/js/17.eefee3ba.js",
    "revision": "ccdfbac6db2005a5773a52addc628616"
  },
  {
    "url": "assets/js/18.d1141815.js",
    "revision": "f4a7aaf7cfe73abc554cfaa239ff36d6"
  },
  {
    "url": "assets/js/19.259bfaac.js",
    "revision": "0c258e6ebfe0ba1d04e028d74e962dad"
  },
  {
    "url": "assets/js/2.e68923ca.js",
    "revision": "43d6138199ed624c6b9a2d5cee64ed14"
  },
  {
    "url": "assets/js/20.4a7ab5e2.js",
    "revision": "dd0426ec0d2ad7d7ff19bf0e806f93a9"
  },
  {
    "url": "assets/js/21.b06952af.js",
    "revision": "7d90df72e2d5e600d827bfc52b9c38a5"
  },
  {
    "url": "assets/js/22.07509837.js",
    "revision": "9d69fb811d2a36d73caa29b2ca467783"
  },
  {
    "url": "assets/js/23.8fe19713.js",
    "revision": "edafd36339b1949999dd1e1e82a02e99"
  },
  {
    "url": "assets/js/24.e51ef01a.js",
    "revision": "c1330c0b2dcadb3c25aa124264d7036f"
  },
  {
    "url": "assets/js/25.287bf985.js",
    "revision": "10351b7c51c799528d54707f7f08c070"
  },
  {
    "url": "assets/js/26.c7de335c.js",
    "revision": "a50ac9636f1837370f87fb3cb2bb9b44"
  },
  {
    "url": "assets/js/27.b6317c2e.js",
    "revision": "0cbf1305f655e73efff3cea14e292bfa"
  },
  {
    "url": "assets/js/28.c61c8968.js",
    "revision": "7bebb4ba3e29c3d0abad4dcc216c6b98"
  },
  {
    "url": "assets/js/29.f723a6c5.js",
    "revision": "2d68495fd11e754f239416b320b70ca0"
  },
  {
    "url": "assets/js/3.5a1f6794.js",
    "revision": "5ab71ad997873f8962f4cdbaf2d419a0"
  },
  {
    "url": "assets/js/30.b329dfba.js",
    "revision": "6bce0b7b8d1e7e1109c9bf499c29754e"
  },
  {
    "url": "assets/js/31.3b0476bc.js",
    "revision": "9f6fbf165c5a45135b5e566070a36e2c"
  },
  {
    "url": "assets/js/32.9c496c49.js",
    "revision": "7affe2961372fae6a28b258a238a3bcf"
  },
  {
    "url": "assets/js/4.210c8644.js",
    "revision": "1942572c99cdb24cbf331efe75658a4d"
  },
  {
    "url": "assets/js/5.9c3e0aec.js",
    "revision": "092a1d033442971bf51ba5ad8c8aca71"
  },
  {
    "url": "assets/js/6.d241fe16.js",
    "revision": "08b34057f98d52f33906d803b0b1e8c2"
  },
  {
    "url": "assets/js/7.7d51ab88.js",
    "revision": "0b6e2958b2cc215f2a27cbf93355ad03"
  },
  {
    "url": "assets/js/8.a8115c29.js",
    "revision": "2e383c904a086016be30ba33d50df8ad"
  },
  {
    "url": "assets/js/9.3036f22b.js",
    "revision": "4a6c3c002e7887980188ac554e74e421"
  },
  {
    "url": "assets/js/app.72c07792.js",
    "revision": "5db8313c886f58650978b03f84edd95a"
  },
  {
    "url": "functions/battery.html",
    "revision": "ab3ebe97edc833b586ceb50a4d9eb3e6"
  },
  {
    "url": "functions/clipboard.html",
    "revision": "50d36a25139f57b7ef4498fba0c66f2b"
  },
  {
    "url": "functions/device-light.html",
    "revision": "586f3dcfadd2343e640cbef1530309a2"
  },
  {
    "url": "functions/device-motion.html",
    "revision": "53b6dff65bc14ee8d7d46a302a5ac51b"
  },
  {
    "url": "functions/device-orientation.html",
    "revision": "2f3e07d5cd0eb5a913d5e9255576f642"
  },
  {
    "url": "functions/document-visibility.html",
    "revision": "b4fc6d3f86108ba55710743ae9880d0b"
  },
  {
    "url": "functions/event-listener.html",
    "revision": "88dfb54611638e1ee34c6858d8a3192c"
  },
  {
    "url": "functions/fetch.html",
    "revision": "5278d7b312dc934c7db38abd67baac21"
  },
  {
    "url": "functions/fullscreen.html",
    "revision": "d9d4496caf1cfb600464323b08de59b7"
  },
  {
    "url": "functions/geolocation.html",
    "revision": "c7662718a1e1c041d78dd9f2a1be9c31"
  },
  {
    "url": "functions/hardware-concurrency.html",
    "revision": "200ebb23812411ac512a8352818740b5"
  },
  {
    "url": "functions/index.html",
    "revision": "c7cb908fb3ef239aee8a2b45d0d589c2"
  },
  {
    "url": "functions/intersection-observer.html",
    "revision": "4764f49d2e370afab7fc2964f3b60d8b"
  },
  {
    "url": "functions/local-storage.html",
    "revision": "e6f8f1962cc61414ab770652dbdc8361"
  },
  {
    "url": "functions/media-query.html",
    "revision": "fdb3c0a6306df86d2cb6d2f1ef9849c8"
  },
  {
    "url": "functions/memory-status.html",
    "revision": "2ec4cf761ba5a89ef66a1b6629aee2e4"
  },
  {
    "url": "functions/mouse-position.html",
    "revision": "e13ce5d844b3101f984cbc2371de2780"
  },
  {
    "url": "functions/network.html",
    "revision": "98b9ef6b40690bd30cfaa1af4495534f"
  },
  {
    "url": "functions/preferred-color-scheme.html",
    "revision": "a66198926d2a6e5be11c78a4e7f92b8d"
  },
  {
    "url": "functions/preferred-languages.html",
    "revision": "5f6a227b82219b6fe3d5d9931f7429bc"
  },
  {
    "url": "functions/script.html",
    "revision": "71f65da8404d7a513d585900d7dc9ee4"
  },
  {
    "url": "functions/scroll-position.html",
    "revision": "6525c3687811814574d94c23bd61d3b8"
  },
  {
    "url": "functions/websocket.html",
    "revision": "8d8a0e999dc623ae758bffadbd255e21"
  },
  {
    "url": "functions/window-size.html",
    "revision": "6de766d75680796ff784e4b4803cbdc6"
  },
  {
    "url": "functions/worker.html",
    "revision": "83671c7e10758079d6c85a8d3a66d224"
  },
  {
    "url": "index.html",
    "revision": "443ca0f19195c3455a6dac230b102a89"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
