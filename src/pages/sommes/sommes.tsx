import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './sommes.scss'

export const Sommes = () => {

  return (
    <Container className="sommes-container">
      <p className="sommes-title">Qui sommes-nous ?</p>
      <p className="sommes-title-des">
        Store Led est une société dynamique spécialisée dans la fabrication de lambrequins lumineux.
      </p>

      <p className="sommes-text-text">
        Jouissant d’un contrat d’exclusivité avec l’unique fabricant européen de feuille électro-luminescente, Store Led confectionne ses lambrequins lumineux ainsi que toutes ses autres déclinaisons à partir de cette technologie de pointe.</p>
      <p className="sommes-text-text">
        Pour ce faire, nous nous sommes installés au Cannet, dans un atelier de 200 m2, doté d’un showroom pour vous présenter l’étendue de notre savoir-faire. Nous vous y proposons une prise en charge globale dans la conception de vos supports de communication visuelle.</p>
      <p className="sommes-text-text">
        Notre accompagnement complet et personnalisé consiste en une mise à disposition des supports PAO. Sur demande, nous pouvons créer votre logo, en le déclinant sous toutes les formes : cartes de visites, flyers, affiches, panneaux publicitaires.</p>
      <p className="sommes-text-text">
        En effet, Store Led, ce n’est pas que du store !</p>
      <p className="sommes-text-text">
        Nous réalisons également des enseignes, de la vitrophanie, du covering de véhicule, ainsi que du flocage textiles. Tout ceci peut être réalisé en lumineux ou de façon traditionnelle.</p>
      <p className="sommes-text-text">
        Store Led propose donc une étude de chaque projet sur mesure.</p>

      <Button variant="outline-light" size="lg" className="sommes-btn" >Contactez-nous !</Button>

    </Container>
 );
};