import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "reactstrap";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import AuthInput from "./AuthInput";
import { signIn, signUp } from "./AuthActions";

const initialState = { email: "", password: "", confirm: "", username: "", firstName: "", lastName: "" };

function Auth(props) {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleOnSubmit(e) {
        e.preventDefault();
        if (isSignup) {
            dispatch(signUp(formData, navigate));
        } else {
            dispatch(signIn(formData, navigate));
        }
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    function switchMode(e) {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };

    const googleSuccess = async (response) => {
        const result = response?.profileObj;
        const token = response?.tokenId;
        try {
            dispatch({ type: "AUTH" , data: { result, token }});
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    function googleFailure(error) {
        console.log(error);
        console.log("Google Sign In was unsuccessful. Try Again Later.");
    };

    return (
        <Container className="py-5">
            <h3 className="mb-5">{ isSignup ? "Sign Up" : "Sign In" }</h3>
            <Form onSubmit={handleOnSubmit}>
                { isSignup && (
                <>
                    <AuthInput type="text" name="firstName" label="First Name" handleChange={handleChange}/>
                    <AuthInput type="text" name="lastName" label="Last Name" handleChange={handleChange}/>
                    <AuthInput type="text" name="username" label="Username" handleChange={handleChange}/>
                </>
                )}
                <AuthInput type="email" name="email" label="Email Address" handleChange={handleChange}/>
                <AuthInput type="password" name="password" label="Password" handleChange={handleChange}/>
                { isSignup && (
                <>
                    <AuthInput type="password" name="confirm" label="Confirm Password" handleChange={handleChange}/>
                </>
                )}
                <div className="row justify-content-center p-3">
                    <Button type="submit" color="dark" className="my-2">
                        { isSignup ? "Sign Up" : "Sign In" }
                    </Button>
                    <GoogleLogin
                        clientId="1092999317655-qdurt6uk6ov5g91eohb96jlc5cdu9stj.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button
                                className="my-2"
                                color="dark"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                            >
                                Sign in with Google
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Button onClick={switchMode} color="primary" className="my-2">
                        { isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up" }
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default Auth;