// src/components/main.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { enseignes } from './enseignes';

export const Enseigne = () => {
  return (
    <>
    <Container style={{padding:'2em 12em 2em 12em'}}>
      <h1 style={{textAlign:'center', fontSize:'3em', color:'white', marginTop:'2em'}}>
        Enseignes
      </h1>
      <p style={{fontSize:'1.2em', textAlign:'justify', color:'white', marginTop:'2em'}}>
        Store Led vous propose un large choix d'enseignes, lumineuses ou traditionnelles. Nous vous accompagnerons dans le choix de vos éléments de communication, afin de respecter votre identité visuelle, tout en vous proposant des équipements de qualité, dans le respect des normes.
      </p>
    </Container>
    <Container>
      <Row>
        { enseignes.map( item => (
        <Col md={6} style={{ marginBottom:'3em', paddingLeft:'0.5em', paddingRight:'0.5em'}}>
          <a href={item.url}>
          <img src={item.src} className="img-thumbnail" alt="" style={{width:'100%', height:'20em', objectFit:'cover'}} />
          </a>
          <p style={{fontSize:'1.2em', color:'white', textAlign:'center', marginTop:'1em'}}>{item.title}</p>
        </Col>
        ))}
      </Row>
    </Container>
  </>
 );
};