var sendParams = {};

var mock = {
    send: function (params) {
        sendParams = params;
        return true;
    }
};

exports.sendParams = function () {
    return sendParams;
};

__.registerMock('/site/lib/xp/mail.js', mock);
