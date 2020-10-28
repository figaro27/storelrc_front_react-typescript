// src/components/main.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { pergolaData } from './pergola-mock';

import './pergola.scss';

export const Pergola = () => {
  return (
    <>
    <Container style={{padding:'2em 12em'}}>
      <h1 className="pergola__title">
        { pergolaData.title }
      </h1>
      <p className="pergola__description">
        { pergolaData.description }
      </p>
    </Container>
    <Container>
      <Row>
        { pergolaData.link.map( (item, ind) => (
        <Col md={6} style={{ marginBottom:'3em', paddingLeft:'0.5em', paddingRight:'0.5em'}} key={`pergola_col_${ind}`}>
          <a href={item.url}>
            <img src={item.src} className="img-thumbnail pergola__item__img" alt=''/>
          </a>
          <p className='pergola__item__title'>{item.title}</p>
        </Col>
        ))}
      </Row>
    </Container>
  </>
 );
};