import React from 'react'
import { Link } from 'react-router-dom'

export const ShippingPolicy = () => {
  return (
    <div className='rp-container'>
    <div className="card">
      <h1 className="card-title"><b>Shipping Policy</b></h1>
      <span className='link'><Link to={"/"}><b>Home</b></Link><b> / </b><Link to={"/shippingPolicy"}><b>Shipping Policy</b></Link></span>
    </div>
    <div className='ff-text'>
        <div>
          <h3 className='ff-top'>Delivery Policy</h3>
          <hr className="ff-yellow-line"></hr>
        </div>
        <div>
          <h2 className='ff-heading'>Online Trading Coaching Class</h2>
          <h3 className='ff-question'>1. Introduction</h3>
          <p>Welcome to our Online Trading Coaching Class!, This Delivery Policy outlines the terms and conditions regarding the delivery of our online trading education services. Please read this policy carefully before enrolling in our courses.</p>
          <h3 className='ff-question'>2. Course Access</h3>
          <p>Upon successful enrollment and payment, students will receive immediate access to the course materials via our online learning platform. Access credentials will be provided to the email address provided during registration.</p>
          <h3 className='ff-question'>3. Course Content</h3>
          <p>Our courses consist of pre-recorded video lectures, reading materials, quizzes, assignments, and any additional resources deemed necessary for effective learning. The content is designed to provide comprehensive guidance on various aspects of online trading.</p>
          <h3 className='ff-question'>4. Duration of Access</h3>
          <p>Students will have unlimited access to the course content for the duration specified at the time of enrollment. Any updates or additions to the course materials during this period will be accessible to enrolled students at no extra charge.</p>
          <h3 className='ff-question'>5. Technical Requirements</h3>
          <p>To access the course content, students must have a stable internet connection and compatible devices such as a computer, tablet, or smartphone. It is the responsibility of the student to ensure that their devices meet the minimum technical requirements for accessing the course materials.</p>
          <h3 className='ff-question'>6. Support and Assistance</h3>
          <p>We are committed to providing support and assistance to our students throughout their learning journey. Students can reach out to our customer support team via email for any technical or administrative queries related to the course.</p> 
          <h3 className='ff-question'>7. Refund Policy</h3>
          <p>Refunds are subject to the terms outlined in our Refund Policy. Please refer to the Refund Policy document for detailed information regarding eligibility criteria and refund procedures.</p>
          <h3 className='ff-question'>8. Amendments to the Delivery Policy</h3>
          <p>We reserve the right to modify or update this Delivery Policy at any time without prior notice. Any changes to the policy will be effective immediately upon posting on our website. It is the responsibility of the student to review the Delivery Policy periodically for any updates.</p>
          <p>By enrolling in our online trading coaching class, you acknowledge that you have read, understood, and agreed to abide by the terms and conditions outlined in this Delivery Policy.</p>
        </div>
      </div>
    
  
  </div>
  )
}
