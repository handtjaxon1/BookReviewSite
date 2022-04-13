import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "reactstrap";

// Component representing a list of actions (using buttons) available for books in a BookRow
function BookActions(props) {
    const { book } = props;
    const navigate = useNavigate();

    // Navigate to the edit page for the selected book
    function editBook(id) {
        navigate(`/books/${id}/edit`)
    }

    // Deletes the specified book from the book collection
    function deleteBook(id) {
        axios.delete("http://localhost:8000/api/books/" + id)
            .then((response) => {
                navigate("/books") // Refreshes the page
            })
            .catch((error) => {
                console.log(error);
                // TODO Consider navigating to an error page based on the status of the response
            })
    }

    // Navigate to the add review page and pass this book's ID to the new page
    function reviewBook(id) {
        navigate(`/reviews/add/${id}`);
    }

    return (
        <>
            <Button onClick={() => editBook(book._id)}>Edit</Button>
            <Button onClick={() => deleteBook(book._id)}>Delete</Button>
            <Button onClick={() => reviewBook(book._id)}>Review</Button>
        </>
    );
}

export default BookActions;