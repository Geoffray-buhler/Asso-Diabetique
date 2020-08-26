import React, {useState} from 'react';

const Footer = (props) => {
    if(props.theme === 'light'){
        return(
            <div className="footer barre barreLight">
                <p className="infoDons">Tous les dons sont déductibles des impôts. N'hésitez pas à demander une attestation.</p>
            </div>
        )
    }else{
        return(
            <div className="footer barre barreDark">
                <p className="infoDons">Tous les dons sont déductibles des impôts. N'hésitez pas à demander une attestation.</p>
            </div>
        )
    }
}

export default Footer;