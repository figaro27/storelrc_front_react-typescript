// src/components/main.tsx
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { brandsData } from './references-mock';
import './references.scss'

export const References = () => {

  return (
    <Container className="references-container">
      <p className="references-title">
        Store Led : Nos références
      </p>
      <Row>
        {
          brandsData.map( image => (
            <Col md={3}>
              <img src={image} className="references-image"/>
            </Col>
          ))
        }
      </Row>
    </Container>
 );
};