

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Outlet, redirect, Route, Routes, useLocation, useRoutes } from "react-router-dom";


function Home() {

    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about"> About </Link>
                <Link to="events"> Events </Link>
                <Link to="products"> Products </Link>
                <Link to="contact"> Contact Us </Link>
            </nav>
        </div>
    ) ;
}

function About() {

    return (
        <div>
            <h1>[About]</h1>
            <Outlet />
        </div>
    ) ;
}

function Services() {

    return (
        <section>
            <h2>Our Services</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </section>
    ) ;
}

function History() {

    return (
        <section>
            <h2>Our History</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </section>
    ) ;
}

function Location() {

    return (
        <section>
            <h2>Our Location</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </section>
    ) ;
}

function Events() {

    return (
        <div>
            <h1>[Events]</h1>
        </div>
    ) ;
}

function Products() {

    return (
        <div>
            <h1>[Products]</h1>
        </div>
    ) ;
}

function Contact() {

    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    ) ;
}

function Whoops404() {

    let location = useLocation() ;
    console.log( location ) ;

    return ( 
        <div>
            <h1>
                Resource not found at { location.pathname }
            </h1>
        </div>
    );
}



function App() {

    let elements = useRoutes(
        [
            { path: "/", element: <Home /> },
            { 
                path: "/about", 
                element: <About />,
                children: [
                    { path: "history", element: <History /> },
                    { path: "location", element: <Location /> },
                ]
            },
            { path: "/events", element: <Events /> },
            { path: "/products", element: <Products /> },
            { path: "/contact", element: <Contact /> },
            { path: "*", element: <Whoops404 /> },
            { path: "/services", redirectTo: "/products/services" },
        ]
    )

    return (
        //elements

        <div>
            <Routes>
                <Route path="/dist/ch11/ch11_01_company_website.html/" element={ <Home /> } />
                <Route path="/dist/ch11/ch11_01_company_website.html/about" element={ <About /> } />
                <Route path="/dist/ch11/ch11_01_company_website.html/history" element={ <History /> } />
                <Route path="/dist/ch11/ch11_01_company_website.html/location" element={ <Location /> } />
                <Route path="/dist/ch11/ch11_01_company_website.html/events" element={ <Events /> } />
                <Route path="/dist/ch11/ch11_01_company_website.html/products" element={ <Products /> } />
                <Route path="/dist/ch11/ch11_01_company_website.html/contact" element={ <Contact /> } />
                <Route from="/dist/ch11/ch11_01_company_website.html/services" to="/dist/ch11/ch11_01_company_website.html/about/services" />
                <Route path="*" element={ <Whoops404 /> } />
            </Routes>
        </div>
    );
}

const container = document.getElementById( "react-container" ) ;
const root = ReactDOM.createRoot( container ) ;
root.render( 
    <BrowserRouter>
        <App />
    </BrowserRouter>
) ;

