import './App.css';
import { useState, useEffect } from "react";
import MainContent from './components/MainContent.js'
import Header from './components/Header.js';

function App() {
  const bots = ["ApexArchaeology", "ApexAssistant", "ApexCrafting", "ApexDivination", "ApexSmithing"]
  const botNamesRegex = new RegExp( bots.join( "|" ), "i");
  const pathname = window.location.pathname.toLocaleLowerCase();
  const [selectedBot, setSelectedBot] = useState(pathname === "/home" || botNamesRegex.test(pathname.substring(1)) ? pathname.substring(1) : "Home");

  const selectBotOnClick = (botName) => {   
    setSelectedBot(botName);
    window.history.replaceState(null, `ApexBots | ${botName}`, `/${botName}`)
  };  
  
  const [ markdownContent, setMarkdownContent] = useState({md: ""});

  useEffect(()=> {
      fetch(process.env.PUBLIC_URL + `/${selectedBot}.md`)
          .then((res) => res.text())
          .then((md) => {
            setMarkdownContent({ md })
          })
  }, [selectedBot])

  return (
    <div className="App">
      <Header bots={bots} selectedBot={selectedBot} clickEvent={selectBotOnClick}/>
      
      <MainContent className="main-content" selectedBot={selectedBot} md={markdownContent.md}/>
    </div>
  );
}

export default App;
