import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import NavBar from "./navbar";
import Content from './content';
import Footer from './footer';


export default function App(){

    return(
        <Router>
            <NavBar/>
            <Content/>
            <Footer/>
        </Router>
    );
}