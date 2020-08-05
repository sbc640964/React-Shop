import React from 'react';

import SideBar from "./sidebar";
import ArchiveShop from "./archive-shop";

import FiltersProducts from './classes/filters-products';
window.filters = FiltersProducts;


export default function Shop(){


    return(
        <>
            <SideBar/>
            <ArchiveShop/>
        </>
    )
}