import React from "react";
import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productsStore";
import { ProductCard } from "../components/ProductCard";

export const Store = () => {
  return (
    <>
      <h1 align="center">Welcome to our shop!</h1>
      <h6 align="center" className="p-3">
        Enter as strangers, leave as friends - happy shopping 😊
      </h6>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
