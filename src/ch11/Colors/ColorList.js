import React from 'react';
import { useColor } from './';
import Color from './Color';

function ColorList() {

    const { colors } = useColor() ;

    return (
        <div className='color-list'>
            {
                colors.length === 0 ? 
                    ( 'No Colors Listed. ( Add a Color )' ) : 
                    ( colors.map( color => <Color key={ color.id } { ...color } /> ) )
            }
        </div>
    )
}


export default ColorList ;
