import React from 'react'
import "../Styles/CrownMembership.css"
import { Link } from 'react-router-dom'
import CrownPic from "../../assets/CrownMembershipPic2.png"


export const CrownMembership = () => {

  return (
    <div>
      <div className="card">
        <h1 className="card-title"><b>Crown Membership</b></h1>
        <span className='link'><Link to={"/"}><b>Home</b></Link><b> / </b><Link to={"/crownMembership"}><b>Crown Membership</b></Link></span>
      </div>
      <div className='crown-container'>

        <div className='crown-flex'>

        <div className='crown-image'>
            <img 
              fetchpriority="high" 
              decoding="async" 
              width="525" 
              height="500"  
              className="attachment-large size-large wp-image-12157" 
              alt="" 
              srcSet={CrownPic}
              sizes="(max-width: 525px) 10vw, 525px"
            />
          </div>
          <div className='crown-part1'>
            <h3 style={{color:"goldenrod"}}>Crown Membership</h3>
            <hr className="crown-yellow-line"></hr><br/>
            <h1>About CROWN MEMBERSHIP !!</h1><br/>
            <h5><b>Navigating Success in Trading, Founded by Vinil</b></h5><br/><br/>
            <p>Welcome to INVIKINGS, a trading realm founded by Vinil, a visionary leader driven by the passion to democratize trading expertise and empower individuals to conquer the financial markets. Established on the principles of wisdom, strategy, and community, INVIKINGS is more than a coaching and indicator provider—it’s a movement to redefine success in trading.</p><br/>
            <Link to={"contact"}><button type="button" className="btn btn-warning" style={{color:"rgb(28, 55, 83)"}}><b>Contact Us</b></button></Link>
          </div>

        </div>
      </div>
    </div>
  )
}
