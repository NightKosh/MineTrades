
var app = angular.module("app", ['ui.select', 'ngSanitize']);

app.service('PageService', function () {
    var getJsonFromUrl = function () {
        var result = {};
        var query = location.search.substr(1);
        query.split("&").forEach(function (part) {
            var item = part.split("=");
            if (item[0] && item[1]) {
                result[item[0]] = decodeURIComponent(item[1]);
            }
        });

        for (var key in CONFIGS) {
            if (!result.hasOwnProperty(key)) {
            	result[key] = CONFIGS[key];
            }
        }
        return result;
    };
    var pageParams = getJsonFromUrl();

    this.getLinkWithLangParams = function (link) {
        if (pageParams.lang != CONFIGS.lang) {
            link += (link.indexOf("?") == -1) ? "?" : "&";
            link += "lang=" + pageParams.lang;
        }
        return link;
    };

    this.getPageParams = function () {
        return pageParams;
    };
});
