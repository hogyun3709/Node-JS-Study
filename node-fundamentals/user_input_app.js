// console.log('Starting application');

const fs = require('fs');  // Require load in module
const _ = require('lodash'); // User 3rd party module
const yargs = require('yargs');
const notes = require('./user_input_notes.js'); // Require load in relative path

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}
const argv = yargs
.command('add', 'Add a new note',{
  title: titleOptions,
  body: bodyOptions
})
.command('list', 'Listing all notes')
.command('read', 'Read a note', {
  title: titleOptions
})
.command('remove', 'Remove a note', {
  title: titleOptions
})
.help()
.argv

//var command = process.argv[2];
var command = argv._[0];
// console.log('Command:', command);
// console.log('Yargs', argv);
if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);

  if (note){
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }

} else if (command === 'list') {

  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {
 var note = notes.getNote(argv.title);
 if (note){
   console.log('Note found');
   notes.logNote(note);
 } else {
   console.log('Note not found');
 }
} else if (command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title)
  var message = noteRemoved ? 'Note was removed' : 'Note not found';

  console.log(message);
} else {
 console.log('Command not recognize');
}
