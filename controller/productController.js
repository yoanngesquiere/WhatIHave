WhatIHave.controller('productController',
    function ($scope, $location, $routeParams, productModel) {
        var products = productModel.getProducts();
        $scope.products = products;
    }
);