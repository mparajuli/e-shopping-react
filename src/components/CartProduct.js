import { React, useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { getProductData } from "../productsStore";

export const CartProduct = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <h3>{productData.title}</h3>
      <p>Qty: {quantity}</p>
      <p>Price: ${(quantity * productData.price).toFixed(2)}</p>
      <Button
        variant="danger"
        size="sm"
        onClick={() => cart.deleteFromCart(id)}
      >
        Delete
      </Button>
      <hr></hr>
    </>
  );
};
