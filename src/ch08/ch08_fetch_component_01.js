

import React from "react";
import ReactDOM from "react-dom/client";


function useFetch( url ) {

    const [ data, setData ] = React.useState( null ) ;
    const [ error, setError ] = React.useState( null ) ;
    const [ loading, setLoading ] = React.useState( true ) ;

    React.useEffect( () => {

        if ( !url ) return ;

        fetch( url )
            .then( res => res.json() )
            .then( data => setData( data ) )
            .then( () => setLoading( false ) )
            .catch( error => setError( error ) ) ;
        
    }
    , [url] ) ;

    return (
        <>
        </>
    );
}

function Checkbox() {

    const [ checked, setChecked ] = React.useState( false ) ;

    //alert( `checked: ${ checked.toString() }` ) ;

    React.useEffect( () => {
        alert( `checked: ${ checked.toString() }` ) ;
    } ) ;

    return (
        <>
            <input type="checkbox" value={ checked } onChange={ ( e ) => setChecked( checked => !checked ) } />
            { checked ? "checked" : "not checked" }
        </>
    );

    //alert( `checked: ${ checked.toString() }` ) ;
}

function App() {

    return (
        <>
            <h1>안녕하세요</h1>
            <Checkbox />
        </>
    );
}

const container = document.getElementById( "react-container" ) ;
const root = ReactDOM.createRoot( container ) ;
root.render( <App /> ) ;

