import React, {Fragment} from "react";

import { Container } from "react-bootstrap";

import NavBar from "./Navbar/Navbar";
import Banner from "./Cards/Banner";
import AboutCard from "./Cards/AboutCard";


const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Banner/>
      <Container>
        <AboutCard />
      </Container>
    </Fragment>
    
  )
}
export default Home
