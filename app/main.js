(function (angular) {
    angular.module('CrmApp').controller('TabsCtrl', function ($scope) {
        $scope.buttons = [
            {title: 'Customers', url: '/customer', active:true},
            {title: 'Orders', url: '/orders'},
            {title: 'About', url: '/about'}
        ];

    });

})(window.angular);