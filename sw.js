 if ('serviceWorker' in navigator) {
     //Removed the following line of code to register sw in safari - success
        //window.addEventListener('load', function() {
            navigator.serviceWorker.register('sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
            });
        //});
        }

        var CACHE_NAME = 'aloft-site-cache-v1';

        self.addEventListener('install', function(event) {
            var CACHE_NAME = 'aloft-site-cache-v1';
            var urlsToCache = [
            '/',
            '/company.html',
            '/description.html',
            '/directory.html',
            '/index.html',
            '/directory.html',
            '/index.html',
            '/listings.html',
            '/profile.html',
            '/resources.html',
            '/settings.html',
            '/tallships.html',
            '/css/custom.min.css',
            '/css/custom.css',
            '/css/slidebars.min.css',
            '/css/all.min.css',
            '/css/bootstrap.min.css',
            '/css/bootstrap.min.css.map',
            '/js/pwacompat.min.js',
            '/js/turbolinks.js',
            '/js/jquery.min.js',
            '/js/popper.min.js',
            '/js/slidebars.min.js',
            '/js/lazyload.min.js',
            '/js/jquery.nicescroll.min.js',
            '/js/custom.js',
            '/img/aloft-logo.png',
            '/img/angle-double-down-solid.svg',
            '/img/appledoreII-16x9.png',
            '/img/appledore2.png',
            '/img/bagheera.png',
            '/img/haliematthew.png',
            '/img/hamilton-marine.png',
            '/img/icon192x192.png',
            '/img/icon512x512.png',
            '/img/libertyclipper.png',
            '/img/neropes-logo.png',
            '/img/placeholder.png',
            '/img/timberwind.png',
            '/img/timberwind-16x9.png',
            '/img/wendameen.png',
            '/manifest.webmanifest',
            ];

            self.addEventListener('install', function(event) {
            // Perform install steps
            event.waitUntil(
                caches.open(CACHE_NAME)
                .then(function(cache) {
                    console.log('Opened cache');
                    return cache.addAll(urlsToCache);
                })
            );
            });
        });

        self.addEventListener('fetch', function(event) {
        event.respondWith(
            caches.match(event.request)
            .then(function(response) {
                // Cache hit - return response
                if (response) {
                return response;
                }

                return fetch(event.request).then(
                function(response) {
                    // Check if we received a valid response
                    if(!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                    }

                    // IMPORTANT: Clone the response. A response is a stream
                    // and because we want the browser to consume the response
                    // as well as the cache consuming the response, we need
                    // to clone it so we have two streams.
                    var responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                    .then(function(cache) {
                        cache.put(event.request, responseToCache);
                    });

                    return response;
                }
                );
            })
            );
        });

