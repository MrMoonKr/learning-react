

import React from "react";
import ReactDOM from "react-dom/client";

import { FaStar } from "react-icons/fa";


const createArray = ( length ) => {
    return [ ...Array( length ) ] ;
}

const Star = ( { selected = false, onSelect = f => f } ) => {
    return <FaStar color={ selected ? "red" : "grey" } onClick={ onSelect } /> ;
}

function StarRating( { style= {}, totalStars = 5, ...props } ) {

    const [ selectedStars, setSelectedStars ] = React.useState( 0 ) ;

    return (
        <div style={ { padding: 50, ...style } } { ...props }>
            { 
                createArray( totalStars ).map( ( _, i ) => ( 
                   <Star 
                        key={ i } 
                        selected={ i < selectedStars }
                        onSelect={ () => setSelectedStars( i + 1 ) } 
                    /> 
                ) )
            }
            <p>
                { selectedStars } of { totalStars } stars
            </p>
        </div>
    )
}

function App() {

    return (

        <StarRating 
            style={ { backgroundColor: "lightblue", margin: 25, border: "10px solid #ff0099", padding: 20 } }
            totalStars={ 7 } 
            onDoubleClick={ () => alert( "Double Clicked" ) }
        />
    );
}

const container = document.getElementById( "react-container" ) ;
const root = ReactDOM.createRoot( container ) ;
root.render( <App /> ) ;

