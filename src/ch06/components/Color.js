import React from "react";
import { FaTrash } from "react-icons/fa";

import StarRating from "./StarRating";
import { useColors } from "./ColorProvider";


export default function Color( { className = "", id, title, color, rating } ) {

    const { rateColor, removeColor } = useColors() ;

    return (
        <section className={ className }>
            <h1>{ title }</h1>
            <button onClick={ () => removeColor( id ) }>
                <FaTrash />
            </button>
            <div style={ { height: 50, backgroundColor: color } }>
                {/* 색상표시 */}
            </div>
            <StarRating 
                selectedStars={ rating }
                onRate={ rating => rateColor( id, rating ) }
            />
        </section>
    );
}
