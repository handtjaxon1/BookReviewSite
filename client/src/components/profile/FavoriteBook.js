import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FavoriteBook(props) {
    const { bookId, index } = props;
    const [book, setBook] = useState({});
    const [imageSrc, setImageSrc] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + bookId)
            .then((response) => {
                setBook(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    })

    function isCoverValid() {
        return false;
    }

    function viewBook() {
        navigate(`/books/${bookId}`);
    }

    return (
        <div className="card-border card-shadow cursor-pointer p-3 my-3 d-flex" onClick={viewBook}>
            { isCoverValid() ?
                <img src={`data:image/png;base64,${imageSrc}`} alt="book-cover" className="book-cover-sm align-self-center"/>
                :
                <img src={process.env.PUBLIC_URL + "/BookCover_01.png"} alt="book-cover" className="book-cover-sm align-self-center"/>
            }
            <div className="ms-3">
                <h4 className="book-title">{book ? book.title : null}</h4>
                <p className="book-subheader">
                    <span className="book-author">{book?.author}</span> |
                    <span className="book-genre"> {book?.genre}</span>
                </p>
            </div>
        </div>
    );
};

export default FavoriteBook;