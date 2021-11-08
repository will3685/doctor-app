import React from "react"
import { Link } from "react-router-dom";
import { Card, Button, Divider} from 'antd';

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
      <CardContainer data-aos="fade-up">
        <Card 
          style={{ height: "80vh"  }}>
          <Card.Grid 
            hoverable={false} 
            style={{ width: '50%', height: "80vh", alignItems:"center", textAlign: "justify" }}>
            <h1>Dr. Fleury Kwegir Johnson</h1>
            <h5>CRM 52-01138707</h5>
            <Divider />
            <p style={{ fontSize: 18}}>Fleury Johnson é médico formado pela Universidade Federal do Rio de Janeiro (UFRJ) e especializando em Clínica Médica pelo hospital Pasteur. Em sua trajetória, aprofundou-se no campo da Saúde da População Negra (doenças prevalentes e tratamentos específicos), realizando pesquisas e propagando o tema. Seu perfil como educador em saúde se inicia desde mais jovem, sendo habilitado enquanto palestrante e educador no âmbito de HIV e Infecções Sexualmente Transmissíveis. Atualmente, ministra aulas em diversas faculdades de medicina e outros espaços sobre a saúde da população negra e também como professor de Clínica Médica no curso VerboMed. Por sua história e dedicação às questões raciais e sociais, foi indicado ao prêmio Faz Diferença do Jornal O Globo em 2018.</p>
            <Link to="/contato">
              <Button type="default">Saiba mais</Button>
            </Link> 
          </Card.Grid >
          <Card.Grid 
            hoverable={false}
            style={{ width: '50%', height: "80vh", backgroundColor: 'gray', backgroundImage: `url(${about})`}}
            ></Card.Grid>
        </Card>      
      </CardContainer>
  )
}

export default AboutCard