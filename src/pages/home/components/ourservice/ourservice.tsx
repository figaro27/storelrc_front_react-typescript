import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './ourservice.scss';

export const OurService = () => {
  return(
      <Row className="home-ourservice-row">
        <Col md={4}>
          <div className="home-ourservice-item">
            <img className="home-ourservice__image" src="./assets/svg/svgexport-1.svg" width='96px' height='96px' alt=''/>
            <p className="home-ourservice-item-title">Sur Mesure</p>
            <p className="home-ourservice-item-text">Réalisation sur mesure et<br/> adaptation aux contraintes de<br/> votre établissement</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="home-ourservice-item">
            <img src="./assets/svg/svgexport-2.svg" width='96px' height='96px' alt=''/>
            <p className="home-ourservice-item-title">Livraison rapide</p>
            <p className="home-ourservice-item-text">Livraison rapide de votre<br/> lambrequin lumineux dans<br/>toute la France</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="home-ourservice-item">
            <img className="home-ourservice__image" src="./assets/svg/svgexport-3.svg" width='96px' height='96px' alt=''/>
            <p className="home-ourservice-item-title">Qualité</p>
            <p className="home-ourservice-item-text">Nos lambrequins lumineux<br/>sont réalisés à partir de<br/>matériaux de haute qualité</p>
          </div>
        </Col>
      </Row>
  );
}
