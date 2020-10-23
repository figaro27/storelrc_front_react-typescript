// src/components/main.tsx
import React from 'react';
import { useEffect, useState } from 'react';

import './parallax.scss';

export const Parallax = () => {
  const image1 = "https://static.wixstatic.com/media/e49d9d_afa49dd49a924af5962574840e9f5f48~mv2.jpg";
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
    <div className="home-parallax">
      <section className="home-parallax-section">
        <img
          src={image1}
          alt="test"
          className="home-parallax_img"
          style={{
            transform: `translateY(${offset * 0.7}px)`,
            filter: `brightness(60%)`
          }}
          />
        <div>
          <div className="home-parallax-text">
              <img
                  style={{
                    width:'213px',
                    height:'130px',
                    }}
                    alt="StoreledNOIR-2-pagepng_edited.png" data-type="image"
                    src="https://static.wixstatic.com/media/e49d9d_2f69a5b64a9f454b8503fc6a75c44a8b~mv2.png"/>
          </div>
          <div className='class'>
              <h2 className="home-font2">
                  Spécialiste du lambrequin lumineux
              </h2>
          </div>
        </div>

      </section>
    </div>
    </>
 );
};