import React from 'react';
import Newbar from './Newbar';
import { NavLink } from 'react-router-dom';
import Common from './Common';
import homeimg from '../src/img/homeimg.svg';
const Home = () => {
    return(
        <>
            <Common 
                name='Welcome to my Website,' 
                text='Thankyou for visiting my site'
                imgsrc={homeimg} 
                visit='/Service' 
                btname="Get Started"
            />
        </>
    );
};
export default Home;