// src/components/main.tsx
import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import { Button, Container, Row, Col } from 'react-bootstrap';

import { pergolas } from './pergolas';

export const Pergola = () => {
  return (
    <>
    <Container style={{padding:'2em 12em 2em 12em'}}>
      <h1 style={{textAlign:'center', fontSize:'3em', color:'white', marginTop:'2em'}}>
        Pergolas
      </h1>
      <p style={{fontSize:'1.2em', textAlign:'justify', color:'white', marginTop:'2em'}}>
        Notre gamme de pergolas sont conçues pour vous protéger du vent, de la pluie et du soleil. Elles vous permettront de créer un espace de vie alliant raffinement et qualité tout en s'adaptant avec votre décoration extérieur, qu'elle soit moderne ou traditionnelle.
      </p>
    </Container>
    <Container>
      <Row>
        { pergolas.map( item => (
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