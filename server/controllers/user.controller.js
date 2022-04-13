const User = require("../models/user.model");

module.exports = {
    getUser: (request, response) => {
        User.findOne({_id: request.params.id}) // params.id is looking for the 'id' paramater in the url
            .then((user) => {
                response.json(user);
            })
            .catch((error) => {
                console.log(error);
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
    }

    // No delete function needed yet since there's no option to delete a user's account
}