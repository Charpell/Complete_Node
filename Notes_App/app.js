const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
  } else {
    console.log('Note title taken');
  }
} else {
  console.log('Command not recognized');
}



// node app add --title=secret2 --body="Some body here"