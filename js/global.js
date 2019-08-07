
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
    $scope.class = BACKGROUND[$scope.bgPos];
    $interval(function() {
        $scope.bgPos = ($scope.bgPos == BACKGROUND.length - 1) ? 0 : $scope.bgPos + 1;
        $scope.class = BACKGROUND[$scope.bgPos];
    }, 5000);
}]);