import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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


function Login(props) {
    const { loggedIn, setLoggedIn } = props;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // State to capture errors and handle validations
    const [errors, setErrors] = useState([]);

    // Allow navigation
    const navigate = useNavigate();

    function handleOnLogin(e) {
        console.log("Loggin in...");
        e.preventDefault();
        // TODO Login not working right now, need to fix
        axios.get("http://localhost:8000/api/users/" + username + "/" + password)
            .then((response) => {
                console.log(response.data);
                setLoggedIn(true);
                navigate("/profile/" + response.data._id);
            })
            .catch((error) => {
                console.log(error);
                setErrors(error.response.data.errors);
            })
    };

    return (
        <Container>
            <h1>Login page</h1>
            <Form onSubmit={handleOnLogin}>
                <FormGroup>
                    <Label>Username</Label>
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    { errors.username ?
                        <Alert color="danger">{errors.username.message}</Alert>
                        : null
                    }
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    { errors.password ?
                        <Alert color="danger">{errors.password.message}</Alert>
                        : null
                    }
                </FormGroup>
                <div className="row justify-content-center">
                    <Button type="submit" color="dark" className="col-2 mx-2">Login</Button>
                    <Link to={"/signup"} className="btn btn-primary col-2 mx-2">Sign Up Instead!</Link>
                </div>
            </Form>
        </Container>
    );
}

export default Login;