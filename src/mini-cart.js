import React, {useState} from 'react';
import { observer } from "mobx-react";
import { currencyFormat } from "./classes/utils";

import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


import Cart from './classes/cart';
//to dev time
window.cart = Cart;

import LinkNavBar from './link-nav-bar';
import WindowMiniCart from './window-mini-cart';
import styled from "styled-components";

export default observer(function MiniCart(){

    const [modeWindowMiniCart, setModeWindowMiniCart] = useState(false);

    const styles ={
        cartIcon : {
            fontSize: '18px',
            color: '#5d5d5d',
        },
        divIcon: {
            position: 'relative',
            display: 'inline-block',
        },
        allLinkCart: {
            display: 'flex',
            minWidth: '100px',
            padding: '15px'
        }
    }

    function handleClick(){
        if(Cart.countProductInCart()){
            setModeWindowMiniCart(v => !v );
        }
    }

    return(
        <LinkNavBar>
            <div
                onClick={() => handleClick()}
                onBlur={()=> setModeWindowMiniCart(false)}
                style={styles.allLinkCart}
            >
                <div style={styles.divIcon}>
                    <FontAwesomeIconStyle icon={faShoppingCart}/>

                    {Cart.countProductInCart() &&
                        <BundCartCount>{Cart.countProductInCart()}</BundCartCount>
                    }
                </div>

                {Cart.countProductInCart() &&
                    <TotalCart>{currencyFormat(Number(Cart.totalPriceInCart()))}</TotalCart>
                }
            </div>
            {modeWindowMiniCart && Cart.countProductInCart() &&
                <WindowMiniCart setModeWindowMiniCart={setModeWindowMiniCart}/>
            }
        </LinkNavBar>
    )
});

const BundCartCount = styled.span`
  position:absolute;
  right: -10px;
  top: -5px;
  min-width: 16px;
  height: 16px;
  background: #ff0000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #fff;
`;

const TotalCart = styled.span`
  padding-left: 12px;
`;

const FontAwesomeIconStyle = styled(FontAwesomeIcon)`
    fontSize: 18px;
    color: #ffffff;
`;