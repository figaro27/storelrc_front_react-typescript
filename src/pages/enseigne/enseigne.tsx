// src/components/main.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { enseignes } from './enseign-mock';

export const Enseigne = () => {
  return (
    <>
    <Container className="enseign__container">
      <h1 style={{textAlign:'center', fontSize:'3em', color:'white', marginTop:'2em'}}>
        Enseignes
      </h1>
      <p className='enseigne__title'>
        Store Led vous propose un large choix d'enseignes, lumineuses ou traditionnelles. Nous vous accompagnerons dans le choix de vos éléments de communication, afin de respecter votre identité visuelle, tout en vous proposant des équipements de qualité, dans le respect des normes.
      </p>
    </Container>
    <Container>
      <Row>
        { enseignes.map( (item, ind) => (
        <Col md={6} style={{ marginBottom:'3em', paddingLeft:'0.5em', paddingRight:'0.5em'}} key={`enseigne_item_${ind}`}>
          <a href={item.url}>
          <img src={item.src} className="img-thumbnail enseigne__item__img" alt=""/>
          </a>
          <p className='enseigne__item__title'>{item.title}</p>
        </Col>
        ))}
      </Row>
    </Container>
  </>
 );
};