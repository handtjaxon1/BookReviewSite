import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
        Alert,
        Form,
        FormGroup,
        Label,
        Input,
        Button,
        Container
    } from "reactstrap";

function Signup(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    // Get passed down state
    const { loggedIn, setLoggedIn } = props;

    // State to capture errors and handle validations
    const [errors, setErrors] = useState([]);

    // Allow navigation
    const navigate = useNavigate();

    function handleOnSignup(e) {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users", {
            username,
            password
        })
            .then((response) => {
                console.log(response.data)
                setLoggedIn(true);
                navigate("/profile/" + response.data._id)
                
            })
            .catch((error) => {
                console.log(error);
                setErrors(error.response.data.errors);
            })
    };

    // Verify that the normal and confirm password fields match
    function passwordError() {
        return confirm !== password;
    };

    return (
        <Container>
            <h1>Signup page</h1>
            <Form onSubmit={handleOnSignup}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {/* Display errors related to username input */}
                    { errors.username ?
                        <Alert color="danger">{errors.username.message}</Alert>
                        : null
                    }
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* Display errors related to password input */}
                    { errors.password ?
                        <Alert color="danger">{errors.password.message}</Alert>
                        : null
                    }
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="confirm">Confirm Password</Label>
                    <Input
                        type="password"
                        id="confirm"
                        name="confirm"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                    {/* Display error if the password and confirm password aren't the same */}
                    { passwordError() ?
                        <Alert color="danger">Passwords don't match.</Alert>
                        : null
                    }
                </FormGroup>
                <div className="row justify-content-center">
                    <Button type="submit" color="dark" className="col-2">Sign Up</Button>
                </div>
            </Form>
        </Container>
    );
}

export default Signup;