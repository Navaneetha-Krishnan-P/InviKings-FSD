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
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!whatsappNo.trim()) {
      newErrors.whatsappNo = "Whatsapp number is required.";
    } else if (!/^\d{10}$/.test(whatsappNo)) {
      newErrors.whatsappNo = "Whatsapp number must be 10 digits.";
    }

    if (!yrsOfTrading.trim()) {
      newErrors.yrsOfTrading = "Years of Trading is required.";
    } else if (isNaN(yrsOfTrading) || yrsOfTrading < 0) {
      newErrors.yrsOfTrading = "Years of Trading must be a valid non-negative number.";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email is not valid.";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsModalOpen(true); 
    } else {
      setErrors(formErrors);
    }
  };

  const confirmSubmit = () => {

    fetch('http://localhost:5000/contact_us', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            whatsappNo,
            yrsOfTrading,
            email,
            message
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        setName("");
        setWhatsappNo("");
        setYrsOfTrading("");
        setEmail("");
        setMessage("");
        setIsModalOpen(false); 
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div>
      <div className="card">
        <h1 className="card-title"><b>Contact Us</b></h1>
        <span className='link'><Link to={"/"}><b>Home</b></Link><b> / </b><Link to={"/contact"}><b>Contact Us</b></Link></span>
      </div>
      <div className="card-form">
        <div className="card1">
          <div className="card-body">
            <h5 className="card-title1">Contact us</h5>
            <hr className="hr-line"></hr><br/>
            <h1 className="card-title2">Keep In Touch</h1><br/>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div><br/>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder='Whatsapp No'
                  value={whatsappNo}
                  onChange={(e) => setWhatsappNo(e.target.value)}
                />
                {errors.whatsappNo && <span className="error">{errors.whatsappNo}</span>}
              </div><br/>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder='Years of Trading'
                  value={yrsOfTrading}
                  onChange={(e) => setYrsOfTrading(e.target.value)}
                />
                {errors.yrsOfTrading && <span className="error">{errors.yrsOfTrading}</span>}
              </div><br/>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div><br/>
              <div className="form-group">
                <textarea
                  style={{height:"150px"}}
                  className="form-control"
                  placeholder='Your Message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {errors.message && <span className="error">{errors.message}</span>}
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
      <div className={`modal ${isModalOpen ? 'show' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>Confirm Submission</h2>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to submit this form?</p>
          </div>
          <div className="modal-footer">
            <button className="modal-button" onClick={confirmSubmit}>Confirm</button>
            <button className="modal-button cancel" onClick={closeModal}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};








