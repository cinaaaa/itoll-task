const CACHE_NAME = "image-cache-v1";
const IMAGE_CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// List of asset types to cache (you can customize this)
const ASSET_TYPES_TO_CACHE = ["image"];

// Install event: Precache images
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...");
  self.skipWaiting(); // Activate the service worker immediately
});

// Activate event: Clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Service Worker: Deleting old cache:", cache);
            return caches.delete(cache);
          }
        }),
      );
    }),
  );
  return self.clients.claim();
});

// Fetch event: Intercept image requests and cache them
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Only cache image requests
  if (
    ASSET_TYPES_TO_CACHE.some((type) =>
      request.headers.get("accept").includes(type),
    )
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          const fetchPromise = fetch(request).then((networkResponse) => {
            // Cache the fetched image with an expiration time
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });

          // Return the cached image or wait for the network response
          return cachedResponse || fetchPromise;
        });
      }),
    );
  }
});

// Periodically clean up expired cache
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.keys().then((keys) => {
        keys.forEach((key) => {
          cache.match(key).then((response) => {
            const headers = response.headers;
            const date = headers.get("date");
            const currentTime = new Date().getTime();

            if (new Date(date).getTime() + IMAGE_CACHE_TTL < currentTime) {
              cache.delete(key); // Remove expired images
            }
          });
        });
      });
    }),
  );
});
const OFFLINE_URL = "/offline.html";

// List of files to cache (adjust paths to your needs)
const ASSETS_TO_CACHE = ["/"];

// Install the service worker and cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }),
  );
});

// Intercept network requests
self.addEventListener("fetch", (event) => {
  // Cache strategy for API calls
  if (event.request.url.includes("/api/products")) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return (
          response ||
          fetch(event.request)
            .then((networkResponse) => {
              return caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
              });
            })
            .catch(() => caches.match(OFFLINE_URL)) // Fallback to offline page if no network
        );
      }),
    );
  } else {
    // Cache strategy for other assets (e.g., HTML, CSS)
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      }),
    );
  }
});
