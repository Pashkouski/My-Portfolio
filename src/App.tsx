import './App.css';

import {Header} from "components/header";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Main} from "components/main/Main";


export function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='container'>
                    <Header/>
                    <div style={{position: "relative"}}>
                        <Main/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}



