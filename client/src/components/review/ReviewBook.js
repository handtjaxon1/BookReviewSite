import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";

function ReviewBook(props) {
    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + id)
            .then((response) => {
                setBook(response.data);
                console.log()
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    return (
        <Container>
            <h1>Review { book ? book.title : null}</h1>
        </Container>
    );
}

export default ReviewBook;