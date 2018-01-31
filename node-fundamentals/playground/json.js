//Creating an object and make it as string
//var obj = {
// name: 'Hogyun'
//};
//
//var stringObj = JSON.stringify(obj);
//
//console.log(typeof stringobj);
//console.log(stringobj);


//Creating String variable and parse that string to as an object
//var personString = '{"name": "Hogyun","age": 24}';
//var person = JSON.parse(personString);
//
//console.log(typeof person);
//console.log(person);

const fs = require('fs');

var originalNote = {
 title: 'Random title',
 body: 'Random body'
};

//originalNoteString

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
