import React from "react";
import HomeHeader from "./HomeHeader";
import NavLogin from "../Nav/NavLogin";
import NavMain from "../Nav/NavMain";
import AboutProject from "./AboutProject";
import HomeThreeColumns from "./HomeThreeColumns";
import AboutUs from "./AboutUs";
import HomeOrganizations from "./HomeOrganizations";
import HomeContact from "./HomeContact";
import ContactForm from "../ContactForm";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <HomeHeader>
        <nav className="home__nav">
          <NavLogin />
          <NavMain />
        </nav>
      </HomeHeader>
      <AboutProject>
        <HomeThreeColumns />
      </AboutProject>
      <AboutUs />
      <HomeOrganizations />
      <HomeContact contactForm={<ContactForm />} footer={<Footer />} />
    </>
  );
};

export default Home;
