import React from 'react';
import './menu.css';

const Menu = (props) =>{

    return(

                <div className="col-1">
                    <ul>
                        <li>
                            <a className="btn btn-primary" onClick={() => {props.setName("Griffont39");props.setId("00")}}>Griffont39</a>
                        </li>
                        <li>
                            <a className="btn btn-primary" onClick={() => {props.setName("BisonBlanc");props.setId("01")}}>BisonBlanc</a>
                        </li>
                        <li>
                            <a className="btn btn-primary" onClick={() => {props.setName("Elina");props.setId("02")}}>Elina</a>
                        </li>
                        <li>
                            <a className="btn btn-primary" onClick={() => {props.setName("GamingQPG");props.setId("03")}}>GamingQPG</a>
                        </li>
                        <li>
                            <a className="btn btn-primary" onClick={() => {props.setName("Linkonitotv");props.setId("04")}}>Linkonitotv</a>
                        </li>
                        <li>
                            <a className="btn btn-primary" onClick={() => {props.setName("TheRiver16");props.setId("05")}}>TheRiver16</a>
                        </li>
                        <li>
                            <a className="btn btn-primary" onClick={() => {props.setName("Kira_Michiga");props.setId("06")}}>Kira_Michiga</a>
                        </li>
                        <li>
                            <a className="btn btn-primary" onClick={() => {props.setName("The_Nanarchist");props.setId("07")}}>The_Nanarchist</a>
                        </li>
                        <li>
                            <a className="btn btn-primary" onClick={() => {props.setName("Emulemoi");props.setId("08")}}>Emulemoi</a>
                        </li>
                        <li>
                            <a className="btn btn-primary" onClick={() => {props.setName("Kanoutte51");props.setId("09")}}>Kanoutte51</a>
                        </li>
                        <li>
                            <a className="btn btn-primary" onClick={() => {props.setName("Tacoss");props.setId("10")}}>Tacoss</a>
                        </li>
                        <li>
                            <a className="btn btn-primary" onClick={() => {props.setName("JimbeauGG");props.setId("11")}}>JimbeauGG</a>
                        </li>
                    </ul>
                </div>
    )
}

export default Menu;