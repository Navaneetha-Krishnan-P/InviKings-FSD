import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/RevenueRevolution.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import ChallengeSection from '../RevenueRevolution/ChallengeSection';
import CourseDays from '../RevenueRevolution/CourseDays';
import BenefitsPage from '../RevenueRevolution/BenefitsPage';
import classPic from "../../assets/classPic.png"


export const RevenueRevolution = () => {

    return (
        <div>
            <div className="card">
                <h1 className="card-title"><b>Revenue Revolution</b></h1>
                <span className='link'>
                    <Link to={"/"}><b>Home</b></Link><b> / </b>
                    <Link to={"/revenueRevolution"}><b>Revenue Revolution</b></Link>
                </span>
            </div>
            <div className='nkc-body'>
                <div className='nkc-head'>
                    <h5>Rule the Markets !!</h5><br />
                    <h2>Revenue Revolution</h2>
                    <hr className="hr-line"></hr><br />
                    <h4 style={{ color: "goldenrod" }}>Your Epic Trading Journey Begins Here!</h4>
                </div>
                <div className="profit-surge-container">
                    <div className="profit-surge-card card-left">
                        <h2 className="title">Revenue Revolution</h2>
                        <p className="subtitle">EFFORTLESSLY INCREASE YOUR PROFIT WITH OUR PROVEN 2-DAY PROGRAMME!</p>
                        <hr className="divider" />
                        <p className="description">
                            Double your monthly network without relying on complex techniques with matrix trading by spending 10 minutes per day.
                        </p>
                        <h3 className="workshop-title">How Will This Workshop Make A Difference For You?</h3>
                        <ul className="benefits-list">
                            <li><FaArrowAltCircleRight color='goldenrod' /> &nbsp; Unleash the Potential of Simplicity</li>
                            <li><FaArrowAltCircleRight color='goldenrod' /> &nbsp; Transform Your Mindset</li>
                            <li><FaArrowAltCircleRight color='goldenrod' /> &nbsp; Implement Effective Strategies</li>
                            <li><FaArrowAltCircleRight color='goldenrod' /> &nbsp; Minimize Losses, Maximize Profits</li>
                        </ul>
                    </div>

                    <div className="profit-surge-card card-right">
                        <img
                            loading="lazy"
                            srcSet={classPic}
                            alt="Workshop"
                            className="workshop-image"
                        />
                        <div className="pricing-section">
                        <ul className="details-list">
                                <li><span>Duration : </span> 2 days</li>
                                <li><span>Skill Level : </span> Expert</li>
                                <li><span>Category : </span> Business</li>
                                <li><span>Language : </span> English</li>
                                <li><span>Course Access : </span> Lifetime</li>
                            </ul><br/><br/>
                            <button className="buy-now"> <a href="https://live.invikings.com/webinar#submit" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"white"}}><b>Register Now !!!</b></a></button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='challenges'>
                <ChallengeSection/>
            </div>
            <div>
                <CourseDays/>
            </div>
            <div>
                <BenefitsPage/>
            </div>
           
        </div>
    );
};






