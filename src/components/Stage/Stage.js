import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
function Stage() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
        <Row>
          
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Stage;