import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import auto1 from "../../Assets/../Assets/auto1.png";
import auto2 from "../../Assets/../Assets/auto2.png";

function Stage() {
  return (
    <section className="stage-section" id="stage">
      <Particle />
      <section className="home-section" id="home">
      <Particle />
      <Container fluid className="home-content text-center">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <div className="heading-container mb-5">
              <h1 className="heading-name">
                <strong className="main-name">Stage de Première Année de BTS SIO</strong>
              </h1>
            </div>
            <div className="content-container">
              <div className="content-section">
              <h3>Entreprise: Mairie de Villiers-le-Bel</h3>
              <p>
                Pendant mon stage de première année de BTS SIO à la Mairie de Villiers-le-Bel, j'ai eu l'opportunité de participer à un projet d'audit du site web de la ville. Mon rôle principal a été d'analyser le site pour identifier les éventuelles vulnérabilités de sécurité et les points d'amélioration en termes de performance. En plus de l'audit du site, j'ai également été chargé du suivi, de l'entretien et de la maintenance du parc informatique de la mairie, ce qui m'a permis de développer mes compétences techniques et ma compréhension des enjeux liés à la gestion des infrastructures informatiques dans le secteur public.
              </p>
                 </div>
              <div className="content-section">
                <h2>Tâches réalisées :</h2>
                <ul className="text-left no-markers">
                <li>Réalisation d'un audit du site web de la ville pour identifier les erreurs de conception et les possibilités d'amélioration.</li>
                <li>Collaboration avec les différents services municipaux pour répondre à leurs besoins informatiques et assurer la disponibilité des ressources nécessaires.</li>
                <li>Participation à des réunions et présentations pour rendre des mesures prises pour améliorer la sécurité et l'efficacité.</li>
                </ul>
              </div>
              <div className="content-section">
                <h2>Acquis et Compétences développées :</h2>
                <ul className="text-left no-markers">
                <li>Acquisition de compétences en audit en analyse des risques.</li>
                <li>Maîtrise des techniques de maintenance et de dépannage informatique dans un environnement professionnel.</li>
                <li>Développement de compétences en communication et en travail d'équipe au sein d'une organisation municipale.</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      

      <Container fluid className="home-content text-center">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <div className="heading-container mb-5">
              <h1 className="heading-name">
                <strong className="main-name">Stage de Deuxième Année de BTS SIO</strong>
              </h1>
            </div>
            <div className="content-container">
              <div className="content-section">
              <h3>Entreprise: Auto Rezzo (Garage Automobile)</h3>
              <p> 
                Au cours de mon stage de deuxième année de BTS SIO chez Auto Rezzo, j'ai eu l'occasion de mettre en pratique mes compétences en développement web en réalisant un site vitrine pour le garage. Le principal objectif de ce projet était de créer une plateforme permettant d'afficher les différentes voitures disponibles à la vente, tout en offrant des fonctionnalités de recherche avancée et une intégration avec une base de données pour la gestion des stocks et des informations des véhicules.
              </p>
                 </div>
              <div className="content-section">
                <h2>Tâches réalisées :</h2>
                <ul className="text-left no-markers">
                <li>Conception et développement d'un site web vitrine, moderne et convivial, adapté aux besoins spécifiques du garage.</li>
                <li>Intégration d'un système de gestion des stocks et des informations sur les véhicules.</li>
                <li>Mise en place d'un système de recherche avancée, permettant aux utilisateurs de filtrer les véhicules par marque, modèle, année, prix, etc.</li>
                <li>Collaboration étroite avec l'équipe du garage pour comprendre leurs besoins et leurs attentes, et fournir des solutions personnalisées et efficaces.</li>
                </ul>
              </div>
              <div className="content-section">
                <h2>Acquis et Compétences développées :</h2>
                <ul className="text-left no-markers">
                <li>Maîtrise avancée des langages de programmation web (HTML, CSS, PHP).</li>
                <li>Développement de compétences approfondies en conception et développement de sites web dynamiques et interactifs.</li>
                <li>Expérience pratique dans la gestion et la manipulation de bases de données, ainsi que dans l'intégration de systèmes backend.</li>
                <li>Renforcement des compétences en analyse des besoins clients, en gestion de projet et en communication professionnelle.</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="resume-section">
        <Particle />

        <Row className="resume">
          <img
                src={auto1}
                className="img-fluid"
                style={{ maxWidth: "600px" }}
                
              />
              <img
                src={auto2}
                className="img-fluid"
                style={{ maxWidth: "600px" }}
                
              />
        </Row>

        
      </Container>
      </section>
    </section>
  );
}

export default Stage;
