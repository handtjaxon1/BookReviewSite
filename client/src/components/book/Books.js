import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Form, FormGroup, Label, Input, Table } from "reactstrap";
import BookRow from "./BookRow";

function Books(params) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/books")
            .then((response) => {
                console.log(response);
                setBooks(response.data);
            })
            .catch((error) => {
                console.log(error);
                // TODO Consider navigating to an error page based on the status of the response
            })
    }, []);

    // TODO Implement searching through an API and filtering only books with titles containing
    // text that makes the search text as it's typed, effectually making it a live search
    function onSearchChanged(e) {
        e.preventDefault();
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <h1>Books page</h1>
                <Link to={"/books/add"} className="btn btn-dark">Add Book</Link>
            </div>
            <Form>
                <FormGroup>
                    <Input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Search for a book"
                        onChange={(e) => onSearchChanged(e)}
                        style={{width: "500px"}}
                    />
                </FormGroup>
            </Form>
            {/* TODO Long term it'd be more visually appealing to list these as cards, rather than as a table, but for now this works just fine to ensure everything works */}
            <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Add a row for each book in the database */}
                    {books.map((book, index) => <BookRow book={book} index={index}/>)}
                </tbody>
            </Table>
        </div>
    );
}

export default Books;