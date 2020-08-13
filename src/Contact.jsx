import React, { useState } from 'react';
import './index.css';

const Contact = () => {
    const [data,setData] = useState({
        name:"",
        phone:"",
        email:"",
        msg:"",
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return{
                ...preVal,
                [name] : value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(' ${data.name} ');
    }

    return(
        <>
            
            <h2 class="form_heading">E-mail me</h2>

            <form action="mailto:akhilankola160410116005@gmail.com" method="post" enctype="text/plain">
                <input type="text" name="name" class="feedback-input" placeholder="Name" /><br/>
                <input type="number" name="phone" class="feedback-input" placeholder="Mobile No." /><br/>
                <input type="text" name="email" class="feedback-input" placeholder="Email" /><br/>
                <textarea name="text" class="feedback-input" placeholder="Comment"></textarea><br/>
                <div class="seb_rese_button">
                    <input type="submit" value="SUBMIT"/>
                    <input type="reset" value="Reset"/>
                </div>
            </form>

        </>
    );
};
export default Contact;