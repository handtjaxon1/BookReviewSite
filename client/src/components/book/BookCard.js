import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Row } from "reactstrap";

function BookCard(props) {
    const { book, index, displayActions } = props;
    const navigate = useNavigate();

    function editBook() {
        navigate(`/books/${book._id}/edit`);
    };

    function reviewBook() {
        navigate(`/reviews/add/${book._id}`);
    };

    function viewBook() {
        navigate(`/books/${book._id}`);
    };

    return (
        <Col className="col-md-3 col-sm-6 col-12 my-3">
            <Card className="card-border card-shadow p-3 h-100 cursor-pointer" onClick={viewBook}>
                <CardImg
                    src={process.env.PUBLIC_URL + "/BookCover_01.png"}
                    alt="book-cover"
                    top
                    width="50%"
                />
            <CardBody>
                <CardTitle tag="h4">
                    {book?.title}
                </CardTitle>
                <CardSubtitle tag="h5">
                    {book?.author} | {book?.genre}
                </CardSubtitle>
                <Row className="justify-content-evenly mt-3">
                    <Button color="dark" className="col-4" onClick={reviewBook}>Review</Button>
                    <Button color="dark" className="col-4" onClick={editBook}>Edit</Button>
                </Row>
            </CardBody>
            </Card>
        </Col>
    )
}

export default BookCard;