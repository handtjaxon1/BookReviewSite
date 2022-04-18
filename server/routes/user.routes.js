const UserController = require("../controllers/user.controller");

module.exports = (app) => {
    app.post("/api/users", UserController.createUser);
    app.post("/api/users/signin", UserController.signInUser);
    app.post("/api/users/signup", UserController.signUpUser);
    app.get("/api/users/:id", UserController.getUserByID);
    app.put("/api/users/:id", UserController.updateUser);
}