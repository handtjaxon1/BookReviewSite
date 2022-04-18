import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

function Profile(props) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")).result);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")).result);
    }, []);

    return (
        <Container className="py-5">
            <h1 className="mb-5">Welcome, {user ? user.firstName : "N/A"}</h1>
            <Row>
                <Col className="col-12 col-lg-6">
                    <h2>My Favorites</h2>
                    <div>
                        {/* A collection of books the user has favorited */}
                    </div>
                </Col>
                <Col className="col-12 col-lg-6">
                    <h2>My Reviews</h2>
                    <div>
                        {/* A collection of reviews the user has created */}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;