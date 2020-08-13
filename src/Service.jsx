import React from 'react';
import Card from './Card';
import './index.css';


import web1 from '../src/img/web_development.jpg';
import web2 from '../src/img/app_development.png';
import web3 from '../src/img/software_development.png';
import web4 from '../src/img/graphics_designing.jpg';
import web5 from '../src/img/front_end_development.png';
import web6 from '../src/img/web_designing.jpg';
import web7 from '../src/img/ui_development.png';
import web8 from '../src/img/ux.jpg';


const Service = (props) => {
    return(
        <>
            <h2 class="form_heading">Services</h2>
            <div className="maincards">
            <Card cimg={web1} cheading="Web Development" ctext="A Web development is the work involved in developing a website for the Internet or an intranet." clink="https://en.wikipedia.org/wiki/Web_development" btnname="Read More"/>
            <Card cimg={web2} cheading="App Development" ctext="Mobile app development is the act or process by which a mobile app is developed for mobile devices." clink="https://en.wikipedia.org/wiki/Mobile_app_development" btnname="Read More"/>
            <Card cimg={web3} cheading="Software development" ctext="It is the process of conceiving, designing, programming and bug fixing other software components." clink="https://en.wikipedia.org/wiki/Software_development" btnname="Read More"/>
            <Card cimg={web4} cheading="Graphic Designer" ctext="It is a professional within the graphic design and graphic arts Which are use to predicate designs of product." clink="https://en.wikipedia.org/wiki/Graphic_designer" btnname="Read More"/>
            <Card cimg={web5} cheading="Front-End web development" ctext="It is the practice of converting data to a graphical interface." clink="https://en.wikipedia.org/wiki/Front-end_web_development" btnname="Read More"/>
            <Card cimg={web6} cheading="Web design" ctext="It encompasses many different skills and disciplines in the production of websites" clink="https://en.wikipedia.org/wiki/Web_design" btnname="Read More"/>
            <Card cimg={web7} cheading="UI Development" ctext="User interface (UI) is the space where interactions between humans and machines occur." clink="https://en.wikipedia.org/wiki/User_interface" btnname="Read More"/>
            <Card cimg={web8} cheading="UX Development" ctext="User experience is a person's emotions and attitudes about using a particular product." clink="https://en.wikipedia.org/wiki/User_experience" btnname="Read More"/>
            </div>
        </>
    );
};
export default Service;