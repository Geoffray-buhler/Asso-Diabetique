import React from 'react';
import './head.css';

const Head = (props) => {

    const changetheme = () => {
        if (props.theme === "dark"){
            props.settheme("light");
        }else{
            props.settheme("dark");
        }
    }

    const changechat = () => {
        if (props.chat === "video"){
            props.setchat("");
        }else{
            props.setchat("video");
        }
    }

    const reset = () => {
        props.setName("");
        props.setId("");
        props.setStreaminfo("");
    }


    if(props.theme === "light"){
        return(<div className="d-flex justify-content-around barre barreLight"> <button className="btnHeader btnFunctions" onClick={changetheme}>Thème</button>
                                                                                <button className="btnHeader btnFunctions" onClick={changechat}>Chat Twitch</button>
                                                                                <a className="siteName" href="">Asso's charity event</a>
                                                                                <a className="btnHeader btnDon donLight" href="">♥ Don ♥</a>
                                                                                <img className="logoAsso" src="" alt="imgassos"></img>
                                                                                </div>
            )
    }else{
        return(<div className="d-flex justify-content-around barre barreDark"> <button className="btnHeader btnFunctions" onClick={changetheme}>Thème</button>
                                                                                <button className="btnHeader btnFunctions" onClick={changechat}>Chat Twitch</button>
                                                                                <a className="siteName" href="">Asso's charity event</a>
                                                                                <a className="btnHeader btnDon donDark" href="">♥ Don ♥</a>
                                                                                <img className="logoAsso" src="" alt="imgassos"></img>
                                                                                </div>
            )
    }
}

export default Head