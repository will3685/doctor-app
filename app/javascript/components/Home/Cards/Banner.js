import React from "react"

import {Image} from 'react-bootstrap'

import mainpage from "../../../images/mainpage.jpg"

const Banner = () => {
  return (
    <div>
      <Image src={mainpage} fluid 
      style={{ width: "100%", height: "auto"}}/>
    </div>
  )
}

export default Banner