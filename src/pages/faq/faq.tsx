import React from 'react';
import { Container } from 'react-bootstrap';
import { faqData } from './faq-mock';

import './faq.scss'

export const Faq = () => {

  return (
      <Container className="faq-container">
        <label className="faq-title">F.A.Q</label>
        <p className="faq-title-des">
          Retrouvez sur cette page les réponses aux questions les plus fréquemment<br/>
          posées par nos clients. Si vous avez une question sur nos produits ou services,<br/>vous pouvez nous contacter en cliquant ici.
        </p>

        {
          faqData.map((item, index) => (
            <div key={`faq_item_${index}`}>
              <p className="faq-text-title">{ item.question }</p>
              <p className="faq-text-text">{ item.answer }</p>
            </div>
          ))
        }
      </Container>
 );
};