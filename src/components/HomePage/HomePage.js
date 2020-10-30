import React, { useContext, useEffect, useState } from "react";
import HomeHeader from "./HomeHeader";
import NavLogin from "../layout/navs/NavLogin";
import NavLogged from "../layout/navs/NavLogged";
import NavMain from "../layout/navs/NavMain";
import AboutProject from "./AboutProject";
import HomeThreeColumns from "./HomeThreeColumns";
import AboutUs from "./AboutUs";
import HomeOrganizations from "./HomeOrganizations";
import ContactSection from "../forms/ContactSection";
import ContactForm from "../forms/ContactForm";
import Footer from '../layout/Footer';
import UserContext from "../context";
import * as ROUTES from "../../constants/routers";

const HomePage = () => {
  const [link, setLink] = useState(ROUTES.LOG_IN)
  const { email } = useContext(UserContext);

  useEffect(() => {
    if (email) {
      setLink(ROUTES.DONATE)
    }
  }, [email]);

  return (
    <>
      <HomeHeader link={link}>
        <nav className="home__nav">
          {email.length ? <NavLogged /> : <NavLogin />}
          <NavMain />
        </nav>
      </HomeHeader>
      <main>
        <AboutProject link={link}>
          <HomeThreeColumns />
        </AboutProject>
        <AboutUs />
        <HomeOrganizations />
        <ContactSection contactForm={<ContactForm />} footer={<Footer />} />
      </main>
    </>
  );
};

export default HomePage;
