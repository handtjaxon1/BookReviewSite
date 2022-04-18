import axios from "axios";

export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        // Login the user
        console.log("Reached sign in action");
        axios.post("http://localhost:8000/api/users/signin", formData)
            .then((user) => {
                const { data } = user;
                dispatch({ type: "AUTH", data });
                navigate("/profile");
            })
            .catch((error) => {
                console.log(error);
            })
    } catch (error) {
        console.log(error);
    }
};

export const signUp = (formData, navigate) => async (dispatch) => {
    try {
        // Sign up the user
        console.log("Reached sign up action");
        axios.post("http://localhost:8000/api/users/signup", formData)
            .then((user) => {
                const { data } = user
                dispatch({ type: "AUTH", data });
                navigate("/profile");
            })
            .catch((error) => {
                console.log(error);
            })
    } catch (error) {
        console.log(error);
    }
};