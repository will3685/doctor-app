import React, {Fragment} from "react";

import { Container } from "react-bootstrap";

import NavBar from "./Navbar/Navbar";
import Banner from "./Cards/Banner";
import AboutCard from "./Cards/AboutCard";
import DestacaCard from "./Cards/DestacaCard";
import Depoimentos from './Cards/Depoimentos'
import Map from "../Map/Map";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Banner/>
      <Container>
        <AboutCard />
        <DestacaCard />
      </Container>
      <Depoimentos />
      <Map />
    </Fragment>
    
  )
}
export default Home
