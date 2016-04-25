    'use strict';

    describe('Crm App', function() {
        var service;
        beforeEach(function() {
            module('CrmApp');
        });
        beforeEach(function(){inject(function(CustomerService){
            service = CustomerService;
        })});

      describe('test service', function() {
        it('num of customers', function() {
            expect(service.customers.length).toBe(26);

        });
      });


      describe('customer controller', function() {

        beforeEach(function() {

        });


        it('test3', function() {

        });

      });
    });
