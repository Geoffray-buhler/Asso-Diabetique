import React, { useEffect, useState } from 'react';
import {Datastream} from './streamer';
import Chaine from '../chaine/chaine';
import './streamer.css';

const Streamer = (props) => {

    let [infostreamer, setinfostreamer] = useState("");

    useEffect(() => {
        if(props.id !== "" || props.name !== ""){
            setinfostreamer(Datastream[0].member[parseInt(props.id)]);
        }
    }, [props.id])
    
    if(infostreamer === "" || infostreamer === undefined){
        return(<div className="container d-flex col-lg-10 col-md-9 col-sd-12">
                    <div className="row welcomePage">
                        <div className="custom-bg">
                            <h1>Bienvenue sur ce site dédié à nos streams caritatifs</h1>
                            <p className="txtBody">Choisissez un streamer dans la liste ci-contre et profitez! </p>
                            <p className="endCitation">Il n'y a pas de petits dons, seulement de grands coeurs.</p> 
                            <img className="imgsize" src="https://nsa40.casimages.com/img/2020/08/24/200824112948565702.png" alt="merci"/>                                             
                        </div>
                        
                    </div>
                </div>
        );
    }
    
    else{
        return(
            <div className="container col-10 col-md-9">
                <div className="row streamerPage">
                    <div className="custom-bg ">
                        <h1 className="TitleLight">{infostreamer.channel}</h1>
                        <p className="DescLight">{infostreamer.desc}</p>
                        <Chaine name={props.name} theme={props.theme} chat={props.chat}/>
                        <img className="imgsize" src={infostreamer.img} alt={infostreamer.imgdesc}/>
                    </div>
                </div>
            </div>
        );
    }
    
};

export default Streamer;