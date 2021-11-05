import React from "react"
import { Container } from "react-bootstrap"
import { Button } from "antd";

import CarouselDepoimentos from "./Carousel/Carousel";

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #efefef;
  height: 70vh;
  padding-top: 34px;
  justify-content: center;
`
const TextWrapper = styled.div`
  padding-top: 12px;
`

const Depoimentos = () => {
  return (
    <Wrapper>
      <Container style={{textAlign: "center"}}>
        <TextWrapper>
          <h3>Palavras gentis de pacientes incríveis</h3>
          <h1>Depoimentos</h1>
        </TextWrapper>
        <CarouselDepoimentos />
        <Button
           size= "large" 
           type="default"
           href={"/contato"}
        >Agende uma consulta</Button>
      </Container>
    </Wrapper>
  )
}

export default Depoimentos