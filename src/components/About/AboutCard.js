import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Bonjour je suis  <span className="blue">Merhdaoui Mohamed </span>
          après l'obtention de mon baccalauréat général option physique - Chimie et sciences de l'ingénieur,  j'ai décidé de suivre une formation de développement à Epitech. Par la suite, j'ai intégré un BTS SIO (Services Informatiques aux Organisations) avec l'option SLAM (Solutions Logicielles et Applications Métiers) au sein de L'UFA Charles de Foucauld.
        
          </p>
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
