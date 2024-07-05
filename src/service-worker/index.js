import { registerRoute } from 'workbox-routing'
import { ExpirationPlugin } from 'workbox-expiration'
import { CacheFirst } from 'workbox-strategies'

const domains = [
  'https://flashcard-vtm.pages.dev',
]

self.addEventListener('install', () => {
  // Skip over the "waiting" lifecycle state, to ensure that our
  // new service worker is activated immediately, even if there's
  // another tab open controlled by our older service worker code.
  self.skipWaiting()
})

registerRoute(
  /^https:\/\/flashcard-vtm\.pages\.dev(?:\/(?:\?|$).*?)?$/,
  new CacheFirst({
    cacheName: 'flashcard-app-base',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 2,
        maxAgeSeconds: 20 * 24 * 60 * 60, // 20 days
      }),
    ],
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
