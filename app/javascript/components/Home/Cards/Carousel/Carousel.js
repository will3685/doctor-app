import React from "react"
import { Carousel } from 'react-bootstrap'

const contentStyle = {
  height: '160px',
  color: '#000',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#efefef'
};

const CarouselDepoimentos = () => {
  return ( 
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      
)
}

export default CarouselDepoimentos


// <Carousel autoplay>
//         <div>
//           <h3 style={contentStyle}>
//             "Devolver a autoestima a uma mulher negra com toda sua dedicação é inesquecível."
//           </h3>
//         </div>
//         <div>
//           <h3 style={contentStyle}>
//             "Impecável no que faz e nunca irei esquecer das palavras e carinho que teve comigo!"
//           </h3>
//         </div>
//         <div>
//           <h3 style={contentStyle}>
//           "Devolver a autoestima a uma mulher com toda sua dedicação é inesquecível.
//           Mil vezes obrigada!"
//           </h3>
//         </div>
//         <div>
//           <h3 style={contentStyle}>
//           "Todos os dias agradeço pela sua competência, dedicação e carinho dedicado a mim." 
//           </h3>
//         </div>
//       </Carousel> 