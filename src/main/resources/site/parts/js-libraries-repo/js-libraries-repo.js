var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');
var repoJsLib = require('/lib/jslibraries/repo');
var view = resolve('js-libraries-repo.html');

function handleGet(req) {
    var createFeaturesRepoResult = JSON.stringify(repoJsLib.create('features-repo'), null, 4);
    var getFeaturesRepoResult = JSON.stringify(repoJsLib.get('features-repo'), null, 4);

    var createBranchResult;
    try {
        createBranchResult = JSON.stringify(repoJsLib.createBranch('features-branch'), null, 4);
    } catch (exc) {
        log.info("Error: " + JSON.stringify(exc, null, 2));
        createBranchResult = "Branch [features-branch] already exist";
    }
    var listReposResult = JSON.stringify(repoJsLib.list(), null, 4);

    var params = {
        createFeaturesRepoResult: createFeaturesRepoResult,
        getFeaturesRepoResult: getFeaturesRepoResult,
        createBranchResult: createBranchResult,
        listReposResult: listReposResult
    };

    var body = thymeleaf.render(view, params);

    return {
        contentType: 'text/html',
        body: body
    };
}

exports.get = handleGet;