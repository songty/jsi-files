var fs = require('fs');
var program = require('commander');

module.exports.readCheck = function (filePath, cb) {
	fs.readFile(filePath,
	{ encoding: 'utf8' }, function(err, contents) {
  	}
  		cb(err, contents);
	});

};

module.exports.compare = function (array1, array2) {

};
