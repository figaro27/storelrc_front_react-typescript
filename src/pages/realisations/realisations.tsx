import { useState } from 'react';
import React from 'react';
import { PhotoGallery } from './photogallery'
import { Container } from 'react-bootstrap'

import { photos } from './photogallery/photos'
import './realisations.scss'

export const Realisations = () => {

  return (
      <Container className="realisation-container">
        <PhotoGallery />
      </Container>
    );
}