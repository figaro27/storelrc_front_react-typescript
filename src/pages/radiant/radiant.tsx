
import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { Parallax } from 'components/parallax';
import { useHistory } from 'react-router-dom';

import './radiant.scss';

export const Radiant = () => {
  const history = useHistory();
  const title = 'Radiants'
  const text1 = "Toujours au chaud  à l'extérieur, même en hiver !"
  const text2 = "Pour compléter vos éléments extérieurs, nous vous proposons également une gamme complète de radiants, conçus pour le chauffage d'un périmètre restreint, à installer directement au mur, sous un store ou un parasol.<br/><br/>D'une grande fiabilité, nos radiants consomment peu d'énergie, et respectent l'environnement, en toute sécurité.<br/><br/>N'hésitez pas à nous contacter pour toute demande d'information, ou obtenir un devis de la part de l'un de nos conseillers.";
  const image = "https://static.wixstatic.com/media/e49d9d_22e7cc4d1f5648b89c758fe4a1e71e9e~mv2_d_2048_1365_s_2.jpg/v1/fill/w_1903,h_509,al_t,q_85,usm_0.66_1.00_0.01/e49d9d_22e7cc4d1f5648b89c758fe4a1e71e9e~mv2_d_2048_1365_s_2.webp";
  const slides = [
    "https://static.wixstatic.com/media/e49d9d_12f82c31681148149966eb9a6b3940dd~mv2.png",
    "https://static.wixstatic.com/media/e49d9d_71f83abb03154d29b76df93b7c79c041~mv2.png",
    "https://static.wixstatic.com/media/e49d9d_889575e5d5ea47a3bb9235204089f4f3~mv2_d_2532_1298_s_2.jpeg",
    "https://static.wixstatic.com/media/e49d9d_7c221367ab174db09855dcf077c07e39~mv2.png",
    "https://static.wixstatic.com/media/e49d9d_22e7cc4d1f5648b89c758fe4a1e71e9e~mv2_d_2048_1365_s_2.jpg"
  ]
  return (
      <div>
        <Parallax title={title} image={image} />
        <Container style={{marginTop:'1em'}}>

          <div style={{marginTop:'2em', textAlign:'center'}}>
            <h2 style={{color:'white'}}>{title}</h2>
            <p style={{color:'white', fontSize:'1.4em'}}>{text1}</p>
          </div>
          <Row style={{marginTop:'3em', marginBottom:'1.5em'}}>
            <Col md={6} style={{textAlign:'center'}}>
              <p style={{color:'white', textAlign:'justify', fontSize:'16px'}} dangerouslySetInnerHTML={{__html: text2}}/>
              <Button variant="outline-light" size="lg" className='store-detail-demande-btn' onClick={e=>history.push('/demande-de-devis')}>Demande de devis</Button>
            </Col>
            <Col md={6}>
              <div className="radiant-detail_carousel-container" >
                <Carousel controls={false} fade={true} indicators={false}>
                  {slides.map( image => (
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