import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/NoviceKnightCourses.css";

export const NoviceKnightCourses = () => {
    return (
        <div>
            <div className="card">
                <h1 className="card-title"><b>Novice Knight Courses</b></h1>
                <span className='link'>
                    <Link to={"/"}><b>Home</b></Link><b> / </b>
                    <Link to={"/noviceKnightCourses"}><b>Novice Knight Courses</b></Link>
                </span>
            </div>
            <div className='nkc-body'>
                <div className='nkc-head'>
                    <h5>Rule the Markets !!</h5><br />
                    <h2>Novice Knight Courses</h2>
                    <hr className="hr-line"></hr><br />
                    <h4 style={{ color: "goldenrod" }}>Your Epic Trading Journey Begins Here!</h4>
                </div>
                <div className='nkc-cards'>
                    <div className='nkc-card'>
                        <div className="card-header">
                            <h3>Revenue Revolution Bootcamp</h3>
                            <h2>₹ 499</h2>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li><b>Access to all courses</b></li>
                                <li><b>High resolution videos</b></li>
                                <li><b>Access to all courses</b></li>
                                <li><b>-----</b></li>
                            </ul>
                        </div>
                        <div className="card-footer">
                            <button>Enroll Now</button>
                        </div>
                    </div>
                    <div className='nkc-card'>
                        <div className="card-header">
                            <h3>Silver Membership</h3><br/>
                            <h2>₹ 4999 + GST</h2>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li><b>Access to all courses</b></li>
                                <li><b>High resolution videos</b></li>
                                <li><b>Access to all courses</b></li>
                                <li><b>-----</b></li>
                            </ul>
                        </div>
                        <div className="card-footer">
                            <button>Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



