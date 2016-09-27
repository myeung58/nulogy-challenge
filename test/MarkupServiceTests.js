var chai = require('chai');
var expect = chai.expect;

var MarkupService = require('../js/MarkupService');

describe('MarkupService', function() {
  it('returns nothing if no param passed in', function() {
    var service = new MarkupService();

    expect(service).to.be.an('object');
    expect(service).to.be.empty;
  });
});
