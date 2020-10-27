import React from 'react';
import { Container } from 'react-bootstrap';
import './faq.scss'

export const Faq = () => {

  return (
      <Container className="faq-container">
        <p className="faq-title">F.A.Q</p>
        <p className="faq-title-des">
          Retrouvez sur cette page les réponses aux questions les plus fréquemment<br/>
          posées par nos clients. Si vous avez une question sur nos produits ou services,<br/>vous pouvez nous contacter en cliquant ici.
        </p>
        <p className="faq-text-title">
          Est-ce que les lambrequins lumineux sont fiables ?
        </p>
        <p className="faq-text-text">
          Nos lambrequins lumineux sont parmi les plus fiables du marché, car ils fonctionnent grâce à des feuilles électroluminescente, et non des ampoules LED. Ils sont très résistants aux intempéries et aux variations de température. Ils disposent de la norme Anti feu M1 et sont garantis 2 ans, pièces et main d'oeuvre.</p>

        <p className="faq-text-title">
          Est-ce que les lambrequins lumineux consomment beaucoup d'énergie ?
        </p>
        <p className="faq-text-text">
          Les lambrequins lumineux Store Led ne consomment que très peu d'énergie, car ils sont conçus avec des feuilles électroluminescentes, alimentées en 12 Volts, ce qui représente une consommation d'énergie 5 fois moins importante qu'un système à ampoules LED.</p>

        <p className="faq-text-title">
          A qui sont destinés les produits Store Led ?
        </p>
        <p className="faq-text-text">
          L'ensemble de nos produits sont destinés à tout le monde, particuliers comme professionnels. Pour les professionnels, Store Led vous propose également la possibilité de devenir partenaire revendeur. N'hésitez pas à nous contacter pour plus d'informations.</p>

        <p className="faq-text-title">
          Combien de temps faut-il pour recevoir mon lambrequin lumineux ?
        </p>
        <p className="faq-text-text">
          Il faut compter environ 10 jours, à partir de la validation de votre commande. Nos lambrequins sont réalisés à la demande, et entièrement sur-mesure. Il s'agit donc du délai de fabrication, et de livraison.</p>

        <p className="faq-text-title">
          Pourquoi choisir Store Led ?
        </p>
        <p className="faq-text-text">
        Store Led propose des produits d'une grande fiabilité, aux meilleurs tarifs du marché. Partenaire exclusif du seul fournisseur européen de feuille électroluminescente, nos produits sont fabriqués en France, et garantis 2 ans, pièce et main d'oeuvre.</p>

      </Container>
 );
};