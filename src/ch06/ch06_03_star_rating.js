

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

    const [ selectedStars, setSelectedStars ] = React.useState( 3 ) ;

    return (
        <>
            { 
                createArray( totalStars ).map( ( _, i ) => <Star key={ i } selected={ i < selectedStars } /> ) 
            }
            <p>
                { selectedStars } of { totalStars } stars
            </p>
        </>
    )
}

function App() {

    return (

        <StarRating totalStars={ 7 } />
    );
}

const container = document.getElementById( "react-container" ) ;
const root = ReactDOM.createRoot( container ) ;
root.render( <App /> ) ;

