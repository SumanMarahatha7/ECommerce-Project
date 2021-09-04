import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Card className="my-3 rounded card">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          class="card-img-top"
          alt="Not Available"
          height="250px"
          width="100%"
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
          <Card.Title as="div">
            <strong className="text-dark">{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-2">
            <Rating value={product.rating} color={"#f8e825"} />
          </div>
        </Card.Text>

        <Card.Text as="h4">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
