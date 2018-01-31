console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = function(title, body) {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    // var duplicateNotes = notes.filter(function(note) {
    // return note.title === title;
    // });
    var duplicateNotes = notes.filter((note) => note.title === title); //ES6
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};


var getAll = function() {
  return fetchNotes();
};

var getNote = function(title) {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = function(title) {
  //fetch the notesString
  var notes = fetchNotes();
  // filter notes, removing the one with title of argument
  var filteredNotes = notes.filter((note) => note.title !== title);

  saveNotes(filteredNotes);
  // save new notes array

  return notes.length !== filteredNotes.length; //returns true which is note removed
};
var logNote = (note) => {
  debugger;
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);

};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
