
import React from 'react';
import { Container, Row, Col, Button, Carousel, Image } from 'react-bootstrap';
import { Parallax } from 'components/parallax';

import './clasutras.scss'
export const Clasutras = () => {
  const title = 'Claustras'
  const text1 = 'Concevez votre terrasse idéale'
  const text2 = "Idéal pour la création d'une terrasse fermée personnalisée, nous vous proposons une gamme complète de claustras, conçus avec des matériaux de qualité, ainsi qu'un large choix de formes et coloris<br/><br/>Réalisés à partir de modules fixes ou amovibles, les claustras peut être modifiés à souhait. Entièrement modulables, ils peuvent être adaptés à toutes les contraintes d'espaces ou de confidentialité.<br/><br/>Elément incontournable pour délimiter la terrasse fermée d'un restaurant, le claustra est de plus en plus présent dans le paysage urbain.<br/><br/>N'hésitez pas à nous contacter pour toute demande d'information, ou obtenir un devis de la part de l'un de nos conseillers.";
  const image = "https://static.wixstatic.com/media/e49d9d_60d9a795d61d463b848e54e5e63f2885~mv2.png/v1/fill/w_1903,h_509,al_c,q_90,usm_0.66_1.00_0.01/e49d9d_60d9a795d61d463b848e54e5e63f2885~mv2.webp";
  const slides = [
    "https://static.wixstatic.com/media/e49d9d_d4fe0feb3b3f4c63a10598969ea5838e~mv2.png",
    "https://static.wixstatic.com/media/e49d9d_05ba6b336c7245458536f678a9ed16f1~mv2.png",
    "https://static.wixstatic.com/media/e49d9d_3e8e9d8c832048a98020267067e840a5~mv2.png",
    "https://static.wixstatic.com/media/e49d9d_60d9a795d61d463b848e54e5e63f2885~mv2.png",
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
              <Button variant="outline-light" size="lg" className='store-detail-demande-btn'>Demande de devis</Button>
            </Col>
            <Col md={6}>
              <div className="clasturas-detail_carousel-container" >
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