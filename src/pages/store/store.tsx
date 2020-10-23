// src/components/main.tsx
import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import { Button, Container, Row, Col } from 'react-bootstrap';

import { items } from './items';

import './store.scss';

export const Store = () => {
  return (
    <>
    <Container style={{padding:'2em 12em 2em 12em'}}>
      <h1 style={{textAlign:'center', fontSize:'3em', color:'white', marginTop:'2em'}}>
        Stores extérieurs
      </h1>
      <p style={{fontSize:'1.2em', textAlign:'justify', color:'white', marginTop:'2em'}}>
        Notre gamme de stores extérieurs, des plus traditionnels aux plus modernes, apporteront tendance et raffinement à vos espaces. Fonctionnels, et conçus avec les meilleurs matériaux, ils mettront en valeur votre extérieur, ainsi que vos décorations. Un store extérieur est l'un des meilleurs moyens de se protéger des rayons du soleil.
      </p>
    </Container>
    <Container>
      <Row>
        { items.map( item => (
        <Col md={4} style={{ marginBottom:'3em', paddingLeft:'0.5em', paddingRight:'0.5em'}}>
          <a href={item.url}>
          <img src={item.src} className="img-thumbnail" style={{width:'100%', height:'18em', objectFit:'cover'}} />
          </a>
          <p style={{fontSize:'1.2em', color:'white', textAlign:'center', marginTop:'1em'}}>{item.title}</p>
        </Col>
        ))}
      </Row>
    </Container>


  </>
 );
};