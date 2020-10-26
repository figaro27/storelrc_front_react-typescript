// src/components/main.tsx
import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import { Header } from './header'
import { Footer } from './footer'
import { Home } from '../home'
import { Lambrequin } from '../lambrequin'
import { Store } from '../store'
import {StoreDetail } from '../store_detail'
import { Pergola } from '../pergola';
import { Enseigne } from '../enseigne';
import { Clasutras } from '../clasutras';
import { Radiant } from '../radiant';
import { Realisations } from '../realisations';
import { References } from '../references';
import { Contact } from '../contact';
import { Faq } from '../faq';
import './index.scss'
export const Main = () => {
 return (
    <Router>
      <Header />
      <div className="page">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/lambrequin-lumineux" component={Lambrequin}/>
          <Route exact path="/store" component={Store}/>
          <Route exact path="/store/:name" component={StoreDetail}/>
          <Route exact path="/pergola" component={Pergola}/>
          <Route exact path="/pergola/:name" component={StoreDetail}/>
          <Route exact path="/enseigne" component={Enseigne}/>
          <Route exact path="/enseigne/:name" component={StoreDetail}/>
          <Route exact path="/claustras" component={Clasutras}/>
          <Route exact path="/radiants" component={Radiant}/>
          <Route exact path="/nos-realisations" component={Realisations}/>
          <Route exact path="/nos-references" component={References}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/faq" component={Faq}/>
        </Switch>
      </div>
      <Footer />
  </Router>
 );
};