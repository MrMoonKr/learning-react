import React from "react";


/**
 * 
 * @param {Object} props 컴포넌트에 전달되는 프로퍼티 객체
 * @param {string} props.title 요리 방법 타이틀
 * @param {Array<string>} props.steps 요리 방법 순서 리스트
 * @returns 
 */
function Instructions( { title = "untitled", steps = [] } ) {

    return (
        <section className="instructions">
        <h2>{ title }</h2>
        {
            steps.map( ( s, i ) => (

                // <p key={ i }> { s } </p>
                
                <li key={ i }>
                    { s }
                </li>
            ) )
        }
        </section>
    );
}

export default Instructions ;
