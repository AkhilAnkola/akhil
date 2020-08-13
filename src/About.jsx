import React from 'react';
import Newbar from './Newbar';
import { NavLink } from 'react-router-dom';
import Common from './Common';
import aboutimg from '../src/img/about.png';

const About = () => {
    return(
        <>
           <Common
                name='' 
                text='I am Student of SVIT, Vasad Collage'
                lasttext='I am passionate about creating products with a strong visual identity.'
                imgsrc={aboutimg} 
                visit='/Contact' 
                btname="Contact Me"
           />
        </>
    );
};
export default About;