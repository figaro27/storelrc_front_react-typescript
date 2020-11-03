// src/components/main.tsx
import React, { CSSProperties } from "react";
import  Gallery from "react-grid-gallery";
import { photos } from "./photos";

import './photogallery.scss'

const captionStyle: CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  height: "100%",
  color: "white",
};

const images = photos.map((i) => ({
  ...i,
  customOverlay: (
    <div style={captionStyle}>
      <div style={{height:'100%', display:'flex'}}>
        <div style={{textAlign:'center', margin:'auto'}}>
          <h4>{i.caption}</h4>
          {i.des}
        </div>
      </div>
    </div>
  )
}))

export const PhotoGallery = () => (
  <div className="realisations-photogallery-section">
    <div className="realisations-photogallery-text">
      <div className="realisations-photogallery-text-title"><span>Our achievements</span></div>
      <div className="realisations-photogallery-text-text"><span>Discover some of Store Led's achievements</span></div>
    </div>
    <div className="realisations-photogallery-gallery">
      <Gallery images={images} margin={10} rowHeight={240} backdropClosesModal={true} />
    </div>
  </div>
);
