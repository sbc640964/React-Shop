import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function LinkNavBar(props){

    const {children, href} = props;

    console.log(typeof children)
    return(
        <LinkNavBarDiv>
            {typeof children === "string"
                ? <NavLink exact to={href ? href : '/'}>{children}</NavLink>
                : <>{children}</>
            }
        </LinkNavBarDiv>
    )
}

LinkNavBar.defaultProps = {
    padding: '15px'
};

const LinkNavBarDiv = styled.div`
  cursor: pointer;
  position:relative;
  
  &:hover{
    opacity: 0.8;
  }
  
  >a{
    padding: 15px;
    text-decoration: none;
    color: #fff;
    
    &:hover{
        opacity: 0.8;
    }
  }
`;
