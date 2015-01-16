WhatIHave.service('productModel', function($http) {
    this.getProducts = function() {

        return $http({method:"GET", url:appBackAddress+"/product/"}).then(function(result){
            return result.data;
        });
    };
});