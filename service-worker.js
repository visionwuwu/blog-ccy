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
    "revision": "990f82220ebac85fb741f2ea23ad0538"
  },
  {
    "url": "about.jpg",
    "revision": "d42f7ad1dc897a760e11fc71b1ea6372"
  },
  {
    "url": "about/index.html",
    "revision": "fd74823345fceb20b3372ad78fd93aea"
  },
  {
    "url": "assets/css/0.styles.04ba7d5c.css",
    "revision": "c013495cfa98415b3787edcba27a6737"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/pan.07613e22.png",
    "revision": "07613e229a93d4e819835f6c46a5bbc9"
  },
  {
    "url": "assets/js/1.9644c212.js",
    "revision": "44926e8063702b877058be7142c47131"
  },
  {
    "url": "assets/js/10.8bc602ad.js",
    "revision": "3e7b93617872da42a6f0e17ffcf7ee42"
  },
  {
    "url": "assets/js/11.2a33162b.js",
    "revision": "429f39c587a14716339e7aeb9ac6a324"
  },
  {
    "url": "assets/js/12.7fa6917b.js",
    "revision": "4186a19f804f694f1fabfea5d0af3de0"
  },
  {
    "url": "assets/js/13.d6b18d59.js",
    "revision": "c8a25e1e576b21bbfaf90e89c881dc6b"
  },
  {
    "url": "assets/js/14.3082bd8c.js",
    "revision": "edd6c39c94b7e2fcb8063b356e041c04"
  },
  {
    "url": "assets/js/15.2766ccda.js",
    "revision": "f797779cd1300d15a26a5b3f0c6a55a0"
  },
  {
    "url": "assets/js/16.4b27c177.js",
    "revision": "616367bcc813fa4c4b441ceafafe9075"
  },
  {
    "url": "assets/js/17.e2a16192.js",
    "revision": "391873369b88c4236c8e4d8e18cda751"
  },
  {
    "url": "assets/js/18.9e8cdb4e.js",
    "revision": "514d2b49cd958a79f7ecebd82a7e721f"
  },
  {
    "url": "assets/js/19.c551dcac.js",
    "revision": "e8a4a265486acfd9685f73e02907cd7d"
  },
  {
    "url": "assets/js/2.4ae2fc28.js",
    "revision": "67a252816bf677af2ce4785278c44892"
  },
  {
    "url": "assets/js/20.02dd6fec.js",
    "revision": "0e878d1d446d4916912c16f11b2aa461"
  },
  {
    "url": "assets/js/21.175ccb15.js",
    "revision": "34879066482857c763f789a7cc11ce33"
  },
  {
    "url": "assets/js/22.4060c341.js",
    "revision": "335146c6dbda7c2667c5dbc741af1698"
  },
  {
    "url": "assets/js/23.c76ed85b.js",
    "revision": "997b0a943a60a224afb26268350d4691"
  },
  {
    "url": "assets/js/24.7e86b147.js",
    "revision": "7250a8e414684c818e079516ad241a56"
  },
  {
    "url": "assets/js/25.f66759ee.js",
    "revision": "4a8de2d7d8cf0a157271160fe951aa81"
  },
  {
    "url": "assets/js/26.b2c02ae4.js",
    "revision": "e4637ce005f9c6e59033753c09d83d80"
  },
  {
    "url": "assets/js/27.e104f891.js",
    "revision": "9857294422f37edbb580c2d8adc25587"
  },
  {
    "url": "assets/js/28.7fb93a16.js",
    "revision": "580bb00f0033dd7cfd07da11e45245f9"
  },
  {
    "url": "assets/js/29.730584ad.js",
    "revision": "fe6de99051d2f87ac233f5e3be8ecccb"
  },
  {
    "url": "assets/js/30.7ed7e435.js",
    "revision": "27aa685aed88b9e208af5b4df382f3af"
  },
  {
    "url": "assets/js/31.3a174bbc.js",
    "revision": "d0ba9243b893e24d39ed4cfdd18a7131"
  },
  {
    "url": "assets/js/32.2640de21.js",
    "revision": "d5c8ef84ed745fcdda125874f49789bd"
  },
  {
    "url": "assets/js/33.c0faaede.js",
    "revision": "46ba7d5b52b8b3d45b8c1ffcd081c48e"
  },
  {
    "url": "assets/js/34.7b92edb7.js",
    "revision": "85058042d3fd45ea2487edc4782953c6"
  },
  {
    "url": "assets/js/35.6f1c4a78.js",
    "revision": "7a7844c3dcba69e6a12d09bc6b824c00"
  },
  {
    "url": "assets/js/36.6103e0b0.js",
    "revision": "e5149a620a2f0bc60b2938481bac0535"
  },
  {
    "url": "assets/js/37.f877c077.js",
    "revision": "35d3262b4c8ba7eb5327f881ba799dd0"
  },
  {
    "url": "assets/js/38.bedf76ad.js",
    "revision": "def0e951b50fd0aa89839597432d09b8"
  },
  {
    "url": "assets/js/39.71d6bc85.js",
    "revision": "59a2e7770a39c40d8c96abea51f26b74"
  },
  {
    "url": "assets/js/40.8019b1db.js",
    "revision": "f5c8afd94070ea07f59c7a8f28dc470e"
  },
  {
    "url": "assets/js/41.a576d8e6.js",
    "revision": "a0d0f656fe9c89adfec9a58eb61c122d"
  },
  {
    "url": "assets/js/42.9a831201.js",
    "revision": "eec8ac5a3db588b948345eb40831c05a"
  },
  {
    "url": "assets/js/43.85f6f122.js",
    "revision": "c07d6a13c6d958caa1dc2514399f4ed5"
  },
  {
    "url": "assets/js/44.7c395b97.js",
    "revision": "56f791595fa173cbc0e546fe2042d549"
  },
  {
    "url": "assets/js/45.939858e2.js",
    "revision": "31f9edb374377509f9cd625c67bfd103"
  },
  {
    "url": "assets/js/46.4be2ed1c.js",
    "revision": "74d24cdc674c324c8b01b261f150c1f2"
  },
  {
    "url": "assets/js/47.0cd95eb7.js",
    "revision": "bff4893cbd840a93fd56b4221e4b577b"
  },
  {
    "url": "assets/js/48.f5b3318c.js",
    "revision": "f3afa12f7ad5ea0180e8d07a7052f350"
  },
  {
    "url": "assets/js/49.d3b5238e.js",
    "revision": "be7152b774cedd1bc8a375e0ecfaeaa5"
  },
  {
    "url": "assets/js/5.597e9fa7.js",
    "revision": "783b8a360172b923683d3809fb533f88"
  },
  {
    "url": "assets/js/50.b9e00ba7.js",
    "revision": "3dfbe99ab69ae14a00d3e21461bfd93c"
  },
  {
    "url": "assets/js/51.1e14b7fe.js",
    "revision": "883fe9e74548b7151b550ac592a13bac"
  },
  {
    "url": "assets/js/52.466fd20b.js",
    "revision": "d3db890fe8dea99c81894f2d018db333"
  },
  {
    "url": "assets/js/53.54cd87bc.js",
    "revision": "5dee1484049b3bb7718b547c2f62492e"
  },
  {
    "url": "assets/js/54.a76dd1bc.js",
    "revision": "5e3e5e887731a5472685cfaa3c07ba74"
  },
  {
    "url": "assets/js/55.c5fd9cbe.js",
    "revision": "8a349c16ed2bca8e5c7787aac1d8fbe4"
  },
  {
    "url": "assets/js/56.70ab002b.js",
    "revision": "e0fd317709ea03999b1e5ca92e721a5f"
  },
  {
    "url": "assets/js/57.5f1c8d8a.js",
    "revision": "f8d42deb82f30760643eb71b99e006f3"
  },
  {
    "url": "assets/js/58.e881fd48.js",
    "revision": "e97e87a2e608eb5a1719143011679419"
  },
  {
    "url": "assets/js/59.364bb830.js",
    "revision": "66a3f64c7827d054230364ee3ac6b647"
  },
  {
    "url": "assets/js/6.9b8dfc58.js",
    "revision": "0838657cc1818503eeb799a7556592e8"
  },
  {
    "url": "assets/js/60.39988aa7.js",
    "revision": "7cab62300d0e96bd468fbc0f31fbd144"
  },
  {
    "url": "assets/js/61.62627bd1.js",
    "revision": "cde0dfe39dc9aed23d04df9ab469eafd"
  },
  {
    "url": "assets/js/62.8b8a1f7f.js",
    "revision": "2433de799d9f03a6d9c1b679f3b2933d"
  },
  {
    "url": "assets/js/63.5c5c435f.js",
    "revision": "81832be9f111f34a300c9c051c511809"
  },
  {
    "url": "assets/js/64.e73f3ae6.js",
    "revision": "a1953805fe5f9c4fdc13324318101e57"
  },
  {
    "url": "assets/js/65.7c13f338.js",
    "revision": "8d3bf35d4a1d77597c7b2d44f35b5349"
  },
  {
    "url": "assets/js/66.93975a34.js",
    "revision": "5d7f475fc9324f99e46c4c86a5ccb950"
  },
  {
    "url": "assets/js/67.edbd8944.js",
    "revision": "9130277b8cd4cb7bf17379caf25db8e9"
  },
  {
    "url": "assets/js/68.012b6c1b.js",
    "revision": "223848ff2134d7cc1e70fbed0b91ee72"
  },
  {
    "url": "assets/js/69.1884966c.js",
    "revision": "c0618deab47224590b04e223f5173145"
  },
  {
    "url": "assets/js/7.862ebfa8.js",
    "revision": "19d66e0ff94904dfe2435ae403988f65"
  },
  {
    "url": "assets/js/8.e339a8f1.js",
    "revision": "70a1f2f3b68d8386bce937bbbb792143"
  },
  {
    "url": "assets/js/9.db1667d0.js",
    "revision": "4e2f172d3ff7a88814825ab7122492d0"
  },
  {
    "url": "assets/js/app.0e182ab2.js",
    "revision": "119a8351c6635d55e6f4cc54c2488d15"
  },
  {
    "url": "assets/js/vendors~flowchart.b6ac3bc2.js",
    "revision": "c2d468ccdf7e761593ffa197b629495b"
  },
  {
    "url": "back-end/index.html",
    "revision": "393cf83d3ed9ebd30e5a24cef2c8b683"
  },
  {
    "url": "baodian/index.html",
    "revision": "eac1cdb69bff65c7f1008654340d8b2a"
  },
  {
    "url": "baodian/notes/array-unique.html",
    "revision": "935dc763dfcb9dec4577d590f694721e"
  },
  {
    "url": "baodian/notes/async&sync.html",
    "revision": "bc55b89df4f4a797010145a41ced4d84"
  },
  {
    "url": "baodian/notes/closure.html",
    "revision": "16331236ede09ecdc2713a324c52d58e"
  },
  {
    "url": "baodian/notes/crp.html",
    "revision": "4e3a4169736f907b76a6e69e30fc5866"
  },
  {
    "url": "baodian/notes/css.html",
    "revision": "d1e85d9a404f7d33bfcd34534fdf1254"
  },
  {
    "url": "baodian/notes/debounce&throttle.html",
    "revision": "2bda9fa363718a53f6be7a34ac65159b"
  },
  {
    "url": "baodian/notes/deeplyClone.html",
    "revision": "a5b61dce4eecb75bf431d247a8e79f55"
  },
  {
    "url": "baodian/notes/one.html",
    "revision": "7f5dd211c639d1dbd262844cbfc25093"
  },
  {
    "url": "baodian/notes/oop.html",
    "revision": "a939a3727584ca624f1addfd175d88be"
  },
  {
    "url": "baodian/notes/promise.html",
    "revision": "d9e241d348097976a03108f727116c1c"
  },
  {
    "url": "baodian/notes/stackMemory.html",
    "revision": "12499798a028670ced328c012f68070e"
  },
  {
    "url": "baodian/notes/ten-algorithms.html",
    "revision": "e8bbf3933ccca44a2bc16f2fcd7d0776"
  },
  {
    "url": "baodian/notes/vue-question.html",
    "revision": "96a3499d80e584c7b837006ea9ed494c"
  },
  {
    "url": "bg.jpg",
    "revision": "0fea308757e4a2f80267cb189a3fb6b8"
  },
  {
    "url": "bg4.jpg",
    "revision": "4073fa83208b89ead956bf9f714c501b"
  },
  {
    "url": "categories/大学课程/index.html",
    "revision": "861080370e86418f4a12abcf7f768af0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e396ad96f370defe5948569d97003f55"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "387f22a235b1ca6456a7d3acc6777ebf"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "965653ff4711b68a2e6cddb83ee02be4"
  },
  {
    "url": "categories/index.html",
    "revision": "e7adf510610cb97b047bdbda4445c10d"
  },
  {
    "url": "collections/books.html",
    "revision": "6a9a36e17d2eb840ac29e1e39b27a8cf"
  },
  {
    "url": "collections/tv.html",
    "revision": "ac1db6c36ebd6f232d247cc39b611775"
  },
  {
    "url": "collegeCourses/highmath/function.html",
    "revision": "65cd3bda0a5f004cc724c5851c67f78b"
  },
  {
    "url": "collegeCourses/highmath/infinity-limit.html",
    "revision": "538e786dbcec56fbf4d5c049408d2ccd"
  },
  {
    "url": "collegeCourses/highmath/multiple-function.html",
    "revision": "3d1ff2d18c7b6758a9d5c6444020e80c"
  },
  {
    "url": "collegeCourses/index.html",
    "revision": "b2f2f0e040c24b94ba05d70e40212ea7"
  },
  {
    "url": "css/common.css",
    "revision": "258789f884ba3a0f641a7a02e0feeaba"
  },
  {
    "url": "day3+2/2020-01/0001.html",
    "revision": "5ef6d51b7d5833d8275349027903c2e1"
  },
  {
    "url": "day3+2/index.html",
    "revision": "027d2e27041c232ba1bb250047944275"
  },
  {
    "url": "eassy/article-beiying.html",
    "revision": "2d92554d0ee506482723a86cca4fbc67"
  },
  {
    "url": "eassy/index.html",
    "revision": "ff5aa574cce6903dc1cfc628b9fe8db8"
  },
  {
    "url": "front-end/index.html",
    "revision": "68beba451890d13f4fee9ec64423b4ce"
  },
  {
    "url": "front-end/javascript/AOP.html",
    "revision": "99c0df9e8567e46204419499d07a8ca9"
  },
  {
    "url": "front-end/javascript/events.html",
    "revision": "5b17d4da4224ff734b45569c10fed4e8"
  },
  {
    "url": "front-end/javascript/highOrder.html",
    "revision": "abfd99fc9a453e21c358c6045b6f5bde"
  },
  {
    "url": "front-end/javascript/let&const.html",
    "revision": "e5c734628432ece316d45da8e7b3de4a"
  },
  {
    "url": "front-end/javascript/observer.html",
    "revision": "1fa2000a93258f6ecfb7f603bcc1925e"
  },
  {
    "url": "front-end/vue/vue2-simple-mvvm.html",
    "revision": "a90f0a04f8a4d2b20e9e4ddede9f60a9"
  },
  {
    "url": "front-end/vue/vuex-origin-code.html",
    "revision": "67089249595e8dede08ab2e46fb26d16"
  },
  {
    "url": "guide/notes/one.html",
    "revision": "c6709d937caff1668380c796b2c25f2c"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "images/common/cursor.png",
    "revision": "d130ee390437767a7c8bfbbe6e7b80db"
  },
  {
    "url": "images/ms-zero/anilzypng.png",
    "revision": "bb374c9aa1c8d81d8cde76f6bd7a2e24"
  },
  {
    "url": "images/ms-zero/async-sync.png",
    "revision": "7f09672a4bf34bea6fc8bf4b1ee2fe3c"
  },
  {
    "url": "images/ms-zero/boxModel.png",
    "revision": "671cdd7d078543fdd8a02183f54d745b"
  },
  {
    "url": "images/ms-zero/consult-cache.png",
    "revision": "86d30c288fd4c4cb2c213c89f6dd9312"
  },
  {
    "url": "images/ms-zero/dns-find-host.png",
    "revision": "e7ae8f7fc6907b9b5dc4e683140539c7"
  },
  {
    "url": "images/ms-zero/dns-find-local.png",
    "revision": "507e0f8001b36e08ad61c861ef68f763"
  },
  {
    "url": "images/ms-zero/httpRequest-process.png",
    "revision": "4f995e6b82b0cd9c182f4005ed74f20d"
  },
  {
    "url": "images/ms-zero/prototype.png",
    "revision": "8276dc65d4fe3231db1c12a88f9152e4"
  },
  {
    "url": "images/ms-zero/reference.png",
    "revision": "1597f28bfef95cd1259e7c679317ae7f"
  },
  {
    "url": "images/ms-zero/sfy-layout.png",
    "revision": "973940a7190548574facdfdd40c5db43"
  },
  {
    "url": "images/ms-zero/stack-heap.png",
    "revision": "bc82fbc8ecb8a2fa94b528ad112c0ca1"
  },
  {
    "url": "images/ms-zero/stackMemory.png",
    "revision": "d931ad0dca2907bf9e7d3356f80a5686"
  },
  {
    "url": "images/ms-zero/strong-cache.png",
    "revision": "d5c470a4638de18069066a6dd44393a5"
  },
  {
    "url": "images/ms-zero/tree.png",
    "revision": "126bc484149959728bacf8f3325b2467"
  },
  {
    "url": "images/other/comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "images/xiaomi-uniapp/cart.jpg",
    "revision": "7a200a3fbc1ee9f4ec875a9ac844915d"
  },
  {
    "url": "images/xiaomi-uniapp/classify.jpg",
    "revision": "b4e796acf65220da3dedb7a5368a3139"
  },
  {
    "url": "images/xiaomi-uniapp/index.jpg",
    "revision": "73486d751cc0fc62aaf3771b96f495d7"
  },
  {
    "url": "images/xiaomi-uniapp/init/App-css.png",
    "revision": "bc616ce7b73f03b74f523367b79cc31a"
  },
  {
    "url": "images/xiaomi-uniapp/init/book.png",
    "revision": "076d39898b9e43ac48f9565bacbf4de6"
  },
  {
    "url": "images/xiaomi-uniapp/init/create-panle.png",
    "revision": "cd11c6709696bd350b8926e365ea67c5"
  },
  {
    "url": "images/xiaomi-uniapp/init/create.png",
    "revision": "6a81191bf06dfbd5b721af371c6010d1"
  },
  {
    "url": "images/xiaomi-uniapp/init/debug-error.png",
    "revision": "49b145f83c6421c1f0e9419809dad4fc"
  },
  {
    "url": "images/xiaomi-uniapp/init/download-HBuilderX.png",
    "revision": "f4addd80e56a0bdb1ab9ca3c1a05c1a1"
  },
  {
    "url": "images/xiaomi-uniapp/init/h5-web.png",
    "revision": "fb322ccbfb83de0227188281e44fee6c"
  },
  {
    "url": "images/xiaomi-uniapp/init/h5.png",
    "revision": "d78e41f43af36463f9d8fd679da6df9f"
  },
  {
    "url": "images/xiaomi-uniapp/init/hello-uni-app.png",
    "revision": "9ae0e1e5fe660fc0b22f4aa5dab20233"
  },
  {
    "url": "images/xiaomi-uniapp/init/iphone-run.png",
    "revision": "b4cee83118d0609de455eeeee84fdb88"
  },
  {
    "url": "images/xiaomi-uniapp/init/itunes-success.png",
    "revision": "8d703500bdd626d4e74472daae434222"
  },
  {
    "url": "images/xiaomi-uniapp/init/itunes.png",
    "revision": "09f995a8216afbf49c4336556d4efd6a"
  },
  {
    "url": "images/xiaomi-uniapp/init/kf.png",
    "revision": "e04db49558e13ba09f83347a3ee0aeb7"
  },
  {
    "url": "images/xiaomi-uniapp/init/ok.png",
    "revision": "20f2fd54adf512ec9b443d1cb048a10c"
  },
  {
    "url": "images/xiaomi-uniapp/init/plug-panle.png",
    "revision": "1190e8b4611ac80587def0e4effda0e9"
  },
  {
    "url": "images/xiaomi-uniapp/init/plug.png",
    "revision": "a8ec82145272e4c6a1db7cb4cdf4d713"
  },
  {
    "url": "images/xiaomi-uniapp/init/project-dir.png",
    "revision": "ccaae7e51b99bf4304d07e895e76e6c3"
  },
  {
    "url": "images/xiaomi-uniapp/init/run.png",
    "revision": "f49ba670c8a910c4cc7e444ccbb50563"
  },
  {
    "url": "images/xiaomi-uniapp/init/weixin-miniprogram-set.png",
    "revision": "7406d7ee8116cd4b1969710b73a7e623"
  },
  {
    "url": "images/xiaomi-uniapp/init/weixin-miniprogram-set1.png",
    "revision": "dbb1a5279707a7c15eeb2484dfad1260"
  },
  {
    "url": "images/xiaomi-uniapp/init/weixin-miniprogram.png",
    "revision": "2bdffecf46df559a7410bc48a0b7b8c7"
  },
  {
    "url": "images/xiaomi-uniapp/my.jpg",
    "revision": "5e0d254e5dec551a33c990e08a1cd21f"
  },
  {
    "url": "index.html",
    "revision": "b464a948ca24401d556fb3a12f0d691a"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "787be30cdd4c4dfa854dde2028772d02"
  },
  {
    "url": "logo.png",
    "revision": "0227ec245e330aaa50e3cdc7005c8c39"
  },
  {
    "url": "other/collectArticles.html",
    "revision": "c2d909bf334b68c76fedf59c3864d75b"
  },
  {
    "url": "other/documents.html",
    "revision": "d269910a9a9e6cbb1e78cc8e1fe596e1"
  },
  {
    "url": "other/documents/index.html",
    "revision": "2db0be4663303b6a99d360ef13adda6a"
  },
  {
    "url": "other/projectPreview/index.html",
    "revision": "48b62a80b2e70c1d4352c2085cbec31b"
  },
  {
    "url": "other/projects/xm-shopping/index.html",
    "revision": "c24b26691f909bb29aff10486e14b5ca"
  },
  {
    "url": "other/projects/xm-shopping/index/makePage.html",
    "revision": "26cbc7bd7549ced955fcee884c7a97b1"
  },
  {
    "url": "other/projects/xm-shopping/index/realizeFunction.html",
    "revision": "6f489c67f823a96cf89089b93f3c9029"
  },
  {
    "url": "other/projects/xm-shopping/init/initProject.html",
    "revision": "a81bee700f948d5cb73f96ec7fbc0a7c"
  },
  {
    "url": "tag/高数/index.html",
    "revision": "9830879b1a6701a5be8835c462707a43"
  },
  {
    "url": "tag/css/index.html",
    "revision": "f3509b9e1a4c35ae94ce5b52dd7562e3"
  },
  {
    "url": "tag/http/index.html",
    "revision": "445dd9654db31f705a6ed202f37b04fd"
  },
  {
    "url": "tag/index.html",
    "revision": "844e4210db5d6c5254f2705f532b4e2a"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "2d94211606eb0b73ed5e54162d04d5d3"
  },
  {
    "url": "tag/javascript/page/2/index.html",
    "revision": "c851610413b3730d5eba5a3685272b2a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "6ea44120703c4387836d24a3da0127f7"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "eb9a3f0a7286bfe2dc01f47b9a13299a"
  },
  {
    "url": "timeline/index.html",
    "revision": "98569bcf21c3ccad8f50cdc2cbc50e59"
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
