var fs = require('fs');
var program = require('commander');
var sharedWords = [];

module.exports.readCheck = function (filePath) {
	fs.readFile(filePath,
	{ encoding: 'utf8' }, function(err, contents) {
  		console.log(contents);
	});

};

var smallCompare = function (word, array) {
	for ( var i = 0; i < array.length; i++){
		if (word === array[i]){
	 		sharedWords.push(word);
		}
	}
};

var compare = function (array1, array2) {
	var longer, shorter = [];
	if (array1.length > array2.length) {
		longer = array1;

		shorter = array2;
	} else {
		longer = array2;
		shorter = array1;
	}
	longer.forEach(function (word) {
		smallCompare(word, shorter);

	});
	// for (var i = 0; i < longer.length; i++) {
	// 	if (longer[i] === shorter[]);
	// };
};




compare(['hellow','you', 'tian', 'world'],['tian','world','joe']);
console.log(sharedWords);

