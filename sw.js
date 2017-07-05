/**
 * Generated on Wed Jul 05 2017 16:46:27 GMT+1000
 */

importScripts('https://unpkg.com/workbox-sw@1.0.1');
importScripts('./manifest.js');

const workboxSW = new self.WorkboxSW();
workboxSW.precache(self.__file_manifest);

const realURLs = [
  'https://fonts.googleapis.com/',
  'https://fonts.gstatic.com/',
  'https://cdn.rawgit.com/samthor/rippleJS/',
];
function escape(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
realURLs.forEach(prefix => {
  // TODO: This only caches the request on the 2nd load. However it's probably coming out of cache
  // for a while anyway because the resources are served with stupid high expiries.
  const r = new RegExp('^' + escape(prefix) + '.*');
  workboxSW.router.registerRoute(r, workboxSW.strategies.cacheFirst());
});

// TODO: post message to console/etc saying new version ready
