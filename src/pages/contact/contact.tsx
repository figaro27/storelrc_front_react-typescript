import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import './contact.scss'

const sleep = (ms:any) => new Promise((r) => setTimeout(r, ms));

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  telephone: Yup.string().required('Required'),
  commercial:Yup.string().required('Required'),
  secteur:Yup.string(),
  message:Yup.string().required('Required')
});


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

        <Row style={{marginTop:'2em'}}>
          <Col md={7} className="contact-form-row">
          <Formik
               initialValues={{
                name: '',
                email: '',
                telephone: '',
                commercial: '',
                secteur: '',
                message: ''
              }}
              validationSchema={ContactSchema}
              onSubmit={values => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field name="name" className={touched.name && errors.name ? 'contact-form-input-invalid': 'contact-form-input'} placeholder="Nom *" required={true}/>
                  <Field name="email" className={touched.email && errors.email ? 'contact-form-input-invalid': 'contact-form-input'} type="email" placeholder="E-mail *" required={true}/>
                  <Field name="telephone" className={touched.telephone && errors.telephone ? 'contact-form-input-invalid': 'contact-form-input'} placeholder="Téléphone *" required={true}/>
                  <Field name="commercial" className={touched.commercial && errors.commercial ? 'contact-form-input-invalid': 'contact-form-input'} placeholder=" Nom commercial *" required={true}/>
                  <Field name="secteur" className={touched.secteur && errors.secteur ? 'contact-form-input-invalid': 'contact-form-input'} placeholder="Secteur d'activité / Ville" />
                  <Field component='textarea' rows="5" name="message" className={touched.message && errors.message ? 'contact-form-input-invalid': 'contact-form-input'} placeholder="Message *" required={true}/>
                  <div style={{width:'100%', textAlign:'right'}}>
                    <button type="submit" className="contact-form-submit">
                      Envoyer
                    </button>
                  </div>

                </Form>
              )}
            </Formik>

          </Col>
        </Row>

      </Container>

 );
};