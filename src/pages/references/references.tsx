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
          brandsData.map( (image, ind) => (
            <Col md={3} key={`references_img_${ind}`}>
              <img src={image} className="references-image" alt=''/>
            </Col>
          ))
        }
      </Row>
    </Container>
 );
};