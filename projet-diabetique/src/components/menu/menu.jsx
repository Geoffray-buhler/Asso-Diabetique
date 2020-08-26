import React from 'react';
import './menu.css';

const Menu = (props) =>{

    if(props.theme === 'light'){
        return(

                    <div className="menuStreamers col-lg-2 col-md-3 col-sd-12">
                        <ul className="listStreamers">
                            <li className="btnStream btnLight">
                                <a onClick={() => {props.setName("Bison_Blanc");props.setId("01")}}>BisonBlanc</a>
                            </li>
                            <li className="btnStream btnLight">
                                <a onClick={() => {props.setName("Arienlys");props.setId("02")}}>Elina</a> 
                            </li>
                            <li className="btnStream btnLight">
                                <a onClick={() => {props.setName("Emulemoi");props.setId("08")}}>Emulemoi</a>
                            </li>
                            <li className="btnStream btnLight">
                                <a onClick={() => {props.setName("GamingQPG");props.setId("03")}}>GamingQPG</a>
                            </li>
                            <li className="btnStream btnLight">
                                <a onClick={() => {props.setName("Griffont39");props.setId("00")}}>Griffont39</a>
                            </li>
                            <li className="btnStream btnLight">
                                <a onClick={() => {props.setName("Imeqy");props.setId("12")}}>Imeqy</a>
                            </li>
                            <li className="btnStream btnLight">
                                <a onClick={() => {props.setName("JimbeauGG");props.setId("11")}}>JimbeauGG</a>
                            </li>
                            <li className="btnStream btnLight">
                                <a onClick={() => {props.setName("Kanoutte51");props.setId("09")}}>Kanoutte51</a>
                            </li>
                            <li className="btnStream btnLight">
                                <a onClick={() => {props.setName("Kira_Michiga");props.setId("06")}}>Kira Michiga</a>
                            </li>
                            <li className="btnStream btnLight">
                                <a onClick={() => {props.setName("Linkonitotv");props.setId("04")}}>Linkonitotv</a>
                            </li>
                            <li className="btnStream btnLight">
                                <a onClick={() => {props.setName("Tacoss51");props.setId("10")}}>Tacoss51</a>
                            </li>
                            <li className="btnStream btnLight">
                                <a onClick={() => {props.setName("The_Nanarchist");props.setId("07")}}>The Nanarchist</a>
                            </li>
                            <li className="btnStream btnLight">
                                <a onClick={() => {props.setName("TheRiver16");props.setId("05")}}>TheRiver16</a>
                            </li>
                        </ul>
                    </div>
        )
    }else{
        return(

            <div className="menuStreamers col-lg-2 col-md-3 col-sd-12">
                <ul className="listStreamers">
                    <li className="btnStream btnDark">
                        <a onClick={() => {props.setName("Bison_Blanc");props.setId("01")}}>BisonBlanc</a>
                    </li>
                    <li className="btnStream btnDark">
                        <a onClick={() => {props.setName("Arienlys");props.setId("02")}}>Elina</a> 
                    </li>
                    <li className="btnStream btnDark">
                        <a onClick={() => {props.setName("Emulemoi");props.setId("08")}}>Emulemoi</a>
                    </li>
                    <li className="btnStream btnDark">
                        <a onClick={() => {props.setName("GamingQPG");props.setId("03")}}>GamingQPG</a>
                    </li>
                    <li className="btnStream btnDark">
                        <a onClick={() => {props.setName("Griffont39");props.setId("00")}}>Griffont39</a>
                    </li>
                    <li className="btnStream btnDark">
                        <a onClick={() => {props.setName("Imeqy");props.setId("12")}}>Imeqy</a>
                    </li>
                    <li className="btnStream btnDark">
                        <a onClick={() => {props.setName("JimbeauGG");props.setId("11")}}>JimbeauGG</a>
                    </li>
                    <li className="btnStream btnDark">
                        <a onClick={() => {props.setName("Kanoutte51");props.setId("09")}}>Kanoutte51</a>
                    </li>
                    <li className="btnStream btnDark">
                        <a onClick={() => {props.setName("Kira_Michiga");props.setId("06")}}>Kira Michiga</a>
                    </li>
                    <li className="btnStream btnDark">
                        <a onClick={() => {props.setName("Linkonitotv");props.setId("04")}}>Linkonitotv</a>
                    </li>
                    <li className="btnStream btnDark">
                        <a onClick={() => {props.setName("Tacoss51");props.setId("10")}}>Tacoss51</a>
                    </li>
                    <li className="btnStream btnDark">
                        <a onClick={() => {props.setName("The_Nanarchist");props.setId("07")}}>The Nanarchist</a>
                    </li>
                    <li className="btnStream btnDark">
                        <a onClick={() => {props.setName("TheRiver16");props.setId("05")}}>TheRiver16</a>
                    </li>
                </ul>
            </div>
)
    }
}

export default Menu;