import React from 'react';
import "../Styles/Footer.css";
import { FiMail } from "react-icons/fi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="footer-wrapper">
            <footer className="footer">
                <div className="container">
                    <div className="flex-text">
                        <div className="footer-section">
                            <img className="navbar-logo2" src='https://invikings.com/wp-content/uploads/2023/12/logo2.png' alt="logo"></img><br /><br /><br />
                            <p className="footer-description">We teach the necessary concepts, tools and techniques that enable you to start investing and earning from stock market.</p>
                        </div>
                        <div className="footer-section">
                            <h5 className="footer-heading">Support</h5>
                            <hr className="yellow-line"></hr><br />
                            <ul className="footer-list">
                                <Link to={"/"}><li className="footer-list-item"><FaArrowAltCircleRight color='goldenrod' /> &nbsp; Home</li></Link><br />
                                <Link to={"/privacyPolicy"}><li className="footer-list-item"><FaArrowAltCircleRight color='goldenrod' /> &nbsp; Privacy Policy</li></Link><br />
                                <Link to={"/faq"}><li className="footer-list-item"><FaArrowAltCircleRight color='goldenrod' /> &nbsp; FAQ</li></Link><br />
                                <Link to={"/termsAndConditions"}><li className="footer-list-item"><FaArrowAltCircleRight color='goldenrod' /> &nbsp; Terms and Conditions</li></Link> <br />
                                <Link to={"/refundPolicy"}><li className="footer-list-item"><FaArrowAltCircleRight color='goldenrod' /> &nbsp; Return Policy and Cancellation Refund</li></Link><br />
                                <Link to={"/shippingPolicy"}><li className="footer-list-item"><FaArrowAltCircleRight color='goldenrod' /> &nbsp; Shipping Policy</li></Link>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h5 className="footer-heading">Contact Us</h5>
                            <hr className="yellow-line"></hr><br />
                            <p className="footer-address">8/16p, G3, 3rd Street, Krishnamachari nagar, Alapakkam, Chennai – 600116.</p><br />
                            <a href="mailto:support@invikings.com" className="footer-contact"><FiMail size={20} /> &nbsp;support@invikings.com</a>
                        </div>
                        <div className="footer-section">
                            <h5 className="footer-heading">Reach Us</h5>
                            <hr className="yellow-line"></hr><br />
                            <div className="responsive-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.817529812906!2d80.16557628283168!3d13.047283880422965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52613c7c09e209%3A0x2879d6f79afb8f47!2sg3%203rd%2C%2016%2C%208th%20St%2C%20Ashtalakshmi%20Nagar%2C%20Valasaravakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600095!5e0!3m2!1sen!2sin!4v1723123868264!5m2!1sen!2sin" 
                                    style={{ borderRadius: "10px", border: "0" }} 
                                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='copyright-container'>
                <div className='copyright-content'>
                    <p className='copyright-text'>Copyrights © 2023 - INVIKINGS | All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};


