// src/components/main.tsx
import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import './barparallax.scss';

export const BarParallax = () => {
  const image1 = "https://static.wixstatic.com/media/e49d9d_12a9650996c542cda2f3c50f62e4b130~mv2_d_6016_4016_s_4_2.jpg";
  const image2 ="https://static.wixstatic.com/media/e49d9d_afa49dd49a924af5962574840e9f5f48~mv2.jpg/v1/fill/w_2920,h_1080,al_t,q_85,usm_0.66_1.00_0.01/e49d9d_afa49dd49a924af5962574840e9f5f48~mv2.webp"
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
    <Row className="home-barparallax__row">
        <Col md={9}>
            <div className="home-barparallax-bar">

            </div>
        </Col>
        <Col md={3}>
          <p className="home-barparallax-text">
            Allumé, votre lambrequin<br/>
            lumineux mettra en avant<br/>
            votre enseigne, votre logo,<br/>
            et votre établissement,<br/>
            qui n'échappera pas à l'oeil<br/>
            des passants
          </p>
        </Col>
    </Row>

    <Row className="home-barparallax__row">
      <Col md={9}>
        <div className="home-barparallax-rest">

        </div>
      </Col>
      <Col md={3}>
        <p className="home-barparallax-text">
          Eteint, votre lambrequin<br/>
          lumineux restera<br/>
          original et attractif, et<br/>
          ne dénaturera en<br/>
          aucun cas votre store,<br/>
          car parfaitement<br/>
          intégré à celui-ci<br/>
        </p>
        </Col>
    </Row>
    </>
 );
};