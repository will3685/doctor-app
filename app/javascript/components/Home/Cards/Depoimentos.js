import React from "react"
import { Container } from "react-bootstrap"
import { Button } from "antd";

import CarouselDepoimentos from "./Carousel/Carousel";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background-color: #efefef;
  height: 70vh;
  justify-content: center;
`
const TextWrapper = styled.div`
  text-align: center;
  padding-top: 34px;
`
const CarrouselWrapper = styled.div`
  padding-top: 34px;
`

const ButtonWrapper = styled.div`
  padding-top: 64px;
  text-align: center;
`

const Depoimentos = () => {
  return (
    <Wrapper>
      <Container>
        <TextWrapper>
          <h3>Palavras gentis de pacientes incríveis</h3>
          <h1>Depoimentos</h1>
          <CarrouselWrapper>
            <CarouselDepoimentos />
          </CarrouselWrapper>
        </TextWrapper>
        <ButtonWrapper>
          <Link to="/contato">
            <Button type="default">Agenda uma consulta</Button>
          </Link> 
        </ButtonWrapper>
      </Container>    
    </Wrapper>
  )
}

export default Depoimentos
