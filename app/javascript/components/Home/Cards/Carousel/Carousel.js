import React from "react"
import { Carousel } from 'antd'

const contentStyle = {
  height: '160px',
  color: '#000',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#efefef'
};

import styled from "styled-components";

const CarouselWrapper = styled.div`
  margin: "12px";
`

const CarouselDepoimentos = () => {

  return ( 
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel> 
)
}

export default CarouselDepoimentos