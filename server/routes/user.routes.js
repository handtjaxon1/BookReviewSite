const UserController = require("../controllers/user.controller");

module.exports = (app) => {
    app.post("/api/users", UserController.createUser);
    app.post("/api/users/signin", UserController.signInUser);
    app.post("/api/users/signup", UserController.signUpUser);
    app.get("/api/users/:id", UserController.getUserByID);
    // TODO Rework this request to use url query params if possible
    app.get("/api/users/:username/:password", UserController.getUserByLogin);
    app.put("/api/users/:id", UserController.updateUser);
}