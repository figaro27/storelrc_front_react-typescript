// src/components/main.tsx
import React from 'react';
import { Button } from 'react-bootstrap'

import { Parallax } from './parallax'
import { BarParallax } from './barparallax'
import { PhotoGallery } from './photogallery'
import { OurService } from './ourservice'

import './home.scss'

export const Home = () => {
  return (
    <>
      <Parallax />

      <h2 className="home-font2">
        <br/>Store Led<br/>
        Expert des enseignes lumineuses
      </h2>
      <p className="home-text1">
        Vous avez un restaurant ? Un commerce ? Un hôtel ? Une agence ?<br/>
        Vous souhaitez vous démarquez de vos voisins et rendre votre<br/>
        établissement plus attrayant durant la nuit ?
      </p>
      <p className="home-text1">
        Optez pour une enseigne lumineuse intégrée dans votre lambrequin.
      </p>
      <p className="home-text1">
        Une solution peu coûteuse, rapide et novatrice, qui vous permettra d'attirer<br/>
        l'oeil de tous les passants, tout en mettant en valeur votre établissement !
      </p>
      <div style={{ textAlign:'center'}}>
        <Button variant="outline-light" className="home-btn-en">En savoir plus</Button>
      </div>

      <BarParallax/>
      <PhotoGallery />
      <OurService />

    </>
 );
};