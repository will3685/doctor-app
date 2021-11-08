import React, {Fragment, useEffect} from "react";
import NavBar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer"

const Blog = () => {
  useEffect(() => {
    const navbar = document.getElementById("test");
    navbar.scrollIntoView({behavior: 'smooth'});
  })
  return (
    <Fragment> 
      <NavBar />
      <div style={{height: "100vh"}}>
        <h1>Em construção</h1>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Blog