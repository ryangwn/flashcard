import { registerRoute } from 'workbox-routing'
import { ExpirationPlugin } from 'workbox-expiration'
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies'
import { precacheAndRoute } from 'workbox-precaching'
import { build } from '$service-worker'

const precacheBuild = build.map(file => ({ url: file, revision: null }))
precacheAndRoute([
  ...precacheBuild
])

const domains = [
  'https://flashcard-app.vitalmin.group',
]

self.addEventListener('install', () => {
  // Skip over the "waiting" lifecycle state, to ensure that our
  // new service worker is activated immediately, even if there's
  // another tab open controlled by our older service worker code.
  self.skipWaiting()
})

registerRoute(
  /^https:\/\/flashcard-app\.vitalmin\.group(?:\/(?:\?|$).*?)?$/,
  new StaleWhileRevalidate({
    cacheName: 'flashcard-app-base',
  }),
)

registerRoute(
  ({ url }) => {
    if (domains.includes(url.origin)) {
      if (url.pathname.match(/\.(?:woff2|css|js)$/))
        return true

      return false
    }
  },
  new CacheFirst({
    cacheName: 'flashcard-app-pre',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 24 * 24 * 60 * 60,
      }),
    ],
  }),
)
