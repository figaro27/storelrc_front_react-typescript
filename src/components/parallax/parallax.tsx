// src/components/main.tsx
import React from 'react';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import './parallax.scss';

interface ParallaxProps {
  title: string,
  image: string,
 }

export const Parallax: React.SFC<ParallaxProps> = (props) => {
  const image1 = props.image;
  const [offset, setOffset] = useState(0);

  return (
    <>
    <div className="store-parallax">
      <section className="store-parallax-section">
        <img
          src={image1}
          alt="test"
          className="store-parallax_img"
          style={{

            filter: `brightness(70%)`
          }}
          />
          <div className="store-parallax_text_section">
            <h1 className="store-parallax_text">{props.title}
            </h1>
          </div>
      </section>


    </div>
    </>
 );
};