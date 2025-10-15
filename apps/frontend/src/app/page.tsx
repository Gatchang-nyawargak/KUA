"use client";

import React, { useState } from "react";
import Navbar from "./compnents/Navbar";
import Landingpage from "./compnents/Landingpage";
import About from "./compnents/About";
import Footer from "./compnents/Footer";
import Team from "./compnents/Team";
import CoreValues from "./compnents/CoreValues";
import NewsletterSubscription from "./compnents/NewsletterSubscription";
import InitiativeGrid from "./compnents/Products";
import Donation from "./compnents/Donation";


export default function Home() {
  const [showDonation, setShowDonation] = useState(false);

  React.useEffect(() => {
    const handleOpenDonation = () => setShowDonation(true);
    window.addEventListener('openDonation', handleOpenDonation);
    return () => window.removeEventListener('openDonation', handleOpenDonation);
  }, []);

  return (
    <div>
      <Navbar/>
      <Landingpage/>
      <About/>
      <CoreValues/>
      <InitiativeGrid/>
      <Team/>
      <NewsletterSubscription/>
      <Footer/>

      {showDonation && (
        <Donation onClose={() => setShowDonation(false)} />
      )}
    </div>
  );
}
