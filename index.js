var fs = require('fs');
var program = require('commander');

module.exports.readCheck = function (filePath) {
	fs.readFile(filePath,
	{ encoding: 'utf8' }, function(err, contents) {
  		console.log(contents);
	});

};

module.exports.compare = function (array1, array2) {
	var sharedWords = [];
	var longer, shorter;
	if (array1.length > array2.length) {
		longer = array1;}
	else {
		longer = array2;
	}
	for (var i = 0; i < longer.length; i++) {
		if (longer[i] === shorter[])
	}
};
