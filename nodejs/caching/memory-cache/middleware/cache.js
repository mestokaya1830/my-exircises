const cache = require('memory-cache')
const memCache = new cache.Cache()

const cacheMiddleware = (duration) => {
  return (req, res, next) => {

    if (req.method !== 'GET') {
      return next()
    }

    const key = '__express__' + (req.originalUrl || req.url)
    const cachedBody = memCache.get(key)

    if (cachedBody) {
      return res.send(cachedBody)
    }

    const originalSend = res.send.bind(res)

    res.send = (body) => {
      memCache.put(key, body, duration * 1000)
      return originalSend(body)
    }

    next()
  }
}

module.exports = cacheMiddleware