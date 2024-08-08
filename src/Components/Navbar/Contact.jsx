import React, { useState } from 'react';
import "../Styles/Contact.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const Contact = () => {

  const [name, setName] = useState("");
  const [whatsappNo, setWhatsappNo] = useState("");
  const [yrsOfTrading, setYrsOfTrading] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleWhatsappNo = (e) => {
    setWhatsappNo(e.target.value);
  };
  const handleYrsOfTrading = (e) => {
    setYrsOfTrading(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {};

  return (
    <div> 
      <div className="card">
        <h1 className="card-title"><b>Contact Us</b></h1>
        <span className='link'><Link to={"/"}><b>Home</b></Link><b> / </b><Link to={"/contact"}><b>Contact</b></Link></span>
      </div>
      <div className="card-form">
        <div className="card1">
          <div className="card-body">
            <h5 className="card-title1">Contact us</h5>
            <hr className="hr-line"></hr><br/>
            <h1 className="card-title2">Keep In Touch</h1><br/>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder='Name' value={name} onChange={handleName}/>
              </div><br/>
              <div className="form-group">
                <input type="text" className="form-control" placeholder='Whatsapp No' value={whatsappNo} onChange={handleWhatsappNo}/>
              </div><br/>
              <div className="form-group">
                <input type="text" className="form-control" placeholder='Years of Trading' value={yrsOfTrading} onChange={handleYrsOfTrading}/>
              </div><br/>
              <div className="form-group">
                <input type="text" className="form-control" placeholder='Email' value={email} onChange={handleEmail}/>
              </div><br/>
              <div>
                <button type="button" className="btnSubmit" onClick={handleSubmit}><b>Submit</b></button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='card-address'>
        <div className="card-body">
          <FaHome size={50} color='goldenrod'/>
          <br/><br/>
          <h5>8/16p, G3, 3rd Street, Krishnamachari Nagar,</h5>
          <h5>Alapakkam, Chennai – 600116.</h5>
          <br/>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.817529812906!2d80.16557628283168!3d13.047283880422965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52613c7c09e209%3A0x2879d6f79afb8f47!2sg3%203rd%2C%2016%2C%208th%20St%2C%20Ashtalakshmi%20Nagar%2C%20Valasaravakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600095!5e0!3m2!1sen!2sin!4v1723123868264!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <br/><br/><br/>
          <MdEmail size={50} color='goldenrod'/>
          <br/><br/>
          <h5><a style={{color:"rgb(18, 36, 55)",textDecoration:"none"}} href="mailto:support@invikings.com"><FaArrowAltCircleRight color='goldenrod' /> &nbsp;info@invikings.com</a></h5>
          <br/>
          <h5><a style={{color:"rgb(18, 36, 55)",textDecoration:"none"}} href="mailto:support@invikings.com"><FaArrowAltCircleRight color='goldenrod' /> &nbsp;support@invikings.com</a></h5>
        </div>
      </div>
    </div>
  );
};


