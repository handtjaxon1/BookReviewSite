import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button, Alert, Container } from "reactstrap";

function AddBook(props) {
    // TODO Refactor this to use useReducer maybe?
    // Properties for a book
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");

    // Holds any server side validation errors
    const [errors, setErrors] = ([]);

    // Used for handling navigation after the book is added
    const navigate = useNavigate();

    function handleOnSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8000/api/books", {
            title,
            author,
            genre,
            description,
        })
            .then((response) => {
                console.log("Added book");
                navigate("/books");
            })
            .catch((error) => {
                console.log(error);
                setErrors(error.response.data.errors);
            })
    };

    return (
        <Container>
            <h1>Add Book</h1>
            <Form onSubmit={handleOnSubmit}>
                <FormGroup>
                    <Label htmlFor="title">Title</Label>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="author">Author</Label>
                    <Input
                        type="text"
                        id="author"
                        name="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="genre">Genre</Label>
                    <Input
                        type="select"
                        id="genre"
                        name="genre"
                        defaultValue=""
                        onChange={(e) => setGenre(e.target.value)}>
                            <option value="" disabled hidden>--Choose Genre--</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Classic">Classic</option>
                            <option value="Crime">Crime</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Historical Fiction">Historical Fiction</option>
                            <option value="History">History</option>
                            <option value="Horror">Horror</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Romance">Romance</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Thriller">Thriller</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Description</Label>
                    <Input
                        type="textarea"
                        rows="10"
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </FormGroup>
                <div className="row justify-content-center">
                    <Button type="submit" color="dark" className="col-2 mx-2">Add</Button>
                    <Link to={"/books"} className="btn btn-dark col-2 mx-2">Cancel</Link>
                </div>
            </Form>
        </Container>
    );
}

export default AddBook;