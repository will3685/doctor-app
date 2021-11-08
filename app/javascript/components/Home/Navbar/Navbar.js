import React from "react";
import styled from 'styled-components';

import { Link } from "react-router-dom";
import { Navbar, Container, Nav} from "react-bootstrap";
import Logo from "../../../images/Logo-horizontal_preta.png"

const BodyText = styled.p`
  font-size: 18px;
  a {
    text-decoration: none;
    color: #000;
    padding: 8px;
  }
  }
`;

const Img = styled.img`
  height: 70px;
  width: auto;

`

const NavBar = () => {
  return (
    <div id="test">
      <Navbar bg="light" variant="light">
        <Container>
        <Link to="/"><Img src={Logo}/></Link>
        <Nav className="me-auto">
          <BodyText><Link to="/">Início</Link></BodyText>
          <BodyText><Link to="/about">Sobre</Link></BodyText>
          <BodyText><Link to="/blog">Blog</Link></BodyText>
          <BodyText><Link to="/contato">Contato</Link></BodyText>
        </Nav>
        </Container>
      </Navbar>
    </div>

  )
}

export default NavBar


