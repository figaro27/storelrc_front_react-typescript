import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './ourservice.scss';

export const OurService = () => {
  return(
      <Row className="home-ourservice-row">
        <Col md={4}>
          <div className="home-ourservice-item">
            <img className="home-ourservice__image" src="./assets/svg/svgexport-1.svg" width='96px' height='96px' alt=''/>
            <p className="home-ourservice-item-title">Tailored</p>
            <p className="home-ourservice-item-text">Made to measure and <br/> adaptation to the constraints of your <br/> establishment</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="home-ourservice-item">
            <img src="./assets/svg/svgexport-2.svg" width='96px' height='96px' alt=''/>
            <p className="home-ourservice-item-title">Quick delivery</p>
            <p className="home-ourservice-item-text">Fast delivery of your <br/> luminous valance throughout <br/> USA and Canada</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="home-ourservice-item">
            <img className="home-ourservice__image" src="./assets/svg/svgexport-3.svg" width='96px' height='96px' alt=''/>
            <p className="home-ourservice-item-title">Quality</p>
            <p className="home-ourservice-item-text">Our luminous valance <br/> are designed in France and assembled in US. Made from <br/> high quality materials</p>
          </div>
        </Col>
      </Row>
  );
}
