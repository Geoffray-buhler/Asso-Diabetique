import React from 'react';
import './logo.css';

const Logo = (props) => {
    if(props.Streaminfo === "" || props.Id === ""){
        return(<img className="imgsize" src="https://nsa40.casimages.com/img/2020/08/24/200824112948565702.png" alt="merci"/>)
    }else{
        return(<img className="imgsize" src={props.Streaminfo.img} alt={props.Streaminfo.imgdesc}/>)
    }
}

export default Logo;