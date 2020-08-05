import React, { useState } from "react";

import Cart from "./classes/cart";
import styled from "styled-components";

export default function AddToCart({ product }) {
  const [spinner, setSpinner] = useState(false);

  function addToCart(product) {
    setSpinner(true);
    Cart.addProduct(product);
    setSpinner(false);
  }

  return (
    <AddToCartButton onClick={() => addToCart(product)}>
      ADD TO CART
      {spinner && <spiner />}
    </AddToCartButton>
  );
}

const AddToCartButton = styled.button`
  padding: 12px 32px;
  background: brown;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: #fff;

  &:hover {
    opacity: 0.9;
  }
`;
