import React, { useState } from 'react';
import "../Styles/AboutUs.css";
import { Link } from 'react-router-dom';
import { FaChessKing } from "react-icons/fa";

export const AboutUs = () => {

  const [activeText, setActiveText] = useState('text1');

  const handleTextChange = (text) => {
    setActiveText(text);
  };

  return (
    <div className='aboutus-container'>
      <div className="card">
        <h1 className="card-title" style={{fontSize:"70px"}}>Invikings</h1><br/>
        <h5 className="card-subtitle" style={{color:"goldenrod"}}><i>Your Royal Path to Financial Sovereignty</i></h5>
      </div><br/><br/>
      <div className='aboutus-container2'>
        <div className='aboutus-flex'>
          <div className='aboutus-part1'>
            <h5 style={{color:"rgb(248, 199, 73)"}}>About Us</h5>
            <hr className="aboutus-yellow-line"></hr><br/>
            <h1>About INVIKINGS</h1><br/>
            <h5><b>Navigating Success in Trading, Founded by Vinil</b></h5><br/><br/>
            <p>Welcome to INVIKINGS, a trading realm founded by Vinil, a visionary leader driven by the passion to democratize trading expertise and empower individuals to conquer the financial markets. Established on the principles of wisdom, strategy, and community, INVIKINGS is more than a coaching and indicator provider—it’s a movement to redefine success in trading.</p><br/>
            <Link to={"contact"}><button type="button" className="btn btn-warning" style={{color:"rgb(28, 55, 83)"}}><b>Contact Us</b></button></Link>
          </div>
          <div className='aboutus-image'>
            <img 
              fetchpriority="high" 
              decoding="async" 
              width="525" 
              height="588" 
              src="https://invikings.com/wp-content/uploads/2023/12/01f56c54-79be-4ba7-a48a-fbd05ab4b25b-914x1024.jpg" 
              className="attachment-large size-large wp-image-12157" 
              alt="" 
              srcSet="https://invikings.com/wp-content/uploads/2023/12/01f56c54-79be-4ba7-a48a-fbd05ab4b25b-914x1024.jpg 914w, https://invikings.com/wp-content/uploads/2023/12/01f56c54-79be-4ba7-a48a-fbd05ab4b25b-268x300.jpg 268w, https://invikings.com/wp-content/uploads/2023/12/01f56c54-79be-4ba7-a48a-fbd05ab4b25b-768x861.jpg 768w, https://invikings.com/wp-content/uploads/2023/12/01f56c54-79be-4ba7-a48a-fbd05ab4b25b.jpg 1142w" 
              sizes="(max-width: 525px) 100vw, 525px"
            />
          </div>
        </div>
        <hr className='line'/>
        <div className='aboutus-part2'>
          <div className='aboutus-btn-flex'>
            <button onClick={() => handleTextChange('text1')} style={{ backgroundColor: activeText === 'text1' ? 'rgb(248, 199, 73)' : 'initial' }}><b>Visionary Leadership</b></button>
            <button onClick={() => handleTextChange('text2')} style={{ backgroundColor: activeText === 'text2' ? 'rgb(248, 199, 73)' : 'initial' }}><b>Coaching Excellence</b></button>
            <button onClick={() => handleTextChange('text3')} style={{ backgroundColor: activeText === 'text3' ? 'rgb(248, 199, 73)' : 'initial' }}><b>Innovative Indicators</b></button>
            <button onClick={() => handleTextChange('text4')} style={{ backgroundColor: activeText === 'text4' ? 'rgb(248, 199, 73)' : 'initial' }}><b>Community and Camaraderie</b></button>
            <button onClick={() => handleTextChange('text5')} style={{ backgroundColor: activeText === 'text5' ? 'rgb(248, 199, 73)' : 'initial' }}><b>Join Vinil's Vision</b></button>
          </div>
          <hr className='line'/>
          <div className='aboutus-text'>
            {activeText === 'text1' && 
              <div><FaChessKing size={25}  color='rgb(248, 199, 73)'/><br/><br/><p><i><q> Vinil, the architect behind INVIKINGS, envisioned a platform that transcends traditional trading education. Drawing from years of experience, Vinil recognized the need for a comprehensive approach that combines coaching excellence, innovative indicators, and a thriving community. INVIKINGS reflects his commitment to fostering a trading environment where every individual, regardless of experience, can ascend to trading royalty. </q></i></p></div>
            }
            {activeText === 'text2' && 
              <div><FaChessKing size={25}  color='rgb(248, 199, 73)'/><br/><br/><p><i><q> INVIKINGS' coaching programs are a testament to Vinil's commitment to excellence. From the foundational Novice Knight Training to the advanced Royal Analysis Strategies and Fundamental Sovereignty courses, each module is crafted to provide traders with a holistic and strategic understanding of the markets. Vinil's emphasis on daily live trading classes is a unique touch, allowing traders to experience the dynamics of the markets in real-time. </q></i></p></div>
            }
            {activeText === 'text3' && 
              <div><FaChessKing size={25}  color='rgb(248, 199, 73)'/><br/><br/><p><i><q> Vinil's vision extends to the development of groundbreaking indicators. The flagship MB Indicator, a brainchild of Vinil's commitment to simplicity and accuracy, has become a beacon for traders seeking precision in their decisions. This indicator reflects Vinil's belief that technology should not only simplify complexities but also empower traders to make informed decisions with confidence. </q></i></p></div>
            }
            {activeText === 'text4' && 
              <div><FaChessKing size={25}  color='rgb(248, 199, 73)'/><br/><br/><p><i><q> Vinil understands the significance of community in the trading journey. The Viking Clan, a community hub, embodies his vision of creating a space where traders collaborate, share insights, and collectively celebrate successes. Vinil's Grand Hall, a forum for engaging discussions, ensures that INVIKINGS is not just an educational platform but a vibrant trading tribe. </q></i></p></div>
            }
            {activeText === 'text5' && 
              <div><FaChessKing size={25}  color='rgb(248, 199, 73)'/><br/><br/><p><i><q> INVIKINGS, founded by Vinil, is an invitation to join a transformative journey in the world of trading. Vinil's leadership is a guiding force that shapes INVIKINGS into a dynamic, forward-thinking community. Whether you're a novice trader or an experienced professional, Vinil welcomes you to be part of this movement—a movement where success is redefined, wisdom is shared, and every trader has the opportunity to ascend to the throne of trading royalty. Join Vinil's vision at INVIKINGS, where the journey is not just about trading; it's about crafting an epic saga of success. </q></i></p></div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};



