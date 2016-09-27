var chai = require('chai');
var expect = chai.expect;

var MarkupService = require('../js/MarkupService');

describe('MarkupService', function() {
  it('returns empty object if no param passed in', function() {
    var service = new MarkupService();

    expect(service).to.be.an('object');
    expect(service).to.be.empty;
  });

  it('returns an object with correct functions if valid params are passed in', function() {
    var service = new MarkupService(1000, 1, '');

    expect(service).to.be.an('object');
    expect(service).to.have.keys('baseMarkup', 'laborMarkup', 'categoryMarkup', 'getTotal');
  });

  describe('.baseMarkup', function() {
    it('returns 0 if basePrice is 0', function() {
      var service = new MarkupService(0, 1, '');

      expect(service.baseMarkup()).to.equal(0);
    });

    it('returns correct base markup', function() {
      var service1 = new MarkupService(1000, 0, ''),
        service2 = new MarkupService(1, 0, ''),
        service3 = new MarkupService(123.45, 0, '');

      expect(service1.baseMarkup()).to.equal(50);
      expect(service2.baseMarkup()).to.equal(0.05);
      expect(service3.baseMarkup()).to.equal(6.17);
    });
  });

  describe('.laborMarkup', function() {
    it('returns 0 if laborMarkup is 0', function() {
      var service = new MarkupService(1000, 0, '');

      expect(service.laborMarkup()).to.equal(0);
    });

    it('returns correct labor markup', function() {
      var service1 = new MarkupService(1000, 1, ''),
        service2 = new MarkupService(1, 3, ''),
        service3 = new MarkupService(123.45, 10, '');

        expect(service1.laborMarkup()).to.equal(12.6);
        expect(service2.laborMarkup()).to.equal(0.04);
        expect(service3.laborMarkup()).to.equal(15.55);
    });
  });

  describe('.categoryMarkup', function() {
    it('returns 0 if category markup does not apply', function() {
      var service = new MarkupService(1000, 1, '');

      expect(service.categoryMarkup()).to.equal(0);
    });

    it('returns correct category markup', function() {
      var service1 = new MarkupService(1000, 1, 'drugs'),
        service2 = new MarkupService(1, 3, 'food'),
        service3 = new MarkupService(123.45, 10, 'electronics');

        expect(service1.categoryMarkup()).to.equal(78.75);
        expect(service2.categoryMarkup()).to.equal(0.14);
        expect(service3.categoryMarkup()).to.equal(2.59);
    });
  });

  describe('.getTotal', function() {
    it('returns correct category markup', function() {
        var service1 = new MarkupService(1299.99, 3, 'food'),
        service2 = new MarkupService(5432.00, 1, 'drugs'),
        service3 = new MarkupService(12456.95, 4, 'books');

        expect(service1.getTotal()).to.equal(1591.58);
        expect(service2.getTotal()).to.equal(6199.81);
        expect(service3.getTotal()).to.equal(13707.63);
    });
  });
});
