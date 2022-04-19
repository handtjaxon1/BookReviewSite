const express = require("express");
const app = express();
require("dotenv").config(); // Allows using environment variables
const PORT = process.env.PORT;

// Allow JSON objects and strings/arrays to be passed on the server
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Enable CORS for origin compatability between React and the express server
const cors = require("cors");
app.use(cors());

const imageUpload = require("./middleware/image.middleware");

// TODO Consider refactoring routes to use express.Router. So these lines would look like 'app.use()
// Load in the routes for the project
require("./routes/user.routes")(app);
require("./routes/book.routes")(app);
require("./routes/review.routes")(app);

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