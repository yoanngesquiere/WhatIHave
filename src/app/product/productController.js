WhatIHave.controller('productController',
    function ($scope, $location, $routeParams, productModel) {
        productModel.getProducts($scope);

        $scope.newProduct = function() {
            productModel.createProduct($scope);
        };
    }
);
