const uuidv4 = require('uuid/v4');

module.exports = function Note(note){
  this.id = uuidv4();
  this.content = note.content;
  this.editing = note.editing || false;
  this.completed = note.completed || false;
};
