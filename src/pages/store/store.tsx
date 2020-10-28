// src/components/main.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { items } from './items';

import './store.scss';

export const Store = () => {
  return (
    <>
    <Container style={{padding:'2em 12em 2em 12em'}}>
      <h1 className="store-title">
        Stores extérieurs
      </h1>
      <p className="store-text">
        Notre gamme de stores extérieurs, des plus traditionnels aux plus modernes, apporteront tendance et raffinement à vos espaces. Fonctionnels, et conçus avec les meilleurs matériaux, ils mettront en valeur votre extérieur, ainsi que vos décorations. Un store extérieur est l'un des meilleurs moyens de se protéger des rayons du soleil.
      </p>
    </Container>
    <Container>
      <Row>
        { items.map( (item, index) => (
        <Col md={4} className="store-image-container" key={`store_col_${index}`}>
          <a href={item.url}>
           <img src={item.src} className="img-thumbnail" alt=''/>
          </a>
          <p className="store-image-text">{item.title}</p>
        </Col>
        ))}
      </Row>
    </Container>
  </>
 );
};