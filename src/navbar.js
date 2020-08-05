import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

import MiniCart from './mini-cart';
import LinkNavBar from "./link-nav-bar";

export default function NavBar(){
    return(
        <NavBarDiv>
            <NavLink exact to='/'>
                <img src="https://www.tocode.co.il/system/brands/logos/000/000/001/original/logo.png?1453157317" alt="logo" width="80%"/>
            </NavLink>
            <LinkNavBar href="/">
                HOME PAGE
            </LinkNavBar>
            <LinkNavBar href="/shop">
                SHOP
            </LinkNavBar>
            <MiniCart/>
        </NavBarDiv>
    )
};

const NavBarDiv = styled.div`
  width: 100%;
  padding: 0px 25px;
  border-bottom: 1px solid #d5d5d5;
  display: flex;
  align-items: center;
  background: rgb(31, 31, 31);
  >div{
    height: 100%;
    color: #fff;
  }
`;
