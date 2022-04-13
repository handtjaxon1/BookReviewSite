import React from "react";
import BookActions from "./BookActions";

// Component that displays all of the information for a book as a row in a table
function BookRow(props) {
    const { book, index } = props;
    return (
        <>
            <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.rating}</td>
                <td>
                    <BookActions book={book}/>
                </td>
            </tr>
        </>
    )
}

export default BookRow;