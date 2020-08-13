import React from 'react';
import im1 from "../src/img/facebook.svg";
import im2 from "../src/img/sketched.svg";
import im3 from "../src/img/linkedin.svg";

const Footer = () => {
    return(
        <>
            <footer className="footer">
                <p>Follow on  
                    <a href="https://www.facebook.com/akhil.ankola.332" target="blank"><img src = {im1} height="20"></img></a>
                    <a href="https://www.linkedin.com/in/akhil-ankola-70b805141/" target="blank"><img src = {im3} height="20"></img></a>
                    <a href="https://www.instagram.com/akhil_ankola/" target="blank"><img src = {im2} height="20"></img></a>
                </p>
                <p>&#169; 2020 Akhil Ankola. All Rights are Reserved | Terms and Conditions</p>
            </footer>
        </>
    )
}
export default Footer;