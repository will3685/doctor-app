import React, {Fragment, useEffect} from "react";

import { Container } from "react-bootstrap";

import NavBar from "./Navbar/Navbar";
import Banner from "./Cards/Banner";
import AboutCard from "./Cards/AboutCard";
import FormPatient from "../Contato/Form";
import Map from "../Map/Map";
import Footer from '../Home/Footer';

const Home = () => {
  useEffect(() => {
    const navbar = document.getElementById("test");
    navbar.scrollIntoView({behavior: 'smooth'});
  })

  return (
    <Fragment>
      <NavBar />
      <Banner/>
      <div style={{backgroundColor: "#efefef"}}>
      <Container>
        <AboutCard />
      </Container>
      </div>
      <FormPatient />
      <Map />
      <Footer />
    </Fragment> 
  )
}
export default Home
