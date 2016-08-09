var contentLib = require('/lib/xp/content');
var contextLib = require('/lib/xp/context');
var portalLib = require('/lib/xp/portal');

function handleGet(req) {

    log.info("CustomSelector service get: %s", req.params);

    var body = {
        total: 20,
        count: 2,
        hits: [{
            id: 1,
            displayName: "Option number 1",
            description: "External SVG file is used as icon",
            iconUrl: "/assets/images/number1.svg",
            icon: null
        }, {
            id: 2,
            displayName: "Option number 2",
            description: "Inline SVG markup is used as icon",
            iconUrl: null,
            icon: {
                data: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32"><path fill="#000" d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM16 27c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11-4.925 11-11 11zM15.609 11.337c-0.935 0-1.704 0.311-2.309 0.933s-0.905 1.442-0.905 2.458c0 0.976 0.286 1.768 0.857 2.376s1.253 0.913 2.041 0.913c0.725 0 1.328-0.281 1.812-0.842-0.077 1.149-0.255 1.906-0.532 2.271-0.278 0.364-0.614 0.547-1.011 0.547-0.314 0-0.566-0.092-0.758-0.274s-0.31-0.464-0.355-0.843l-1.858 0.205c0.137 0.833 0.446 1.459 0.929 1.877 0.483 0.419 1.117 0.629 1.9 0.629 1.090 0 1.973-0.406 2.652-1.219 0.679-0.812 1.019-2.135 1.019-3.968 0-1.802-0.326-3.096-0.978-3.883s-1.487-1.18-2.504-1.18zM16.555 16.173c-0.252 0.292-0.562 0.438-0.931 0.438-0.382 0-0.701-0.151-0.956-0.455s-0.382-0.779-0.382-1.426c0-0.638 0.117-1.098 0.351-1.378s0.529-0.42 0.885-0.42c0.373 0 0.701 0.171 0.986 0.513 0.284 0.342 0.427 0.823 0.427 1.443 0 0.565-0.126 0.993-0.38 1.285z"></path></svg>',
                type: "image/svg+xml"
            }
        }]
    };

    return {
        contentType: 'application/json',
        body: body
    }
}

exports.get = handleGet;