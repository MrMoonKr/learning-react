import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


import App from "./Colors" ;


const container = document.getElementById( "react-container" ) ;
const root = ReactDOM.createRoot( container ) ;
root.render( 
    <BrowserRouter>
        <App />
    </BrowserRouter>
) ;
// root.render( 
//     <App />
// ) ;