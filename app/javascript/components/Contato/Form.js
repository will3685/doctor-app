import React from "react"

import styled from 'styled-components';
import { Container, Form, Row, Col,  Button } from "react-bootstrap";

import { Card } from "antd";


const Wrapper = styled.div`
  height: 90vh;
  background-image: url('mainpage.jpg')
  padding-top: 32px;
`
const Heading = styled.h2`
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
`
const HeadingText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const Text = styled.p`
 text-align: center;
`

const WrapperText = styled.div`
  padding: 6px;
`

const WrapperFooter = styled.div`
  display: flex;
  justify-content: center;
`

const FooterLinkSocial = styled.a`
  padding-left: 8px;
  font-size: 34px;
  color: #000;
  text-decoration: none;
  &:hover {
    color: green;
    transition: 200ms ease-in;
}
`

const FormPatient = () => {
  return (
    <div>
      <Wrapper style={{backgroundColor: "#efefef"}}> 
      <Container>
        <div style={{paddingTop: 42}}>
          <div style={{backgroundColor: "#fff", height: "70vh"}}>
            <Row>
              <Col>
                <Heading>Fale conosco</Heading>
                <Form style={{padding: 6}}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control type="nome" placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                      <Form.Label>Telefone</Form.Label>
                      <Form.Control placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEspecialist">
                      <Form.Label>Especialidade de interesse</Form.Label>
                      <Form.Control placeholder="" />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>

                  <Button variant="secondary" type="submit">
                    Enviar
                  </Button>
                </Form>
              </Col>

              <Col>
                <Heading>Entre em contato</Heading>
                <WrapperText>
                  <HeadingText>Faça uma visita</HeadingText>
                  <Text>Rua Conde de Bonfim 211, Sala 404</Text> 
                </WrapperText>
                <WrapperText>
                  <HeadingText>Telefone</HeadingText>
                  <Text>+55 (21)983192640</Text>
                  <Text><strong>WhatsApp: </strong>+55 (21)983192640</Text>
                </WrapperText>
                <WrapperText>
                  <HeadingText>Email</HeadingText>
                  <Text>drfleuryjohnson@gmail.com</Text>
                </WrapperText>

                <WrapperFooter>
                  <FooterLinkSocial href="#"><i className="fab fa-facebook"></i></FooterLinkSocial>
                  <FooterLinkSocial href="#"><i className="fab fa-instagram"></i></FooterLinkSocial>
                  <FooterLinkSocial href="#"><i className="fab fa-linkedin"></i></FooterLinkSocial>
                  <FooterLinkSocial href="#"><i className="fab fa-youtube"></i></FooterLinkSocial>
                </WrapperFooter>
              </Col>
            </Row>
          </div>
        </div>
        </Container>
      </Wrapper>
    </div> 
  )
}

export default FormPatient