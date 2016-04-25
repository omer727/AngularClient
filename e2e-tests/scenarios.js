'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('customers view', function() {

    beforeEach(function() {
      browser.get('index.html#/customers');
    });


    it('should render customers when user navigates to /customers', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/orders');
    });


    it('should render orderskar when user navigates to /orders', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for orders/);
    });

  });
});
