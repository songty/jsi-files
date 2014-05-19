var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');
var path = require('path');

describe('files', function() {
  it('can read fixtures', function(done) {
    var file = path.join(__dirname, 'fixtures', 'one.txt');
    fs.readFile(file, { encoding: 'utf8' }, function(err, contents) {
      expect(err).to.not.exist;
      expect(contents).to.eql('hello world\n');
      done();
    });
  });
});
