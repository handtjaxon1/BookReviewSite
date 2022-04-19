import React, { useEffect, useState} from "react";
import axios from "axios";
import { Container } from "reactstrap";
import FullBookReview from "./FullBookReview";

function Reviews(params) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/reviews")
            .then((response) => {;
                setReviews(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            
    }, []);

    return (
        <Container className="py-5">
            <h1 className="text-center">Latest Reviews</h1>
            <div>
                {/* Add a row for each review in the database */}
                { reviews.sort((a, b) => (a._id < b._id) ? 1 : -1).map((review, index) => <FullBookReview review={review} index={index}/>) }
            </div>
        </Container>
    );
}

export default Reviews;