const mongoose = require("mongoose");

// Establish a connection to the database
// Old url: "mongodb://localhost/book_review"
// New url: "mongodb+srv://<username>:<password>@cluster0.3hco1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
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