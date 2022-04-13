const mongoose = require("mongoose");

// Establish a connection to the database
// TODO Change database connection to refer to cloud hosted database
mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Established a connection to the database.");
    })
    .catch((err) => {
        console.log("Something went wrong when connecting to the database!", err);
    });