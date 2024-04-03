import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="blue"> INTRODUCTION </span> A PROPOS DE MOI
            </h1>
            <p className="home-about-body">
            Passionné par la réalisation et le développement de projets web,          je me suis naturellement orienté vers une carrière de développeur informatique.
              <br />
              <br />
              
              <br />
              <br />
             
              
               
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      
      </Container>
    </Container>
  );
}
export default Home2;
