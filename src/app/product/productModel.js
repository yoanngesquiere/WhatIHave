WhatIHave.service('productModel', function($http) {
    this.getProducts = function($scope) {
        $http.get(appBackAddress+"/product/")
            .success(function(data, status, headers, config) {
                $scope.products = data;
            })
            .error(function(data, status, headers, config) {
                $scope.errorMessage = data;
            });
    };

    this.createProduct = function($scope) {
        if ($scope.newProductName) {
            $http.post(appBackAddress+"/product/", { name: $scope.newProductName })
                .success(function(result) {
                    $scope.products.push(result);
                    $scope.$parent.products.push(result);
                    $scope.newProductName = '';
            });
        }
    };
});
