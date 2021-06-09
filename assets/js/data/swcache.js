const resource = [ /* --- CSS --- */ '/entrepreneurship/assets/css/style.css', /* --- JavaScripts --- */ '/entrepreneurship/assets/js/dist/home.min.js', '/entrepreneurship/assets/js/dist/page.min.js', '/entrepreneurship/assets/js/dist/post.min.js', '/entrepreneurship/assets/js/dist/categories.min.js', '/entrepreneurship/assets/js/data/search.json', '/entrepreneurship/app.js', '/entrepreneurship/sw.js', /* --- HTML --- */ '/entrepreneurship/index.html', '/entrepreneurship/404.html', '/entrepreneurship/categories/', '/entrepreneurship/tags/', '/entrepreneurship/archives/', '/entrepreneurship/about/', /* --- Favicons --- */ '/entrepreneurship/assets/img/favicons/android-chrome-192x192.png', '/entrepreneurship/assets/img/favicons/android-chrome-512x512.png', '/entrepreneurship/assets/img/favicons/apple-touch-icon.png', '/entrepreneurship/assets/img/favicons/favicon-16x16.png', '/entrepreneurship/assets/img/favicons/favicon-32x32.png', '/entrepreneurship/assets/img/favicons/favicon.ico', '/entrepreneurship/assets/img/favicons/mstile-150x150.png', '/entrepreneurship/assets/img/favicons/site.webmanifest', '/entrepreneurship/assets/img/favicons/browserconfig.xml' ]; /* The request url with below domain will be cached */ const allowedDomains = [ 'www.googletagmanager.com', 'www.google-analytics.com', 'youaskwebuild.github.io/entrepreneurship', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];
