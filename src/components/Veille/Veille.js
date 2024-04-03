import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
function Veille() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
        <Row>
        <h1 className="heading-name">
                Je suis 
                <strong className="main-name"> MERHDAOUI MOHAMED</strong>
              </h1>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Veille;