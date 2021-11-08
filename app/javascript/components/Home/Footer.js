import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Divider } from 'antd';

import Logo from "../../images/Logo-horizontal_preta.png"

import {
  Box,
  Column,
  Row,
  Heading,
  BodyText,
  FooterLink,
  FooterLinkSocial,
  SocialIcon,
  Img
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box style={{ backgroundColor: "#efefef"}}>
      <Container>
        <Row>
          <Column>
            <Img src={Logo}/>
          </Column>
          <Column>
          <Heading>Entre em contato</Heading>
          <BodyText>Rua Conde de Bonfim 211, Sala 404</BodyText>
          <BodyText>drfleuryjohnson@gmail.com</BodyText>
          <BodyText>+55 (21)983192640</BodyText>
          <BodyText><strong>WhatsApp: </strong>+55 (21)983192640</BodyText>
          </Column>
          <Column>
            <BodyText><Link to="/">Início</Link></BodyText>
            <BodyText><Link to="/about">Sobre</Link></BodyText>
            <BodyText><Link to="/blog">Blog</Link></BodyText>
            <BodyText><Link to="/contato">Contato</Link></BodyText>
          </Column>
        </Row>
        <Divider />
        <Row>
          <Column>
            <BodyText><strong>Represante Técnico: </strong>Dr. Fleury Johnson • CRM 52-01138707</BodyText>
            <BodyText>Todos os direitos reservados | Desenvolvido por <FooterLink>Will Theard</FooterLink></BodyText>
          </Column>
          <Column>
            <SocialIcon>
              <FooterLinkSocial href="#"><i className="fab fa-facebook"></i></FooterLinkSocial>
              <FooterLinkSocial href="#"><i className="fab fa-instagram"></i></FooterLinkSocial>
              <FooterLinkSocial href="#"><i className="fab fa-linkedin"></i></FooterLinkSocial>
              <FooterLinkSocial href="#"><i className="fab fa-youtube"></i></FooterLinkSocial>
            </SocialIcon>
          </Column>
        </Row>
      </Container>
    </Box>
    )
  }
export default Footer;