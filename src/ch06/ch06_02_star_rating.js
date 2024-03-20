

import React from "react";
import ReactDOM from "react-dom/client";

import { FaStar } from "react-icons/fa";


const createArray = ( length ) => {
    return [ ...Array( length ) ] ;
}

const Star = ( { selected=false } ) => {
    return <FaStar color={ selected ? "red" : "grey" } /> ;
}

function StarRating( { totalStars = 5 } ) {

    return createArray( totalStars ).map( ( _, i ) => <Star key={ i } /> ); ;
}

function App() {

    return (

        <StarRating totalStars={ 10 } />
    );
}

const container = document.getElementById( "react-container" ) ;
const root = ReactDOM.createRoot( container ) ;
root.render( <App /> ) ;

