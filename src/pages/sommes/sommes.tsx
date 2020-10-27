import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { sommesData } from './sommes-mock';

import './sommes.scss'

export const Sommes = () => {
  return (
    <Container className="sommes-container">
      <p className="sommes-title">Qui sommes-nous ?</p>
      <p className="sommes-title-des">
        Store Led est une société dynamique spécialisée dans la fabrication de lambrequins lumineux.
      </p>
      {
        sommesData.map(item => (<p className="sommes-text-text">{ item }</p>))
      }
      <Button variant="outline-light" size="lg" className="sommes-btn" >Contactez-nous !</Button>
    </Container>
 );
};