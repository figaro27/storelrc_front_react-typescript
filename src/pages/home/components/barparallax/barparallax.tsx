// src/components/main.tsx
import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import './barparallax.scss';

export const BarParallax = () => {

  const barText = [
    {
      text: 'When turned on, your luminous valance will highlight your sign, your logo, and your establishment, which will not escape the eye of passers-by',
      class: 'home-barparallax-bar',
      image: 'https://static.wixstatic.com/media/e49d9d_12a9650996c542cda2f3c50f62e4b130~mv2_d_6016_4016_s_4_2.jpg'
    },
    {
      text:'Switched off, your luminous valance will remain original and attractive, and will in no way distort your awning, because it is perfectly integrated into it',
      class: 'home-barparallax-rest',
      image:'https://static.wixstatic.com/media/e49d9d_3ac66eb9c38d4b7c88e97d451becf40d~mv2_d_6016_4016_s_4_2.jpg'
    }

  ]

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
        if(window.pageYOffset > 500) setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    {barText.map((item, index) => (
          <Row className="home-barparallax__row" key={ index }>
          <Col md={9} style={{overflow:'hidden'}}>
            <div className="home-barparallax-section">
            <img
              src={item.image}
              alt="test"
              className="home-parallax_img"
              style={{
                transform: `translateY(${(-50 + (offset-150)  / 30)}%)`,
              }}
              />
            </div>
          </Col>
          <Col md={3} className="home-barparallax__container">
              <p className="home-barparallax-text">
                { item.text }
              </p>
          </Col>
      </Row>
    ))}
    </>
 );
};
