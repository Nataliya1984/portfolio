import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {DistantWork} from "./distantWork/DistantWork";
import {Contact} from "./contact/Contact";
import {Footer} from "./footer/Footer";
import { MyProjects } from './myProject/MyProjects';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <DistantWork/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
