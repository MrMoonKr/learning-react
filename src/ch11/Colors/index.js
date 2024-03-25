import React from "react";
import { Routes, Route } from "react-router-dom";
import { ColorProvider } from "./ColorProvider";





export default function App() {

    return (
        <ColorProvider>
            <AddColorForm />
        </ColorProvider>
    ) ;
}