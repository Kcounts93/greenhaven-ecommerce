import React from "react";
import { Card, Button } from "react-bootstrap";
import { MdOutlineShoppingBag } from "react-icons/md";

const PlantCard = ({ plant }) => {
  return (
    <Card className="plant-card">
      <Card.Img variant="top" src={plant.imageUrl} className="plant-image" />
      <Card.Body>
        <Card.Title>{plant.name}</Card.Title>
        <Card.Text>{plant.description}</Card.Text>
        <div className="d-flex ">
          <div className="plant-price">{plant.price}</div>
          <Button variant="outline-success" className="plant-button">
            <MdOutlineShoppingBag />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PlantCard;
