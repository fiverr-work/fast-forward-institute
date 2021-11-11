import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

// Components
import Breadcrumb from "../components/Breadcrumb";

// Thumbnails
import thumbnail1 from "../img/thumbnails/img1.png";

const Books = () => (
  <>
    <Breadcrumb prevLink="/" prevPages={["home"]} active="books" />
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumbnail1} />
      <Card.Body>
        <Card.Title>THE EFFICIENCY OF SUCCESS</Card.Title>
        <Card.Text>
          My goal is to share with you what I have learnt during my life that helped me to be more
          efficient towards success.
        </Card.Text>
        <Button as={Link} variant="primary" to="/product/1" className="w-100">
          Details
        </Button>
      </Card.Body>
    </Card>
  </>
);

export default Books;
