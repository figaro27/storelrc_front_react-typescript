/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Button, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { header } from './header-data';

import clsx from 'clsx'

import './header.scss'

export const Header = () => {
  const [show, setShow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true)

  const showDropdown = ()=>{
      setShow(!show);
  }

  const hideDropdown = () => {
      setShow(false);
  }

  const handleScroll = () => setShowNavbar(window.scrollY < 150)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const history = useHistory();

  return (

    <Navbar collapseOnSelect expand="lg" variant="dark" className={clsx("header-nav fixed-top justify-content-center", { 'hide-navbar': !showNavbar })}>
        <Row className="justify-content-md-center">
          <Navbar.Brand href="/">
            <img  className="header-img"
              alt="StoreledNOIR-2-pagepng_edited.png"
              data-type="image"
              src="https://static.wixstatic.com/media/e49d9d_2f69a5b64a9f454b8503fc6a75c44a8b~mv2.png"/>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {
                header.map((item:any, index:any) => (
                  (item.children.length > 0) ?
                    <NavDropdown
                      className="nav-link"
                      title={item.name}
                      id="basic-nav-dropdown"
                      show={show}
                      onMouseEnter={showDropdown}
                      onMouseLeave={hideDropdown}
                      key={`header_nav_${index}`}
                    >
                      {
                        item.children.map((submenu: any, drop_ind: any) => (
                          <NavDropdown.Item href={ submenu.path } key={drop_ind}>{ submenu.name }</NavDropdown.Item>
                        ))
                      }
                    </NavDropdown> :
                    <Nav.Link className="nav-link" href={item.path} key={index}>{item.name}</Nav.Link>
                  ))
              }
            </Nav>
            <Nav className="header__button">
              <Button variant="outline-light" block onClick={e=>history.push('/quote-request')}>Quote request</Button>
            </Nav>
          </Navbar.Collapse>
        </Row>
    </Navbar>

  );
};
