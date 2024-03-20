import React from "react";
import { v4 } from "uuid";

import colorData from "../data/color-data.json";


const ColorContext = React.createContext();
export const useColors = () => React.useContext( ColorContext );


export default function ColorProvider( { children } ) {

    const [ colors, setColors ] = React.useState( colorData ) ;

    const addColor = ( title, color ) => {
        setColors( [ ...colors, { id: v4(), title, color, rating: 0 } ] );
    }

    const removeColor = ( id ) => {
        setColors( colors.filter( color => color.id !== id ) );
    }

    const rateColor = ( id, rating ) => {
        setColors( colors.map( color => ( color.id === id ? { ...color, rating } : color ) ) );
    }

    return (
        <ColorContext.Provider value={ { colors, addColor, removeColor, rateColor } }>
            { children }
        </ColorContext.Provider>
    );
}
