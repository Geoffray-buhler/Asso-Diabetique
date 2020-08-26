import React, { useState } from 'react';
import Menu from './components/menu/menu.jsx';
import Streamer from './components/pages/streamer.jsx';
import './App.css';
import Head from './components/head/head';
import Footer from './components/Footer/footer.jsx';
import Logo from './components/logo/logo';

const App = () => {
  const [Name, setName] = useState("");
  const [Id , setId] = useState("");

  const [Streaminfo , setStreaminfo] = useState("");
  
  const [theme, settheme] = useState("dark");
  const [chat, setchat] = useState("video");

  if(theme === "light"){
    return (
      <div className="App lightTheme">
        <div className="App-header">
          <Head setchat={setchat} settheme={settheme} theme={theme} chat={chat}/>
          <div className="container-fluid">
            <div className="row bodyContent">
              <Menu setName={setName} theme={theme} setId={setId}></Menu>
              <Streamer theme={theme} setStreaminfo={setStreaminfo} chat={chat} name={Name} id={Id}></Streamer>
              <Logo Streaminfo={Streaminfo} Id={Id}></Logo>
            </div>
              <Footer theme={theme}></Footer>
          </div>
        </div>
      </div>
    )
  }else{
    return (
      <div className="App darkTheme">
        <div className="App-header">
          <Head setchat={setchat} settheme={settheme} setStreaminfo={setStreaminfo} setId={setId} setName={setName} theme={theme} chat={chat}/>
          <div className="container-fluid">
            <div className="row bodyContent">
              <Menu setName={setName} theme={theme} setId={setId}></Menu>
              <Streamer theme={theme} setStreaminfo={setStreaminfo} chat={chat} name={Name} id={Id}></Streamer>
            </div>
              <Footer theme={theme}></Footer>
          </div>
        </div>
      </div>
    )
  }
}

export default App;