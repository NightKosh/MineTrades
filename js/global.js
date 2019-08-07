
app.controller("GlobalPageCtrl", ['$scope', '$http', '$interval', 'PageService', function($scope, $http, $interval, PageService) {
    $scope.globalData = {};

    $http.get('data/global/' + PageService.getPageParams().lang + '.json?v=' + version).success(function (data, status, headers, config) {
        $scope.globalData = data;

        // $scope.globalData.enLink = PageService.getNewLocalizedLinkByParams("en");
        // $scope.globalData.ruLink = PageService.getNewLocalizedLinkByParams("ru");
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

        $scope.selected = { value: $scope.itemArray[0] };
    });

    $scope.search_results = [
        {
            world: "world",
            x: 100,
            y: 500,
            z: 700,
            price: 2000
        },
        {
            world: "world_nether",
            x: -5832,
            y: 150,
            z: -100500,
            price: 70000
        },
        {
            world: "world_the_end",
            x: 800,
            y: 10,
            z: 636,
            price: 133
        },
        {
            world: "world_nether",
            x: -5832,
            y: 150,
            z: -100500,
            price: 70000
        },
        {
            world: "world_the_end",
            x: 800,
            y: 10,
            z: 636,
            price: 133
        },
        {
            world: "world_nether",
            x: -5832,
            y: 150,
            z: -100500,
            price: 70000
        },
        {
            world: "world_the_end",
            x: 800,
            y: 10,
            z: 636,
            price: 133
        },
        {
            world: "world_nether",
            x: -5832,
            y: 150,
            z: -100500,
            price: 70000
        },
        {
            world: "world_the_end",
            x: 800,
            y: 10,
            z: 636,
            price: 133
        },
        {
            world: "world_nether",
            x: -5832,
            y: 150,
            z: -100500,
            price: 70000
        },
        {
            world: "world_the_end",
            x: 800,
            y: 10,
            z: 636,
            price: 133
        },
        {
            world: "world_nether",
            x: -5832,
            y: 150,
            z: -100500,
            price: 70000
        },
        {
            world: "world_the_end",
            x: 800,
            y: 10,
            z: 636,
            price: 133
        },
        {
            world: "world_nether",
            x: -5832,
            y: 150,
            z: -100500,
            price: 70000
        },
        {
            world: "world_the_end",
            x: 800,
            y: 10,
            z: 636,
            price: 133
        },
        {
            world: "world_nether",
            x: -5832,
            y: 150,
            z: -100500,
            price: 70000
        },
        {
            world: "world_the_end",
            x: 800,
            y: 10,
            z: 636,
            price: 133
        },
        {
            world: "world_nether",
            x: -5832,
            y: 150,
            z: -100500,
            price: 70000
        },
        {
            world: "world_the_end",
            x: 800,
            y: 10,
            z: 636,
            price: 133
        }
    ];

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