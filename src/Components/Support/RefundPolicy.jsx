import React from 'react'
import { Link } from 'react-router-dom'

export const RefundPolicy = () => {
  return (
    <div className='rp-container'>
    <div className="card">
      <h1 className="card-title"><b>Return Policy and Cancellation Refund</b></h1>
      <span className='link'><Link to={"/"}><b>Home</b></Link><b> / </b><Link to={"/refundPolicy"}><b>Return Policy and Cancellation Refund</b></Link></span>
    </div>
    <div className='ff-text'>
        <div>
          <h2 className='ff-top'>INVIKINGS providing high-quality trading courses to empower individuals in their journey towards trading</h2>
        </div>
        <div>
          <h2 className='ff-heading'>Refund Policy</h2>
          <hr className="ff-yellow-line"></hr>
          <h3 className='ff-question'>Eligibility for Refund</h3>
          <p>Refund requests will only be considered within a specified period after the purchase of a course. This period may vary based on the specific course, and details will be provided during the purchase process.</p>
          <h3 className='ff-question'>Refund Process</h3>
          <ul>
            <li>To request a refund, customers must contact our support team through the designated channels provided on our website.</li>
            <li>Refund requests will be processed within a reasonable time frame.</li>
          </ul>
          <h3 className='ff-question'>Conditions for Refund</h3>
          <p>Refunds will be considered under the following conditions:</p>
          <ul>
            <li>The request is made within the eligible refund period.</li>
            <li>The course content has not been extensively accessed or downloaded.</li>
          </ul>
          <h3 className='ff-question'>Non-Refundable Items</h3>
          <p>Certain items, such as downloadable materials, may not be eligible for a refund unless there is a technical issue that prevents access.</p>
        </div>
        <div>
          <h2 className='ff-heading'>Cancellation Policy</h2>
          <hr className="ff-yellow-line"></hr>
          <h3 className='ff-question'>Cancellation by the User</h3>
          <p>Users may cancel their enrollment in a course within a specific period after purchase, as indicated during the course enrollment process.</p>
          <h3 className='ff-question'>Cancellation Process</h3>
          <p>Users can initiate the cancellation process by contacting our support team through the provided communication channels.</p>
          <h3 className='ff-question'>Refund after Cancellation</h3>
          <p>Cancellation may entitle users to a refund based on the conditions outlined in the refund policy.</p>
        </div>
        <div>
          <h2 className='ff-heading'>Contact Us</h2>
          <hr className="ff-yellow-line"></hr>
          <p>For any questions or concerns regarding our Refund and Cancellation Policy, please contact our support team at <a style={{color:"goldenrod",textDecoration:"none"}} href="mailto:support@invikings.com">support@invikings.com.</a></p>
          <p>Note: INVIKINGS reserves the right to modify this Refund and Cancellation Policy at any time. Users are encouraged to review this policy periodically for updates.</p>
        </div>
      </div>
    
  
  </div>
  )
}
