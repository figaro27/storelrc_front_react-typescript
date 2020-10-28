// src/components/main.tsx
import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import './barparallax.scss';

export const BarParallax = () => {

  const barText = [
    {
      text: 'Allumé, votre lambrequin lumineux mettra en avant votre enseigne, votre logo, et votre établissement, qui n\'échappera pas à l\'oeil des passants',
      class: 'home-barparallax-bar',
      image: 'https://static.wixstatic.com/media/e49d9d_12a9650996c542cda2f3c50f62e4b130~mv2_d_6016_4016_s_4_2.jpg'
    },
    {
      text:'Eteint, votre lambrequin lumineux restera original et attractif, etne dénaturera en aucun cas votre store, car parfaitement intégré à celui-ci',
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