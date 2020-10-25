import { useState } from 'react';
import React from 'react';
import { Gallery } from 'react-grid-gallery';
import { PhotoGallery } from '../home/components';

import { photos } from "../home/components/photogallery/photos";

export const Realisations = () => {
  const IMAGES = [
    {
      src: "https://static.wixstatic.com/media/e49d9d_a53c503d8d9f41e1ac721bd434751735~mv2_d_6000_4000_s_4_2.jpg",
      thumbnail: "https://static.wixstatic.com/media/e49d9d_a53c503d8d9f41e1ac721bd434751735~mv2_d_6000_4000_s_4_2.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 148,
      tags: [{value: "People", title: "People"}],
      caption: "315H (gratisography.com)"
    },
    {
      src: "https://static.wixstatic.com/media/e49d9d_a53c503d8d9f41e1ac721bd434751735~mv2_d_6000_4000_s_4_2.jpg",
      thumbnail: "https://static.wixstatic.com/media/e49d9d_a53c503d8d9f41e1ac721bd434751735~mv2_d_6000_4000_s_4_2.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 148,
      tags: [{value: "People", title: "People"}],
      caption: "315H (gratisography.com)"
    },

    {
      src: "https://static.wixstatic.com/media/e49d9d_a53c503d8d9f41e1ac721bd434751735~mv2_d_6000_4000_s_4_2.jpg",
      thumbnail: "https://static.wixstatic.com/media/e49d9d_a53c503d8d9f41e1ac721bd434751735~mv2_d_6000_4000_s_4_2.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 148,
      tags: [{value: "People", title: "People"}],
      caption: "315H (gratisography.com)"
    },
  ]

  return (
    <div>
      <Gallery images={photos} />
    </div>
    );
}