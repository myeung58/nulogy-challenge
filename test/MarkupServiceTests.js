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
    expect(service).to.have.keys('baseMarkup', 'laborMarkup', 'categoryMarkup', 'totalMarkup');
  });

  describe('.baseMarkup', function() {
    it('returns 0 if basePrice is 0', function() {
      var service = new MarkupService(0, 1, '');

      expect(service.baseMarkup()).to.equal(0);
    });

    it('returns correct base markup', function() {
      var service = new MarkupService(1000, 0, ''),
        service2 = new MarkupService(1, 0, ''),
        service3 = new MarkupService(123.45, 0, '');

      expect(service.baseMarkup()).to.equal(50);
      expect(service2.baseMarkup()).to.equal(0.05);
      expect(service3.baseMarkup()).to.equal(6.17);
    });
  });
});
