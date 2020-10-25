import { useState } from 'react';
import React from 'react';
import { Gallery } from 'react-grid-gallery'

export const Realisations = () => {
  const IMAGES =
    [{
            src: "https://static.wixstatic.com/media/e49d9d_12f82c31681148149966eb9a6b3940dd~mv2.png",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            isSelected: true,
            caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
            src: "https://static.wixstatic.com/media/e49d9d_71f83abb03154d29b76df93b7c79c041~mv2.png",
            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
      src: "https://static.wixstatic.com/media/e49d9d_12f82c31681148149966eb9a6b3940dd~mv2.png",
            thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    }]

  return (
    <div>
      <Gallery images={IMAGES}/>
    </div>
    );
}