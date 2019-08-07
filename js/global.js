
app.controller("GlobalPageCtrl", ['$scope', '$http', '$interval', 'PageService', function($scope, $http, $interval, PageService) {
    $scope.globalData = {};

    $http.get('data/global/' + PageService.getPageParams().lang + '.json?v=' + version).success(function (data, status, headers, config) {
        $scope.globalData = data;
    });

    $scope.itemArray = [];
    $http.get('data/items.json?v=' + version).success(function (data, status, headers, config) {
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

    var bgImages = [
        "emerald",
        "diamond",
        "gold",
        "iron-ore",
        "acacia-wood",
        "andesite",
        "bookshelf",
        "bricks",
        "cactus",
        "chest",
        "coal-ore",
        "crafting-table",
        "diamond-ore",
        "dispenser",
        "diorite",
        "furnace",
        "glowstone",
        "gold-ore",
        "grass",
        "hay",
        "lava",
        "lazuli",
        "leaves",
        "magma",
        "melon",
        "moss-stone",
        "mushroom",
        "mycelium",
        "nether-brick",
        "netherrack",
        "note-block",
        "observer",
        "obsidian",
        "piston",
        "podzol",
        "prismarine",
        "pumpkin",
        "purpur",
        "quartz",
        "granite",
        "redstone",
        "redstone-lamp",
        "sand",
        "sandstone",
        "sea-lantern",
        "slime",
        "soul-sand",
        "sponge",
        "tnt",
        "water",
        "stone",
        "spruce-wood",
        "bedrock",
        "birch-wood",
        "bone",
        "end-stone"
    ];
    $scope.bgPos = 0;
    $scope.class = bgImages[$scope.bgPos];
    // $scope.class = bgImages[9];
    $interval(function() {
        $scope.bgPos = ($scope.bgPos == bgImages.length - 1) ? 0 : $scope.bgPos + 1;
        $scope.class = bgImages[$scope.bgPos];
    }, 5000);
}]);