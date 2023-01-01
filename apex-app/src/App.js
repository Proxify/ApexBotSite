import './App.css';
import logo from './resources/apex_logo.svg';
import { useState } from "react";
import MarkdownContent from './components/MarkdownContent.js'
import Header from './components/Header.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const bots = ["ApexArchaeology", "ApexAssistant", "ApexCrafting", "ApexDivination", "ApexMining", "ApexSmithing"]

  return (
    <div className="App">
      <BrowserRouter>
      <Header bots={bots}/>
        <Routes>
          <Route path="/bots/:botName" element={<MarkdownContent className="main-content"/>} />
          <Route path="/" element={home()} />
          <Route path="*" element={home()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const home = () => {
    return (
        <div className="home">
            <img src={logo} alt="ApexBots"/>

            <h1>ApexBots</h1>
        </div>
    )
}

export default App;
