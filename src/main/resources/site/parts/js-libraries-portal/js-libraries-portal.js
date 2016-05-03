var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');
var portalJsLib = require('/lib/jslibraries/portal');
var view = resolve('js-libraries-portal.html');

function handleGet(req) {

    var assetUrlResult = portalJsLib.assetUrl();
    var attachmentUrlResult = portalJsLib.attachmentUrl();
    var componentUrlResult = portalJsLib.componentUrl();
    var imageUrlResult = portalJsLib.imageUrl();
    var pageUrlResult = portalJsLib.pageUrl();
    var serviceUrlResult = portalJsLib.serviceUrl();
    var processHtmlResult = JSON.stringify(portalJsLib.processHtml(), null, 4);

    var params = {
        assetUrlResult: assetUrlResult,
        attachmentUrlResult: attachmentUrlResult,
        componentUrlResult: componentUrlResult,
        imageUrlResult: imageUrlResult,
        pageUrlResult: pageUrlResult,
        serviceUrlResult: serviceUrlResult,
        processHtmlResult: processHtmlResult
    };

    var body = thymeleaf.render(view, params);

    return {
        contentType: 'text/html',
        body: body
    };
}

exports.get = handleGet;