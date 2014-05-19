var fs = require('fs');
var program = require('commander');

module.exports.readCheck = function (filePath, cb) {
	fs.readFile(filePath,
	{ encoding: 'utf8' }, function(err, contents) {
  		var array1 = contents.split("\n");
  		cb(err, contents);
 		return	array1; 
	});

};

module.exports.compare = function (array1, array2) {

};