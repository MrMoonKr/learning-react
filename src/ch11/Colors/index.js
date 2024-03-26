import React from "react";
import { Routes, Route } from "react-router-dom";
import { ColorProvider } from "./ColorProvider";
import AddColorForm from "./AddColorForm";
import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";




export default function App() {

    return (
        <ColorProvider>
            <AddColorForm />
            {/* <Routes>
                <Route path="/" element={ <ColorList /> } />
                <Route path="/colors/:color" element={ <ColorDetails /> } />
            </Routes> */}
        </ColorProvider>
    ) ;
}