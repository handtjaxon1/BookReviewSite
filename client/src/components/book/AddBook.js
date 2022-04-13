import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";

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
                setErrors(error.response.data.errors);
            })
    };

    return (
        <div>
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
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
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
                        defaultValue=""
                        onChange={(e) => setGenre(e.target.value)}>
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
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={10}
                    />
                    { errors.description ?
                        <Alert color="danger">{errors.description.message}</Alert>
                        : null
                    }
                </FormGroup>
                <Button type="submit">Add</Button>
            </Form>
        </div>
    );
}

export default AddBook;