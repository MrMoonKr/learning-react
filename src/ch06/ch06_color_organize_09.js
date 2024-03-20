import React from "react" ;
import ReactDOM from "react-dom/client" ;
import { css } from "@emotion/css" ;

import AddColorForm from "./components/AddColorForm" ;
import ColorList from "./components/ColorList" ;

import ColorProvider from "./components/ColorProvider";


const addColorFormStyles = css`
display: flex;
justify-content: space-around;
margin: 0.25em;
button {
  margin: 0.25em;
}
input {
  margin: 0.25em;
  &:first-child {
    flex: 1;
  }
}
`;

const colorListSyles = css`
display: flex;
flex-wrap: wrap;
`;

const colorStyles = css`
flex-basis: calc(25% - 2px - 0.5em);
@media screen and (max-width: 1200px) {
  flex-basis: calc(33.3334% - 2px - 0.5em);
}
@media screen and (max-width: 800px) {
  flex-basis: calc(50% - 2px - 0.5em);
}
@media screen and (max-width: 500px) {
  flex-basis: calc(100% - 2px - 0.5em);
}
margin: 0.25em;
border: 1px solid #ededed;
h1 {
  margin: 0;
  text-align: center;
}
`;

export default function App() {

    return (
        <div>
            <AddColorForm customFormStyles={ addColorFormStyles } />
            <ColorList colorListSyles={ colorListSyles } colorStyles={ colorStyles } />
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

