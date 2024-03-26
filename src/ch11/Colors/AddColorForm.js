import React from 'react';

import { useColors } from "./ColorProvider" ;


export const useInput = ( initialValue ) => {

    const [ value, setValue ] = React.useState( initialValue ) ;

    return [
        { value, onChange: ( e ) => setValue( e.target.value ) },
        () => setValue( initialValue )
    ] ;
}

function AddColorForm() {

    const { titleProps, resetTitle } = useInput( "" ) ;
    const { colorProps, resetColor } = useInput( "#000000" ) ;
    
    const { addColor } = useColors() ;

    const handleSubmit = ( e ) => {

        e.preventDefault() ;

        addColor( titleProps.value, colorProps.value ) ;
        resetTitle() ;
        resetColor() ;
    }

    return (
        <form className='add-color' onSubmit={ handleSubmit }>
            <input { ...titleProps } type="text" placeholder="color title..." required />
            <input { ...colorProps } type="color" placeholder="color value..." required />
            <button>ADD</button>
        </form>
    ) ;

}


export default AddColorForm ;