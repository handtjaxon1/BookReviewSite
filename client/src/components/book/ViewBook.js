import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Button } from "reactstrap";
import ViewBookReview from "./ViewBookReview";
import { useStoredUser } from "../hooks/useStoredUser";

function ViewBook(props) {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [reviews, setReviews] = useState([]);
    const [imageSrc, setImageSrc] = useState("");
    const [user, setUser] = useStoredUser();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + id)
            .then((response) => {
                setBook(response.data);
                //setImageSrc(btoa(String.fromCharCode(...new Uint8Array(book.image.data))));
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get("http://localhost:8000/api/reviews/book/" + id)
            .then((response) => {
                setReviews(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function hasReviews() {
        return reviews !== null && reviews.length > 0;
    };

    function isCoverValid() {
        // return book.image !== null;
        return false;
    }

    function handleFavorite(e) {
        e.preventDefault();
        axios.put("http://localhost:8000/api/users/" + user.result._id, {
            email: user.result.email,
            password: user.result.password,
            username: user.result.username,
            firstName: user.result.firstName,
            lastName: user.result.lastName,
            favorites: [...user.result.favorites, id]
        })
            .then((response) => {
                localStorage.setItem("user", JSON.stringify({ result: response.data, token: user.token }));
                navigate("/profile");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <Container className="py-5">
            {/* main book section */}
            <div className="mb-5 d-flex">
                { isCoverValid() ?
                    <img src={`data:image/png;base64,${imageSrc}`} alt="book-cover" className="book-cover"/>
                    :
                    <img src={process.env.PUBLIC_URL + "/BookCover_01.png"} alt="book-cover" className="book-cover"/>
                }
                <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="book-title">{book.title}</h2>
                        <Button color="danger" onClick={handleFavorite}>Fav</Button>
                    </div>
                    <p className="book-subheader">
                        <span className="book-author">{book.author}</span> | <span className="book-genre">{book.genre}</span>
                    </p>
                    <p className="book-description preserve-whitespace">
                        {book?.description}
                    </p>
                    <div>
                        <Link to={`/reviews/add/${id}`} className="btn btn-dark">Review</Link>
                        <Link to={`/books/${id}/edit`} className="btn btn-dark  mx-3">Edit</Link>
                    </div>
                </div>
            </div>
            {/* Book reviews section */}
            <div className="my-5">
                <div className="d-flex align-items-end">
                    <h2 className="m-0">Reviews</h2>
                    {/* TODO Implement proper 'overall rating' functionality */}
                    {/* <p className="my-0 mx-3 review-rating">overall rating: <span className="review-rating-user">{book.rating}</span> / 5</p> */}
                </div>
                {/* List of reviews */}
                <div className="my-3">
                    { hasReviews() ? reviews.map((review, index) => <ViewBookReview review={review}/>) : "No reviews yet" }
                </div>
            </div>
        </Container>
    );
}

export default ViewBook;