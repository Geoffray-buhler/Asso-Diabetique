import React, { useEffect, useState } from 'react';
import {Datastream} from './streamer';
import Chaine from '../chaine/chaine';
import './streamer.css';
import Logo from '../logo/logo';

const Streamer = (props) => {

    let [infostreamer, setinfostreamer] = useState("");

    useEffect(() => {
        if(props.id !== "" || props.name !== ""){
            setinfostreamer(Datastream[0].member[parseInt(props.id)])
            props.setStreaminfo(Datastream[0].member[parseInt(props.id)])
        }
    }, [props.id])
    
    if(infostreamer === "" || infostreamer === undefined || props.id===""){
        return(<div className="container d-flex col-lg-10 col-md-9 col-sd-12">
                    <div className="row welcomePage">
                        <div className="col custom-bg">
                            <h1>Bienvenue sur ce site dédié à nos streams caritatifs</h1>
                            <p className="txtBody">Choisissez un streamer dans la liste ci-contre et profitez! </p>
                            <p className="endCitation">Il n'y a pas de petits dons, seulement de grands coeurs.</p>     
                            <Logo Streaminfo={infostreamer}></Logo>                                  
                        </div> 
                    </div>
                </div>
        );
    }
    
    else{
        if(props.theme === "light"){
            return(
                <div className="container d-flex col-10 col-md-9">
                    <div className="row">
                        <div className="col-12 row custom-bg streamerPage">
                            <h1 className="TitleLight">{infostreamer.channel}</h1>
                            <p className="DescLight">{infostreamer.desc}</p>
                            <Chaine name={props.name} theme={props.theme} chat={props.chat}/>
                            <Logo Streaminfo={infostreamer}></Logo>
                        </div>
                    </div>
                </div>
            );
        }else{
            return(
                <div className="container d-flex col-10 col-md-9">
                    <div className="row">
                        <div className="col-12 row custom-bg streamerPage">
                            <h1 className="TitleDark">{infostreamer.channel}</h1>
                            <p className="DescDark">{infostreamer.desc}</p>
                            <Chaine name={props.name} theme={props.theme} chat={props.chat}/>
                            <Logo Streaminfo={infostreamer}></Logo>
                        </div>
                    </div>
                </div>
            );
        }
}
    
};

export default Streamer;