import React from "react";
import "./Stage.css";
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
      // <Container fluid className="home-content text-center">
      //   <Row className="justify-content-center">
      //     <Col xs={12} md={8}>
      //       <div className="heading-container mb-5">
      //         <h1 className="heading-name">
      //           <strong className="main-name">Stage de Première Année de BTS SIO</strong>
      //         </h1>
      //       </div>
      //       <div className="content-container">
      //         <div className="content-section">
      //         <h3>Entreprise: Mairie de Villiers-le-Bel</h3>
      //         <p>
      //           Pendant mon stage de première année de BTS SIO aupres de SB Traitememnt, j'ai eu l'opportunité de participer </p>
      //            </div>
      //         <div className="content-section">
      //           <h2>Tâches réalisées :</h2>
      //           <ul className="text-left no-markers">
      //           <li>Réalisation d'un audit du site web de la ville pour identifier les erreurs de conception et les possibilités d'amélioration.</li>
      //           <li>Collaboration avec les différents services municipaux pour répondre à leurs besoins informatiques et assurer la disponibilité des ressources nécessaires.</li>
      //           <li>Participation à des réunions et présentations pour rendre des mesures prises pour améliorer la sécurité et l'efficacité.</li>
      //           </ul>
      //         </div>
      //         <div className="content-section">
      //           <h2>Acquis et Compétences développées :</h2>
      //           <ul className="text-left no-markers">
      //           <li>Acquisition de compétences en audit en analyse des risques.</li>
      //           <li>Maîtrise des techniques de maintenance et de dépannage informatique dans un environnement professionnel.</li>
      //           <li>Développement de compétences en communication et en travail d'équipe au sein d'une organisation municipale.</li>
      //           </ul>
      //         </div>
      //       </div>
      //     </Col>
      //   </Row>
      // </Container>
      
//           <Container fluid className="home-content text-center">
//         <Row className="justify-content-center">
//           <Col xs={12} md={8}>
//             <div className="heading-container mb-5">
//               <h1 className="heading-name">
//                 <strong className="main-name">Stage de Première année et Deuxième Année de BTS SIO</strong>
//               </h1>
//             </div>
//             <div className="content-container">
//               <div className="content-section">
//               <h3>Entreprise: SB Traitement</h3>
//               <p> 
//                Lors de mon passage chez SB Traitement, j’ai eu l’opportunité de concevoir un site vitrine pour un salon de coiffure/barbier. Ce projet avait pour objectif de présenter les différents services proposés (coupe simple, barbe, coupe transformation, soins, etc.), tout en permettant aux clients de consulter les tarifs et de réserver en ligne leur prestation.
// Le site intègre une interface intuitive, une présentation détaillée des offres, ainsi qu’un système de gestion des rendez-vous, offrant ainsi une solution digitale complète et moderne pour le salon.</p>
//                  </div>
//               <div className="content-section">
//                 <h2>Tâches réalisées :</h2>
//                 <ul className="text-left no-markers">
//                 <li>Conception et développement d'un site web vitrine, moderne et convivial, adapté aux besoins spécifiques du garage.</li>
//                 <li>Intégration d'un système de reservation </li>
//                 <li>Mise en place d'un système, permettant aux utilisateurs de filtrer les type de coupes / produit</li>
//                 <li>Collaboration étroite avec l'équipe SB traitement pour comprendre leurs besoins et leurs attentes, et fournir des solutions personnalisées et efficaces.</li>
//                 </ul>
//               </div>
//               <div className="content-section">
//                 <h2>Acquis et Compétences développées :</h2>
//                 <ul className="text-left no-markers">
//                 <li>Maîtrise avancée des langages de programmation web (HTML, CSS, PHP).</li>
//                 <li>Développement de compétences approfondies en conception et développement de sites web dynamiques et interactifs.</li>
//                 <li>Expérience pratique dans la gestion et la manipulation de bases de données, ainsi que dans l'intégration de systèmes backend.</li>
//                 <li>Renforcement des compétences en analyse des besoins clients, en gestion de projet et en communication professionnelle.</li>
//                 </ul>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>

<Container fluid className="home-content text-center">
  <Row className="justify-content-center">
    <Col xs={12} md={8}>
      <div className="heading-container mb-5">
        <h1 className="heading-name">
          <strong className="main-name">Stage de Première année et Deuxième Année de BTS SIO</strong>
        </h1>
      </div>
      <div className="content-container">
        <div className="content-section">
          <h3>Entreprise : SB Traitement</h3>
          <p>
            Lors de mes deux stages chez SB Traitement, j’ai pu mettre en pratique mes compétences en développement web à travers deux projets distincts.
          </p>
          <p>
            <strong>Stage de première année :</strong> conception d’un site vitrine pour le salon de coiffure/barbier. Le site présente les différents services proposés (coupe, barbe, soins…), les tarifs, et permet aux clients de réserver en ligne. Il intègre une interface intuitive et un système de gestion des rendez-vous.
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
