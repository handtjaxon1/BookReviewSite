import React from "react";
import { Link } from "react-router-dom";
import BookRowActions from "./BookRowActions";


// Component that displays all of the information for a book as a row in a table
function BookRow(props) {
    const { book, index } = props;
    return (
        <>
            <tr key={index}>
                <td>
                    <Link to={"/books/" + book._id}>{book.title}</Link>
                </td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.rating}</td>
                <td>
                    <BookRowActions book={book}/>
                </td>
            </tr>
        </>
    )
}

export default BookRow;