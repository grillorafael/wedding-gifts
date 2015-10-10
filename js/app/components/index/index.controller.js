(function() {
    'use strict';
    angular.module('boilerplate').controller('IndexCtrl', IndexCtrl);

    function IndexCtrl($scope, Store) {
        $scope.sort = 'name';

        Store.list().then(function(products) {
            $scope.products = products;
        });
    }
})();
