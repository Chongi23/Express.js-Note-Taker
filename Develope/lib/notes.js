const fs = require('fs');
const path = require('path');


//Function to create a new Note
function createNewNote(body, notesArray) {
  //Here we craete a new variable called "newNote" with and assigned value of the "body" object, which is the JSON data that was sent in the request body.
  const newNote = body
  //This code adds notes to the notesArray
  notesArray.push(newNote);
    //The "path.join()" methos is used to create a file path that points to the 'db.json' file in the 'db' directory.
    //__dirName variable is used to get the current directory path.
    //JSON.stringify() method is used to convert the 'notesArray' object to a JSON string,
    //the resulting JSON string is then written to the 'db.json' file using the 'fs.writeFileSync() method\
    
  fs.writeFileSync
  (path.join(__dirname, "../db/db.json"),JSON.stringify({notes: notesArray}, null, 2));
  return newNote;
};


//Function to update(DELETE) Notes
function updateDb(id, notesArray) {
    const deletedNote = id;
    for (let i = 0; i < notesArray.length; i++) {
      if (deletedNote === notesArray[i].id) {
        //The splice() method is used to add or remove elements from an array. In this task, we are using the splice() method to remove the element at index i from the array notesArray.
       notesArray.splice(i, 1);

        fs.writeFile(
          path.join(__dirname, "../db/db.json"),
          JSON.stringify({notes: notesArray}, null, 2), err => {
            if (err) {
              throw err;
            }
          });
      }
    }
  }


  //The `module.exports` keyword in JavaScript is used to export a module's default export. This is the value that is returned when the module is imported.
  module.exports = {
    updateDb,
    createNewNote,
  }; 