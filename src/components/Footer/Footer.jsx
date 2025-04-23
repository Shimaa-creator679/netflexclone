import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
       <div className="social">
        <ul>
            <li><a href='#'><CiFacebook /></a></li>
            <li><a href='#'><FaInstagram /></a></li>
            <li><a href='#'><FaTwitter /></a></li>
            <li><a href='#'><FaYoutube /></a></li>
        </ul>

        </div>

        <div className="links">
            <ul>

                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
               
            </ul>
            <ul>
            <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
            </ul>
            <ul>
            <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
            </ul>
            <ul>
            <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum.</li>
                <li>Lorem, ipsum.</li>
            </ul>

            
            </div> 

    </div>
  )
}

export default Footer
