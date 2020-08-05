import React from "react";
import styled from "styled-components";

import { currencyFormat } from "./classes/utils";
import AddToCart from "./add-to-cart-button";

export default function Products(props) {
  const { products } = props;

  return (
    <Container>
      {products &&
        products.map((product, index) => (
          <div key={product.id}>
            <Product>
              <div>
                <ImageProduct url={product.image} />
                <InfoProduct>
                  <span className="title">{product.name}</span>
                  <span className="description">{product.description}</span>
                  <Price>
                    <span className="symbol">$</span>
                    <span className="price">
                      {currencyFormat(product.price, "")}
                    </span>
                  </Price>
                  <AddToCart product={product} />
                </InfoProduct>
              </div>
            </Product>
          </div>
        ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  text-align: center;
  > div {
    margin: 8px;
  }
`;

const Product = styled.div`
  margin: 0px 12px;
  > div {
    margin: 0px -12px;
    border: 1px solid #dddddd;
  }
`;

const ImageProduct = styled.div`
  width: 100%;
  height: 150px;
  background: url("${props => props.url}") no-repeat center;
  background-size: contain;
`;

const InfoProduct = styled.div`
  padding: 16px;
  > span {
    display: block;
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .description {
    text-align: left;
  }
`;

const Price = styled.span`
  margin-top: 16px;
  .price {
    font-size: 32px;
    font-weight: bold;
    display: inline-block;
  }
  .symbol {
    font-size: 20px;
    margin-right: 4px;
  }
`;
