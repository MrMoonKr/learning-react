

import React from "react";
import ReactDOM from "react-dom/client";

import { FaStar } from "react-icons/fa";


function StarRating() {

    return [
        <FaStar color="red" />,
        <FaStar color="red" />,
        <FaStar color="red" />,
        <FaStar color="grey" />,
        <FaStar color="grey" />,
    ];
}

function App() {

    return (

        <StarRating />
    );
}

const container = document.getElementById( "react-container" ) ;
const root = ReactDOM.createRoot( container ) ;
root.render( <App /> ) ;

