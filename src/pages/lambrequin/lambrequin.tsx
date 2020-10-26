// src/components/main.tsx
import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import { Parallax } from './parallax';
import { useHistory } from 'react-router-dom';

import './lambrequin.scss';

export const Lambrequin = () => {
  const history = useHistory();
  const images = [
    "https://static.wixstatic.com/media/e49d9d_a53c503d8d9f41e1ac721bd434751735~mv2_d_6000_4000_s_4_2.jpg",
    "https://static.wixstatic.com/media/e49d9d_d33a9f5f8b7649de8638af64aa0f7346~mv2_d_6016_4016_s_4_2.jpg",
    "https://static.wixstatic.com/media/e49d9d_927e0c2d15d9496aa057f0752a523e1e~mv2_d_3264_2079_s_2.jpg",
    "https://static.wixstatic.com/media/e49d9d_740f21b06bf64090b86c50e4261162ca~mv2_d_4924_2443_s_4_2.jpg",
    "https://static.wixstatic.com/media/e49d9d_164e070d5e5e4cd9abebcc9141de6f66~mv2_d_3264_2448_s_4_2.jpg",
    "https://static.wixstatic.com/media/e49d9d_4b55a5da2a8b48b1b054e2e79fa96814~mv2_d_5451_3639_s_4_2.jpg",
  ]

  return (
    <>
      <Parallax />
      <h1 className="luminous__banner">
        Le lambrequin lumineux : soyez plus visible !
      </h1>
      <Container>
        <Row>
          <Col md={6} >
            <p className="luminous__description">
              De plus en plus présent dans le paysage urbain, le lambrequin lumineux se veut original et très efficace pour attirer l'oeil des passants, et donc vous rendre plus visible la nuit.
              <br/><br/>
              Fonctionnant grâce à des LED intégrées directement dans votre store, le lambrequin lumineux est discret, et peu coûteux, tant par sa simple et rapide installation que par sa faible consommation d'énergie.
              <br/><br/>
              Très résistant au soleil, à la pluie et au vent, ce type d'enseigne lumineuse peut s'adapter à n'importe quel type de logo ou typographie, et peut être proposé aux couleurs de votre choix.
              <br/><br/>
              Nous réalisons une étude de faisabilité complète en amont, afin de déterminer toutes les contraintes du projet, et vous proposer la configuration de vos lambrequins lumineux la plus adaptée à votre enseigne.
              <br/><br/>
              Store Led peut également vous proposer du flocage de lambrequin traditionnel, avec du flex spécial lambrequin, ou peinture, sur demande.
            </p>

          </Col>
          <Col md={6}>
            <div className="luminous__carousel-section" >
              <Carousel controls={false} fade={true} >
                {images.map( image => (
                <Carousel.Item>
                  <img
                    src={image}
                    alt="First slide"
                    width="100%" height="380em"
                  />
                </Carousel.Item>

                ))}
              </Carousel>
            </div>
            <div style={{ textAlign: 'center'}}>
              <p className="luminous__carousel-description">
                Contactez-nous pour plus d'informations sur nos services, nos tarifs, ou pour obtenir un devis ou un rendez-vous avec l'un de nos conseillers.</p>
                <Button variant="outline-light" size="lg" className="luminous__button" onClick={e=>history.push('/demande-de-devis')}>Demande de devis</Button>
            </div>

          </Col>
        </Row>
      </Container>
    </>
 );
};