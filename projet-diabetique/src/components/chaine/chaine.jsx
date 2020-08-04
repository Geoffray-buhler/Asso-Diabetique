import React from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";



const Chaine = (props) =>{
    
    return(
        <div>
            <ReactTwitchEmbedVideo channel={props.name} height="400" width="800" theme={props.theme} layout={props.chat} />
        </div>
    )
}

export default Chaine