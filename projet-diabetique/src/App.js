import React, { useState } from 'react';
import Menu from './components/menu/menu.jsx';
import Streamer from './components/pages/streamer.jsx';
import './App.css';
import Head from './components/head/head';

const App = () => {
  const [Name, setName] = useState("");
  const [Id , setId] = useState("");
  
  const [theme, settheme] = useState("dark");
  const [chat, setchat] = useState("video");

  return (
    <div className="App">
      <div className="App-header">
        <Head setchat={setchat} settheme={settheme} theme={theme} chat={chat}/>
        <div className="container-fluid">
          <div className="row bodyContent">
            <Menu setName={setName} setId={setId}></Menu>
            <Streamer theme={theme} chat={chat} name={Name} id={Id}></Streamer>
          </div>
          <div className="footer barre barreLight">
            <p className="infoDons">Tous les dons sont déductibles des impôts. N'hésitez pas à demander une attestation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;