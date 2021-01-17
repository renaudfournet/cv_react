import React from "react";
import { Jumbotron, Container } from "reactstrap";
import styled from 'styled-components'

import "../index.css";

function Presentation() {

  const styleCard = {
    padding: 80,
  }

  return (
    <div style={styleCard}>
      <StyledCard>
      <div>
        <Jumbotron fluid>
          <Container>
            <StyledPresentation>
            <p>
              Passioné de nouvelles technologies et toujours partant pour de
              nouveaux challenges, j'aimerais développer mes compétences au
              travers d'un stage et participer à des projets inspirants.
            </p>
          </StyledPresentation>
          <StyledList>
            <div>
              <li>Anglais courant</li>
              <li>Curieux</li>
              <li>Réactif</li>
              <li>Ésprit d'équipe</li>
              <li>Flexibilité</li>
              <li>Prise d'initiative</li>
              <li>Empathie</li>
            </div>
          </StyledList>
          <div>
            <h3>CE QUE JE FAIS </h3>
            <div><h4>FRONT</h4></div>
            <div><h4>BACK</h4></div>
            <div><h4>ENVIRONMENT</h4></div>
          </div>
          </Container>
        </Jumbotron>
        </div>
        </StyledCard>
    </div>
  );
}



const StyledCard = styled.div`
div {
  background-color: #191919;
}
`
const StyledList = styled.div`
div {
    color: white; 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px;
    justify-content: space-evenly;
  }
`

const StyledPresentation = styled.p`
p {
  margin: 50px; 
  color: white;
  display: flex;
  justify-content: center;
  font-size: 15px;
}
`




export default Presentation;
