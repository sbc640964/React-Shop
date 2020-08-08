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
                <ImageProduct url={product.images[0].src} />
                <InfoProduct>
                  <span className="title">{product.name}</span>
                  <span className="description">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: product.short_description
                      }}
                    ></span>
                  </span>
                  <Price>
                    <span className="symbol">$</span>
                    <span className="price">
                      {currencyFormat(product.price, "") || 0}
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
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  > div {
    margin: 8px;
  }
`;

const Product = styled.div`
  width: 200px;
  height: 100%;
  margin: 0px 12px;
  > div {
    height: 100%;
    margin: 0px -12px;
    border: 1px solid #dddddd;
    display: flex;
    flex-flow: column;
  }
`;

const ImageProduct = styled.div`
  width: 100%;
  height: 150px;
  background: url("${(props) => props.url}") no-repeat center;
  background-size: contain;
`;

const InfoProduct = styled.div`
  display: flex;
  flex-flow: column;
  padding: 16px;
  flex-grow: 1;
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
    flex-grow: 1;
  }
`;

const Price = styled.span`
  margin: 16px 0px 16px;
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
