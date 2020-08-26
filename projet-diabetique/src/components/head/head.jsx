import React, {useState} from 'react';
import './head.css';
import PaypalButton from '../paypal/paypal';

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
    return(<div className="d-flex justify-content-around barre barreLight"> <button className="btnHeader btnFunctions" onClick={changetheme}>Thème</button>
                                                                             <button className="btnHeader btnFunctions" onClick={changechat}>Chat Twitch</button>
                                                                             <div className="siteName">Asso's charity event</div>
                                                                             <a className="btnHeader btnDon donLight" href="">♥ Don ♥</a>
                                                                             <img className="logoAsso" src="" alt="imgassos"></img>
                                                                            </div>
        )
}

export default Head