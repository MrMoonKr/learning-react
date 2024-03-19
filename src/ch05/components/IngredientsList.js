import React from "react";
import Ingredient from "./Ingredient";


/**
 * 
 * @param {Object} props 컴포넌트에 전달되는 프로퍼티 객체
 * @param {Array<Ingredient>} props.list 요리에 들어가는 원료 목록
 * @returns 
 */
function IngredientsList( { list = [] } ) {

    return (
        <ul className="ingredients">
        {
            list.map( ( ingredient, i ) => (
                <Ingredient key={i} {...ingredient} />
            ) )
        }
        </ul>
    );
}

export default IngredientsList ;
