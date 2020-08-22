import React from 'react';
import Card from './Card';
import './index.css';

import web1 from '../src/img/wordpress.jpg';
import web2 from '../src/img/awebz.jpg';
import web5 from '../src/img/galaxy.JPG';
import web4 from '../src/img/calander.JPG';
import web3 from '../src/img/books.jpg';
import web6 from '../src/img/certificate.jpg';
import web7 from '../src/img/paint.JPG';
import web8 from '../src/img/table.JPG';
import web9 from '../src/img/waterdrop.jpg';
import web10 from '../src/img/hidden_color.JPG';
import web11 from '../src/img/game.JPG';
import web12 from '../src/img/cursor.JPG';



const Work = (props) => {
    return(
        <>
            <h2 class="form_heading">Mini-Projects</h2>
            <div className="maincards">
            <Card cimg={web1} cheading="WordPress Website" ctext="This responsive website is created in Wordpress. I use multiple modules like counting number, location map etc" clink="http://akhilankola.ezyro.com/" btnname="Show project"/>
            <Card cimg={web2} cheading="Website (Tilt.js)" ctext="This website is create by coding in sublime text editor, I use Tilj.js in some part for give 3D hover effects." clink="https://akhilankola.github.io/AkhilAnkola.github.io/" btnname="Show project"/>
            <Card cimg={web3} cheading="Download Free Books" ctext="If you want to download books for free, Click on image and click download button which are appear on bottom of card." clink="https://akhilankola.github.io/CE_IT_books/" btnname="Show project"/>
            <Card cimg={web4} cheading="Today's Date Calendar" ctext="I  use HTML and CSS for designing and use JavaScript for catch live data from desktop devices." clink="https://akhilankola.github.io/calendar/" btnname="Show project"/>
            <Card cimg={web5} cheading="Galaxy Them" ctext="This webpage is created by using PARALLAX.JS. This give special effect when you move mouse." clink="https://akhilankola.github.io/galaxythem/" btnname="Show project"/>
            <Card cimg={web6} cheading="Certificate" ctext="This Certificates are design by me in our college level Technical Event which designs are selected." clink="https://akhilankola.github.io/certy/" btnname="Show project"/>
            <Card cimg={web7} cheading="Paint" ctext="I create tool or webpage for drawing or sketch purpose, This is too basic level of it .(no eraser, no responsive)" clink="https://akhilankola.github.io/paint/" btnname="Show project"/>
            <Card cimg={web8} cheading="Table formation" ctext="This denote that how table is useful in HTML, This was created in table and give effects in CSS." clink="https://akhilankola.github.io/table.github.io/" btnname="Show project"/>
            <Card cimg={web9} cheading="Water Drop" ctext="This effect is given by using GOOEY. JS, This color-drop effect is too attractive because of it's smoothness." clink="https://akhilankola.github.io/waterdrop_them/" btnname="Show project"/>
            <Card cimg={web10} cheading="Hidden Colors" ctext="IT's looks simple but it's not, Here I use two images which are placed on each other, mouse is just hide above image." clink="https://akhilankola.github.io/hidden_colors/" btnname="Show project"/>
            <Card cimg={web11} cheading="Game" ctext="This is also a simple and basic version of bike game, I created by using JavaScript , YouTube Videos are help me a lot." clink="https://akhilankola.github.io/game/." btnname="Show project"/>
            <Card cimg={web12} cheading="Cursor Effect" ctext="Here I use different cursor opposite color changing effects, It was created in HTML and CSS only." clink="https://akhilankola.github.io/cursor_effects/" btnname="Show project"/>
            </div>
        </>
    );
};
export default Work;
