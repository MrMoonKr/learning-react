// External Moudules
import React from "react";

// External Styles


// Internal Modules
import Recipe from "./Recipe";

// Internal Styles
import "./Menu.css";


/**
 * 
 * @param {Object} props 컴포넌트에 전달되는 프로퍼티 객체
 * @param {Array<Recipe>} props.recipes  조리법 목록
 * @returns 
 */
function Menu( { recipes = [] } ) {

    return (
        <article>

            <header>
                <h1>Delicious Recipes</h1>
            </header>

            <div className="recipes">
            {
                recipes.map( ( props, i ) => (
                    <Recipe key={ i } { ...props } />
                ) )
            }
            </div>

        </article>
    );
}


export default Menu ;
