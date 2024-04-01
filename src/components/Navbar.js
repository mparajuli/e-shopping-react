import { React, useState, useContext } from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { CartProduct } from "./CartProduct";

export const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cart = useContext(CartContext);

  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Online Shopping Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>
            {productsCount <= 1 ? "Cart Item" : "Cart Items"}: {productsCount}
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></CartProduct>
              ))}
              <h2>
                Subtotal ({productsCount}{" "}
                {productsCount <= 1 ? "Item" : "Items"}): $
                {cart.getTotalCost().toFixed(2)}
              </h2>
              <Button variant="success" onClick={checkout}>
                Checkout
              </Button>
            </>
          ) : (
            <h2>There are no items in your cart!</h2>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
