import React from "react";
import { Button, Card } from "react-bootstrap";
import { AiTwotoneLike } from "react-icons/ai";
import { Rating } from "react-simple-star-rating";
const ProdCard = ({ propsprod }) => {
  const { title, price, description, category, image, rating, QtS, id } =
    propsprod;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Rating initialValue={parseInt(rating.rate)} readonly />
        <Card.Text>{category}</Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>price : {price} dt</Card.Text>
        <Card.Text>Quantite en stock {QtS}</Card.Text>
        <Button variant="primary">Edit </Button>
        <Button variant="primary">X</Button>

        <Button variant="primary">Add to Cart</Button>
        <div style={{ display: "flex", gap: "10px" }}>
          <AiTwotoneLike />

          <p>{rating.count}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProdCard;