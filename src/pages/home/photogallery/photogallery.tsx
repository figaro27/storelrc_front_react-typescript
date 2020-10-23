// src/components/main.tsx
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

import './photogallery.scss'

export const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

return (
  <div className="home-photogallery-section">
    <div className="home-photogallery-text">
      <p className="home-photogallery-text-title">Découvrez un aperçu de nos réalisations</p>
      <p className="home-photogallery-text-text">Un savoir-faire acquis grâce à de nombreuses années d'expérience</p>
    </div>
    <div className="home-photogallery-gallery">
      <Gallery photos={photos} onClick={openLightbox} />
    </div>
  </div>
 );
};