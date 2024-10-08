import React from 'react'
import { Top } from './Components/UI/Top'
import { Navbar } from './Components/UI/Navbar'
import { Route,Routes } from 'react-router-dom'
import { Home } from "./Components/Navbar/Home"
import { RevenueRevolution } from './Components/Navbar/RevenueRevolution'
import { RoyalIndicators }  from "./Components/Navbar/RoyalIndicators"
import { Contact }  from "./Components/Navbar/Contact"
import { Footer } from './Components/UI/Footer'
import { PrivacyPolicy } from './Components/Support/PrivacyPolicy'
import { FAQ } from './Components/Support/FAQ'
import { TermsAndConditions } from './Components/Support/TermsAndConditions'
import { RefundPolicy } from './Components/Support/RefundPolicy'
import { ShippingPolicy } from './Components/Support/ShippingPolicy'
import { CrownMembership } from './Components/Navbar/CrownMembership'




export const Components = () => {
  return (
    <div>
        <Top />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/revenueRevolution" element={<RevenueRevolution/>}></Route>
          <Route path="/royalIndicators" element={<RoyalIndicators/>}></Route>
          <Route path="/crownMembership" element={<CrownMembership/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Routes>
          <Route path="/privacyPolicy" element={<PrivacyPolicy/>}></Route>
          <Route path="/faq" element={<FAQ/>}></Route>
          <Route path="/termsAndConditions" element={<TermsAndConditions/>}></Route>
          <Route path="/refundPolicy" element={<RefundPolicy/>}></Route>
          <Route path="/shippingPolicy" element={<ShippingPolicy/>}></Route>
        </Routes>
        <Footer/>
    </div>
  )
}
