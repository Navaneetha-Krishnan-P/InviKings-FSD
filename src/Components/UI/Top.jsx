import React from 'react';
import "../Styles/Top.css";

import { FiMail } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";

export const Top = () => {
  return (
    <div className='full-width-container'>
      <div className='container'>
        <div className='header'>
          <div>
            <a href="mailto:support@invikings.com"><FiMail size={20} /> &nbsp;support@invikings.com</a>
          </div>
          <div className='socialmedia'>
            <p>Follow Us :</p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><CiFacebook size={20}  /></a>
            <a href="https://youtube.com/@invikings7?si=Jr8BotqCGBwlGccd" target="_blank" rel="noopener noreferrer"><TfiYoutube size={17} /></a>
            <a href="https://www.instagram.com/invikings?igsh=OHkwemNmdDh2cHZy" target="_blank" rel="noopener noreferrer"><FaInstagram size={17} /></a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><SlSocialTwitter size={16} /></a> */}
          </div>
        </div>
      </div>
    </div>
  );
}


