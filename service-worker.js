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
    "revision": "45f18cdb9206615135901fcf857eedfe"
  },
  {
    "url": "about.jpg",
    "revision": "d42f7ad1dc897a760e11fc71b1ea6372"
  },
  {
    "url": "about/index.html",
    "revision": "3a39e594c6f778e52405a27d9a6d5a73"
  },
  {
    "url": "assets/css/0.styles.3ca20bfe.css",
    "revision": "589d47f05c45e20593c559eb25b9263a"
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
    "url": "assets/js/1.b74c5d01.js",
    "revision": "96e9ee298215fde066ef166c8d8d2c27"
  },
  {
    "url": "assets/js/10.318b92d2.js",
    "revision": "ec631ac9f26ee4e2b8b1abed8eedd8c6"
  },
  {
    "url": "assets/js/11.70e07008.js",
    "revision": "c43ef9feb46449634a7b6c2df55ac8f6"
  },
  {
    "url": "assets/js/12.ab4b9028.js",
    "revision": "fa1da48776aaa0b20868c50b3612bb24"
  },
  {
    "url": "assets/js/13.afbacfea.js",
    "revision": "260704eac0ccb2a7fbdec0e492045ca4"
  },
  {
    "url": "assets/js/14.5f5b6931.js",
    "revision": "a5f8801956ba2ad4d69ffd6e82c3987f"
  },
  {
    "url": "assets/js/15.8b031f8b.js",
    "revision": "e434de2d6f743e360d1ece725e7bcd77"
  },
  {
    "url": "assets/js/16.3ee751b8.js",
    "revision": "410f4166d50ac8bc3b502e10d161105e"
  },
  {
    "url": "assets/js/17.93090e55.js",
    "revision": "fcb70350f211171ce5731d17e121fc23"
  },
  {
    "url": "assets/js/18.0f1259ed.js",
    "revision": "e74cfeb1ec53ed8b56af016b103fd90e"
  },
  {
    "url": "assets/js/19.aaab5cc2.js",
    "revision": "ee34f035c9fdfaeee3f5c62c0ca6bf01"
  },
  {
    "url": "assets/js/2.629d8712.js",
    "revision": "f8c63f27349c9c76189e012c69f53c08"
  },
  {
    "url": "assets/js/20.f86bdd7c.js",
    "revision": "7c5910cf635885d4c35fbac3b2f2ae5a"
  },
  {
    "url": "assets/js/21.a63b48fe.js",
    "revision": "54459ca030eb8bf69bf53648953210d0"
  },
  {
    "url": "assets/js/22.232e19aa.js",
    "revision": "65b24a06158f58249553e5844fdfd588"
  },
  {
    "url": "assets/js/23.a682afc6.js",
    "revision": "17dcd85277a9f18d688744b64189aeac"
  },
  {
    "url": "assets/js/24.cfc51cc0.js",
    "revision": "9c868bfcda3ab0a49cc908bf34c4f850"
  },
  {
    "url": "assets/js/25.2652a70f.js",
    "revision": "1c36536dd89d8d5dac9ddac72ed9c5ba"
  },
  {
    "url": "assets/js/26.a763f80b.js",
    "revision": "803d55f031e5a0a2c40b5bcbe6722e29"
  },
  {
    "url": "assets/js/27.0fdb7c9d.js",
    "revision": "aeee47055e3eb82b3b09bea33bbfac57"
  },
  {
    "url": "assets/js/28.69a3c4f2.js",
    "revision": "229294f9583e8e557ca5a0d8025ed284"
  },
  {
    "url": "assets/js/29.23a7fd23.js",
    "revision": "93675487e3ec80b0f4d5c0427b673f04"
  },
  {
    "url": "assets/js/30.5468edaf.js",
    "revision": "49f796dd1b5d3afe1f09c6c8281aaa5f"
  },
  {
    "url": "assets/js/31.308e8281.js",
    "revision": "d864f80ae803e1abebd85dbf34052651"
  },
  {
    "url": "assets/js/32.79782b56.js",
    "revision": "87b65c9aa72e8de6064ffcd06643640e"
  },
  {
    "url": "assets/js/33.ebe213b0.js",
    "revision": "90b64ba34841fd16f75d314c84173dca"
  },
  {
    "url": "assets/js/34.4337ffef.js",
    "revision": "f7d86e72e3be596bad75f60d415eb2a1"
  },
  {
    "url": "assets/js/35.15360ee9.js",
    "revision": "62f668f393019fc93089e74e5b1cfc11"
  },
  {
    "url": "assets/js/36.8e05a75e.js",
    "revision": "3fcbb5b2d0480b27771b5902e9a5a7b9"
  },
  {
    "url": "assets/js/37.7776d7a0.js",
    "revision": "26dd8417d5e61f703ff193c60e68e0a7"
  },
  {
    "url": "assets/js/38.9b4e511d.js",
    "revision": "ead8a9298c6b0e3d9a0d2762f274396d"
  },
  {
    "url": "assets/js/39.6463c174.js",
    "revision": "5fb4d562216c6769c6a4ca3ae0e354ca"
  },
  {
    "url": "assets/js/40.c09d27fe.js",
    "revision": "179367c9906a8c72f995b25583d19358"
  },
  {
    "url": "assets/js/41.1278460f.js",
    "revision": "208996d3d7ebfeda389a93b4095732cf"
  },
  {
    "url": "assets/js/42.d1933490.js",
    "revision": "8c4ec7d510ded331e183e7db8ab723df"
  },
  {
    "url": "assets/js/43.69d31cde.js",
    "revision": "bff90aeaaeeb7581326addd61ebb3354"
  },
  {
    "url": "assets/js/44.045bfae4.js",
    "revision": "437b9941f706bbfbcb2fed9d63a670ff"
  },
  {
    "url": "assets/js/45.86bcc274.js",
    "revision": "114174e5c7d397d57b2def8655319038"
  },
  {
    "url": "assets/js/46.fa9d0576.js",
    "revision": "fbbe518fe1b2442d6bfcf82dcbebef4b"
  },
  {
    "url": "assets/js/47.6fc077c3.js",
    "revision": "b78903d178671196bc1f7eea668669e6"
  },
  {
    "url": "assets/js/48.89b1e87d.js",
    "revision": "6b970734c70ed046c10be034a3d46742"
  },
  {
    "url": "assets/js/49.77511ff5.js",
    "revision": "72392a080236e582f5a42d5a2f95919f"
  },
  {
    "url": "assets/js/5.661f515f.js",
    "revision": "266c4debc6b7b6bd4b71c88207dda3bb"
  },
  {
    "url": "assets/js/50.188acbf1.js",
    "revision": "ac5248de089ad892b1600627b4e92a0b"
  },
  {
    "url": "assets/js/51.b2b88200.js",
    "revision": "1cd76a8ac9c37cff0ff85d5b824a6a67"
  },
  {
    "url": "assets/js/52.dd8b09e6.js",
    "revision": "4f2e5a1d1140b69a758a3305f5ef696f"
  },
  {
    "url": "assets/js/53.0358c234.js",
    "revision": "c96e31327865533ee33bb92b1140aba3"
  },
  {
    "url": "assets/js/54.009b88e1.js",
    "revision": "d41926f9e1c388756097a8482fa3b409"
  },
  {
    "url": "assets/js/55.eff63203.js",
    "revision": "f176933a7db98f47c15e4f788aed8482"
  },
  {
    "url": "assets/js/56.6dbe0f2e.js",
    "revision": "50ec4504cebe5f1ae2bbf2ef308be784"
  },
  {
    "url": "assets/js/57.2c9ea6f3.js",
    "revision": "9da04817e3d7cac579908a13fb7c9700"
  },
  {
    "url": "assets/js/58.5becfcf6.js",
    "revision": "a36a2a19488eacbe81dc745818a76016"
  },
  {
    "url": "assets/js/59.379dfca2.js",
    "revision": "c3631006bc6d6de8570cba71588d80cc"
  },
  {
    "url": "assets/js/6.4e89d43e.js",
    "revision": "fc7a8baf2dff454eba895d96b150fba1"
  },
  {
    "url": "assets/js/60.aa7b89dc.js",
    "revision": "733da23160015cd0a2f9a4a15877d764"
  },
  {
    "url": "assets/js/61.b5bd9f0e.js",
    "revision": "22b3e37140db004319d6aa8e71bf9318"
  },
  {
    "url": "assets/js/62.7f0df03f.js",
    "revision": "54d1236c962d61429a76192a4ebebfa8"
  },
  {
    "url": "assets/js/63.4f9dccad.js",
    "revision": "46d56634d39c5800f8b3985a0a41b34f"
  },
  {
    "url": "assets/js/64.be2923fb.js",
    "revision": "4ac2414c63f8d15c9a773265a758a6e7"
  },
  {
    "url": "assets/js/65.6d01ef50.js",
    "revision": "0528f4b8da713bd0727dd241c152c070"
  },
  {
    "url": "assets/js/66.b9d5859a.js",
    "revision": "3c33337bf8010b649581954f866a7907"
  },
  {
    "url": "assets/js/67.46bfe367.js",
    "revision": "30d356aedc78a31356559915da8fcc3b"
  },
  {
    "url": "assets/js/68.a95b72f9.js",
    "revision": "5383423353345dddad751a4d07c81ad6"
  },
  {
    "url": "assets/js/69.90b1444d.js",
    "revision": "9785a6abef0a2e407d8f93915135722e"
  },
  {
    "url": "assets/js/7.e4697bf0.js",
    "revision": "a9b20011f3b26a133276451634a14b78"
  },
  {
    "url": "assets/js/70.9f4c3f33.js",
    "revision": "385a17ccbcfa102813263c7a10288bc9"
  },
  {
    "url": "assets/js/8.4a0c6f4f.js",
    "revision": "7d0fba15d7025e732add60a4b73f9932"
  },
  {
    "url": "assets/js/9.29d5c264.js",
    "revision": "9839a872b7590aa009635b597c1dc0ef"
  },
  {
    "url": "assets/js/app.a32991cf.js",
    "revision": "83793c3f93adfe5b1bde7f429e6c74fb"
  },
  {
    "url": "assets/js/vendors~flowchart.4a6bd6c8.js",
    "revision": "d581f2ec2a71f7626c577b7acb197567"
  },
  {
    "url": "back-end/index.html",
    "revision": "e371bfcf9ffce321850b117be12f36bd"
  },
  {
    "url": "baodian/index.html",
    "revision": "8b2172216d9e4a9a6d5b5ea47e3bda0f"
  },
  {
    "url": "baodian/notes/array-unique.html",
    "revision": "9ea56f18c518317240eaac6dd55640c0"
  },
  {
    "url": "baodian/notes/async&sync.html",
    "revision": "9cd8c986570b012001c300cab71f58dc"
  },
  {
    "url": "baodian/notes/closure.html",
    "revision": "251618c26c8406869fe63577be4dc7bb"
  },
  {
    "url": "baodian/notes/crp.html",
    "revision": "53678dd8ded31da4246647c7561151d3"
  },
  {
    "url": "baodian/notes/css.html",
    "revision": "b3cb39788367bfcf1e3f56fd8b1c0edb"
  },
  {
    "url": "baodian/notes/debounce&throttle.html",
    "revision": "e5ab62ae991a6ef033a60acf56fa72e8"
  },
  {
    "url": "baodian/notes/deeplyClone.html",
    "revision": "622c1d56c3c75b98cf211100badbc0cc"
  },
  {
    "url": "baodian/notes/one.html",
    "revision": "cc3b568e9af1180783d2e1b689e2cd8c"
  },
  {
    "url": "baodian/notes/oop.html",
    "revision": "02a03e9606ae510b4f0165ff72b88414"
  },
  {
    "url": "baodian/notes/promise.html",
    "revision": "33f42d41c4ec6ed3d901f2cb49428977"
  },
  {
    "url": "baodian/notes/stackMemory.html",
    "revision": "2a264cd22645963abd6210434e85f00b"
  },
  {
    "url": "baodian/notes/ten-algorithms.html",
    "revision": "4ebf0b1872ef851084e0744efa321c5b"
  },
  {
    "url": "baodian/notes/vue-question.html",
    "revision": "63690e47f105bb6c90c209c4e5741a94"
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
    "revision": "cbd068e18ae647b5c4895ac1b9b401ee"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "5b12c2eff4546ff66d5db3cb3f06868d"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "5776b3514dd4d40966c3cdde8795a1a6"
  },
  {
    "url": "categories/力扣算法/index.html",
    "revision": "45c9727d80c7a5fd64a0c9d990ebd9c3"
  },
  {
    "url": "categories/大学课程/index.html",
    "revision": "870327ebf7fe64bb7f8987a4441cf760"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "e492dcc8b166534f87168097f0aa6ff6"
  },
  {
    "url": "collections/books.html",
    "revision": "334489f8cb854b4ee7545c7184c5156e"
  },
  {
    "url": "collections/tv.html",
    "revision": "0777a0b12fbe920485fc8e7f484dcd47"
  },
  {
    "url": "collegeCourses/highmath/function.html",
    "revision": "97712a01dc52bf476201232fdfa6b704"
  },
  {
    "url": "collegeCourses/highmath/infinity-limit.html",
    "revision": "11810536ce8708d952febc7756b7d01a"
  },
  {
    "url": "collegeCourses/highmath/multiple-function.html",
    "revision": "8c2fea0f96618e9c2f43c320b0725d17"
  },
  {
    "url": "collegeCourses/index.html",
    "revision": "ee595dedeea89e32e6ac7ed5340a8a5d"
  },
  {
    "url": "css/common.css",
    "revision": "82c31813b5a90bb606c717aefb64e1d7"
  },
  {
    "url": "day3+2/2021-01/0001.html",
    "revision": "ef7595e0abb94af920639d47a66e5ff5"
  },
  {
    "url": "day3+2/2021-01/0002.html",
    "revision": "303e3f89d043afed49dc9ec98b431973"
  },
  {
    "url": "day3+2/index.html",
    "revision": "39aeaac8f775bb98fb9b9fadc450d9bf"
  },
  {
    "url": "eassy/article-beiying.html",
    "revision": "495ba2c12f81b7c234bca82a283bc93f"
  },
  {
    "url": "eassy/index.html",
    "revision": "5210d6e3786fc05fcdfae6f4f778496e"
  },
  {
    "url": "front-end/index.html",
    "revision": "5844f6b7372d29f2553f4dc6a2b47a4a"
  },
  {
    "url": "front-end/javascript/AOP.html",
    "revision": "83f6df4037608c437f1f9967b226d674"
  },
  {
    "url": "front-end/javascript/events.html",
    "revision": "b8669017bc92ee0ba61d92b8ce385359"
  },
  {
    "url": "front-end/javascript/highOrder.html",
    "revision": "3264a91ed5d66a3c80bf88e3f46895bd"
  },
  {
    "url": "front-end/javascript/let&const.html",
    "revision": "c48f426cdae21e0874cef48b6c05bc36"
  },
  {
    "url": "front-end/javascript/observer.html",
    "revision": "7f843d7973111edd5dc9ef8d25f10bb4"
  },
  {
    "url": "front-end/vue/vue2-simple-mvvm.html",
    "revision": "1e34068205a2ee3a4066e4c95fa2688a"
  },
  {
    "url": "front-end/vue/vuex-origin-code.html",
    "revision": "d58d550690cefe62c09ec3447333776d"
  },
  {
    "url": "guide/notes/one.html",
    "revision": "116a6175c444583f8cf86e163b726983"
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
    "revision": "81814d61f7a58e49f5803f9ea844ea65"
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
    "revision": "362f279f753bf14df5e3e098388cfbe2"
  },
  {
    "url": "other/documents.html",
    "revision": "cdab628e9e8471ba1b432bfbec2dc8d9"
  },
  {
    "url": "other/documents/index.html",
    "revision": "1da1621e3eea3a628e3c197a74503ecb"
  },
  {
    "url": "other/projectPreview/index.html",
    "revision": "e594c84b47898660095cdce20a7d3317"
  },
  {
    "url": "other/projects/xm-shopping/index.html",
    "revision": "f08a108aeb8a0efd8df3d21251eba89b"
  },
  {
    "url": "other/projects/xm-shopping/index/makePage.html",
    "revision": "fd4d9469958e255ae55d17c3c78dd231"
  },
  {
    "url": "other/projects/xm-shopping/index/realizeFunction.html",
    "revision": "5486eb31aea8ba817ed7c7c48cecef25"
  },
  {
    "url": "other/projects/xm-shopping/init/initProject.html",
    "revision": "68d36622f12191a501a34fbd630d7ef8"
  },
  {
    "url": "tag/css/index.html",
    "revision": "2eb537e3b30d04ec96eb21e9afc5dbdd"
  },
  {
    "url": "tag/http/index.html",
    "revision": "99b80e26d7f52e54c562717d7105c3d4"
  },
  {
    "url": "tag/index.html",
    "revision": "2caf8904c956991d926cdae8cf7058ec"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "ad758272afcdcc1bd48ca30d6a463821"
  },
  {
    "url": "tag/javascript/page/2/index.html",
    "revision": "5ad6a7673e6e04fbde871a3e80e2ff76"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "64d00f101486bd14ab4d622e80594fec"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "cfa06e6f48e7e605d84675fa37f6802d"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "b8a40a9d99c44122baedd76c5325398a"
  },
  {
    "url": "tag/高数/index.html",
    "revision": "c5164527784960afa0dd0097128b7b05"
  },
  {
    "url": "timeline/index.html",
    "revision": "689da2aaa62d227c181df6bb2fa549e8"
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
