import React from "react"
import { Link } from "react-router-dom";
import { Card, CardGroup, Button} from 'react-bootstrap';

import styled from "styled-components";
import about from "../../../images/about.jpg";

const CardContainer = styled.div`
  top:50%;
  margin-top:-250px;
  height: auto;
  z-index: -1;
`

const AboutCard = () => {
  return (
    <CardContainer>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title><h1>Dr. Fleury Kwegir Johnson</h1></Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><h5>CRM 52-01138707</h5></Card.Subtitle>
            <hr />
            <Card.Text style={{ fontSize: 18, textIndent: 15}}>
            Fleury Johnson é médico formado pela Universidade Federal do Rio de Janeiro (UFRJ) e especializando em Clínica Médica pelo hospital Pasteur. <br />
            Em sua trajetória, aprofundou-se no campo da Saúde da População Negra (doenças prevalentes e tratamentos específicos), realizando pesquisas e propagando o tema. <br />
            Seu perfil como educador em saúde se inicia desde mais jovem, sendo habilitado enquanto palestrante e educador no âmbito de HIV e Infecções Sexualmente Transmissíveis. <br />
            Atualmente, ministra aulas em diversas faculdades de medicina e outros espaços sobre a saúde da população negra e também como professor de Clínica Médica no curso VerboMed. <br />
            Por sua história e dedicação às questões raciais e sociais, foi indicado ao prêmio Faz Diferença do Jornal O Globo em 2018.
            </Card.Text>
            <Link to="/contato">
              <Button type="default">Saiba mais</Button>
            </Link>
          </Card.Body>
          </Card>
        <Card style={{filter: "grayscale(100%)", backgroundImage: `url(${about})`}}>
        </Card>
      </CardGroup>
  </CardContainer>
  )
}

export default AboutCard
