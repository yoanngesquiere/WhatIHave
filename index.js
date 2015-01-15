var wihConfig = function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'productController',
            templateUrl: 'view/product.html'
        })
        .when('/product/:productId', {
            controller: 'productController',
            templateUrl: 'view/product.html'
        })
    ;
};
var WhatIHave = angular.module('WhatIHave', ["ngRoute"]).
    config(wihConfig);