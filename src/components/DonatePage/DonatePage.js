import React, { useContext, useEffect, useState } from "react";
import DonateHeader from  './DonateHeader'
import NavLogged from "../layout/navs/NavLogged";
import NavMain from "../layout/navs/NavMain";
import DonateSection from  './DonateSection'
import ContactForm from "../forms/ContactForm";
import ContactSection from "../forms/ContactSection";
import Footer from '../layout/Footer';


const DonatePage = () => {
  return (
    <>
      <DonateHeader>
        <NavLogged/>
        <NavMain/>
      </DonateHeader>
      <main className="donate-page">
        <DonateSection/>
        <ContactSection contactForm={<ContactForm />} footer={<Footer />} />
      </main>
    </>
  );
}

export default DonatePage;