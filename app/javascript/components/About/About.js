import React, {Fragment, useEffect} from "react";

import NavBar from "../Home/Navbar/Navbar";
import Map from "../Map/Map";
import Footer from "../Home/Footer"
import DestacaCard from "../Home/Cards/DestacaCard";
import FormPatient from "../Contato/Form";
import CardWrapper from "./CardWrapper";

const About = () => {
  useEffect(() => {
    const navbar = document.getElementById("test");
    navbar.scrollIntoView({behavior: 'smooth'});
  })
  return (
    <Fragment>
      <NavBar />
      <CardWrapper />
      <DestacaCard />
      <FormPatient />
      <Map />
      <Footer />  
    </Fragment>
  )
}

export default About