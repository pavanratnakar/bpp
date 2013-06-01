YUI_config.groups.gallery.root= 'gallery-2012.04.26-15-49/build/';
YUI_config.groups.gallery.base= 'http://yui.yahooapis.com/combo?gallery-2012.04.26-15-49/build/';

window.YUI_config = window.YUI_config || {groups:{}};
YUI_config.groups.bpp = {
    "lang": "en-US",
    "comboBase": "http://localhost:3000/combo?",
    "root": "development/",
    "combine": false,
    "base": "/build/development/",
    "modules": {
        "bpp-app-view": {
            "requires": [
                "view",
                "bpp-config",
                "bpp-business-view",
                "bpp-business-model",
                "bpp-map-view"
            ],
            "path": "app/js/app.js",
            "type": "js"
        },
        "bpp-app-css": {
            "requires": [],
            "path": "app/css/app.css",
            "type": "css"
        },
        "bpp-business-model": {
            "requires": [
                "model"
            ],
            "path": "business/js/model.js",
            "type": "js"
        },
        "bpp-business-view": {
            "requires": [
                "view",
                "bpp-review-view"
            ],
            "path": "business/js/view.js",
            "type": "js"
        },
        "bpp-business-css": {
            "requires": [],
            "path": "business/css/business.css",
            "type": "css"
        },
        "bpp-config": {
            "requires": [
                "bpp-util",
                "bpp-deferred"
            ],
            "path": "config/js/config.js",
            "type": "js"
        },
        "bpp-hero-css": {
            "requires": [],
            "path": "hero/css/hero.css",
            "type": "css"
        },
        "bpp-deferred": {
            "requires": [
                "gallery-deferred"
            ],
            "path": "lib/js/deferred.js",
            "type": "js"
        },
        "bpp-jsonp": {
            "requires": [
                "jsonp",
                "jsonp-url",
                "cache-offline",
                "bpp-config"
            ],
            "path": "lib/js/jsonp.js",
            "type": "js"
        },
        "bpp-mute": {
            "requires": [
                "oop"
            ],
            "path": "lib/js/mute.js",
            "type": "js"
        },
        "bpp-template": {
            "requires": [
                "base",
                "bpp-util"
            ],
            "path": "lib/js/template.js",
            "type": "js"
        },
        "bpp-util": {
            "requires": [
                "oop",
                "node",
                "transition",
                "escape"
            ],
            "path": "lib/js/util.js",
            "type": "js"
        },
        "bpp-lib-css": {
            "requires": [],
            "path": "lib/css/lib.css",
            "type": "css"
        },
        "bpp-map-view": {
            "requires": [
                "ymaps",
                "bpp-map-css"
            ],
            "path": "map/js/view.js",
            "type": "js"
        },
        "bpp-map-css": {
            "requires": [],
            "path": "map/css/map.css",
            "type": "css"
        },
        "bpp-review-model-list": {
            "requires": [
                "model-list",
                "bpp-review-model"
            ],
            "path": "review/js/model-list.js",
            "type": "js"
        },
        "bpp-review-model": {
            "requires": [
                "model"
            ],
            "path": "review/js/model.js",
            "type": "js"
        },
        "bpp-review-templates": {
            "requires": [
                "bpp-template"
            ],
            "path": "review/js/templates.js",
            "type": "js"
        },
        "bpp-review-view": {
            "requires": [
                "view",
                "bpp-review-model",
                "bpp-review-css",
                "bpp-util",
                "bpp-config"
            ],
            "path": "review/js/view.js",
            "type": "js"
        },
        "bpp-review-css": {
            "requires": [],
            "path": "review/css/review.css",
            "type": "css"
        }
    }
};