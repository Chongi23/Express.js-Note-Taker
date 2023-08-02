//HERE is where we will utilize fs and path 
const fs = require('fs');
const path = require('path');


//Function to create a new Note
function createNote(body, notesArray) {
    //Here we craete a new variable called "note" with and assigned value of the "body" object, which is the JSON data that was sent in the request body.
      const note = body;
    //This code adds notes to the notesArray
    notesArray.push(note);
    //fs.writeFileSync() methos is used to write data synchronously. 
    //The "path.join()" methos is used to crea a file path that points to the 'db.json' file in the 'db' directory.
    //__dirName variable is used to get the current directory path.
    //The 'db.json' file is created if it does not exist already.
    //JSON.stringify() methos is used to convert the 'notesArray' object to a JSON string,
    //the resulting JSON string is then written to the 'db.json' file using the 'fs.writeFileSync() method.
    fs.writeFileSync(path.join(__dirname, "./db/db.json"),
    JSON.stringify({notes: notesArray}, null,2));
    return note;
    };

    //Function to update Notes
    function updateDb (id, notesArray) {
    const deleteNote = id;
    
    for (let i=0 ;i<notesArray.length;i++) {
        if (deleteNote === notesArray[i].id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(path.join(__dirname, "./db/db.json"),
            JSON.stringify({notes : notesArray },null,2), err => {
                if (err) 
                {
                    throw err;
                }
            });
        }
    }
    }
    //Export module
    module.exports = {
    updateDb,
    createNote,
};