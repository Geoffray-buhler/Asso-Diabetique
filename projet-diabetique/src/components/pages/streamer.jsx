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
        return(<div className="container">
                    <div className="row">
                        <div className="col-11 custom-bg text-light">
                            <h1>Site de l'event contre le diabete !!!</h1>
                            <p>cet event a pour but de collecter un certain nombre de dons et il sera remis à * * * * * </p>
                        </div>
                    </div>
                </div>
        );
    }else{
        return(
            <div className="container">
                <div className="row">
                    <div className="col-11 custom-bg text-light">
                        <h1>{infostreamer.channel}</h1>
                        <h1>{infostreamer.desc}</h1>
                        <img className="imgsize" src={infostreamer.img} alt={infostreamer.imgdesc}/>
                        <Chaine name={props.name} theme={props.theme} chat={props.chat}/>
                    </div>
                </div>
            </div>
        );
    }
    
};

export default Streamer;