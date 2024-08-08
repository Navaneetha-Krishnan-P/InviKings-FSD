import React from 'react';
import { AboutUs } from '../Navbar/AboutUs.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../Styles/Home.css"
import { BsPersonBoundingBox } from "react-icons/bs";

export const Home = () => {
  return (
    <div>
      <AboutUs />
      <h2 className='feedback-head'>Feedbacks</h2>
      <hr className="hr-line"></hr>
      <br/>
      <h4 className='feedback-head'>What people say about us!</h4>
      <div className='feedback'>

        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-root-margin="0px 0px -40%"
          data-bs-smooth-scroll="true"
          className="scrollspy-example p-3 rounded-2"
          tabIndex="0"
          style={{ height: '400px', overflowY: 'scroll'}}
        >
          <div className='feedback-list'> 
          <h5 id="scrollspyHeading1"><BsPersonBoundingBox size={30} color='goldenrod'/> &nbsp; Parthi</h5>
          <br/>
          <p>"I can't imagine my trading routine without the MG Indicator. It's like having a personal compass in the market's vast sea. The signals are clear, and the accuracy is impressive. It has significantly streamlined my analysis process, allowing me to focus on the most profitable opportunities. MB Indicator is a must-have for anyone looking to navigate the markets with confidence."</p>
          <h5 id="scrollspyHeading2"><BsPersonBoundingBox size={30} color='goldenrod'/> &nbsp; Ravi</h5>
          <br/>
          <p>"Enrolling in the daily live trading class was a game- changer! The insights shared are like hidden treasures revealed each day. The instructor's real- time strategies and market analysis are invaluable. I've witnessed a noticeable improvement in my trading precision and confidence. It's not just a class; it's a daily ritual that fuels my success."</p>
          <h5 id="scrollspyHeading3"><BsPersonBoundingBox size={30} color='goldenrod'/> &nbsp; Santhosh</h5>
          <br/>
          <p>"Joining the daily live trading class was the best decision for my trading journey. The dynamic atmosphere, expert guidance, and real-time interactions have elevated my understanding of the markets. The class not only equips you with strategies but also empowers you to make informed decisions on the fly. It's a daily adventure that turns the complexity of trading into a thrilling and profitable experience!"</p>
          <h5 id="scrollspyHeading4"><BsPersonBoundingBox size={30} color='goldenrod'/> &nbsp; Ranjith</h5>
          <br/>
          <p>"The MG Indicator is a revelation in trading. Its simplicity is its strength! I've been through countless indicators, but MB stands out for its accuracy and ease of use. It's like having a seasoned trader whispering insights in my ear. My trading has never been more focused, and my results speak volumes. Highly recommended for anyone serious about mastering the markets."</p>
          <h5 id="scrollspyHeading5"><BsPersonBoundingBox size={30} color='goldenrod'/> &nbsp; VJ</h5>
          <br/>
          <p>"MG Indicator has completely transformed the way I approach trading. The clarity it provides is unmatched. Whether you're a seasoned trader or a novice, this indicator simplifies complex market movements. It's not just a tool; it's a strategic ally. Thanks to MB, my trades are more precise, and I've gained a new level of confidence in my decisions."</p>
          </div>
        </div>
      </div>
      <h4 className='feedback-tail'>Explore more, to know about our Novice Knight Courses and Profit Surges !</h4>
    </div>
  );
};


