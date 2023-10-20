import './App.css';
import Header from "./header/Header";
import Main from "./main/Main"
import Footer from "./footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import CardPage from "./main/CardPage";
import {Routes} from "react-router";
import React, {useState} from "react";

export const ContextStorage = React.createContext();

function App() {



    const [contextId, setContextId] = useState(0);

    return (
        <ContextStorage.Provider value={{contextId, setContextId}}>
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main/>
                <Footer activeTaskCount="2" finishedTaskCount="1" name="Иван" year="32"/>
            </div>

            <Routes>
                <Route path="/test" element={<CardPage/>} />
            </Routes>
        </BrowserRouter>
        </ContextStorage.Provider>
    );
}

export default App;
