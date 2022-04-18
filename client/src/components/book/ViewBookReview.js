import axios from "axios";
import React, { useEffect, useState } from "react";

function ViewBookReview(props) {
    const { review } = props;
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/" + review.userId)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div className="p-3 my-3 card-shadow card-border">
        {/* Review Header */}
        <div>
            <h3 className="review-name">{user ? user.firstName + " " + user.lastName : "N/A"}</h3>
            <p className="review-rating">
                <span className="review-rating-user">{review ? review.rating : "0" }</span> / 5
            </p>
        </div>
        {/* Review Body */}
        <p className="review-body preserve-whitespace">
            {review && (review.body)}
        </p>
    </div>
    );
}

export default ViewBookReview;