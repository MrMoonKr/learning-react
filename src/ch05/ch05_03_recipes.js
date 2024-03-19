
import React from "react";
import ReactDOM from "react-dom/client";

import data from "./data/recipes.json";
import Menu from "./components/Menu";

//ReactDOM.render(<Menu recipes={data} />, document.getElementById("root"));



const container = document.getElementById( "react-container" );
const root = ReactDOM.createRoot( container );
root.render( <Menu recipes={data} /> );


// ReactDOM.render(
//     <App />,
//     document.getElementById("react-container")
// );

/**
 * ReactDOM.render() 사용시 다음과 같은 경고가 발생한다.
 * Warning: ReactDOM.render is no longer supported in React 18. 
 * Use createRoot instead. 
 * Until you switch to the new API, your app will behave as if it's running React 17. 
 * Learn more: https://reactjs.org/link/switch-to-createroot
 */
