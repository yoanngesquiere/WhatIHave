var wihConfig = function($routeProvider, $httpProvider) {
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
    //$httpProvider.defaults.withCredentials = true;
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
};
var WhatIHave = angular.module('WhatIHave', ["ngRoute", "ngResource", "ngSanitize"]).
    config(wihConfig);
var appBackAddress = "http://172.17.0.5:3000";