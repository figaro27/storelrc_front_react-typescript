import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import { FaUpload, FaRegCheckCircle } from 'react-icons/fa';
import * as Yup from 'yup';
import './demande.scss'

const DemandeSchema = Yup.object().shape({
  commercialName: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  telephone: Yup.string().required('Required'),
  ville:Yup.string().required('Required'),
  domaine:Yup.string().required('Required'),
  precisez: Yup.string()
      .when('domaine', {
        is: 'autre',
        then: Yup.string().required('Required')
      }),
  services:Yup.string().required('Required'),
  no_souhaitee: Yup.number()
      .when('services', {
        is: 'lambrequin',
        then: Yup.number().required('Required')
      }),
  souhaitee: Yup.array()
      .of(Yup.object().shape({
        lumineux: Yup.string().required('Required'),
        longueur: Yup.string(),
        hauteur: Yup.string(),
        positionnement: Yup.string(),
        texte_flocage: Yup.string(),
        couleur_texte: Yup.string(),
        })
      ),
  precisions: Yup.string(),
  site: Yup.string(),
  })

export const Demande = () => {

  const [noSouhaitee, setNoSouhaitee] = useState(0)
  const [logoName, setLogoName] = useState('');
  const [photo1Name, setphoto1Name] = useState('');
  const [photo2Name, setphoto2Name] = useState('');
  const [photo3Name, setphoto3Name] = useState('');

  const setStates = (index:any, val:any) => {
    switch(index){
      case 0: setLogoName(val); break;
      case 1: setphoto1Name(val); break;
      case 2: setphoto2Name(val); break;
      case 3: setphoto3Name(val); break;
    }
  }

  const logoFileInput:any = React.useRef(null);
  const photo1FileInput:any = React.useRef(null);
  const photo2FileInput:any = React.useRef(null);
  const photo3FileInput:any = React.useRef(null);

  const file_ref_arr = [logoFileInput, photo1FileInput, photo2FileInput, photo3FileInput]
  const file_name_state_arr = [logoName, photo1Name, photo2Name, photo3Name]
  const file_arr = ['file_logo', 'file_photo1', 'file_photo2', 'file_photo3']
  const file_label_arr = ['Téléchargez votre logo (vectorisé)', 'Photo n°1', 'Photo n°2', 'Photo n°3']

  const imageBtnClick = (e:any, index:any) => {
    file_ref_arr[index].current.click();
  }

  const changeNoSouhaitee = (e:any, values:any) => {
    let no = e.currentTarget.value
    values.souhaitee_arr = []
    if(no > 0 && no < 4 ) setNoSouhaitee(no)
    else setNoSouhaitee(0)
    if(no === 4) values.no_souhaitee = '4 ou plus'
    else values.no_souhaitee = no
  }

  const renderSouhaitee = () => {
    let html = [];
    for(let i = 1; i < 4; i++){
      let element = <div style={{ display: noSouhaitee<i ? 'none': 'block' }} key={`demande_souhaitee_${i}`}>
          <label>{`Lambrequin n°${i} : Lumineux`}</label><br/>
          <label><Field type="radio" name={`lumineux${i+1}`} value="oui"/> Oui </label>
          <label style={{marginLeft:'0.5em'}}><Field type="radio" name={`lumineux${i+1}`} value="non"/> Non</label><br/>

          <label className="demande-input">
            {`Longueur Lambrequin n°${i}`}
            <Field type="text" name={`longueur${i+1}`} className="demande-input"/></label>

          <label className="demande-input">
            {`Hauteur Lambrequin n°${i}`}
            <Field type="text" name={`hauteur${i+1}`} className="demande-input"/></label>

          <label className="demande-input">{`Positionnement du texte / logo n°${i}`}</label>
          <label><Field type="radio" name={`positionnement${i+1}`} value="oui"/> Gauche</label>
          <label style={{marginLeft:'0.5em'}}><Field type="radio" name={`positionnement${i+1}`} value="non"/> Milieu</label>
          <label style={{marginLeft:'0.5em'}}><Field type="radio" name={`positionnement${i+1}`} value="non"/> Droite</label><br/>

          <label className="demande-input">
            {`Texte (flocage) n°${i}`}
            <Field type="text" name={`texte_flocage${i+1}`} className="demande-input"/></label>

          <label className="demande-input">
            {`Couleur du texte n°${i}`}
            <Field type="text" name={`couleur_texte${i+1}`} className="demande-input"/></label>

          <div className="demande-invalid-container"></div>
          </div>
      html.push(element)
    }
    return Object.values(html);
  }

  return (
    <Container className="demande-container">
      <p className="demande-title">Demande de devis</p>
      <Card >
        <Card.Body>
          <Card.Title className="demande-card-title">Demande de devis</Card.Title>
          <Card.Text className="mb-2 text-muted">Pour toute demande de devis, vous pouvez utiliser le formulaire ci-dessous. Notre équipe vous répondra dans les plus brefs délais.</Card.Text>

          <Formik
              initialValues={{
                commercialName: '',
                name: '',
                email: '',
                telephone: '',
                ville: '',
                domaine: '',
                services: '',
                precisez: '',
                no_souhaitee: 0,
                souhaitee_arr: [],
                site: '',
                file_logo: null,
                file_photo1: null,
                file_photo2: null,
                file_photo3: null,
              }}
              validationSchema={DemandeSchema}
              onSubmit={values => {
                // same shape as initial values
                alert('values');
              }}
            >
          {({ errors, isSubmitting, touched, values, setFieldValue }) => (
            <Form style={{margin:'2em 0.5em 1em 0.5em'}}>
              <Field type="text" name="commercialName" className="demande-input" placeholder="*Nom commercial" />
              <div className="demande-invalid-container">
                { touched.commercialName && errors.commercialName ? <p className="demande-invalid-text">Please enter a valid input</p>: null}
              </div>

              <Field type="text" name="name" className="demande-input" placeholder="*Prénom / NOM" />
              <div className="demande-invalid-container">
                { touched.name && errors.name ? <p className="demande-invalid-text">Please enter a valid input</p>: null}
              </div>

              <Field type="email" name="email" className="demande-input" placeholder="*Email" />
              <div className="demande-invalid-container">
                { touched.email && errors.email ? <p className="demande-invalid-text">Please enter a valid input</p>: null}
              </div>

              <Field type="text" name="telephone" className="demande-input" placeholder="*Téléphone" />
              <div className="demande-invalid-container">
                { touched.telephone && errors.telephone ? <p className="demande-invalid-text">Please enter a valid input</p>: null}
              </div>

              <Field type="text" name="ville + {{ index }}" className="demande-input" placeholder="*Ville" />
              <div className="demande-invalid-container">
                { touched.ville && errors.ville ? <p className="demande-invalid-text">Please enter a valid input</p>: null}
              </div>

              <Field as="select" name="domaine" className="demande-input">
                <option> - *Domaine d'activité - </option>
                <option value='rest'>Restaurant / Café / Bar</option>
                <option value='hotel'>Hôtel</option>
                <option value='commerce'>Commerce</option>
                <option value='agence'>Agence</option>
                <option value='autre'>Autre</option>
              </Field>
              <div className="demande-invalid-container">
                { touched.domaine && errors.domaine ? <p className="demande-invalid-text">Please enter a valid input</p>: null}
              </div>

              { values.domaine === 'autre' ?
                <><Field type="text" name="precisez" className="demande-input" placeholder="*Précisez" />
                  <div className="demande-invalid-container">
                    { touched.precisez && errors.precisez ? <p className="demande-invalid-text">Please enter a valid input</p>: null}
                    </div>
                </>: null }

              <Field as="select" name="services" className="demande-input">
                <option  key='demande_service_null'> - *Type de services souhaité - </option>
                <option value='lambrequin' key='demande_service_lambrequin'>Lambrequin / Lambrequin lumineux</option>
                <option value='vitrophanie' key='demande_service_vitrophanie'>Vitrophanie / Vitrophanie lumineuse</option>
                <option value='flocage' key='demande_service_flocage'>Flocage / Flocage lumineux</option>
                <option value='kakemono' key='demande_service_kakemono'>Kakemono / Kakemono lumineux</option>
                <option value='store' key='demande_service_store'>Store / Pergola / Habillage de façade</option>
              </Field>
              <div className="demande-invalid-container">
                { touched.services && errors.services ? <p className="demande-invalid-text">Please enter a valid input</p>: null}
              </div>


              { values.services === 'lambrequin' ?
                <><Field as="select" name="no_souhaitee" className="demande-input" onChange={(e:any)=>changeNoSouhaitee(e, values)}>
                  <option key='demande_service_0'> - *Type de services souhaité - </option>
                  <option value='1' key='demande_service_1'>1</option>
                  <option value='2' key='demande_service_2'>2</option>
                  <option value='3' key='demande_service_3'>3</option>
                  <option value='4' key='demande_service_4'>4 ou plus</option>
                  </Field>
                  <div className="demande-invalid-container">
                    { touched.no_souhaitee && errors.no_souhaitee ? <p className="demande-invalid-text">Please enter a valid input</p>: null}
                  </div>
                  {
                    renderSouhaitee()
                  }
                  <Field type="text" name="site" className="demande-input" placeholder="Couleur lambrequin(s) ou Référence couleur" />
                  <div className="demande-invalid-container"></div>
                </>:
                <>
                </> }

              <Field type="text" name="precisions" component="textarea" className="demande-input" placeholder="Précisions sur votre demande"/>
                <div className="demande-invalid-container"></div>

              <Field type="text" name="site" className="demande-input" placeholder="Site web" />

              {
                file_arr.map( (item, index) => (

                  <div className="demande-file-container" key={`demande_file_${index}`}>
                    <Button onClick={(e)=>{imageBtnClick(e, index)}} className="demande-file-btn">
                      { file_name_state_arr[index] !== '' ? <FaRegCheckCircle />: <FaUpload />}
                      {file_label_arr[index]}</Button>
                      <label>{file_name_state_arr[index]}</label>
                      <input type="file" style={{display:'none'}} ref={file_ref_arr[index]}
                        onChange={(e:any)=>{setFieldValue(file_arr[index], e.currentTarget.files[0]); setStates(index, e.currentTarget.files[0].name)}}/>
                  </div>

                ))
              }

              <div className="demande-invalid-container"></div>
              <Button type="submit" variant='block' className="demande-submit" disabled={isSubmitting}>Envoyer</Button>

            </Form>
          )}
          </Formik>
        </Card.Body>
      </Card>
    </Container>
 );
};