import React from "react"
import { Carousel } from 'antd'

const contentStyle = {
  height: '160px',
  color: '#000',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#efefef'
};

const CarouselDepoimentos = () => {

  return ( 
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            "Devolver a autoestima a uma mulher negra com toda sua dedicação é inesquecível."
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            "Impecável no que faz e nunca irei esquecer das palavras e carinho que teve comigo!"
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
          "Devolver a autoestima a uma mulher com toda sua dedicação é inesquecível.
          Mil vezes obrigada!"
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
          "Todos os dias agradeço pela sua competência, dedicação e carinho dedicado a mim." 
          </h3>
        </div>
      </Carousel> 
)
}

export default CarouselDepoimentos