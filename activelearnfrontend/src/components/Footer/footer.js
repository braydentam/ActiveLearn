import React from 'react';
import './footer.css';
import {FiInstagram,FiMail,FiTwitter,FiFacebook} from "react-icons/fi";

const Footer = () => {
    return (
        <>
        <div class = "footer">
            
            <FiInstagram class="insta"></FiInstagram>
            <FiMail class="mail"></FiMail>
            <FiTwitter class="twitter"></FiTwitter>
            <FiFacebook class="face"></FiFacebook>
            {/* <input class = "in" placeholder="Talk to us!"></input>
            <FiSend class="send"></FiSend> */}
        </div>
        </>
    )
}

export default Footer;
