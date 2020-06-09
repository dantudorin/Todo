import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer ">
            <div className="SocialGroup">
                <p> Like what you see? Let's get to know each other better </p>
                <a href="https://www.facebook.com/dan.tudorin" target="_blank">
                    <img src="https://image.flaticon.com/icons/png/512/145/145802.png" className="Icon" />
                    
                </a>
                <a href="https://www.linkedin.com/in/tudorin-dan-47033713b/" target="_blank">
                    <img src="https://image.flaticon.com/icons/png/512/1384/1384062.png" className="Icon" />
                </a>
                <a href="https://www.instagram.com/tudorind/?hl=en" target="_blank">
                    <img src="https://image.flaticon.com/icons/svg/2111/2111463.svg" className="Icon" />
                </a>
            </div>
            <div className="Copyright">
                @2020 created by : <strong>Tudorin Dan</strong>
            </div>
        </div>
    );
}

export default Footer;