const path = require("path");
//This creates a router object in JS,this function takes no arguments and returns a router object.
const router = require('express').Router();

//Here a GET route for the root URL it set up using router.get() method.
//It then sends the HTML file for the home page as a response using the res.sendFile() method.
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//This function sets up a GET route for the /notes URL of the website using the router.get() method
//It then sends the HTML file for the notes page as a response using the rex.sendFile() method.

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

//This function sets up a GET route for all URLs using the router.get() method.
//It then sends the HTML file for the index.html page as a response using the res.sendFile() method.
router.get("*", (req, res) => { 
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

//Exports 'router'.
module.exports = router;