import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Shop from "./shop";
import SingleProduct from "./singel-product-page";
import styled from "styled-components";

export default function Content(){
    return(
        <Container>
            <Switch>
                <Route path="/shop">
                    <Shop/>
                </Route>
                <Route path="product/:id">
                    <SingleProduct/>
                </Route>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  margin: auto;
  max-width: 1400px;
  padding: 15px;
  
  @media(max-width: 1600px) {
    max-width: 1300px;
  }
  
  @media(max-width: 900px) {
    max-width: 700px;
  }
  
  @media(max-width: 650px) {
    max-width: 600px;
    display: block;
  }
  
`;