import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";

function EditBook(props) {
    const { id } = useParams();
    const [book, setBook] = useState({});

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

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

    function handleOnSubmit(e) {
        e.preventDefault();
        axios.put("http://localhost:8000/api/books/" + id, {
            title: book.title,
            author: book.author,
            genre: book.genre,
            description: book.description
        })
            .then((response) => {
                console.log(response.data);
                navigate("/books");
            })
            .catch((error) => {
                console.log(error);
                setErrors(error.response.data.errors);
            })
    }

    function handleOnChange(e) {
        const { name, value } = e.target;
        setBook((prevState) => ({
            ...prevState, [name]: value
        }));
    };

    return (
        <div>
            <h1>Edit <span>{book.title}</span></h1>
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
                        defaultValue=""
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
                        id="description"
                        name="description"
                        value={book.description}
                        onChange={handleOnChange}
                        rows={10}
                    />
                    { errors.description ?
                        <Alert color="danger">{errors.description.message}</Alert>
                        : null
                    }
                </FormGroup>
                <Button type="submit">Update</Button>
            </Form>
        </div>
    );
}

export default EditBook;