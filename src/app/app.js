var wihConfig = function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'productController',
            templateUrl: 'product/product.tpl.html'
        })
        .when('/product/list', {
            controller: 'productController',
            templateUrl: 'product/product.tpl.html'
        })
        .when('/product/:productId/details', {
            controller: 'productController',
            templateUrl: 'product/product.tpl.html'
        })

    ;
};
var WhatIHave = angular.module('WhatIHave', ["ngRoute", "ngResource", "ngSanitize", 'templates.app',]).
    config(wihConfig);
var appBackAddress = "http://172.17.0.5:3000";
