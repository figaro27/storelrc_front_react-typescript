// src/components/main.tsx
import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import { Header } from './header'
import { Footer } from './footer'
import { Home } from '../home'
import { Lambrequin } from '../lambrequin'
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
        </Switch>
      </div>

      <Footer />
  </Router>
 );
};