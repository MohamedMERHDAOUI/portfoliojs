import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import maquetteresponsive from "../../Assets/Projects/maquetteresponsive.png";
import calculatrice from "../../Assets/Projects/calculatricec.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import personnel from "../../Assets/Projects/personnel.png";
import parking from "../../Assets/Projects/parking.png";
import tp7 from "../../Assets/Projects/tp7.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         <strong className="blue">Mes Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques projets sur lesquels j'ai travaillé
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculatrice}
              title="Calculatrice C"
              description="Projet d'une calculatrice en C"
              ghLink="https://github.com/MohamedMERHDAOUI/calculatrice/blob/main/DocCalculatriceC.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              title="Portfolio"
              description="Projet d'un portfolio realiser"
              ghLink="https://github.com/MohamedMERHDAOUI/portfoliodoc/blob/main/docPortfolio.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maquetteresponsive}
              title="Maquette Responsive"
              description="Projet em html/css "
              ghLink="https://github.com/MohamedMERHDAOUI/maquettedoc/blob/main/Docmaquette.pdf"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parking}
              title="Parking"
              description="Projet de gestion de parking"
              ghLink="https://github.com/MohamedMERHDAOUI/parkingdoc/blob/main/Parking.pdf" 
            />
          </Col>

          // <Col md={4} className="project-card">
          //   <ProjectCard
          //     imgPath={personnel}
          //     title="Personnel"
          //     description="Projet de Gestion du personnel"
          //     ghLink="https://github.com/MohamedMERHDAOUI/personneldoc/blob/main/AP2_Personnel.pdf"  
          //   />
          // </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tp7}
              title="Tp Seven"
              description="Projet d'accompagnement des utilisateurs pour windows7 "
              ghLink="https://github.com/MohamedMERHDAOUI/tp7doc/blob/main/tp-seven.pdf"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
