import React from 'react';
import Newbar from './Newbar';
import { NavLink } from 'react-router-dom';
//import web from "../src";
import './index.css';
const Card = (props) => {
    return(
        <>

            <div className="cards">
                <div className="card">
                    <div className="cardimg">
                        <a><img src={props.cimg}/></a>
                    </div>
                    <div className="cardtext">
                        <div className="cardheading"><h5>{props.cheading}</h5></div>
                        <p>{props.ctext}</p>
                        <div className="cardlink">
                            <a href={props.clink} target="blank">{props.btnname}</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};
export default Card;