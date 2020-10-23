// src/components/main.tsx
import React from 'react';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import './parallax.scss';

export const Parallax = () => {
  const image1 = "https://static.wixstatic.com/media/e49d9d_afa49dd49a924af5962574840e9f5f48~mv2.jpg";
  const image2 ="https://static.wixstatic.com/media/e49d9d_afa49dd49a924af5962574840e9f5f48~mv2.jpg/v1/fill/w_2920,h_1080,al_t,q_85,usm_0.66_1.00_0.01/e49d9d_afa49dd49a924af5962574840e9f5f48~mv2.webp"
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
          src="https://static.wixstatic.com/media/e49d9d_afa49dd49a924af5962574840e9f5f48~mv2.jpg"
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