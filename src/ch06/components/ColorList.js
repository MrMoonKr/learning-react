import React from "react";

import { useColors } from "./ColorProvider";
import Color from "./Color";

export default function ColorList( { colorListSyles="", colorStyles=""}) {

    const { colors } = useColors() ;

    if ( colors.length === 0 ) {
        return <div>No Colors Listed. ( Add a Color )</div>
    }

    return (
        <div className={ colorListSyles }>
            { /* 색상리스트 출력 */ }
            {
                colors.map( color => ( 
                    <Color className={ colorStyles } key={ color.id } { ...color } /> 
                ) )
            }
        </div>
    );
}
