import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";

function OwnedReview(props) {
    const { review, index } = props;
    const [book, setBook] = useState({});
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + review.bookId)
            .then((response) => {
                setBook(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [location]);

    function editReview() {
        navigate(`/reviews/${review._id}/edit`);
    }

    function deleteReview() {
        axios.delete("http://localhost:8000/api/reviews/" + review._id)
            .then((response) => {
                navigate("/profile");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="card-border card-shadow p-3 my-3">
            <Row>
                <Col className="col-sm-8">
                    <h4 className="book-title">{book ? book.title : null}</h4>
                    <p className="book-subheader">
                        <span className="book-author">{book?.author}</span> |
                        <span className="book-genre"> {book?.genre}</span>
                    </p>
                    <p className="review-rating">
                        <span className="review-rating-user">{review?.rating}</span> / 5
                    </p>
                </Col>
                <Col className="col-sm-4 d-flex justify-content-end align-items-start">
                    <Button color="dark" size="lg" onClick={editReview}>Edit</Button>
                    <Button color="danger" size="lg" className="ms-3" onClick={deleteReview}>Delete</Button>
                </Col>
            </Row>
            <p className="preserve-whitespace">
                {review?.body}
            </p>
        </div>
    );
};

export default OwnedReview;