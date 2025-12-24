const CACHE_NAME = 'metronome-v1';
const ASSETS = [
  'jiepai.html',
  'manifest.json',
  'icon.png',
  'icon-512.png'
];

// 安装并缓存资源
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 拦截请求，优先使用缓存
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});