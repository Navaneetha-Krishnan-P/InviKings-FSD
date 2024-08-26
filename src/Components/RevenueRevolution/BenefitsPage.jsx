
import React from 'react';
import "../Styles/BenefitsPage.css";
import icon1 from "../../assets/Transform.png"
import icon2 from "../../assets/Confidence.png"
import icon3 from "../../assets/Profit.png"
import icon4 from "../../assets/LossFormula.png"
import icon5 from "../../assets/CostlyMistakes.png"
import icon6 from "../../assets/ReduceStress.png"

const BenefitsPage = () => {
  const benefits = [
    {
      icon: icon1,
      title: 'Transform your trading journey',
      backgroundColor: 'rgb(28, 55, 83)'
    },
    {
      icon: icon2,
      title: 'Elevate Your Confidence',
      backgroundColor: '#FFC107'
    },
    {
      icon: icon3,
      title: 'Multiply Your Profits',
      backgroundColor: 'rgb(28, 55, 83)'
    },
    {
      icon: icon4,
      title: 'Master the negligible loss formula',
      backgroundColor: 'rgb(28, 55, 83)'
    },
    {
      icon: icon5,
      title: 'Eliminate costly mistakes',
      backgroundColor: '#FFC107'
    },
    {
      icon: icon6,
      title: 'Reduce financial stress',
      backgroundColor: 'rgb(28, 55, 83)'
    }
  ];

  return (
    <div className="benefits-container">
        <p className='color-head2'><i>Tranformative Learning</i></p>
      <h2 className="section-title">What Benefits Do Our Sessions Provide For You?</h2>
      <hr className="hr-line"></hr>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="benefit-card"
            style={{ backgroundColor: benefit.backgroundColor }}
          >
            <div className="icon-container">
              <img src={`${benefit.icon}`} alt={benefit.title} className="icon" height={"100px"} width={"100px"}/>
            </div><br/>
            <h3>{benefit.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsPage;
