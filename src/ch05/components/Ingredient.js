import React from "react";


/**
 * 
 * @param {Object} props 컴포넌트에 전달되는 프로퍼티 객체
 * @param {number} props.amount  요리 재료 량 ex) 2
 * @param {string} props.measurement 요리 재료 측정 단위 ex) 컵
 * @param {string} props.name 요리 재료 이름 ex) 설탕
 * @returns 
 */
function Ingredient( { amount, measurement, name } ) {

    return (
        <li>
            { name } ::::: { amount } { measurement }
        </li>
    );
}


export default Ingredient ;
