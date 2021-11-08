import React from "react"

import {Image} from 'react-bootstrap';
import styled from "styled-components";

import mainpage from "../../../images/mainpage.jpg"

const Banner = () => {
  return (
    <div>
      <Image src={mainpage} fluid 
      style={{ width: "100%", height: "auto", filter: "grayscale(100%)"}}/>
    </div>
  )
}

export default Banner