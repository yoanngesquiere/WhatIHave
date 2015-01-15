WhatIHave.service('productModel', function() {
    this.getProducts = function() {
        return [{
            id: 5,
            name: 'Product1'
        }, {
            id: 1,
            name: 'One More'
        }, {
            id: 2,
            name: 'Another'
        }, {
            id: 3,
            name: 'This is a product'
        }, {
            id: 4,
            name: 'Why not'
        }
        ]};
});