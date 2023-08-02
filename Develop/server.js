//Import Express
const express = require('express');
//Import 'path'(built in Node.JS package) to resolve path of files that are located on the server. 
const path = require('path');
//Require 'fs' to READ and WRITE to the 'FileSystem'
const fs = require('fs');
//Initialize instance of Express
const app = express();

//===========================================//

// Set the port of our application//process.env.PORT means: whatever is in the environment variable PORT, or 3001 if there's nothing there.
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static middleware pointing to the public folder
app.use(express.static('public'));


// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () =>
  console.log(`Now listening at http://localhost:${PORT}`)
);
