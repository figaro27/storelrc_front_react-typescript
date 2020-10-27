// src/components/main.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { pergolaData } from './pergola-mock';

import './pergola.scss';

export const Pergola = () => {
  return (
    <>
    <Container style={{padding:'2em 12em 2em 12em'}}>
      <h1 style={{textAlign:'center', fontSize:'3em', color:'white', marginTop:'2em'}}>
        { pergolaData.title }
      </h1>
      <p className="pergola__description">
        { pergolaData.description }
      </p>
    </Container>
    <Container>
      <Row>
        { pergolaData.link.map( item => (
        <Col md={6} style={{ marginBottom:'3em', paddingLeft:'0.5em', paddingRight:'0.5em'}}>
          <a href={item.url}>
            <img src={item.src} className="img-thumbnail" style={{width:'100%', height:'20em', objectFit:'cover'}} />
          </a>
          <p style={{fontSize:'1.2em', color:'white', textAlign:'center', marginTop:'1em'}}>{item.title}</p>
        </Col>
        ))}
      </Row>
    </Container>
  </>
 );
};