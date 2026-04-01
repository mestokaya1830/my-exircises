
//change something here to create cache file in inspect cache storage
//and go service worker and click skip waiting
let cacheName = 'cache-name'
const cacheLise = [
  '/',
  './index.html',
  './pages/users.html',
  // './pages/contact.html',//this page is not in cache check offline mode
  './static/main.css',
  './static/icons/',
  './static/images/'
]

const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name. size))
      }
    })
  })
}
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName)
    .then(cache => {
      cache.addAll(cacheLise)
    })
    .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      for (let item of keys) {
        if(item !== cacheName) caches.delete(item)
    }})
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request).then(fetchRes => {
        limitCacheSize(cacheName, 200)//if cache size is be small not all pages cached loot at the cache storage
        return fetchRes
      })
    })
  )
})
