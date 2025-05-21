import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Bonjour je suis  <span className="blue">Alexandre Mounanou </span>
          après l'obtention de mon baccalauréat général option physique - Chimie et SVT,  j'ai décidé d'intégré un BTS SIO (Services Informatiques aux Organisations) avec l'option SLAM (Solutions Logicielles et Applications Métiers) au sein de L'IRIS, École Supérieure de l'Informatique et du Numérique.
        
          </p>
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
