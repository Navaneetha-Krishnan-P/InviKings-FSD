import React from 'react';
import '../Styles/ChallengeSection.css';
import icon1 from "../../assets/ConfusionAndOverwhelming.png"
import icon2 from "../../assets/ContinuousLoss.png"
import icon3 from "../../assets/IneffectiveStrategies.png"
import icon4 from "../../assets/TimeConsumingResearch.png"
import icon5 from "../../assets/StressAndAnxiety.png"
import icon6 from "../../assets/LackOfConfidence.png"
import icon7 from "../../assets/Isolation.png"
import icon8 from "../../assets/MissedOpportunities.png"
import icon9 from "../../assets/FearOfFailure.png"


const challenges = [
    {
        title: "Confusion and Overwhelm",
        description: "Are you struggling with trading analysis paralysis and feeling overwhelmed ?",
        icon: icon1,
    },
    {
        title: "Frequent Losses",
        description: "Are you experiencing frequent trading losses that impact your success ?",
        icon: icon2,
    },
    {
        title: "Ineffective Strategies",
        description: "Do your current strategies fall short, failing to deliver consistent profits ?",
        icon: icon3,
    },
    {
        title: "Time Consuming Research",
        description: "Is extensive market research consuming too much of your valuable trading time ?",
        icon: icon4,
    },
    {
        title: "Stress and Anxiety",
        description: "Are stress and anxiety becoming obstacles in your trading journey ?",
        icon: icon5,
    },
    {
        title: "Lack of Confidence",
        description: "Do you lack the confidence to make successful trading decisions ?",
        icon: icon6,
    },
    {
        title: "Isolation",
        description: "Do you often feel isolated in your trading experience, seeking connection ?",
        icon: icon7,
    },
    {
        title: "Missed Opportunities",
        description: "Are you frustrated by missed profit opportunities in your trades ?",
        icon: icon8,
    },
    {
        title: "Fear of Failure",
        description: "Is the fear of failure preventing you from reaching your trading goals?",
        icon: icon9,
    }
];

const ChallengeSection = () => {
    return (
        <div className="challenges-section">
            <p className='color-head'><i>Aknowledging  Struggles</i></p>
            <h2 className="section-title">Are you Facing Any Of These Challenges?</h2>
            <hr className="hr-line"></hr>
            <div className="challenges-grid">
                {challenges.map((challenge, index) => (
                    <div className="challenge-card" key={index}>
                        <img className="challenge-icon" decoding="async" srcSet={`${challenge.icon}`} title="disorganization" alt="disorganization" loading="lazy"/>
                        <h3 className="challenge-title">{challenge.title} </h3>
                        <p className="challenge-description">{challenge.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChallengeSection;
