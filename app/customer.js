(function (angular) {
    'use strict';

    angular.module('CrmApp', ['ngRoute', 'angularUtils.directives.dirPagination','ui.bootstrap'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/customers', {
                    templateUrl: 'customer.html',
                    controller: 'CustomerController',
                })
                .when('/orders', {
                    templateUrl: 'order.html',
                    controller: 'CustomerController'
                })
                //    .when('/customer/Customer-add', {
                //        templateUrl: 'customer-add.html',
                //        controller: 'CustomerController'
                //    })
                .otherwise({
                    redirectTo: '/customers'
                })

        }).filter('orderTotal', function () {
            return function (listOfProducts) {
                //  Calculate the total value of a particular Order
                var total = 0;
                angular.forEach(listOfProducts, function (product) {
                    total += product.quantity * product.price;
                });
                return total;
            }
        })
        .controller('CustomerController', ['$scope', 'CustomerService', function ($scope, CustomerService) {

            $scope.view = 'card';

            $scope.changeToView = function (view) {
                if (view === 'card' || view === 'list' || view==='add'){
                    $scope.view = view;
                }
            };

            $scope.deleteCustomer = function (index) {
                CustomerService.customers.splice(index, 1);
            };

            $scope.addCustomer = function () {
                CustomerService.customers.push({
                    firstName: $scope.customer.firstName,
                    lastName: $scope.customer.lastName,
                    email: $scope.customer.email
                });
                $scope.customer.firstName = '';
                $scope.customer.lastName = '';
                $scope.customer.email = '';

            };
            $scope.customer = {};

            $scope.customers = CustomerService.customers;

        }])
        .directive('customer', function() {
        return {templateUrl: 'customer-directive.html' };
    });

})(window.angular);