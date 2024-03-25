

import React from "react";
import ReactDOM from "react-dom/client";


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

