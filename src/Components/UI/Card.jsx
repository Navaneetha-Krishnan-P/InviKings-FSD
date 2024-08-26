// import React, { useState } from 'react';
// import CardData from "../UI/CardDetails.json";
// import { FaRupeeSign } from "react-icons/fa";
// import { BookNow } from '../UI/BookNow';

// export const Card = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState(0);

//   const handleDialog = (plan) => {
//     setSelectedPlan(plan);
//     setOpen(true);
//   };

//   return (
//     <>
//       {CardData.map((card, index) => (
//         <div className="ri-card" key={index}>
//           <div className='ri-card-top'>
//             <h4>{card.riName}</h4>
//           </div>
//           <div className="ri-card-body">
//             <div>
//               <div className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" role="button">
//                   <b>1 month</b>
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <p className='ri-price'><FaRupeeSign /><b>{card.onePrice}k</b></p>
//                     <button className='ri-button' onClick={() => handleDialog(card.onePrice)}>Select Plan</button>
//                   </li>
//                 </ul>
//               </div>
//               <hr />
//               <div className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" role="button">
//                   <b>3 month</b>
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <p className='ri-price'><FaRupeeSign /><b>{card.threePrice}k</b></p>
//                     <button className='ri-button' onClick={() => handleDialog(card.threePrice)}>Select Plan</button>
//                   </li>
//                 </ul>
//               </div>
//               <hr />
//               <div className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" role="button">
//                   <b>6 month</b>
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <p className='ri-price'><FaRupeeSign /><b>{card.sixPrice}k</b></p>
//                     <button className='ri-button' onClick={() => handleDialog(card.sixPrice)}>Select Plan</button>
//                   </li>
//                 </ul>
//               </div>
//               <hr />
//               <div className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" role="button">
//                   <b>Annual</b>
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <p className='ri-price'><FaRupeeSign /><b>{card.annualPrice}k</b></p>
//                     <button className='ri-button' onClick={() => handleDialog(card.annualPrice)}>Select Plan</button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           {open && (
//             <BookNow open={open} handleClose={() => setOpen(false)} selectedPlan={selectedPlan} />
//           )}
//         </div>
//       ))}
//     </>
//   );
// };

import React, { useState } from 'react';
import CardData from "../UI/CardDetails.json";
import { FaRupeeSign } from "react-icons/fa";
import { BookNow } from '../UI/BookNow';

export const Card = () => {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(0);

  const handleDialog = (plan) => {
    setSelectedPlan(plan);
    setOpen(true);
  };

  return (
    <>
      {CardData.map((card, index) => (
        <div className="ri-card" key={index}>
          <div className='ri-card-top'>
            <h4>{card.riName}</h4>
          </div>
          <div className="ri-card-body">
            <div>
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button">
                  <b>1 month</b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <p className='ri-price'>
                      <FaRupeeSign /><b>{card.onePrice}k</b>
                    </p>
                    <button className='ri-button' onClick={() => handleDialog(card.onePrice)}>
                      Select Plan
                    </button>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button">
                  <b>3 months</b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <p className='ri-price'>
                      <FaRupeeSign /><b>{card.threePrice}k</b>
                    </p>
                    <button className='ri-button' onClick={() => handleDialog(card.threePrice)}>
                      Select Plan
                    </button>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button">
                  <b>6 months</b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <p className='ri-price'>
                      <FaRupeeSign /><b>{card.sixPrice}k</b>
                    </p>
                    <button className='ri-button' onClick={() => handleDialog(card.sixPrice)}>
                      Select Plan
                    </button>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button">
                  <b>Annual</b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <p className='ri-price'>
                      <FaRupeeSign /><b>{card.annualPrice}k</b>
                    </p>
                    <button className='ri-button' onClick={() => handleDialog(card.annualPrice)}>
                      Select Plan
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {open && (
            <BookNow open={open} handleClose={() => setOpen(false)} selectedPlan={selectedPlan} />
          )}
        </div>
      ))}
    </>
  );
};

