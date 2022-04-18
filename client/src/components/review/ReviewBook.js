import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

function ReviewBook(props) {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [userId, setUserId] = useState("");
    const [bookId, setBookId] = useState("");
    const [rating, setRating] = useState(3);
    const [body, setBody] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + id)
            .then((response) => {
                setBook(response.data);
                setBookId(response.data._id);
                if (localStorage.getItem("user")) {
                    setUserId(JSON.parse(localStorage.getItem("user")).result._id);
                } else {
                    setUserId("");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function handleOnSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8000/api/reviews", {
            userId,
            bookId,
            rating,
            body
        })
            .then((response) => {
                navigate("/reviews");
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
                </FormGroup>
                <div className="row justify-content-center">
                    <Button type="submit" color="dark" className="col-2 mx-2">Submit</Button>
                    <Link to={"/books"} className="btn btn-dark col-2 mx-2">Cancel</Link>
                </div>
            </Form>
        </Container>
    );
}

export default ReviewBook;