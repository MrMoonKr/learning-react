import React from 'react';

import Star from './Star' ;



const createArray = ( length ) => {
    return [ ...Array( length ) ] ;
}


function StarRating( { totalStars = 5, selectedStars = 0, onChange = f => f } ) {

    return (
        <div>
            {
                createArray( totalStars ).map( ( _, i ) => ( 
                    <Star 
                        key={ i } 
                        selected={ i < selectedStars } 
                        onSelect={ () => onChange( i + 1 ) } 
                    /> 
                ) )
            }
            <p>
                { selectedStars } of { totalStars } stars
            </p>
        </div>
    ) ;
}


export default StarRating ;
