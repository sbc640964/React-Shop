import React from 'react';
import styled from "styled-components";

export default function WindowMiniCart(props){
    return(
        <>
            <BackGroundFixed onClick={() => props.setModeWindowMiniCart(false)}/>
            <Window></Window>
        </>
    )
}

const Window = styled.div`
  width: 100px;
  height: 100px;
  background: #5d5d5d;
  position: absolute;
  bottom: 0px;
  left: 0px;
  transform: translate(0px, 100%);
`;

const BackGroundFixed = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;