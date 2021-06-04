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
    "revision": "96c7cbf9f3eb3b133ca6c8b40679b892"
  },
  {
    "url": "about.jpg",
    "revision": "d42f7ad1dc897a760e11fc71b1ea6372"
  },
  {
    "url": "about/index.html",
    "revision": "d552c309a0fb79b101149ad29edc1865"
  },
  {
    "url": "assets/css/0.styles.0f3e80bd.css",
    "revision": "1389f512f776f88b3545dcd2b251a038"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.dee30794.js",
    "revision": "a62b3910e1c3cedf5cd2247697f34f72"
  },
  {
    "url": "assets/js/10.d1c6c17c.js",
    "revision": "f35d54a4e316f85e531ed3d69036654c"
  },
  {
    "url": "assets/js/11.429ec1b7.js",
    "revision": "2d741016edd5d6c3268b5e5a10c99ca6"
  },
  {
    "url": "assets/js/12.c06b4ed5.js",
    "revision": "17638b42a1ad94c08cca10988c68ac84"
  },
  {
    "url": "assets/js/13.29f0177d.js",
    "revision": "c1cfab5652ccb052f83b5ed4886d3911"
  },
  {
    "url": "assets/js/14.f46e820f.js",
    "revision": "53e4502688a499b8916a7ea562616e7d"
  },
  {
    "url": "assets/js/15.c7a0cf0a.js",
    "revision": "cbf9b79d2dd339f8b093b19386662c5b"
  },
  {
    "url": "assets/js/16.2593f520.js",
    "revision": "1ea3797e6c2ed8b553b9a8b9dcc33247"
  },
  {
    "url": "assets/js/17.fd9451c1.js",
    "revision": "2ef7759de9a998f6104619833c27057a"
  },
  {
    "url": "assets/js/18.67a8df7f.js",
    "revision": "1b2164d090ed2778bde62a415e729b2d"
  },
  {
    "url": "assets/js/19.5d816480.js",
    "revision": "8462cc93f9d238d6f20dc48a1e193d10"
  },
  {
    "url": "assets/js/2.e1eb3d86.js",
    "revision": "0eba9a80f3b683854e8ad1e7781c2628"
  },
  {
    "url": "assets/js/20.6644c81d.js",
    "revision": "411598d5c7ef8342499b24cdc4b30254"
  },
  {
    "url": "assets/js/21.65a5252e.js",
    "revision": "e0de7fc3356fe68a6227c9ee81e7ae06"
  },
  {
    "url": "assets/js/22.1302aaed.js",
    "revision": "678d25e106c006beb52b1bb2a6528c4e"
  },
  {
    "url": "assets/js/23.970b193a.js",
    "revision": "5410065b5a21f70a339588c9c9e4cfe2"
  },
  {
    "url": "assets/js/24.33a5a12b.js",
    "revision": "398d1001c4a2fdc436997d88e7716b98"
  },
  {
    "url": "assets/js/25.9338261d.js",
    "revision": "67093aa2ddd9a355b2d3a365b82cbd17"
  },
  {
    "url": "assets/js/26.df773ce3.js",
    "revision": "111fad02785c00ea6845bc23e3d7c9d3"
  },
  {
    "url": "assets/js/27.7ab4be60.js",
    "revision": "851f9825e5809049377f9f3e463799b4"
  },
  {
    "url": "assets/js/28.ca365675.js",
    "revision": "2fffd89d8753c740d58ebb3d97aec004"
  },
  {
    "url": "assets/js/29.3000cf60.js",
    "revision": "729f06df7fbac5cd6ef1c4476dfe4966"
  },
  {
    "url": "assets/js/30.fa9ac460.js",
    "revision": "69ee9800a442bc7c89bbfa39613129b0"
  },
  {
    "url": "assets/js/31.eb506d7c.js",
    "revision": "2759153b7971d63a03b17960f7fbb0a1"
  },
  {
    "url": "assets/js/32.f007d973.js",
    "revision": "4f46d065664fbbfb3ed12126d6ccdce1"
  },
  {
    "url": "assets/js/33.18781f01.js",
    "revision": "d825a9ec6fe860207ab212d1b4773d46"
  },
  {
    "url": "assets/js/34.6d72ad1d.js",
    "revision": "c9e003991aa3201a77b81563f344aead"
  },
  {
    "url": "assets/js/35.1cd3923b.js",
    "revision": "97f3654f103022710ec9b15661fa64dc"
  },
  {
    "url": "assets/js/36.b0294579.js",
    "revision": "3e434496bd826ef85aa789f531cfdb82"
  },
  {
    "url": "assets/js/37.59c9aae4.js",
    "revision": "38764b9f7e5636891417a1f57b31f1aa"
  },
  {
    "url": "assets/js/38.ed6f288d.js",
    "revision": "d1172399a700715c2fedd1f0f2646f26"
  },
  {
    "url": "assets/js/39.2d2fc226.js",
    "revision": "20936b5deb3be7f8fd42ab42e004676a"
  },
  {
    "url": "assets/js/40.a424d416.js",
    "revision": "b37353adead115f875a126c394b1f185"
  },
  {
    "url": "assets/js/41.a10b0e96.js",
    "revision": "0eb3dfab4bb757de79822af90848098a"
  },
  {
    "url": "assets/js/42.53531a07.js",
    "revision": "671babe8dac90eeb00e945434f7522e4"
  },
  {
    "url": "assets/js/43.8177072a.js",
    "revision": "b9f9120f13f14f0de5ea2aa1b33a5776"
  },
  {
    "url": "assets/js/44.9d6bb3d6.js",
    "revision": "b4930a55c38192c602de1d3972447f90"
  },
  {
    "url": "assets/js/45.65fbc167.js",
    "revision": "db4baa969ca9f7683f7fdded2d3159e2"
  },
  {
    "url": "assets/js/46.27049809.js",
    "revision": "afaeb6316c3bdafa60df35d4bf131dec"
  },
  {
    "url": "assets/js/47.a9fbce8b.js",
    "revision": "eacb04746a76195a2a3711b025527b7d"
  },
  {
    "url": "assets/js/48.1a53df78.js",
    "revision": "6d199c67119bd2716ee4f524cf0381d0"
  },
  {
    "url": "assets/js/49.697c036d.js",
    "revision": "2a8b0a28b242427f43b7e3fb335c5a17"
  },
  {
    "url": "assets/js/5.ed726e3f.js",
    "revision": "989cb4994c6d32187999237907af4909"
  },
  {
    "url": "assets/js/50.a8e72869.js",
    "revision": "8576a887fde2f3d446ea7313737986d3"
  },
  {
    "url": "assets/js/51.9310b4dd.js",
    "revision": "ef8d92e7de350c07be2cd44e63945c3b"
  },
  {
    "url": "assets/js/52.43f39448.js",
    "revision": "31ca383e862a10054afe671efa8c3907"
  },
  {
    "url": "assets/js/53.dc8a7ab1.js",
    "revision": "5bf80b22c9b93a35f590ac5b1d51b593"
  },
  {
    "url": "assets/js/54.a4ed6d98.js",
    "revision": "8e5ed3e816024b477ba10eef65fa925a"
  },
  {
    "url": "assets/js/55.34dd618a.js",
    "revision": "c80d5042ba80565652a003cae1fb7567"
  },
  {
    "url": "assets/js/56.35b11ca1.js",
    "revision": "645f5c725c2fac42cb54014e8068f57f"
  },
  {
    "url": "assets/js/57.f2f73eb0.js",
    "revision": "0fd38ba22e33fc674d69cfe0702c061b"
  },
  {
    "url": "assets/js/58.3fbab295.js",
    "revision": "d970488b8031647935b0a4705bd4bd65"
  },
  {
    "url": "assets/js/59.3c705db9.js",
    "revision": "850dec1dc702126ff89cca0ce83e2de7"
  },
  {
    "url": "assets/js/6.7c2f56c8.js",
    "revision": "d85ac91a96d94ec68130924593ab52bc"
  },
  {
    "url": "assets/js/60.9f2f1974.js",
    "revision": "b0b78eba1a153b7a43ffb15ef7e4fe9d"
  },
  {
    "url": "assets/js/61.3fd830bc.js",
    "revision": "c41c99a163552d0243da3f48000adba6"
  },
  {
    "url": "assets/js/62.17f519ed.js",
    "revision": "f1973feac72514677072b8b78bb68fe5"
  },
  {
    "url": "assets/js/63.af13cf6a.js",
    "revision": "4c597dbc839d119357eae45e6109d67e"
  },
  {
    "url": "assets/js/64.2ec42e31.js",
    "revision": "2a2821e42e788f0bbf6f7163db22df8d"
  },
  {
    "url": "assets/js/65.eeb2b06a.js",
    "revision": "3035b922360a1eb3239bd35eccf9ca31"
  },
  {
    "url": "assets/js/66.f9b5c380.js",
    "revision": "33e05096ed7da63aba7e0bd2c239d5c3"
  },
  {
    "url": "assets/js/67.fc18e79c.js",
    "revision": "67d24162b0745d4db8fd1cbfc9aa8784"
  },
  {
    "url": "assets/js/68.c96b0f04.js",
    "revision": "f73a56bdc5228628cb6a755d679e4b78"
  },
  {
    "url": "assets/js/69.4c40e94e.js",
    "revision": "a37975f9f403f48abad08077c65f0863"
  },
  {
    "url": "assets/js/7.228a2e49.js",
    "revision": "99df2b143fe9e610346991d1726dfda9"
  },
  {
    "url": "assets/js/70.beddb338.js",
    "revision": "ea25f07eb82bc8b54efee9490d9ad1da"
  },
  {
    "url": "assets/js/71.6ffe83e7.js",
    "revision": "6d9fb94a17520db09a545c1bf2b4197a"
  },
  {
    "url": "assets/js/72.48ee47d8.js",
    "revision": "5a1bf2704ea33b98c52bebc3b048cf41"
  },
  {
    "url": "assets/js/73.0adfe88b.js",
    "revision": "539d4661c74f6af46b1834c650dc1abe"
  },
  {
    "url": "assets/js/74.d524bce4.js",
    "revision": "846b9e1e1958c8d8e00a99fb380f78f8"
  },
  {
    "url": "assets/js/75.f0b8e7d9.js",
    "revision": "4dedc144e243b42d6de92c8d0ad5362b"
  },
  {
    "url": "assets/js/8.4eba28ef.js",
    "revision": "140fa4f1b55c69daed23da2282d26c28"
  },
  {
    "url": "assets/js/9.25172928.js",
    "revision": "663e1002193cea69a5a5bc156fbc42a3"
  },
  {
    "url": "assets/js/app.7adc7109.js",
    "revision": "ae2a97fe66e494a4514c0a5ab26e583b"
  },
  {
    "url": "assets/js/vendors~flowchart.3a3c527e.js",
    "revision": "6edbfd85311f47e0e8315a7c11879ceb"
  },
  {
    "url": "back-end/index.html",
    "revision": "ab54fa7d41675db2ead27b4e08f13a77"
  },
  {
    "url": "baodian/index.html",
    "revision": "e0932373877f0db52246841a34fb679f"
  },
  {
    "url": "baodian/notes/array-unique.html",
    "revision": "d2e283dcc22c46497720b6a82e4cfaca"
  },
  {
    "url": "baodian/notes/async&sync.html",
    "revision": "40f2e010b27c5b670ed652b9fd7b5116"
  },
  {
    "url": "baodian/notes/closure.html",
    "revision": "d3a5c8e0f2da073e310d1668e0db36c1"
  },
  {
    "url": "baodian/notes/crp.html",
    "revision": "0343256a79b82085dff0a06003f3174b"
  },
  {
    "url": "baodian/notes/css.html",
    "revision": "36280b8983776f6ef47133d31dbe892a"
  },
  {
    "url": "baodian/notes/debounce&throttle.html",
    "revision": "9ab4c1d690703c9581bb310ebe4c522e"
  },
  {
    "url": "baodian/notes/deeplyClone.html",
    "revision": "7272f7f5869d85efd2707dcbe7828224"
  },
  {
    "url": "baodian/notes/one.html",
    "revision": "967de7842593a60b8eea8bb8723f59a5"
  },
  {
    "url": "baodian/notes/oop.html",
    "revision": "cab5b39696a55d9a806157eb9ec7e9d0"
  },
  {
    "url": "baodian/notes/promise.html",
    "revision": "67eb17ed65b103999aeedc1444e828ab"
  },
  {
    "url": "baodian/notes/stackMemory.html",
    "revision": "34c1f6090209c62912dc56231698544a"
  },
  {
    "url": "baodian/notes/ten-algorithms.html",
    "revision": "1651f7dc0b574cbce730dcfd5007dcaf"
  },
  {
    "url": "baodian/notes/vue-question.html",
    "revision": "16e93b305e42d8d215a9f4dbd41fb373"
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
    "url": "categories/index.html",
    "revision": "9d05ba24a779eee47b9be278bc2277ce"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "735d479c5b1cf51fc552029fbfd82adc"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "b0b49869fa46271900b702e9668ba050"
  },
  {
    "url": "categories/力扣算法/index.html",
    "revision": "b6869b287c36e3ce65aa1b4ea53851c2"
  },
  {
    "url": "categories/大学课程/index.html",
    "revision": "2266e4ce03b8ec9614adaa184ae5e712"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "46c5b3a037b13d1213eb4a57d52b1fe1"
  },
  {
    "url": "CET-4/2021-04/0001.html",
    "revision": "d86a6275ab2461104bcd28657c10e793"
  },
  {
    "url": "CET-4/2021-04/0002.html",
    "revision": "e96f55fe0fb7671b5e1b2c1a0994c8e5"
  },
  {
    "url": "CET-4/index.html",
    "revision": "bf090d9546d8694b3c773df48f216f3f"
  },
  {
    "url": "collections/books.html",
    "revision": "9525b6ed13acf77a76b1f84898eefc73"
  },
  {
    "url": "collections/tv.html",
    "revision": "fbbe320061b0d0249a0bb705f2c4b199"
  },
  {
    "url": "collegeCourses/highmath/function.html",
    "revision": "ac47cabb4c58083651a53663da26bc0f"
  },
  {
    "url": "collegeCourses/highmath/infinity-limit.html",
    "revision": "6be1ad41d2f88e43014667e1e0d8ec0e"
  },
  {
    "url": "collegeCourses/highmath/multiple-function.html",
    "revision": "4d1ff35d3c5910031bc738db8fab56d0"
  },
  {
    "url": "collegeCourses/index.html",
    "revision": "af990f426ab25942c9f99996207af94a"
  },
  {
    "url": "css/common.css",
    "revision": "82c31813b5a90bb606c717aefb64e1d7"
  },
  {
    "url": "day3+2/2021-01/0001.html",
    "revision": "707fc5c68ac9e4aedcf1dcf6d9259002"
  },
  {
    "url": "day3+2/2021-01/0002.html",
    "revision": "90babc2060721b94aed86812487b99ec"
  },
  {
    "url": "day3+2/2021-01/0003.html",
    "revision": "1f6f33a8f10e21d8cbf6662bef09a2ee"
  },
  {
    "url": "day3+2/2021-01/0004.html",
    "revision": "48baf540caf7217bdc71d787802815f2"
  },
  {
    "url": "day3+2/index.html",
    "revision": "643978c2ab3407655dab77ca4d4fc01f"
  },
  {
    "url": "eassy/article-beiying.html",
    "revision": "8a439e340becf73f20a71545eb40456c"
  },
  {
    "url": "eassy/index.html",
    "revision": "10ea5c79190072e54e9cf70b3bdbb3f2"
  },
  {
    "url": "front-end/index.html",
    "revision": "23d53d7a3ac484de8cee7b4000ba3a8f"
  },
  {
    "url": "front-end/javascript/AOP.html",
    "revision": "eb0edad9c1e8d897b2092276d3a82d01"
  },
  {
    "url": "front-end/javascript/events.html",
    "revision": "7d27c7314417526c34b91479869c267c"
  },
  {
    "url": "front-end/javascript/highOrder.html",
    "revision": "4e6b71ea1dab59ebbd08e31047b2c4e3"
  },
  {
    "url": "front-end/javascript/let&const.html",
    "revision": "99c72096a0cc0ee9a7d0182361cb78b5"
  },
  {
    "url": "front-end/javascript/observer.html",
    "revision": "ebb990b78909dd89ac8c6ed465949dd5"
  },
  {
    "url": "front-end/vue/vue2-simple-mvvm.html",
    "revision": "f635f83fcd02216b9b50ffaf70340379"
  },
  {
    "url": "front-end/vue/vuex-origin-code.html",
    "revision": "b7e89fb2047cf2b48ba2ecc9f6379f0b"
  },
  {
    "url": "guide/notes/one.html",
    "revision": "ab1d17ad2af17157f1944df5c3177e3c"
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
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "images/collections/book-dl.jpg",
    "revision": "368ed70cc8978a13dfbb1b6fa4e0691a"
  },
  {
    "url": "images/collections/js-design.jpg",
    "revision": "6fc8f4f027e4b83f9522e35b33d22bcb"
  },
  {
    "url": "images/collections/js-frame.jpg",
    "revision": "e301156828b53e5e295383f3adee17bf"
  },
  {
    "url": "images/collections/js-green.jpg",
    "revision": "1890694b85fc27fde1a9fc90536bcf28"
  },
  {
    "url": "images/collections/js-red.jpg",
    "revision": "154a2b5ff1e2bcaa43e3409626644a4d"
  },
  {
    "url": "images/collections/tv-dl.jpg",
    "revision": "dba0a95a652e626f57135a25abb230a1"
  },
  {
    "url": "images/common/cursor.png",
    "revision": "d130ee390437767a7c8bfbbe6e7b80db"
  },
  {
    "url": "images/LeetCode/addtwonumber.jpg",
    "revision": "531337b42aa8798d9f828515ce201ffb"
  },
  {
    "url": "images/LeetCode/two-sum.gif",
    "revision": "70d952c377ead72771c7359afd0f025d"
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
    "url": "images/other/LeetCode.svg",
    "revision": "0f4d45e9cb4a87809a25e572fcbcb41d"
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
    "revision": "80b762e4d8413153c6cd5ff18ea308a4"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "1bb4e4aa570aea5dfde8bd62d81be182"
  },
  {
    "url": "logo.png",
    "revision": "0227ec245e330aaa50e3cdc7005c8c39"
  },
  {
    "url": "other/collectArticles.html",
    "revision": "90d0098aee6eb7dc8a8de1f247924fb7"
  },
  {
    "url": "other/documents.html",
    "revision": "cbf3afb0510b5ab7d6f1af359099373d"
  },
  {
    "url": "other/documents/index.html",
    "revision": "55c85140419daa5db44bb1048d12ba6c"
  },
  {
    "url": "other/projectPreview/index.html",
    "revision": "f1700edb24d9ac759c947127ccbcc8f0"
  },
  {
    "url": "other/projects/xm-shopping/index.html",
    "revision": "c4ab61c7d10d09dee8de29dd9108c332"
  },
  {
    "url": "other/projects/xm-shopping/index/makePage.html",
    "revision": "1ee8f3286637914bd7f5fdf5f2ccc850"
  },
  {
    "url": "other/projects/xm-shopping/index/realizeFunction.html",
    "revision": "b36bcb2b8eed2c81bd42b899ceaa68ad"
  },
  {
    "url": "other/projects/xm-shopping/init/initProject.html",
    "revision": "54af87c2258996a0de24ca86f1d4b19d"
  },
  {
    "url": "tag/css/index.html",
    "revision": "c20befc8a5aa59f5135d47de0d1816a2"
  },
  {
    "url": "tag/http/index.html",
    "revision": "ed0c24b553543eb8b99d463560726526"
  },
  {
    "url": "tag/index.html",
    "revision": "fec45c70e6bb05decffa822eb0eda353"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "948f43913a448dcd710a3c60b142f794"
  },
  {
    "url": "tag/javascript/page/2/index.html",
    "revision": "ff378a4e1f04594396f5cd4f88c2b238"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4448871d6f906ec785e948a1e5bc80dd"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "ec971f4472ba146e8c89c2bc02c5846c"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "97a20fd2c4541fee33ab2502bf4e271d"
  },
  {
    "url": "tag/英语单词/index.html",
    "revision": "f18134f8e3b8a6853ff3be15e0981a4b"
  },
  {
    "url": "tag/高数/index.html",
    "revision": "88d4603617f039b3a5b8bda052560436"
  },
  {
    "url": "timeline/index.html",
    "revision": "9bb12d011a846281f8b2bd232f39002b"
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
