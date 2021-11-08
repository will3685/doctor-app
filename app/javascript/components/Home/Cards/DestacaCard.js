import React from "react"
import styled from "styled-components";

const Minicard = styled.div`
  border: 1px solid #efefef;
  border-top-right-radius: 25px !important;
  border-bottom-left-radius: 25px !important;
  width: 600px;
  height: auto;
  background-color: #efefef;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  // top: 50%;
  // margin-top: -25px;

  p{
    font-style: italic;
  }
`

const DestacaCard = () => {
  return (
    <div style={{height: "40vh", paddingTop: 24}}> 
      <Minicard>
        <p style={{ fontSize: 18}}>O Dr. Fleury se destaca por atendimentos em que a escuta e avaliação integral do paciente são prioridades, proporcionando experiências de acolhimento e compromisso com o cuidado continuado. Suas consultas buscam oferecer ao paciente a construção de um relacionamento profissional de confiança e sem julgamentos, gerando empatia e conexão com pessoas das mais diversas características."
        </p>
      </Minicard>
    </div>
  )
}

export default DestacaCard