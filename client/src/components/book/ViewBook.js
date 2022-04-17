import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Container, Button } from "reactstrap";
import ViewBookReview from "./ViewBookReview";


function ViewBook(props) {
    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + id)
            .then((response) => {
                console.log(response.data);
                setBook(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Container>
            <div>
                {/* main book section */}
                <div className="d-flex">
                    <img src={process.env.PUBLIC_URL + "/BookCover_01.png"} alt="book-cover" />
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>{book.title}</h2>
                            <Button color="danger">Fav</Button>
                        </div>
                        <p>{book.author} | {book.genre}</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem voluptatibus libero necessitatibus accusantium similique ad, magni labore, harum, numquam a! Odit maxime laborum, repellendus esse corrupti optio quae eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem voluptatibus libero necessitatibus accusantium similique ad, magni labore, harum, numquam a! Odit maxime laborum, repellendus esse corrupti optio quae eius.
                        </p>
                        <div>
                            <Link to={`/reviews/add/${id}`} className="btn btn-dark">Review</Link>
                            <Link to={`/books/${id}/edit`} className="btn btn-dark  mx-3">Edit</Link>
                        </div>
                    </div>
                </div>
                {/* Book reviews section */}
                <div className="my-3 p-5">
                    <div className="d-flex align-items-center px-2">
                        <h2>Reviews</h2>
                        <p>Rating: 4.5/5</p>
                    </div>
                    {/* List of reviews */}
                    <div className="my-3">
                        <ViewBookReview></ViewBookReview>
                        <ViewBookReview></ViewBookReview>
                        <ViewBookReview></ViewBookReview>
                        <ViewBookReview></ViewBookReview>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ViewBook;