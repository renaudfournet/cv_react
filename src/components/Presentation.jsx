import React from "react";
import { Jumbotron, Container } from "reactstrap";

import "../index.css";

const Presentation = () => {
  const presentation = {
      backgroundColor: "#191919",
      margin: 150,
      fontWeight: 300,
    },
    textPresentation = { color: "white" },
    listPresentation = {
      display: "flex",
      justifyContent: "center",
      color: "red",
      fontSize: 10,
      fontWeight: "bold",
    },
    items = { margin: 10, color: "white" };
  return (
    <div>
      <Jumbotron fluid style={presentation}>
        <Container fluid>
          <p className="lead" style={textPresentation}>
            Passioné de nouvelles technologies et toujours partant pour de
            nouveaux challenges, j'aimerais développer mes compétences au
            travers d'un stage et participer à des projets inspirants.
          </p>
          <div style={listPresentation}>
            <li style={items}>Anglais courant</li>
            <li style={items}>Curieux</li>
            <li style={items}>Réactif</li>
            <li style={items}>Ésprit d'équipe</li>
            <li style={items}>Flexibilité</li>
            <li style={items}>Prise d'initiative</li>
            <li style={items}>Empathie</li>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};
export default Presentation;
