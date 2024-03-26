import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
import { useColors } from "./ColorProvider";


const Trash = memo( FaTrash ) ;
const Rating = memo( StarRating ) ;

export function Color( { id, title, color, rating=0 } ) {

    const { removeColor, rateColor } = useColors() ;
    const rate = useCallback( ( rating ) => rateColor( id, rating ), [] ) ;
    let navigate = useNavigate() ;


    return (
        <section className="color" onClick={ () => navigate( `/${ id }` ) }>
            <h1>{ title }</h1>
            <button onClick={ () => removeColor( id ) }>
                <Trash />
            </button>
            <div style={ { height: 50, backgroundColor: color } }></div>
            <Rating selectedStars={ rating } onRate={ rate } />
            <button onClick={ () => navigate( `/colors/${ id }` ) }>
                View
            </button>
        </section>
    ) ;
}


export default memo( Color, ( prevProps, nextProps ) => {

    console.log( prevProps.rating, nextProps.rating ) ;

    return prevProps.id === nextProps.id ;
 } ) ;