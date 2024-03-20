import React from "react" ;

import { useColors } from "./ColorProvider" ;


export const useInput = ( initialValue ) => {

    const [ value, setValue ] = React.useState( initialValue ) ;

    return [
        { value, onChange: ( e ) => setValue( e.target.value ) },
        () => setValue( initialValue )
    ] ;
}


export default function AddColorForm( { customFormStyles } ) {

    const [ titleProps, resetTitle ] = useInput( "" ) ;
    const [ colorProps, resetColor ] = useInput( "#000000" ) ;

    const { addColor } = useColors() ;

    const submit = ( event ) => {

        event.preventDefault() ;

        addColor( titleProps.value, colorProps.value ) ;

        resetTitle() ;
        resetColor() ;
    }

    return (
        <form className={ customFormStyles } onSubmit={ submit }>
            <input { ...titleProps } type="text" placeholder="color title..." required />
            <input { ...colorProps } type="color" placeholder="color value..." required />
            <button>ADD</button>
        </form>
    ) ;
}
