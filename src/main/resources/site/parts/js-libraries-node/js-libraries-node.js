var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');
var nodeJsLib = require('/lib/jslibraries/node');
var view = resolve('js-libraries-node.html');

function handleGet(req) {

    var createResult = JSON.stringify(nodeJsLib.create(), null, 4);
    var getNodeByKeyResult = JSON.stringify(nodeJsLib.getNodeByKey(), null, 4);
    var getMissingNodeByKeyResult = JSON.stringify(nodeJsLib.getMissingNodeByKey(), null, 4);
    var getNodesByKeysResult = JSON.stringify(nodeJsLib.getNodesByKeys(), null, 4);
    var renameResult = JSON.stringify(nodeJsLib.rename(), null, 4);
    var moveResult = JSON.stringify(nodeJsLib.move(), null, 4);
    var moveAndRenameResult = JSON.stringify(nodeJsLib.moveAndRename(), null, 4);
    var deleteResult = JSON.stringify(nodeJsLib.delete(), null, 4);
    var diffResult = JSON.stringify(nodeJsLib.diff(), null, 4);
    var pushResult = JSON.stringify(nodeJsLib.push(), null, 4);
    var findChildrenResult = JSON.stringify(nodeJsLib.findChildren(), null, 4);
    var queryResult = JSON.stringify(nodeJsLib.query(), null, 4);
    /*  var createResult = {};
     var getNodeByKeyResult = {};
     var getMissingNodeByKeyResult = {};
     var getNodesByKeysResult = {};
     var renameResult = {};
     var moveResult = {};
     var moveAndRenameResult = {};
     var deleteResult = {};
     var diffResult = {};
     var pushResult = {};
     */
    var params = {
        createResult: createResult,
        getNodeByKeyResult: getNodeByKeyResult,
        getMissingNodeByKeyResult: getMissingNodeByKeyResult,
        getNodesByKeysResult: getNodesByKeysResult,
        renameResult: renameResult,
        moveResult: moveResult,
        moveAndRenameResult: moveAndRenameResult,
        deleteResult: deleteResult,
        diffResult: diffResult,
        pushResult: pushResult,
        findChildrenResult: findChildrenResult,
        queryResult: queryResult
    };

    var body = thymeleaf.render(view, params);

    return {
        contentType: 'text/html',
        body: body
    };
}

exports.get = handleGet;