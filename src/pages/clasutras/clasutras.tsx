
import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { Parallax } from 'components/parallax';
import { useHistory } from 'react-router-dom';

import './clasutras.scss';
import { clasutrasData } from './clasutras-mock';
export const Clasutras = () => {
  const history = useHistory();
  return (
      <div>
        <Parallax title={ clasutrasData.title } image={ clasutrasData.cover_image } />
        <Container>
          <div className="claustras__title-section">
            <h2>{ clasutrasData.title }</h2>
            <label>{clasutrasData.subtitle}</label>
          </div>
          <Row className="claustras__description-section">
            <Col md={6} className="text-center">
              <label dangerouslySetInnerHTML={{__html: clasutrasData.description}}/>
              <Button variant="outline-light" size="lg" className='store-detail-demande-btn' onClick={e=>history.push('/demande-de-devis')}>Demande de devis</Button>
            </Col>
            <Col md={6}>
              <div className="clasturas__carousel-container" >
                <Carousel controls={false} fade={true} indicators={false}>
                  {clasutrasData.slides.map( (image, ind) => (
                  <Carousel.Item key={`clasutras_img_${ind}`}>
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