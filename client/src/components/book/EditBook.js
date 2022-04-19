import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button, Alert, Container } from "reactstrap";

function EditBook(props) {
    const { id } = useParams();
    const [book, setBook] = useState({});

    // Tracks errors from input. This is server side validation
    const [errors, setErrors] = useState([]);

    // Used to navigate to different routes
    const navigate = useNavigate();

    // Called when the component renders
    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + id)
            .then((response) => {
                setBook(response.data);
            })
            .catch((error) => {
                console.log(error);
                setErrors(error.response.data.errors);
            })
    }, [id]);

    // Update the book and navigate back to the books page
    function handleOnSubmit(e) {
        e.preventDefault();
        axios.put("http://localhost:8000/api/books/" + id, {
            title: book.title,
            author: book.author,
            genre: book.genre,
            description: book.description
        })
            .then((response) => {
                navigate("/books");
            })
            .catch((error) => {
                console.log(error);
                setErrors(error.response.data.errors);
            })
    }

    // Update the book vars as it's changed
    function handleOnChange(e) {
        const { name, value } = e.target;
        setBook((prevState) => ({
            ...prevState, [name]: value
        }));
    };

    return (
        <Container className="py-5">
            <h1>Edit {book.title}</h1>
            <Form onSubmit={handleOnSubmit}>
                <FormGroup>
                    <Label htmlFor="title">Title</Label>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        value={book.title}
                        onChange={handleOnChange}
                    />
                    { errors.title ?
                        <Alert color="danger">{errors.title.message}</Alert>
                        : null
                    }
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="author">Author</Label>
                    <Input
                        type="text"
                        id="author"
                        name="author"
                        value={book.author}
                        onChange={handleOnChange}
                    />
                    { errors.author ?
                        <Alert color="danger">{errors.author.message}</Alert>
                        : null
                    }
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="genre">Genre</Label>
                    <Input
                        type="select"
                        id="genre"
                        name="genre"
                        value={book.genre}
                        onChange={handleOnChange}>
                            <option value="" disabled>-- Choose Genre --</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Classic" >Classic</option>
                            <option value="Crime" >Crime</option>
                            <option value="Fantasy" >Fantasy</option>
                            <option value="Historical Fiction" >Historical Fiction</option>
                            <option value="History" >History</option>
                            <option value="Horror" >Horror</option>
                            <option value="Mystery" >Mystery</option>
                            <option value="Romance" >Romance</option>
                            <option value="Sci-Fi" >Sci-Fi</option>
                            <option value="Thriller" >Thriller</option>
                    </Input>
                    { errors.genre ?
                        <Alert color="danger">{errors.genre.message}</Alert>
                        : null
                    }
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Description</Label>
                    <Input
                        type="textarea"
                        rows="10"
                        id="description"
                        name="description"
                        value={book.description}
                        onChange={handleOnChange}
                    />
                    { errors.description ?
                        <Alert color="danger">{errors.description.message}</Alert>
                        : null
                    }
                </FormGroup>
                <div className="row justify-content-center">
                    <Button type="submit" color="dark" className="col-2 mx-2">Update</Button>
                    <Link to={"/books"} className="btn btn-dark col-2 mx-2">Cancel</Link>
                </div>
            </Form>
        </Container>
    );
}

export default EditBook;