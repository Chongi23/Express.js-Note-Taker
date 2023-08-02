//Import Express
const express = require('express');
//Initialize instance of Express
const app = express();
// Set the port of our application//process.env.PORT means: whatever is in the environment variable PORT, or 3001 if there's nothing there.
const PORT = process.env.PORT || 3001;
//The `apiRoutes` file contains the routes for the API endpoints
const apiRoutes = require('./routes/apiRoutes');
// The HTML Routes are defined in a separate route file called 'htmlRoutes'
const htmlRoutes = require('./routes/htmlRoutes');

//**fs and path will be use in another area, here we are just presenting, not reading or writing to the filesystem**

//The "app.use(express.jason())" function is used to configure a Node.js applicaition to accept JSON data from requests.
app.use(express.json());
//This function "express.urlencoded()" is used to parse the request body into a JavaScript object. The `extended` option is set to true, which means that the function will parse the request body using the extended parsing rules. This will allow the function to parse more complex request bodies.
app.use(express.urlencoded({ extended: true }))
//Static middleware pointing to the public folder
app.use(express.static('public'));
//This code tells the application to exicute the 'apiRoutes' function for each erquest that is made to the './api' route.
app.use('./api', apiRoutes);
//This code tells the application to execute the 'htmlRoutes' function for each request that is made to the root route('/').
app.use('/', htmlRoutes) 


// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () =>
  console.log(`Now listening at http://localhost:${PORT}`)
);
