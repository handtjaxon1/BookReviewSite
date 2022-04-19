import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Container, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";

function EditReview(props) {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [userId, setUserId] = useState("");
    const [bookId, setBookId] = useState("");
    const [rating, setRating] = useState(3);
    const [body, setBody] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/reviews/" + id)
            .then((response) => {
                setRating(response.data.rating);
                setBody(response.data.body);
                setUserId(response.data.userId);
                setBookId(response.data.bookId);

                axios.get("http://localhost:8000/api/books/" + response.data.bookId)
                .then((response) => {
                    setBook(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    function handleOnSubmit(e) {
        e.preventDefault();
        axios.put("http://localhost:8000/api/reviews/" + id, {
            userId,
            bookId,
            rating,
            body
        })
            .then((response) => {
                navigate("/profile");
            })
            .catch((error) => {
                console.log(error);
                setErrors(error.response.data.errors);
            });
    }

    return (
        <Container className="py-5">
            <h1>Review { book ? book.title : "N/A" }</h1>
            <Form onSubmit={handleOnSubmit}>
                <Input type="text" id="userId" name="userId" value={userId} hidden readOnly/>
                <Input type="text" id="bookId" name="bookId" value={bookId} hidden readOnly/>
                <FormGroup>
                    <Label htmlFor="rating">Rating</Label>
                    <Input
                        type="range"
                        min="1"
                        max="5"
                        step="0.5"
                        id="rating"
                        name="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                    { errors.rating ?
                        <Alert color="danger">{errors.rating.message}</Alert>
                        : null
                    }
                </FormGroup>
                <FormGroup>
                    <Label>Review</Label>
                    <Input
                        type="textarea"
                        rows="10"
                        id="body"
                        name="body"
                        placeholder="Enter review..."
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    { errors.body ?
                        <Alert color="danger">{errors.body.message}</Alert>
                        : null
                    }
                </FormGroup>
                <div className="row justify-content-center">
                    <Button type="submit" color="dark" className="col-2 mx-2">Update</Button>
                    <Link to={"/profile"} className="btn btn-dark col-2 mx-2">Cancel</Link>
                </div>
            </Form>
        </Container>
    );
}

export default EditReview;