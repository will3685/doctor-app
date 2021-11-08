import React, {useEffect} from "react"

import NavBar from "../Home/Navbar/Navbar";
import FormPatient from "./Form";
import Map from "../Map/Map";
import Footer from '../Home/Footer'

const Contato = () => {
  useEffect(() => {
    const navbar = document.getElementById("test");
    navbar.scrollIntoView({behavior: 'smooth'});
  })
  return (
    <div >
      <NavBar />
      <FormPatient />
      <Map />
      <Footer />
    </div>
  )
}

export default Contato