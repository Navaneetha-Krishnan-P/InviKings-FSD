import React from 'react'
import { Link } from "react-router-dom"

export const TermsAndConditions = () => {
  return (
    <div className='tc-container'>
    <div className="card">
      <h1 className="card-title"><b>Terms and Conditions</b></h1>
      <span className='link'><Link to={"/"}><b>Home</b></Link><b> / </b><Link to={"/termsAndConditions"}><b>Privacy Policy</b></Link></span>
    </div>
    <div className='pp-text'>
      <div>
        <h3 className='pp-heading'>Last updated on Dec 04 2023</h3>
        <p>The Website Owner, including subsidiaries and affiliates (“Website” or “Website Owner” or “we” or “us” or “our”) provides the information contained on the website or any of the pages comprising the website (“website”) to visitors (“visitors”) (cumulatively referred to as “you” or “your” hereinafter) subject to the terms and conditions set out in these website terms and conditions, the privacy policy and any other relevant terms and conditions, policies and notices which may be applicable to a specific section or module of the website.</p>
        <p>INVIKINGS is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.</p>
        <p>INVIKINGS may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.</p>
      </div>
      <div>
        <h3 className='pp-heading'>The use of this website is subject to the following terms of use:</h3>
        <ul>
          <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
          <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
          <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
          <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
          <li>All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.</li>
          <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense</li>
          <li>From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information.</li>
          <li>You may not create a link to this website from another website or document without INVIKINGS’s prior written consent.</li>
          <li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority.</li>
        </ul>
        <p>We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.</p>
      </div>
    </div>
  </div>
  )
}
