// Removes the service worker left behind by the old Gatsby site
// (gatsby-plugin-offline). Browsers that still have it installed keep
// serving the cached Gatsby app, which fails with "page resources for /
// not found". When they check for an update, they get this script instead,
// which clears the old caches, unregisters itself and reloads open tabs.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const windows = await self.clients.matchAll({ type: "window" });
      for (const client of windows) client.navigate(client.url);
    })(),
  );
});
