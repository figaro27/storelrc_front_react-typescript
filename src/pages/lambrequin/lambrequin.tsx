// src/components/main.tsx
import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import { Parallax } from './parallax';
import { useHistory } from 'react-router-dom';

import './lambrequin.scss';

export const Lambrequin = () => {
  const history = useHistory();
  const images = [
    "https://static.wixstatic.com/media/e49d9d_a53c503d8d9f41e1ac721bd434751735~mv2_d_6000_4000_s_4_2.jpg",
    "https://static.wixstatic.com/media/e49d9d_d33a9f5f8b7649de8638af64aa0f7346~mv2_d_6016_4016_s_4_2.jpg",
    "https://static.wixstatic.com/media/e49d9d_927e0c2d15d9496aa057f0752a523e1e~mv2_d_3264_2079_s_2.jpg",
    "https://static.wixstatic.com/media/e49d9d_740f21b06bf64090b86c50e4261162ca~mv2_d_4924_2443_s_4_2.jpg",
    "https://static.wixstatic.com/media/e49d9d_164e070d5e5e4cd9abebcc9141de6f66~mv2_d_3264_2448_s_4_2.jpg",
    "https://static.wixstatic.com/media/e49d9d_4b55a5da2a8b48b1b054e2e79fa96814~mv2_d_5451_3639_s_4_2.jpg",
  ]

  return (
    <>
      <Parallax />
      <h1 className="luminous__banner">
        The luminous valance: be more visible!
      </h1>
      <Container>
        <Row>
          <Col md={6} >
            <p className="luminous__description">
            More and more present in the urban landscape, the luminous valance is original and very effective in attracting the eye of passers-by, and therefore making you more visible at night.
            <br/> <br/>
            Operating thanks to LEDs integrated directly into your awning, the luminous valance is discreet and inexpensive, both by its simple and quick installation and by its low energy consumption.
            <br/> <br/>
            Very resistant to sun, rain, snow and wind, this type of illuminated sign can be adapted to any type of logo or typography, and can be offered in the colors of your choice.
            <br/> <br/>
            We carry out a complete feasibility study upstream, in order to determine all the constraints of the project, and offer you the configuration of your luminous valances the most suited to your sign.
            <br/> <br/>
            Store Led can also offer you traditional valance flocking, with special valance flex, or painting, on request.
            </p>

          </Col>
          <Col md={6}>
            <div className="luminous__carousel-section" >
              <Carousel controls={false} fade={true} >
                {images.map( (image, index) => (
                <Carousel.Item key={`lambrequin_carousel_${index}`}>
                  <img
                    src={image}
                    alt="First slide"
                    width="100%" height="380em"
                  />
                </Carousel.Item>

                ))}
              </Carousel>
            </div>
            <div style={{ textAlign: 'center'}}>
              <p className="luminous__carousel-description">
                Contact us for more information on our services, our prices, or to obtain a quote or an appointment with one of our advisers.</p>
                <Button variant="outline-light" size="lg" className="luminous__button" onClick={e=>history.push('/quote-request')}>Quote request</Button>
            </div>

          </Col>
        </Row>
      </Container>
    </>
 );
};
