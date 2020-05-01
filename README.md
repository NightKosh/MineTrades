## MineTrades

This is a simple static single page site for searching through the minecraft server trades.
It is based on angular 1.5.0, ui-select 0.19.8, and a few my own scripts for data loading and multilanguage support.

Originally it was created to support [QuickShop](https://www.spigotmc.org/resources/quickshop-reremake-1-15-ready-bees-bees-bee.62575/) spigot plugin, but it doesn't depend on it, or its database table structures, so it can be used with anything else. Here is a short explanation of how it is works:
When you chose any item in the search bar js application sends GET request(with minecraft item id as a parameter) on the server and expects to receive a json object as a response, which will be parsed and showed on the page.

## Demo

Here is a link on a demo page with pre generated static data http://www.minetrades.nightkosh.com/?lang=en

## Data loading

As already mentioned, this is just a static html page with a few js scripts, so it can't get data from your database. The only thing it does to load data is a "GET" request to a server, so you should provide a server app with all server logic, which will provides json object with trades as a response.
By default, it loads pre generated static json file [demo.json](https://github.com/NightKosh/MineTrades/blob/master/data/demo.json) so you need to set a correct link in the configuration file - [configs.js](https://github.com/NightKosh/MineTrades/blob/master/js/configs.js).

## Localization

It provides you a multiple language support. All localized strings stores in json files in [data directory](https://github.com/NightKosh/MineTrades/tree/master/data). You can find default language configuration option in the configuration file - [configs.js](https://github.com/NightKosh/MineTrades/blob/master/js/configs.js). At the same time you can choose language manually by adding "?lang=YOUR_LANGUAGE_SHORTCUT" ( "?lang=en" as for example ) to the end of page url. 
Feel free to make merge requests with translations on other languages!

## Configs

As already was mentioned there are a few configuration options, which should allow you to simplify adjusting of this site to your server and requirements. Here is a link to the configuration file - [configs.js](https://github.com/NightKosh/MineTrades/blob/master/js/configs.js).
* link - link to the Get endpoint which will be used to load trades data from your server
* lang - localization which will be loaded and used by default
* showPrice - this option allows you to disable to show prices(it doesn't affect server side application)
* map - a set of options which will be used to automatically generate links on the map. It is designed for usage with [Dynmap](https://github.com/webbukkit/dynmap)


## Server App

As I suggest you may not have a proper server application to load all required data or enough skills or time to make it by self, so here is a [link](https://github.com/NightKosh/MineTradesServer) on a simple spring boot application, which was made by me.

## P.S.

This "tools" were created for my own purpose, so they are provided to you as is. Feel free to use them in any way you want, but I'm not guaranty you any support with it in the future.

