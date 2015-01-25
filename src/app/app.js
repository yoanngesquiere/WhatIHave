var wihConfig = function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'productController',
            templateUrl: 'app/product/product.html'
        })
        .when('/product/list', {
            controller: 'productController',
            templateUrl: 'app/product/product.html'
        })
        .when('/product/:productId/details', {
            controller: 'productController',
            templateUrl: 'app/product/product.html'
        })

    ;
};
var WhatIHave = angular.module('WhatIHave', ["ngRoute", "ngResource", "ngSanitize"]).
    config(wihConfig);
var appBackAddress = "http://172.17.0.46:3000";