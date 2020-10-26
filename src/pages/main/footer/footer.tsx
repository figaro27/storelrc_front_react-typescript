import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './footer.scss';

export const Footer = () => {
  const history = useHistory();
 return (
  <footer className="text-muted">
    <hr className="divider-horizontal-dotted"></hr>
    <Container fluid="lg" className="footer-container">
      <Row>
        <Col md={4}>
          <div className="footer-contact-section">
            <img  className="footer-contact-img"
              alt="StoreledNOIR-2-pagepng_edited.png"
              data-type="image"
              src="https://static.wixstatic.com/media/e49d9d_2f69a5b64a9f454b8503fc6a75c44a8b~mv2.png"/>
            <p className="footer-contact-text">
              74 Chemin de L'Olivet<br/>
              06110 Le Cannet<br/>
              Tél : 04 93 90 81 41<br/>
              Mob : 06 69 14 17 13<br/>
              contact@storeled.fr
            </p>
          </div>
        </Col>

        <Col md={4}>
          <div className="footer-link-section">
            <p>
              <a href="#" className="footer-link">Lambrequin lumineux</a><br/>
              <a href="#" className="footer-link">Stores extérieurs</a><br/>
              <a href="#" className="footer-link">Pergolas</a><br/>
              <a href="#" className="footer-link">Enseignes</a><br/>
              <a href="#" className="footer-link">Claustras</a><br/>
              <a href="#" className="footer-link">Radiants</a>
            </p>
            <Button variant="outline-light" size="lg" block style={{margin: '2em 0 0 0'}} onClick={e=>history.push('/demande-de-devis')}>Demande de devis</Button>
          </div>
        </Col>

        <Col md={4}>
          <div className="footer-social-section">
            <p className="footer-contact-text">
              Retrouvez-nous sur :
            </p>
            <div className="footer-outsite-img-section">
              <a href='#' style={{margin: '1em'}}>
                <img className="footer-outsite-img"
                alt="Facebook Social Icône" data-type="image"
                style={{width: '39px', height: '39px'}}
                src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png"/>
              </a>
              <a href='#' style={{margin: '1em'}}>
                <img className="footer-outsite-img"
                alt="Facebook Social Icône" data-type="image"
                style={{width: '39px', height: '39px'}}
                src="https://static.wixstatic.com/media/9f9c321c774844b793180620472aa4f1.png"/>
              </a>
            </div>

            <p>
              <a href="#" className="footer-link">A propos</a><br/>
              <a href="#" className="footer-link">Revendeurs</a><br/>
              <a href="/qui-sommes-nous" className="footer-link">Nos références</a><br/>
              <a href="/faq" className="footer-link">F.A.Q.</a><br/>
              <a href="#" className="footer-link">Contact</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    <hr className="divider-horizontal-dotted"></hr>
    <Container>
      <p className="footer-copyright-text">
        Storeled &copy; 2019 - Tous droits réservés - Mentions légales
      </p>
    </Container>
  </footer>
 );
};