const mongoose = require("mongoose");

// Create a model for a User in our database
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: [true, "Email is already in use. Please choose a new one, or sign in if you have an exisiting account."]
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [8, "Password must be a minimum of 8 characters."]
    },
    username: {
        type: String,
        required: [true, "Username is required."],
        minlength: [3, "Username must be a minimum of 3 characters."],
        unique: [true, "Username is already taken, please choose a new one."],
    },
    firstName: {
        type: String,
        required: [true, "First name is required."],
        minlength: [3, "First name must be a minimum of 3 characters."],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required."],
        minlength: [3, "Last name must be a minimum of 3 characters."],
    },
    favorites: { // Favorites is a list of books the user likes (uses the ObjectId of the book)
        type: [mongoose.SchemaTypes.ObjectId],
        default: []
    }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);

// TODO Consider refactoring models to utilize the more "modern" approach of import/export statements
// Allows using 'import' rather than 'require'
// const User = mongoose.model("User", UserSchema);
// export default User;
