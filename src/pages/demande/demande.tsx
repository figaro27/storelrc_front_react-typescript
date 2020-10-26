import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import './demande.scss'

export const Demande = () => {

  return (
    <Container className="demande-container">
      <p className="demande-title">Demande de devis</p>
      <Card >
        <Card.Body>
          <Card.Title>Demande de devis</Card.Title>
          <Card.Text className="mb-2 text-muted">Pour toute demande de devis, vous pouvez utiliser le formulaire ci-dessous. Notre équipe vous répondra dans les plus brefs délais.</Card.Text>
          <Form style={{margin:'2em 0.5em 1em 0.5em'}}>
            <Form.Control type="text" size="sm" placeholder="*Nom commercial" />
            <div className="demande-valid-container">

            </div>
            <Form.Control type="text" size="sm" placeholder="*Prénom / NOM" />
            <div className="demande-valid-container">

            </div>
            <Form.Control type="email" size="sm" placeholder="*Email" />
            <div className="demande-valid-container">

            </div>
            <Form.Control type="text" size="sm" placeholder="*Téléphone" />
            <div className="demande-valid-container">

            </div>
            <Form.Control type="text" size="sm" placeholder="*Ville" />
            <div className="demande-valid-container">

            </div>

            <Form.Control as="select">
              <option> - *Domaine d'activité - </option>
              <option>Restaurant / Café / Bar</option>
              <option>Hôtel</option>
              <option>Commerce</option>
              <option>Agence</option>
              <option>Autre</option>
            </Form.Control>
            <div className="demande-valid-container">

            </div>

            <Form.Control as="select">
              <option> - *Type de services souhaité - </option>
              <option>Lambrequin / Lambrequin lumineux</option>
              <option>Vitrophanie / Vitrophanie lumineuse</option>
              <option>Flocage / Flocage lumineux</option>
              <option>Kakemono / Kakemono lumineux</option>
              <option>Store / Pergola / Habillage de façade</option>
            </Form.Control>
            <div className="demande-valid-container">

            </div>

            <Form.Control type="text" size="sm" placeholder="Site web" />
            <div className="demande-valid-container">

            </div>

            <Form.File id="formcheck-api-regular">
              <Form.File.Label>Téléchargez votre logo (vectorisé)</Form.File.Label>
              <Form.File.Input />
            </Form.File>
            <div className="demande-valid-container">

            </div>
            <Form.File id="formcheck-api-regular">
              <Form.File.Label>Photo n°1</Form.File.Label>
              <Form.File.Input />
            </Form.File>
            <div className="demande-valid-container">

            </div>
            <Form.File id="formcheck-api-regular">
              <Form.File.Label>Photo n°2</Form.File.Label>
              <Form.File.Input />
            </Form.File>
            <div className="demande-valid-container">

            </div>
            <Form.File id="formcheck-api-regular">
              <Form.File.Label>Photo n°3</Form.File.Label>
              <Form.File.Input />
            </Form.File>
            <div className="demande-valid-container">

            </div>

            <Button type="submit" variant='block' style={{backgroundColor:'teal'}}>Submit form</Button>

          </Form>
        </Card.Body>
      </Card>
    </Container>
 );
};