
import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { Parallax } from 'components/parallax';
import { useHistory } from 'react-router-dom';

import { radiantData } from './radiant-mock';

import './radiant.scss';

export const Radiant = () => {
  return (
      <div>
        <Parallax title={ radiantData.title } image={ radiantData.cover } />
        <Container className="radiant-detail__container">
          <div className="radiant-detail__title">
            <h2>{ radiantData.title }</h2>
            <label>{radiantData.subtitle}</label>
          </div>
          <Row className="radiant-detail__description">
            <Col md={6}>
              <label dangerouslySetInnerHTML={{__html: radiantData.description}}/>
              <Button variant="outline-light" size="lg" className='store-detail-demande-btn'>Demande de devis</Button>
            </Col>
            <Col md={6}>
              <div className="radiant-detail_carousel-container" >
                <Carousel controls={false} fade={true} indicators={false}>
                  {radiantData.slides.map( image => (
                  <Carousel.Item>
                    <img className="d-block w-100" src={image} alt=""/>
                  </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}