import React, { useContext, useEffect, useState } from "react";
import HomeHeader from "./HomeHeader";
import NavLogin from "../Nav/NavLogin";
import NavLogged from "../Nav/NavLogged";
import NavMain from "../Nav/NavMain";
import AboutProject from "./AboutProject";
import HomeThreeColumns from "./HomeThreeColumns";
import AboutUs from "./AboutUs";
import HomeOrganizations from "./HomeOrganizations";
import HomeContact from "./HomeContact";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import UserContext from "../context";
import * as ROUTES from "../../constants/routers";

const Home = () => {
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
      <AboutProject link={link}>
        <HomeThreeColumns />
      </AboutProject>
      <AboutUs />
      <HomeOrganizations />
      <HomeContact contactForm={<ContactForm />} footer={<Footer />} />
    </>
  );
};

export default Home;
