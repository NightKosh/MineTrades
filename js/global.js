
app.controller("GlobalPageCtrl", ['$scope', '$http', '$interval', 'PageService', function($scope, $http, $interval, PageService) {
    $scope.globalData = {};

    $http.get('data/global/' + PageService.getPageParams().lang + '.json?v=' + version).success(function (data, status, headers, config) {
        $scope.globalData = data;
    });

    $scope.itemArray = [];
    $http.get('data/items/' + PageService.getPageParams().lang + '.json?v=' + version).success(function (data, status, headers, config) {
        $scope.items = data;

        var i = 1;
        for (item in data) {
            $scope.itemArray.push({
                id : i,
                name: data[item],
                class: item
            });
            i++;
        }
    });

    $scope.search_results = [];
    $scope.onSelect = function($item) {
        $http.get(CONFIGS.link + '?item=' + $item.class).success(function (data, status, headers, config) {
            $scope.search_results = data.elements;
        });
    };

    $scope.bgPos = 0;
    $scope.class1 = BACKGROUND[0];
    $scope.hide = false;
    $interval(function() {
        var nextPos = ($scope.bgPos == BACKGROUND.length - 1) ? 0 : $scope.bgPos + 1;
        var class1 = BACKGROUND[$scope.bgPos];
        var class2 = BACKGROUND[nextPos];
        if ($scope.hide) {
            $scope.class1 = class1;
            $scope.class2 = class2;
        } else {
            $scope.class1 = class2;
            $scope.class2 = class1 + " tr";
        }
        $scope.bgPos = nextPos;
        $scope.hide = !$scope.hide;
    }, 8000);
}]);