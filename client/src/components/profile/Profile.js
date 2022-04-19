import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import { useStoredUser } from "../hooks/useStoredUser";
import FavoriteBook from "./FavoriteBook";
import OwnedReview from "./OwnedReview";

function Profile(props) {
    const [user, setUser] = useStoredUser();
    const [reviews, setReviews] = useState([]);

    let favorites = user.result.favorites;

    useEffect(() => {
        axios.get("http://localhost:8000/api/reviews/user/" + user.result._id)
            .then((response) => {
                setReviews(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    function hasFavorites() {
        console.log(favorites);
        return favorites.length > 0;
    }

    function hasReviews() {
        return reviews.length > 0;
    }

    return (
        <Container className="py-5">
            <h1 className="mb-5 display-2">Welcome, {user ? user.result?.firstName : "N/A"}</h1>
            <Row>
                <Col className="col-12 col-lg-6 ">
                    <h2 className="display-5 px-3 mb-3">My Favorites</h2>
                    <div>
                        { hasFavorites() ? 
                            favorites.map((bookId, index) => <FavoriteBook bookId={bookId} index={index}/>)
                            : "No favorites yet."
                        }
                    </div>
                </Col>
                <Col className="col-12 col-lg-6">
                    <h2 className="display-5 px-3 mb-3">My Reviews</h2>
                    <div>
                        { hasReviews() ?
                            reviews.map((review, index) => <OwnedReview review={review} index={index}/>)
                            : "No reviews yet."
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;