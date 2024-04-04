import React, { useState, useEffect } from "react";
import "./Veille.css";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/malware.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const veilleLink =
  "https://raw.githubusercontent.com/MohamedMERHDAOUI/portfoliojs/master/src/Assets/malware.pdf";

function Veille() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
    <section className="home-section" id="home">
      <Particle />
      <Container fluid className="home-content text-center">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <div className="heading-container mb-5">
              <h1 className="heading-name">
                <strong className="main-name">La Veille Technologique</strong>
              </h1>
            </div>
            <div className="content-container">
              <div className="content-section">
                <h2>Qu'est-ce que la veille technologique ?</h2>
                <p>La veille technologique, élément de la veille stratégique, consiste à surveiller les évolutions techniques, les innovations dans un secteur d’activité donnée. La veille technologique comprend notamment la surveillance, la collecte, le partage et la diffusion d’information permettant d’anticiper ou de s’informer sur des changements en matière de recherche, développement, brevet, lancement de nouveaux produits, matériaux, processus, concepts, innovation de fabrication, etc…. Cela a pour but d’évaluer l’impact sur l’environnement et l’organisation.</p>
              </div>
              <div className="content-section">
                <h2>A quoi sert la veille technologique ?</h2>
                <p>Ces informations peuvent concerner une matière première, un produit, un composant, un procédé, l’état de l’art et l’évolution de l’environnement scientifique, technique, industriel ou commercial de l’entreprise. Elle permet aux bureaux d’études d’être informés des baisses possibles de coût ou d’augmentation de qualité dans le cadre de l’analyse de la valeur. L’entité de production connaît mieux grâce à elle ses limites de production et sa concurrence future.</p>
              </div>
              <div className="content-section">
                <h2>Outils de veille technologique utilisés</h2>
                <ul className="text-left no-markers">
                  <li>Rester à jour dans le domaine informatique.</li>
                  <li>Comprendre les implications des technologies pour les entreprises et la société.</li>
                  <li>Faire une sélection du contenu le plus pertinent.</li>
                  <li>Extraire les informations importantes.</li>
                  <li>Retenir ce qu'il en ressort.</li>
                  <li>S'interroger sur le lien avec ma profession.</li>
                  <li>Mettre en lien avec mes connaissances actuelles.</li>
                </ul>
              </div>
              <div className="content-section">
                <h2>L'apport de la veille technologique</h2>
                <ul className="text-left no-markers">
                  <li>Rester à jour dans le domaine informatique.</li>
                  <li>Comprendre les implications des technologies pour les entreprises et la société.</li>
                  <li>Faire une sélection du contenu le plus pertinent.</li>
                  <li>Extraire les informations importantes.</li>
                  <li>Retenir ce qu'il en ressort.</li>
                  <li>S'interroger sur le lien avec ma profession.</li>
                  <li>Mettre en lien avec mes connaissances actuelles.</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </section>

      <Container fluid className="resume-section">
        <Particle />

        <Row className="resume">
          <Document file={veilleLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Téléchargement du CV
          </Button>
        </Row>
      </Container>
    
    </div>
  );
}

export default Veille;
