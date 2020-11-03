// src/components/main.tsx
import React from "react";
import Gallery from "react-grid-gallery";
import { photos } from './photos';
import './photogallery.scss'

export const PhotoGallery = () => {
return (
  <div className="home-photogallery-section">
    <div className="home-photogallery-text">
      <div className="home-photogallery-text-title"><span >Discover an overview of our achievements</span></div>
      <div className="home-photogallery-text-text"><span>A know-how acquired through many years of experience</span></div>
    </div>
    <div className="home-photogallery__gallery">
      <Gallery images={photos} enableImageSelection={false} enableLightbox={false} margin={6} rowHeight={247} backdropClosesModal={true}/>
    </div>
  </div>
 );
};
