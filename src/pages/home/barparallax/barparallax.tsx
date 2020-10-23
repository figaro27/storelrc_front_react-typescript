// src/components/main.tsx
import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import './barparallax.scss';

export const BarParallax = () => {
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