import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/FAQ.css"

export const FAQ = () => {
  return (
    <div className='ff-container'>
      <div className="card">
        <h1 className="card-title"><b>FAQ</b></h1>
        <span className='link'><Link to={"/"}><b>Home</b></Link><b> / </b><Link to={"/faq"}><b>FAQ</b></Link></span>
      </div>
      <div className='ff-text'>
        <div>
          <h1 className='ff-top'>INVIKINGS Trading Courses FAQ</h1>
        </div>
        <div>
          <h2 className='ff-heading'>General Questions</h2>
          <hr className="ff-yellow-line"></hr>
          <h3 className='ff-question'>1. What is INVIKINGS?</h3>
          <p>INVIKINGS is an online platform that offers high-quality trading courses designed to empower individuals with the knowledge and skills needed for successful trading in various financial markets.</p>
          <h3 className='ff-question'>2. How can I contact INVIKINGS for support?</h3>
          <p>You can reach our support team by emailing info@invikings.com or by filling out the contact form on our “Contact Us” page.</p>
          <h3 className='ff-question'>3. Are the courses suitable for beginners?</h3>
          <p>Yes, our courses cater to all levels of traders, including beginners. We provide comprehensive materials and resources to ensure a smooth learning experience for everyone.</p>
        </div>
        <div>
          <h2 className='ff-heading'>Course Content</h2>
          <hr className="ff-yellow-line"></hr>
          <h3 className='ff-question'>4. What topics are covered in the trading courses?</h3>
          <p>Our courses cover a wide range of topics, including but not limited to technical analysis, fundamental analysis, risk management, trading strategies, and market psychology.</p>
          <h3 className='ff-question'>5. Are the courses updated regularly?</h3>
          <p>Yes, we strive to keep our courses up-to-date with the latest market trends and industry developments. Updates and new content are regularly added to provide the most relevant information.</p>
        </div>
        <div>
          <h2 className='ff-heading'>Enrollment and Payment</h2>
          <hr className="ff-yellow-line"></hr>
          <h3 className='ff-question'>6. How do I enroll in a course?</h3>
          <p>To enroll in a course, visit our website, select the desired course, and click on the “Enroll” button. Follow the instructions to complete the enrollment process.</p>
          <h3 className='ff-question'>7. What payment methods are accepted?</h3>
          <p>We accept major credit cards, debit cards, and PayPal for course payments. Secure payment processing is ensured to protect your financial information.</p>
          <h3 className='ff-question'>8. Is there a refund policy?</h3>
          <p>Yes, we offer a 30-day money-back guarantee. If you are not satisfied with the course within the first 30 days, you can request a full refund.</p>
        </div>
        <div>
          <h2 className='ff-heading'>Technical Support</h2>
          <hr className="ff-yellow-line"></hr>
          <h3 className='ff-question'>9. I'm having technical issues accessing my course. What should I do?</h3>
          <p>If you encounter technical issues, please contact our technical support team at info@invikings.com. Provide detailed information about the problem for a prompt resolution.</p>
          <h3 className='ff-question'>10. Are the courses accessible on mobile devices?</h3>
          <p>Yes, our platform is designed to be mobile-friendly. You can access the courses on your desktop, laptop, tablet, or smartphone.</p>
        </div>
        <div>
          <h2 className='ff-heading'>Certification</h2>
          <hr className="ff-yellow-line"></hr>
          <h3 className='ff-question'>11. Do I receive a certificate upon course completion?</h3>
          <p>Yes, upon successful completion of a course, you will receive a personalized certificate recognizing your achievement. This certificate can be downloaded and shared on professional platforms.</p>
        </div>
      </div>
    </div>
  )
}
