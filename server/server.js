const express = require("express");
const app = express();
const PORT = 8000;

// Allow JSON objects and strings/arrays to be passed on the server
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Enable CORS for origin compatability between React and the express server
const cors = require("cors");
app.use(cors());

// Load in the routes for the project

// Connect to the database
require("./config/mongoose.config");

// Bind and listen for connections on the specified port
app.listen(PORT, (err) => {
    if (err) {
        console.log("Error in server setup.", err)
    } else {
        console.log(`Listening on port: ${PORT}`);
    }
})