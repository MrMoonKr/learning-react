import React from "react";

import { createArray } from "../utils/arrayHelpers" ;
import Star from "./Star" ;


export default function StarRating( { className = "", totalStars = 5, selectedStars = 0, onRate = f => f } ) {

    //const [ selectedStars, setSelectedStars ] = React.useState( 0 ) ;

    return (
        <div className={ className }>
            { 
                createArray( totalStars ).map( ( _, i ) => ( 
                   <Star 
                        key={ i } 
                        selected={ i < selectedStars }
                        onSelect={ () => onRate( i + 1 ) } 
                    /> 
                ) )
            }
            <p>
                { selectedStars } of { totalStars } stars
            </p>
        </div>
    )
}