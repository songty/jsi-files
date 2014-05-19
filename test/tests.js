var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');
var path = require('path');
var _ = require('../index');

describe('files', function() {
  it('can read fixtures', function(done) {
    // var file = path.join(__dirname, 'fixtures', 'test-file1.txt');
    _.readCheck('test/fixtures/test-file1.txt', function(err, contents) {
      expect(err).to.not.exist;
      expect(contents).to.eql('hello you world');
      done();
  	});;
  });
 });
