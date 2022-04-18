const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

module.exports = {
    getUserByID: (request, response) => {
        User.findOne({_id: request.params.id}) // params.id is looking for the 'id' paramater in the url
            .then((user) => {
                response.json(user);
            })
            .catch((error) => {
                console.log(error);
                response.status(404).json(error);
            })
    },
    getUserByLogin: (request, response) => {
        User.findOne({username: request.params.username, password: request.params.password})
            .then((user) => {
                console.log("Hello");
                response.json(user);
            })
            .catch((error) => {
                console.log(error);
                console.log("Request body: " + request.body);
                response.status(404).json(error);
            })
    },
    createUser: (request, response) => {
        User.create(request.body)
            .then((user) => {
                response.json(user);
            })
            .catch((error) => {
                console.log(error);
                response.status(404).json(error);
            })
    },
    updateUser: (request, response) => {
        User.findOneAndUpdate({_id: request.params.id}, request.body, { new: true, runValidators: true })
            .then((user) => {
                response.json(user);
            })
            .catch((error) => {
                console.log(error);
                response.status(404).json(error);
            })
    },
    signInUser: (request, response) => {
        const { email, password } = request.body;
        User.findOne({ email })
            .then((user) => {
                // Stop if the user doesn't exist because there's no user with these credentials to sign in
                if (!user) {
                    console.log("User doesn't exist");
                    return response.status(404).json({ message: "User doesn't exist." });
                }
                // Use bcrypt to check if the password from the sign in matches the password of the user in the database
                bcrypt.compare(password, user.password)
                    .then((isPasswordCorrect) => {
                        if (password !== user.password) {
                            console.log("Invalid credentials.");
                            return response.status(400).json({ message: "Invalid credentials." });
                        }
                        // Create the token that we'll pass back to the client
                        const token = jwt.sign({ email: user.email, id: user._id }, 'secretKey', { expiresIn: "1h" });
                        response.status(200).json({ result: user, token });
                    })
                    .catch((error) => {
                        console.log(error);
                        response.status(500).json(error);
                    })
            })
            .catch((error) => {
                console.log(error);
                response.status(500).json(error);
            })
    },
    signUpUser: (request, response) => {
        const { email, password, confirm, username, firstName, lastName } = request.body;
        User.findOne({ email })
            .then((user) => {
                // Stop here if the user already exists because we can't create another user with the same credentials
                if (user) {
                    return response.status(400).json({ message: "User already exists." });
                }
                // Verify on the server side that the passwords matched (client side verification is also done)
                if (password !== confirm) {
                    return response.status(400).json({ message: "Passwords don't match." });
                }

                bcrypt.hash(password, 12)
                    .then((hashedPassword) => {
                        User.create({ email, password: hashedPassword, username, firstName, lastName })
                        .then((result) => {
                            const token = jwt.sign({ email: result.email, id: result._id }, 'secretKey', { expiresIn: "1h" });
                            response.status(200).json({ result, token })
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log(error);
                response.status(500).json(error);
            })
    }
};