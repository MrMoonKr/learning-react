import React from "react";

import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";


/**
 * 
 * @param {Object} props 컴포넌트에 전달되는 프로퍼티 객체
 * @param {string} props.name 조리법 이름
 * @param {Array<Ingredient>} props.ingredients 조리법 목록
 * @param {Array<string>} props.steps 요리 방법 순서 리스트
 * @returns 
 */
function Recipe( { name = "untitled", ingredients = [], steps = [], } ) {

    return (
        <section id={ name.toLowerCase().replace(/ /g, "-") }>
            <h1>{ name }</h1>
            <IngredientsList list={ ingredients } />
            <Instructions title="Cooking Instructions" steps={ steps } />
        </section>
    );

}


export default Recipe ;
