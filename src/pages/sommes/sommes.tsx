import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { sommesData } from './sommes-mock';

import './sommes.scss'

export const Sommes = () => {
  return (
    <Container className="sommes-container">
      <p className="sommes-title">Who are we?</p>
      <p className="sommes-title-des">
        Store Led is a dynamic company specializing in the manufacture of luminous valances.
      </p>
      {
        sommesData.map((item, ind) => (<p className="sommes-text-text" key={`sommes_item_${ind}`}>{ item }</p>))
      }
      <Button variant="outline-light" size="lg" className="sommes-btn" >Contact-us!</Button>
    </Container>
 );
};
