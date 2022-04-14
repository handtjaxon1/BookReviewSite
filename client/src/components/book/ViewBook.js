import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Container, Button } from "reactstrap";


function ViewBook(props) {
    const { id } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + id)
            .then((response) => {
                console.log(response.data);
                setBook(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <Container>
            <h1>Viewing { book ? book.title : "N/A" }</h1>
            <div>
                {/* main book section */}
                <div>
                    <img src="url(BookCover_01.png)" alt="book-cover" />
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Book Title</h2>
                            <Button>Fav</Button>
                        </div>
                        <h3>Author Name | Subject</h3>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem voluptatibus libero necessitatibus accusantium similique ad, magni labore, harum, numquam a! Odit maxime laborum, repellendus esse corrupti optio quae eius.
                        </div>
                        <div>
                            <Link to={`/books/${id}/edit`} className="btn btn-dark">Edit</Link>
                            <Link to={`/reviews/add/${id}`} className="btn btn-dark">Review</Link>
                        </div>
                    </div>
                </div>
                {/* Book reviews section */}
                <div>
                    <div>
                        <h2>Reviews</h2>
                        <p>Rating: 4.5/5</p>
                    </div>
                    {/* List of reviews */}
                    <div>
                        {/* Abstract out into it's own 'ViewReview' component (profile will have a separate 'Review' component) */}
                        <div>
                            {/* Review Header */}
                            <div>
                                <h3>Reviewer: Name</h3>
                                <p>Rating: 3.7/5</p>
                            </div>
                            {/* Review Body */}
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem voluptatibus libero necessitatibus accusantium similique ad, magni labore, harum, numquam a! Odit maxime laborum, repellendus esse corrupti optio quae eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem voluptatibus libero necessitatibus accusantium similique ad, magni labore, harum, numquam a! Odit maxime laborum, repellendus esse corrupti optio quae eius.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ViewBook;