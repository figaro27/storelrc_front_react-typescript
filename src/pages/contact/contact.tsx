// src/components/main.tsx
import React from 'react';
import Gallery from "react-grid-gallery";
import { Container, Form } from "react-bootstrap";

import './contact.scss'

export const Contact = () => {
  return (
      <Container className="contact-container">
        <h1 className="contact-text-title">
          Contacter Store Led
        </h1>
        <p className="contact-text-panel">
          Vous avez une question sur nos services ?<br/>
          Vous souhaitez nous faire part d'une demande particulière ?<br/><br/>
          N'hésitez pas, contactez-nous ! Notre équipe vous répondra dans les plus brefs délais.
        </p>

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" required={true}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" required={true}/>
          </Form.Group>

        </Form>

      </Container>

 );
};