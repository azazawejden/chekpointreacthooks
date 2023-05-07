import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const MovieCard = ({ film }) => {
  const { id, name, image, rating, date } = film;
  return (
    <div>
      <Card style={{ width: "18rem", margin: "10px 0" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Rating readonly initialValue={rating} />
          <Card.Text> {date}</Card.Text>
          <Link to={`/details/${id}`}>
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;