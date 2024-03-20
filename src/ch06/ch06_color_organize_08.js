import React from "react" ;
import ReactDOM from "react-dom/client" ;


import AddColorForm from "./components/AddColorForm" ;
import ColorList from "./components/ColorList" ;

import ColorProvider from "./components/ColorProvider";

export default function App() {

    return (
        <div>
            <AddColorForm />
            <ColorList />
        </div>
    ) ;
}

const container = document.getElementById( "react-container" ) ;
const root = ReactDOM.createRoot( container ) ;
root.render( 
    <ColorProvider>
        <App />
    </ColorProvider>
) ;

