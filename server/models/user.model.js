const mongoose = require("mongoose");

// Create a model for a User in our database
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required."],
        minlength: [3, "Username must be a minimum of 3 characters."],
        unique: [true, "Username is already taken, please choose a new one."],
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [8, "Password must be a minimum of 8 characters."]
    },
    favorites: { // Favorites is a list of book titles the user likes (could also be a list of book IDs depending on how we pass the data)
        type: [String],
        default: [] // Change to '[]' if you want an empty array by default (or just remove this line, same result either way)
    }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);

// TODO Consider refactoring models to utilize the more "modern" approach of import/export statements
// Allows using 'import' rather than 'require'
// const User = mongoose.model("User", UserSchema);
// export default User;
