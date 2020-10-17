const cacheName = "v1.0.0",
  filesToCache = ["index.html", "./images/logo.png", "./manifest.json"],
  self = this;

this.addEventListener("install", (e) => {
  e.waitUntil(caches.open(cacheName));
});
