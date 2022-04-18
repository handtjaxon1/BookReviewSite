import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";

function Profile(props) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")).result);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")).result);
    }, []);

    return (
        <Container>
            <h1>Profile page for {user ? user.firstName : "N/A"}</h1>
        </Container>
    );
}

export default Profile;