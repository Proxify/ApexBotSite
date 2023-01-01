import './App.css';
import logo from './resources/apex_logo.svg';
import { useState } from "react";
import MarkdownContent from './components/MarkdownContent.js'
import Header from './components/Header.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const bots = ["ApexArchaeology", "ApexAssistant", "ApexCrafting", "ApexDivination", "ApexMining", "ApexSmithing"]
  const botNamesRegex = new RegExp( bots.join( "|" ), "i");
  const pathname = window.location.pathname.toLocaleLowerCase();
  const [selectedBot, setSelectedBot] = useState(botNamesRegex.test(pathname.substring(6)) ? pathname.substring(6) : "N/A");

  const baseNavigate = (path) => {
    if (path.includes('/bots/')) {
      setSelectedBot(path);
    }
    window.history.replaceState(null, `ApexBots | ${path}`, `${path}`)
  };  

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
