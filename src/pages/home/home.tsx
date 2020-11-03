// src/components/main.tsx
import React from 'react';
import { Button } from 'react-bootstrap'
import { BarParallax, Parallax, PhotoGallery, OurService } from './components'
import './home.scss'

export const Home = () => {
  return (
    <>
      <Parallax />
      <h2 className="home-font2">
        <br/>Store Led<br/>
        luminous signs expert
      </h2>
      <p className="home-text1">
      Do you have a restaurant? A shop? A Hotel? An agency? <br/>
       You want to stand out from your neighbors and make your <br/>
       establishment more attractive during the evening and night?
      </p>
      <p className="home-text1">
        Opt for an luminous sign integrated into your valance.
      </p>
      <p className="home-text1">
      An inexpensive, fast and innovative solution that will allow you to attract <br/>
       the eye of all passers-by, while highlighting your establishment!
      </p>
      <div style={{ textAlign:'center'}}>
        <Button variant="outline-light" className="home-btn-en">Find out more</Button>
      </div>
      <BarParallax/>
      <PhotoGallery/>
      <OurService />
    </>
 );
};
