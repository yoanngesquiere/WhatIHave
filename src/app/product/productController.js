WhatIHave.controller('productController',
    function ($scope, $location, $routeParams, productModel) {
        var products = productModel.getProducts();
        products.then(function(result) {  // this is only run after $http completes
            $scope.products = result;
        });
    }
);