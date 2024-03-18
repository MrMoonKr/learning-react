
import React from "react";
import ReactDOM from "react-dom";

function App() {

    return (
        <div>
            <h1>Delicious Recipes</h1>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("react-container")
);


/**
 * ReactDOM.render() 사용시 다음과 같은 경고가 발생한다.
 * Warning: ReactDOM.render is no longer supported in React 18. 
 * Use createRoot instead. 
 * Until you switch to the new API, your app will behave as if it's running React 17. 
 * Learn more: https://reactjs.org/link/switch-to-createroot
 */
