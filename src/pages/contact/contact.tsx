import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import './contact.scss'

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  telephone: Yup.string().required('Required'),
  commercial:Yup.string().required('Required'),
  secteur:Yup.string(),
  message:Yup.string().required('Required')
});


export const Contact = () => {
  const onSubmit = () => {
    console.log("Submit");
  }

  return (
      <Container className="contact-container">
        <h1 className="contact-text-title">
          Contact Store Led
        </h1>
        <p className="contact-text-panel">
         Do you have a question about our services? <br/>
         Do you want to send us a special request? <br/> <br/>
         Do not hesitate, contact us! Our team will get back to you as soon as possible.
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
              validationSchema={ SignupSchema }
              onSubmit={ onSubmit }
            >
              {({ errors, touched }) => (
                <Form>
                  <Field name="name" className={touched.name && errors.name ? 'contact-form-input-invalid': 'contact-form-input'} placeholder="Name *" required={true}/>
                  <Field name="email" className={touched.email && errors.email ? 'contact-form-input-invalid': 'contact-form-input'} type="email" placeholder="Email *" required={true}/>
                  <Field name="telephone" className={touched.telephone && errors.telephone ? 'contact-form-input-invalid': 'contact-form-input'} placeholder="Phone *" required={true}/>
                  <Field name="commercial" className={touched.commercial && errors.commercial ? 'contact-form-input-invalid': 'contact-form-input'} placeholder=" Business Name *" required={true}/>
                  <Field name="secteur" className={touched.secteur && errors.secteur ? 'contact-form-input-invalid': 'contact-form-input'} placeholder="Activity / City" />
                  <Field component='textarea' rows="5" name="message" className={touched.message && errors.message ? 'contact-form-input-invalid': 'contact-form-input'} placeholder="Message *" required={true}/>
                  <div style={{width:'100%', textAlign:'right'}}>
                    <button type="submit" className="contact-form-submit">
                      Send
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
