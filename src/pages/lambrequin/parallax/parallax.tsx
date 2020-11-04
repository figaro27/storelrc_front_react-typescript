// src/components/main.tsx
import React from 'react';
import { useEffect, useState } from 'react';

import './parallax.scss';

export const Parallax = () => {
  const image1 = "https://static.wixstatic.com/media/e49d9d_a53c503d8d9f41e1ac721bd434751735~mv2_d_6000_4000_s_4_2.jpg";
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div className="lambrequin-parallax">
      <section className="lambrequin-parallax-section">
        <img
          src={image1}
          alt="test"
          className="lambrequin-parallax_img"
          style={{
            transform: `translateY(${offset * 0.7}px)`,
          }}
          />
          <div className="lambrequin-parallax_text_section">
            <h3 className="lambrequin-parallax_text">The luminous valance: <br/>
              original, classy and attractive
            </h3>
          </div>

      </section>
    </div>
    </>
 );
};
