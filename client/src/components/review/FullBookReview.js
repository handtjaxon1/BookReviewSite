import axios from "axios";
import React, { useEffect, useState } from "react";

function FullBookReview(props) {
    const { review } = props;
    const [book, setBook] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + review.bookId)
            .then((response) => {
                console.log(response.data);
                setBook(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get("http://localhost:8000/api/users/" + review.userId)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div className="d-flex p-3 my-5 card-shadow card-border"> {/* Needs 1px, light, rounded, border and a shadow effect */}
            <img src={process.env.PUBLIC_URL + "/BookCover_01.png"} alt="book-cover" className="book-cover"></img>
            <div className="w-100">
                <div className="d-flex justify-content-between">
                    <h3 className="book-title">{book?.title}</h3>
                    <p className="book-subheader">
                        <span className="book-author">{book?.author}</span> |
                        <span className="book-genre"> {book?.genre}</span>
                    </p>
                </div>
                <div className="d-flex justify-content-between">
                    <h4 className="review-name">{user?.firstName} {user?.lastName} says</h4>
                    <p className="review-rating">{review?.rating} / 5</p>
                </div>
                <div className="preserve-whitespace">
                    {review?.body}
                </div>
            </div>
        </div>
    );
}

export default FullBookReview;