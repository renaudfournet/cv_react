import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Presentation = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <p className="lead">Presentation</p>
        </Container>
      </Jumbotron>
    </div>
  );
};
export default Presentation;
