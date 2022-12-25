import './App.css';
import { useState, useEffect } from "react";
import MainContent from './components/MainContent.js'
import Header from './components/Header.js';

function App() {
  const bots = ["ApexArchaeology", "ApexAssistant", "ApexCrafting", "ApexDivination", "ApexSmithing"]
  const [selectedBot, setSelectedBot] = useState("Home");

  const selectBotOnClick = (botName) => {
    setSelectedBot(botName);
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
