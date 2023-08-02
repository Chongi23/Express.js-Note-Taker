//Import express
const express = require("express");
//Instance of express
const app = express();
//This code tells the application to exicute the 'apiRoutes' function for each erquest that is made to the './api' route.// Set the port of our application//process.env.PORT means: whatever is in the environment variable PORT, or 3001 if there's nothing there.
const PORT = process.env.PORT || 3001;
//The `apiRoutes` file contains the routes for the API endpoints
const apiRoutes = require('./routes/apiRoutes');
// The HTML Routes are defined in a separate route file called 'htmlRoutes'
const htmlRoutes = require('./routes/htmlRoutes');
//Static middleware pointing to the public folder
app.use(express.static('public'));
//This function "express.urlencoded()" is used to parse the request body into a JavaScript object. The `extended` option is set to true, which means that the function will parse the request body using the extended parsing rules. This will allow the function to parse more complex request bodies.
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());

//This code tells the application to exicute the 'apiRoutes' function for each erquest that is made to the './api' route.
app.use('/api', apiRoutes);
//This code tells the application to execute the 'htmlRoutes' function for each request that is made to the root route('/').
app.use('/', htmlRoutes);

// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () => {
    console.log(`Now listening at port: ${PORT} `);
  });
