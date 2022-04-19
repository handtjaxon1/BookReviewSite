import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Form, FormGroup, Input, Table, Container, Row } from "reactstrap";
import BookRow from "./BookRow";
import BookCard from "./BookCard";
import { useStoredUser } from "../hooks/useStoredUser";

function Books(props) {
    const [books, setBooks] = useState([]);
    const [filter, setFilter] = useState("");
    const location = useLocation();
    const [user, setUser] = useStoredUser();

    useEffect(() => {
        axios.get("http://localhost:8000/api/books")
            .then((response) => {
                console.log("Retrieving books...");
                console.log(response.data);
                console.log(response.data[0]?.title.includes("Hob"));
                setBooks(response.data);
            })
            .catch((error) => {
                console.log(error);
                // TODO Consider navigating to an error page based on the status of the response
            })
    }, [location]);

    function handleOnSubmit(e) {
        e.preventDefault();
    }

    // TODO Implement searching through an API and filtering only books with titles containing
    // text that makes the search text as it's typed, effectually making it a live search
    function onSearchChanged(e) {
        e.preventDefault();
        setFilter(e.target.value);
    };

    function isUserInvalid() {
        return JSON.stringify(user) === "{}";
    }

    return (
        <Container className="py-5">
            <div className="d-flex justify-content-between align-items-center">
                <h1>Books page</h1>
                <Link to={"/books/add"} className="btn btn-dark">Add Book</Link>
            </div>
            <Form onSubmit={handleOnSubmit} className="my-3 mx-auto d-flex justify-content-center">
                <FormGroup>
                    <Input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Search for a book"
                        onChange={(e) => onSearchChanged(e)}
                        style={{minWidth: "500px"}}
                    />
                </FormGroup>
            </Form>
            {/* TODO Long term it'd be more visually appealing to list these as cards, rather than as a table, but for now this works just fine to ensure everything works */}
            {/* <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th className="text-center">Rating</th>
                        <th className="text-center">
                            Actions
                            { isUserInvalid() && (
                                " (login to see actions)"
                            )}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {books.filter((book) => book.title.toLowerCase().includes(filter) || filter === "").map((book, index) => <BookRow book={book} index={index} displayActions={isUserInvalid}/>)}
                </tbody>
            </Table>*/}
            <Row>
                {books.filter((book) => book.title.toLowerCase().includes(filter) || filter === "").map((book, index) => <BookCard book={book} index={index} displayActions={isUserInvalid}/>)}
            </Row>
        </Container>
    );
}

export default Books;