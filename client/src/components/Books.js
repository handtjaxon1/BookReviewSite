import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";
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

    return (
        <div>
            <h1>Books page</h1>
            {/* TODO Long term it'd be more visually appealing to list these as cards, rather than as a table, but for now this works just fine to ensure everything works */}
            <Table>
                <thead>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Rating</th>
                    <th>Actions</th>
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