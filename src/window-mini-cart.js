import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { currencyFormat } from "./classes/utils";
import Cart from "./classes/cart";

export default observer(function WindowMiniCart(props) {
  const products = Cart.productsInCart;

  function totalForUnitProduct(product) {
    return currencyFormat(product.quantity * product.product.price, "$", 2);
  }

  return (
    <>
      <BackGroundFixed onClick={() => props.setModeWindowMiniCart(false)} />
      <Window>
        <Header>
          <div
            className="close"
            onClick={() => props.setModeWindowMiniCart(false)}
          >
            x
          </div>
          <div>Cart</div>
        </Header>
        <ProductsList>
          {products.map((product) => (
            <Product key={product.product.id}>
              <ImageProduct url={product.product.images[0].src}></ImageProduct>
              <InfoProduct>
                <Link
                  onClick={() => props.setModeWindowMiniCart(false)}
                  to={`/products/${product.product.id}`}
                >
                  {product.product.name}
                </Link>
                <div>Quantity: {product.quantity}</div>
                <div>
                  A total of {product.quantity} units:{" "}
                  {totalForUnitProduct(product)}
                </div>
              </InfoProduct>
              <TotalAndDelete>
                <div className="delete">
                  <FontAwesomeIconStyle
                    icon={faTrashAlt}
                    onClick={() => Cart.removeProduct(product.product.id)}
                  />
                </div>
                <div className="price">
                  {currencyFormat(product.product.price)}
                </div>
              </TotalAndDelete>
            </Product>
          ))}
        </ProductsList>
        <Footer>
          <TotalCart>
            Total Price: {currencyFormat(Cart.totalPriceInCart(), "$", 2)}
          </TotalCart>
        </Footer>
      </Window>
    </>
  );
});

const Window = styled.div`
  min-width: 380px;
  background: #fff;
  position: absolute;
  bottom: 0px;
  left: 0px;
  transform: translate(0px, 100%);
  booder: 1px solid #dddddd;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  color: #000;
  cursor: default;
`;

const Header = styled.div`
  height: 25px;
  text-align: center;
  position: relative;
  padding: 8px 0px;
  border-bottom: 1px solid #dddddd;
  line-height: 25px;
  font-weight: bold;
  font-size: 20px;

  .close {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0%, -80%);
    font-size: 16px;
  }
`;

const ProductsList = styled.div`
  padding: 8px 16px;
`;

const Product = styled.div`
  display: flex;
  flex-flow: row;
  padding: 8px 0px;
`;

const ImageProduct = styled.div`
  width: 60px;
  height: 60px;
  background: url("${(props) => props.url}") no-repeat center;
  background-size: cover;
`;

const InfoProduct = styled.div`
  padding-left: 8px;

  > div {
    font-weight: bold;
    margin-top: 4px;
  }
`;

const TotalAndDelete = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  text-align: right;
  .delete {
    flex-grow: 1;
    cursor: pointer;
  }
  .price {
    font-weight: bold;
    font-size: 20px;
  }
`;

const FontAwesomeIconStyle = styled(FontAwesomeIcon)`
  &:hover {
    opacity: 0.85;
  }
`;

const Footer = styled.div``;
const TotalCart = styled.div`
  text-align: right;
  font-size: 20px;
  font-weight: bold;
  padding: 8px 16px;
`;

const BackGroundFixed = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  cursor: default;
`;
