import React, { useCallback, useDebugValue, useEffect, useMemo } from 'react';
import { v4 } from 'uuid';


const ColorContext = React.createContext() ;

export const useColors = () => {

    const ctx = React.useContext( ColorContext ) ;
    useDebugValue( ctx.colors.length ) ;
    return ctx ;

}

const reducer = ( state, action ) => {

    switch ( action.type ) {

        case "ADD_COLOR":
            {
                return [
                    ...state,
                    {
                        id: action.payload.id,
                        title: action.payload.title,
                        color: action.payload.color,
                        rating: 0
                    }
                ]
            }
            break;

        case "REMOVE_COLOR":
            {
                return state.filter( ( color ) => color.id !== action.payload.id ) ;
            }
            break;

        case "RATE_COLOR":
            {
                return state.map( ( color ) => ( color.id !== action.payload.id ? color : { ...color, rating: action.payload.rating } ) ) ;
            }
            break;

        default:
            {
                return state ;
            }
    }
}

export const ColorProvider = ( { children } ) => {
    
    const initColors = localStorage.getItem( "colors" ) ;

    const [ _colors, dispatch ] = React.useReducer( reducer, initColors ? JSON.parse( initColors ) : [] ) ;

    const colors = useMemo( () => _colors, [ _colors ] ) ;

    const addColor = useCallback( ( title, color ) => { 

        dispatch( { 
            type: "ADD_COLOR", 
            payload: { 
                id: v4(),
                title,
                color
            } 
        } ) ;

    } ) ;

    const removeColor = useCallback( ( id ) => {

        dispatch( { 
            type: "REMOVE_COLOR", 
            payload: { 
                id 
            } 
        } ) ;

    } ) ;

    const rateColor = useCallback( ( id, rating ) => {

        dispatch( { 
            type: "RATE_COLOR", 
            payload: { 
                id,
                rating 
            } 
        } ) ;

    } ) ;

    useEffect( () => {

        localStorage.setItem( "colors", JSON.stringify( colors ) ) ;

    }, [ colors ] ) ;


    return (
        <ColorContext.Provider value={ { colors, addColor, removeColor, rateColor } }>
            { children }
        </ColorContext.Provider>
    ) ;

} 


