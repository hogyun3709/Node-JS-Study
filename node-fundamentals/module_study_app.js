console.log('Starting application');

const fs = require('fs');  // Require load in module
const os = require('os');
const _ = require('lodash'); // User 3rd party module
const notes = require('./module_study_notes.js'); // Require load in relative path

var filteredArray = _.uniq(['hogyun']);
console.log(filteredArray);

//console.log(_.isString(true));
//console.log(_.isString('Hogyun'));


//var res = notes.addNote();

//console.log(res);
//console.log('Result:', notes.add(9, -2));
//var user = os.userInfo(); 

//fs.appendFileSync('greeting.txt', `Hello World ${user.username} You are ${note.age}!`); //Using Template string ES6 feature

//Studying How to use modules
