import './App.css';

import {Header} from "header";
import React from "react";
import {BrowserRouter} from "react-router-dom";


export function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='container'>
                    <Header/>
                    <div style={{position: "relative"}}>

                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}



