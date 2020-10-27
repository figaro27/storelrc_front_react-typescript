// src/components/main.tsx
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import './references.scss'

export const References = () => {
  const images = [
    "https://static.wixstatic.com/media/e49d9d_5e3a78a359a44b26b8c45372f1607d5c~mv2.jpg/v1/fill/w_196,h_200,al_c,q_80,usm_0.66_1.00_0.01/e49d9d_5e3a78a359a44b26b8c45372f1607d5c~mv2.webp",
    "https://static.wixstatic.com/media/e49d9d_908117c6a6cd4ca1ae83ef763b3a820c~mv2.png/v1/fill/w_196,h_200,al_c,q_85,usm_0.66_1.00_0.01/e49d9d_908117c6a6cd4ca1ae83ef763b3a820c~mv2.webp",
    "https://static.wixstatic.com/media/e49d9d_833daed0dca64b4383cd67e6772e6d7c~mv2.jpg/v1/fill/w_196,h_200,al_c,q_80,usm_0.66_1.00_0.01/e49d9d_833daed0dca64b4383cd67e6772e6d7c~mv2.webp",
    "https://static.wixstatic.com/media/e49d9d_e2b94c442c68404787b8bb353c9cbe1e~mv2.jpeg/v1/fill/w_196,h_200,al_c,q_80/e49d9d_e2b94c442c68404787b8bb353c9cbe1e~mv2.webp",
    "https://static.wixstatic.com/media/e49d9d_2acb37bae0014c858381fa562d0f6b2b~mv2.jpg/v1/fill/w_196,h_200,al_c,q_80,usm_0.66_1.00_0.01/e49d9d_2acb37bae0014c858381fa562d0f6b2b~mv2.webp",
    "https://static.wixstatic.com/media/e49d9d_bb0920aea6624076987209490de99936~mv2.jpg/v1/fill/w_196,h_200,al_c,q_80,usm_0.66_1.00_0.01/e49d9d_bb0920aea6624076987209490de99936~mv2.webp",
    "https://static.wixstatic.com/media/e49d9d_314229a4fb27400fa1a1c89f38acf3fc~mv2.jpg/v1/fill/w_196,h_200,al_c,q_80,usm_0.66_1.00_0.01/e49d9d_314229a4fb27400fa1a1c89f38acf3fc~mv2.webp",
    "https://static.wixstatic.com/media/e49d9d_71d8657e26c94f5e8abfbfe07d2415e1~mv2.jpg/v1/fill/w_196,h_200,al_c,q_80,usm_0.66_1.00_0.01/e49d9d_71d8657e26c94f5e8abfbfe07d2415e1~mv2.webp",
    "https://static.wixstatic.com/media/e49d9d_4d8d3dbc22c74f4e98c9fc079027ab4b~mv2_d_1200_1200_s_2.jpg/v1/fill/w_196,h_200,al_c,q_80,usm_0.66_1.00_0.01/e49d9d_4d8d3dbc22c74f4e98c9fc079027ab4b~mv2_d_1200_1200_s_2.webp",
    "https://static.wixstatic.com/media/e49d9d_4a225a88d7954dc0b4cec868367d21a8~mv2.png/v1/fill/w_196,h_200,al_c,lg_1,q_85/e49d9d_4a225a88d7954dc0b4cec868367d21a8~mv2.webp",
    "https://static.wixstatic.com/media/e49d9d_d2a6da9977e1412db9484c85d2154a7d~mv2.jpg/v1/fill/w_196,h_200,al_c,q_80,usm_0.66_1.00_0.01/e49d9d_d2a6da9977e1412db9484c85d2154a7d~mv2.webp",
    "https://static.wixstatic.com/media/e49d9d_4a981ec5c74b4da99dd6ea44cb2d172b~mv2.jpg/v1/fill/w_196,h_200,al_c,q_80,usm_0.66_1.00_0.01/e49d9d_4a981ec5c74b4da99dd6ea44cb2d172b~mv2.webp",
    "https://static.wixstatic.com/media/e49d9d_270d5b8e67934090ad90437e35fd0369~mv2.png/v1/fill/w_196,h_200,al_c,lg_1,q_85/e49d9d_270d5b8e67934090ad90437e35fd0369~mv2.webp",
    "https://static.wixstatic.com/media/e49d9d_d596b5572b41486b93a890545387fde6~mv2.png/v1/fill/w_196,h_200,al_c,q_85,usm_0.66_1.00_0.01/e49d9d_d596b5572b41486b93a890545387fde6~mv2.webp",
    "https://static.wixstatic.com/media/e49d9d_343b0eee122f4d3e97ba7904ed132d7a~mv2.png/v1/fill/w_196,h_200,al_c,q_85,usm_0.66_1.00_0.01/e49d9d_343b0eee122f4d3e97ba7904ed132d7a~mv2.webp",
    "https://static.wixstatic.com/media/e49d9d_77b94378f5fc4c4a990b084c4e6a8fd2~mv2.png/v1/fill/w_196,h_200,al_c,q_85,usm_0.66_1.00_0.01/e49d9d_77b94378f5fc4c4a990b084c4e6a8fd2~mv2.webp",
  ]
  return (
    <Container className="references-container">
      <p className="references-title">
        Store Led : Nos références
      </p>
      <Row>
        {
          images.map( image => (
            <Col md={3}>
              <img src={image} className="references-image" alt=''/>
            </Col>
          ))
        }
      </Row>
    </Container>
 );
};