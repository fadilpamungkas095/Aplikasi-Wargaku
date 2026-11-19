// Service Worker (sw.js) — Wajib ada agar Chrome HP mengenali web sebagai Aplikasi (PWA)
const CACHE_NAME = 'portal-warga-rt-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json'
];

// Tahap Install: Menyimpan file dasar aplikasi ke memori HP
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Tahap Aktivasi: Membersihkan cache versi lama jika ada pembaruan
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Tahap Fetch: Mengambil data dari jaringan terlebih dahulu, jika offline ambil dari cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
