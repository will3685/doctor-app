import React, {Fragment, useEffect} from "react";

import { Container } from "react-bootstrap";

import NavBar from "./Navbar/Navbar";
import Banner from "./Cards/Banner";
import AboutCard from "./Cards/AboutCard";
import DestacaCard from "./Cards/DestacaCard";
import Depoimentos from './Cards/Depoimentos'
import FormPatient from "../Contato/Form";
import Map from "../Map/Map";
import Footer from '../Home/Footer'

const Home = () => {
  useEffect(() => {
    const navbar = document.getElementById("test");
    navbar.scrollIntoView({behavior: 'smooth'});
  })

  return (
    <Fragment>
      <NavBar />
      <Banner/>
      <Container>
        <AboutCard />
      </Container>
      <Depoimentos />
      <FormPatient />
      <Map />
      <Footer />
    </Fragment>
    
  )
}
export default Home
