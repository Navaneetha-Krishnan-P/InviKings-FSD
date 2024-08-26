// import React, { useState } from 'react';

// const RegistrationForm = ({ handleClose, selectedPlan }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     phoneNumber: "",
//     email: "",
//   });

//   const [errors, setErrors] = useState({
//     firstName: "",
//     phoneNumber: "",
//     email: "",
//   });

//   const validatePhoneNumber = (number) => {
//     const phoneRegex = /^[6-9]\d{9}$/;
//     return phoneRegex.test(number);
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     if (name === "phoneNumber") {
//       setErrors({
//         ...errors,
//         phoneNumber: validatePhoneNumber(value)
//           ? ""
//           : "Invalid phone number",
//       });
//     }

//     if (name === "email") {
//       setErrors({
//         ...errors,
//         email: validateEmail(value) ? "" : "Invalid email address",
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();


//     const newErrors = {};
//     for (const field in formData) {
//       if (!formData[field]) {
//         newErrors[field] = "This field is required";
//       }
//     }

//     if (!validatePhoneNumber(formData.phoneNumber)) {
//       newErrors.phoneNumber = "Invalid phone number";
//     }

//     if (!validateEmail(formData.email)) {
//       newErrors.email = "Invalid email address";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }
//   }

//   return (
//     <div className="registration-form">
//       <h2>Enter all the fields to BUY NOW !!!</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="Full Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           />
//           {errors.firstName && <span className="error">{errors.firstName}</span>}
//         </div>
//         <div>
//           <input
//             type="text"
//             name="phoneNumber"
//             placeholder="Mobile Number"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             required
//           />
//           {errors.phoneNumber && (
//             <span className="error">{errors.phoneNumber}</span>
//           )}
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>
//         <div>
//           <button type="submit">BUY NOW !</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;
import React, { useState } from 'react';
import axios from 'axios';


const RegistrationForm = ({ handleClose, selectedPlan }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    phoneNumber: "",
    email: "",
  });

  const validatePhoneNumber = (number) => /^[6-9]\d{9}$/.test(number);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "phoneNumber") {
      setErrors({
        ...errors,
        phoneNumber: validatePhoneNumber(value)
          ? ""
          : "Invalid phone number",
      });
    }

    if (name === "email") {
      setErrors({
        ...errors,
        email: validateEmail(value) ? "" : "Invalid email address",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    }

    if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Create order
      const response = await axios.post('http://localhost:5000/api/payment/orders', {
        amount: selectedPlan * 1000
      });

      const { order_id, currency } = response.data;

      // Initialize Razorpay
      const options = {
        key: 'rzp_live_g7RZbeDPtl86br', 
        amount: selectedPlan * 100, 
        currency,
        name: "InviKings",
        description: "Royal Indicator",
        order_id,
        handler: async function (response) {
          try {
            const paymentId = response.razorpay_payment_id;
            await axios.post('http://localhost:5000/api/payment/verify', {
              order_id,
              paymentId
            });
            alert('Payment successful');
            handleClose();
          } catch (error) {
            console.error('Payment verification error:', error);
            alert('Payment verification failed');
          }
        },
        prefill: {
          name: formData.firstName,
          email: formData.email,
          contact: formData.phoneNumber,
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('Payment initiation failed');
    }
  };

  return (
    <div className="registration-form">
      <h2>Enter all the fields to BUY NOW !!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="Full Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Mobile Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <button type="submit">BUY NOW !</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;


