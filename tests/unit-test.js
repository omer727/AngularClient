'use strict';

describe('Crm App', function () {
    var service;
    beforeEach(function () {
        module('CrmApp');
    });
    beforeEach(function () {
        inject(function (CustomerService) {
            service = CustomerService;
        })
    });

    describe('test service', function () {
        it('num of customers', function () {
            expect(service.customers.length).toBe(26);

        });
    });


    describe('customer controller', function () {

        var scope;
        var mockCustomerService;
        var CustomerController;


        beforeEach(inject(function ($rootScope, $controller, CustomerService) {

            mockCustomerService = {
                getCustomers: {}
            };
            spyOn(mockCustomerService, 'getCustomers').and.callFake(function () {
                return [
                    {
                        name: 'Tim Guinee',
                        character: 'Major Allen',
                        sex: 'male',
                        orders: [{product: 'Basket', date: '12\/2\/2013', quantity: 15, price: '1.9'}]
                    }]

            });

            scope = $rootScope.$new();


            CustomerController = $controller('CustomerController', {
                $scope: scope,
                CustomerService: mockCustomerService
            });

        }));

        it('Delete customer function', function () {
            console.log(mockCustomerService.getCustomers());
            expect(scope.customers.length).toBe(1);
            scope.deleteCustomer(0);
            expect(scope.customers.length).toBe(0);
        });

    });
});
