'use strict';

var index = require('./index-5e6972d8.js');
var electron = require('electron');
require('atom');

function updateCount(details) {
    return index.__awaiter(this, void 0, void 0, function () {
        var multimatch;
        return index.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('./index-88c83e34.js'); }).then(function (n) { return n.index; })];
                case 1:
                    multimatch = (_a.sent())["default"];
                    index.store.update(function (state) {
                        state.counter++;
                        state.buttonClass = 'error';
                        switch (true) {
                            case multimatch(details.url, index.trackingURLs.adobe).length > 0:
                                state.services.adobe.counter++;
                                break;
                            case multimatch(details.url, index.trackingURLs.bugsnag).length > 0:
                                state.services.bugsnag.counter++;
                                break;
                            case multimatch(details.url, index.trackingURLs.metrics).length > 0:
                                state.services.metrics.counter++;
                                break;
                            case multimatch(details.url, index.trackingURLs.analytics).length > 0:
                                state.services.analytics.counter++;
                                break;
                            case multimatch(details.url, index.trackingURLs.tagManager).length > 0:
                                state.services.tagManager.counter++;
                                break;
                            case multimatch(details.url, index.trackingURLs.matomo).length > 0:
                            case details.url.includes('matomo.js'):
                            case details.url.includes('matomo.php'):
                            case details.url.includes('piwik.js'):
                            case details.url.includes('piwik.php'):
                                state.services.matomo.counter++;
                                break;
                            case multimatch(details.url, index.trackingURLs.microsoft).length > 0:
                                state.services.microsoft.counter++;
                                break;
                            case multimatch(details.url, index.trackingURLs.posthog).length > 0:
                                state.services.posthog.counter++;
                                break;
                            case multimatch(details.url, index.trackingURLs.sentry).length > 0:
                                state.services.sentry.counter++;
                                break;
                            case multimatch(details.url, index.trackingURLs.yandex).length > 0:
                                state.services.yandex.counter++;
                                break;
                            default:
                                state.services.others.counter++;
                        }
                        return state;
                    });
                    return [2 /*return*/];
            }
        });
    });
}

function composeFilter() {
    var urls = [];
    var defaultTracking = index.getConfig('defaultTracking');
    for (var _i = 0, _a = Object.keys(defaultTracking); _i < _a.length; _i++) {
        var key = _a[_i];
        if (defaultTracking[key] && index.trackingURLs[key]) {
            urls.push.apply(urls, index.trackingURLs[key]);
        }
    }
    var customUrls;
    index.store.subscribe(function (value) {
        customUrls = value.customUrls;
    });
    if (customUrls.length)
        urls.push.apply(urls, customUrls);
    return { urls: urls };
}
function init() {
    return index.__awaiter(this, void 0, void 0, function () {
        var filter;
        var _this = this;
        return index.__generator(this, function (_a) {
            filter = composeFilter();
            electron.remote.session.defaultSession.webRequest.onBeforeSendHeaders(filter, function (details, callback) { return index.__awaiter(_this, void 0, void 0, function () {
                return index.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('Connection blocked', details);
                            return [4 /*yield*/, updateCount(details)];
                        case 1:
                            _a.sent();
                            callback({
                                cancel: true
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}

exports.init = init;
//# sourceMappingURL=filter-c109bc43.js.map
