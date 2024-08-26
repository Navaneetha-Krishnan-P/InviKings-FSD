import React from 'react';
import "../Styles/CourseDays.css"
import PicOne from "../../assets/BootCampPicOne.png"
import PicTwo from "../../assets/BootCampPicTwo.png"

const CourseDays = () => {
    return (
        <div className="course-container">
             <p className='color-head2'><i>Journey into Knowledge</i></p>
            <h2 className="section-title">What Will You Learn In This Webinar?</h2>
            <hr className="hr-line"></hr>
            <div className="day-section">
                <div className="image-container">
                <img fetchpriority="high" srcSet={PicOne} decoding="async" width="500" height="250" className="attachment-large size-large wp-image-12351" alt="" />
                </div>
                <div className="text-container">
                    <h2>Day 1</h2>
                    <h3>Transform Your Trading Mindset Paradigm</h3>
                    <br/>
                    <ul>
                        <li><i>Challenge limiting beliefs for growth.</i></li>
                        <li><i>Embrace market fluctuations with confidence.</i></li>
                    </ul>
                </div>
            </div>
            <div className="day-section">
                <div className="image-container">
                <img loading="lazy" srcSet={PicTwo} decoding="async" width="500" height="250" />
                </div>
                <div className="text-container">
                    <h2>Day 2</h2>
                    <h3>Embrace Learning and Unlearning Strategies</h3>
                    <br/>
                    <ul>
                        <li><i>Discover the power of adaptation.</i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CourseDays;
