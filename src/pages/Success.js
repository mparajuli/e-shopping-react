import React from "react";
import { Container } from "react-bootstrap";

export const Success = () => {
  return (
    <Container className="text-center mt-5">
      <h1 style={{ color: "#28a745" }}>🎉Payment success!🎉</h1>
      <p className="lead">Thank you for your purchase!!</p>
    </Container>
  );
};
