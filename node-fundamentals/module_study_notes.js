console.log('Starting module_study_ notes.js');

module.exports.addNote = function () {  //Export properties and functions
	console.log('addNote');	
	return 'New Note';
};

module.exports.add = function(a, b) {
	
	return a + b;
};
// module.exports.age = 24; // exporting static value
