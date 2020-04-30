
app.controller("GlobalPageCtrl", ['$scope', '$http', '$interval', 'PageService', function($scope, $http, $interval, PageService) {
    $scope.globalData = {};
    $scope.map = PageService.getPageParams().map;
    $scope.getMapLink = function($trade, $world) {
        return $world.link +
            "?worldname=" + $world.prefix +
            "&mapname=" + $world.mapname +
            "&zoom=" + $world.zoom +
            "&x=" + $trade.x +
            "&y=" + $trade.y +
            "&z=" + $trade.z;
    };
    $scope.showEnchantedBook = function(item) {
        return (item.itemInfo && item.itemInfo.enchantments);
    }
    $scope.showNameTag = function(item) {
        return (item.itemInfo && item.itemInfo.name && item.itemInfo.name.length > 0);
    }
    $scope.getEnchantments = function(item) {
        let str = "";
        if ($scope.showEnchantedBook(item)) {
            let enchantments = item.itemInfo.enchantments;
            for (let enchantment in enchantments) {
                str += enchantment + " - " + enchantments[enchantment] + "\n";
            }
            return str;
        }
        return "";
    }
    $scope.getCustomName = function(item) {
        return $scope.showNameTag(item) ? item.itemInfo.name : "";
    }

    $http.get('data/global/' + PageService.getPageParams().lang + '.json?v=' + version).success(function (data, status, headers, config) {
        $scope.globalData = data;
    });

    $scope.choosedItem = "";
    $scope.itemArray = [];
    $http.get('data/items/' + PageService.getPageParams().lang + '.json?v=' + version).success(function (data, status, headers, config) {
        $scope.items = data;
        let i = 1;
        for (let item in data) {
            let itemName;
            let itemClass;
            let itemEnchantment;
            if (data[item] instanceof String || typeof data[item] === "string") {
                itemName = data[item];
                itemClass = item;
            } else {
                itemName = data[item].name;
                itemClass = data[item].class;
                itemEnchantment = data[item].enchantment;
            }
            $scope.itemArray.push({
                id : i,
                name: itemName,
                class: itemClass,
                enchantment: itemEnchantment
            });
            i++;
        }
    });

    $scope.hasTrades = false;
    $scope.searchResults = [];
    $scope.onSelect = function($item) {
        $scope.choosedItem = $item.class;
        let link = CONFIGS.link + '?item=' + $item.class;
        if ($item.enchantment) {
            link += "&enchantment=" + $item.enchantment;
        }
        $http.get(link).success(function (data, status, headers, config) {
            $scope.searchResults = data;
            $scope.hasTrades = (Object.keys(data).length === 0 && data.constructor === Object);
        });
    };

    $scope.bgPos = 0;
    $scope.class1 = BACKGROUND[0];
    $scope.hide = false;
    $interval(function() {
        let nextPos = ($scope.bgPos == BACKGROUND.length - 1) ? 0 : $scope.bgPos + 1;
        let class1 = BACKGROUND[$scope.bgPos];
        let class2 = BACKGROUND[nextPos];
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