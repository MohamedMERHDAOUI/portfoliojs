import React from "react";
import "./Stage.css";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import auto1 from "../../Assets/auto1.png";
import auto2 from "../../Assets/auto2.png";

function Stage() {
  return (
    <section className="stage-section" id="stage">
      <Particle />
      <Container fluid className="home-content text-center">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <div className="heading-container mb-5">
              <h1 className="heading-name">
                <strong className="main-name">Stages de Première et Deuxième Année de BTS SIO</strong>
              </h1>
            </div>
            <div className="content-container">
              <div className="content-section">
                <h3>Entreprise : SB Traitement</h3>
                <p>
                  Lors de mes deux stages chez SB Traitement, j’ai pu mettre en pratique mes compétences en développement web à travers deux projets distincts.
                </p>
                <p>
                  <strong>Stage de première année :</strong> conception d’un site vitrine pour un salon de coiffure/barbier. Le site présente les différents services proposés (coupe, barbe, soins…), les tarifs, et permet aux clients de réserver en ligne. Il intègre une interface intuitive et un système de gestion des rendez-vous.
                </p>
                <p>
                  <strong>Stage de deuxième année :</strong> développement d’un site e-commerce pour la vente de t-shirts personnalisés. Le site permet aux utilisateurs de consulter les modèles disponibles, de personnaliser leurs t-shirts, de passer commande en ligne et de gérer leur compte client via une interface dynamique reliée à une base de données.
                </p>
              </div>

              <div className="content-section">
                <h2>Tâches réalisées :</h2>
                <ul className="text-left no-markers">
                  <li>Conception et développement d’un site vitrine responsive pour un salon de coiffure/barbier.</li>
                  <li>Création d’un site e-commerce avec interface de personnalisation de produits (t-shirts).</li>
                  <li>Intégration d’un système de réservation et d’un catalogue filtrable par type de coupe ou type de produit.</li>
                  <li>Connexion aux bases de données pour la gestion des services, des clients et des commandes.</li>
                  <li>Collaboration étroite avec le responsable du salon pour définir les besoins fonctionnels et techniques.</li>
                </ul>
              </div>

              <div className="content-section">
                <h2>Acquis et Compétences développées :</h2>
                <ul className="text-left no-markers">
                  <li>Maîtrise renforcée des langages HTML, CSS, JavaScript et PHP.</li>
                  <li>Compétences en développement de sites vitrines et e-commerce dynamiques.</li>
                  <li>Expérience dans la gestion de bases de données (MySQL) et l’intégration backend.</li>
                  <li>Sens de l’écoute client, autonomie dans la conduite de projet et capacité à adapter une solution technique aux besoins métiers.</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume justify-content-center">
          <img src={auto1} className="img-fluid" style={{ maxWidth: "600px" }} alt="auto1" />
          <img src={auto2} className="img-fluid" style={{ maxWidth: "600px" }} alt="auto2" />
        </Row>
      </Container>
    </section>
  );
}

export default Stage;
