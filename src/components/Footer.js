import React from 'react';
import '../SCSS/Footer.scss'
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='row'>
            <div className='col-3'>
            <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
            </div>
            <div className='col-3'>
            <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Legacy</a></li>
                        </ul>
            </div>
            <div className='col-3'>
            <h3>Careers</h3>
                        <ul>
                            <li><a href="#">Job openings</a></li>
                            <li><a href="#">Employee success</a></li>
                            <li><a href="#">Benefits</a></li>
                        </ul>
            </div>
            <div className='col-3 icons '>
            <a href="#"><FaFacebook size='2rem'/></a>
            <a href="#"><FaTwitterSquare size='2rem' /></a>
            <a href="#"><FaSnapchat size='2rem' /></a>
            <a href="#"><FaInstagram size='2rem' /></a>
            <p className="copyright">Airbnb © 2000</p>
      </div>
      </div>
      
    </div>
  );
}

export default Footer;
