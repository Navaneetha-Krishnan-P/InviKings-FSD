import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/RoyalIndicators.css"
import { Card } from "../UI/Card.jsx"
import { BookNow } from '../UI/BookNow';

export const RoyalIndicators = () => {


  return (
    <div>
      <div className="card">
        <h1 className="card-title"><b>Royal Indicators</b></h1>
        <span className='link'><Link to={"/"}><b>Home</b></Link><b> / </b><Link to={"/royalIndicators"}><b>Royal Indicators</b></Link></span>
      </div>
      <div className='ri-container1'>
        <h1 className='ri-heading'>Royal Indicators</h1>
        <hr className="ri-yellow-line"></hr><br />
        <h4 className='ri-subheading'>Easy and Simple to Use : Step-by-Step Guideline</h4>
        <div className='ri-grid'>
          <div>
            <h1 className='ri-step'>O1</h1><br />
            <h4 className='ri-stepheading'><b>Access Confirmation</b></h4>
            <p>Upon receiving access confirmation with your TradingView username, proceed to the next step.</p>
          </div>
          <div>
            <h1 className='ri-step' >O2</h1><br />
            <h4 className='ri-stepheading'><b>TradingView Login</b></h4>
            <p>Log in to your TradingView account using your credentials to enter the trading arena.</p>
          </div>
          <div>
            <h1 className='ri-step'>03</h1><br />
            <h4 className='ri-stepheading'><b>Exclusive Indicator Access</b></h4>
            <p>Within the Indicator section, select “Invite Only” to unlock exclusive access to the INVIKINGS Indicator.</p>
          </div>
          <div>
            <h1 className='ri-step'>04</h1><br />
            <h4 className='ri-stepheading'><b>Subscription Activation</b></h4>
            <p>Witness the INVIKINGS Indicator in action, tailored to your subscription level. The power of precision trading is now at your fingertips.</p>
          </div>
        </div>
      </div>
      <div className='ri-container2'>
        <h2 className='ri-heading2'>Plans and Pricing</h2>
        <hr className="ri-yellow-line"></hr><br /><br /><br />
        <div className='ri-container2-flex'>
            <Card/>
        </div>
       </div>
       <div className='ri-container3'>
         <div className='ri-container3-content'>
          <h2 className='ri3-content-heading'><b>How do the 'Magneta' and 'Magneta Support' Indicators supercharge your trading strategy ?</b></h2>
          <p>Introducing the “Magneta” and “Magneta Support” Indicators Package, a powerful duo designed to elevate your trading strategy with precision and profitability.</p>
          <h3 className='ri3-content-subheading'>Magneta Indicator :</h3>
          <p>Unlock the foresight into market movements with the Magneta Indicator. This cutting-edge tool provides invaluable predictions on where the market is poised to travel. Patience becomes your ally as you strategically await the opportune moment for the market to converge at your identified points. The Magneta Indicator transforms your trading approach into a calculated waiting game, ensuring you are well-prepared for market shifts.</p>
          <h3 className='ri3-content-subheading'>Magneta Support Indicator :</h3>
          <p>While strategically awaiting the market to align with your predictions using the Magneta Indicator, enhance your profitability with the Magneta Support. This supplementary indicator is engineered to capitalize on the market’s movement during your patient anticipation. With Magneta Support, you can extract profit from the market’s fluctuations, offering a dynamic earning strategy that complements the predictive prowess of the Magneta Indicator.</p>
        </div>
       </div>
       <div className='ri-container4'>
        <div className='ri4-container1'>
          <h3 className='ri4-heading'><b>How it Works ?</b></h3>
          <hr className="ri4-yellow-line"></hr>
          <p>The Magneta Indicator identifies key market points, providing a roadmap for potential movements.</p>
          <p>As you patiently await the market to align with the Magneta predictions, activate the Magneta Support to capitalize on ongoing market fluctuations.</p>
          <p>The synergy between Magneta and Magnetan Support ensures a comprehensive trading strategy, combining foresight with real-time profit opportunities.</p>
        </div>
        <div className='ri4-container2'>
          <h3 className='ri4-heading'><b>Benefits :</b></h3>
          <hr className="ri4-yellow-line"></hr>
          <h4 className='ri4-subheading'>Precision Predictions</h4>
          <p>Magneta Support allows you to capitalize on market fluctuations during your patient waiting period.</p>
          <h4 className='ri4-subheading'>Profit While You Wait</h4>
          <p>Magneta Support allows you to capitalize on market fluctuations during your patient waiting period.</p>
          <h4 className='ri4-subheading'>Strategic Synergy</h4>
          <p>Together, Magneta and Magneta Support form a cohesive strategy, optimizing your trading approach.</p>
        </div>
       </div>
       <div className='ri-container5'>
        <p><b>Elevate your trading experience with the Magneta and Magneta Support Indicators Package where precision meets profitability. Harness the power of anticipation and dynamic trading to redefine your success in the financial markets.</b></p>
       </div>
       

    </div>

  )
}
