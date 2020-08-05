import React from 'react';
import styled from "styled-components";

export default function SideBar(){
    return(
        <Container>
            <h3>Categories and Filters</h3>
        </Container>
    )
}

const Container = styled.div`
  width: 20%;
  min-height: 100%;
  background: #f3f3f3;
  margin-right: 3%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #d5d5d5;
  
  >h3{
    margin: 0px;
  }
`;