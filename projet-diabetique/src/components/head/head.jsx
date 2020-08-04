import React, {useState} from 'react';
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

    return(<div className="d-flex justify-content-around w-100 h-100 mt-4 "> <button className="btn btn-secondary" onClick={changetheme}>Théme</button> <button className="btn btn-secondary" onClick={changechat}>chats</button> </div>)
}

export default Head