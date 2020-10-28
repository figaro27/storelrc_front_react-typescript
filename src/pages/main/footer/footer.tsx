import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './footer.scss';
import { contactInfo, storeLinks, otherLinks } from './foot-mock';

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
            <div className="footer-contact-text">
              {
                contactInfo.map((item, ind) => (
                  <div key={`footer_contact_${ind}`}>
                    {item} <br/>
                  </div>
                ))
              }
            </div>
          </div>
        </Col>

        <Col md={4}>
          <div className="footer-link-section" >
            <div>
              {
                storeLinks.map((item, ind) =>(
                  <div key={`footer_link_${ind}`}>
                     <a href={item.path} className="footer-link" >{item.name}</a>
                  </div>
                ))
              }
            </div>
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

            <div>
              {
                otherLinks.map((item, ind) => (
                  <div key={`footer_outside_${ind}`}>
                  <a href={item.path} className="footer-link" >{item.name}</a><br/>
                  </div>
                ))
              }
            </div>
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