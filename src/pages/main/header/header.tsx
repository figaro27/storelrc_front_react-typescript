/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Container, Button, Row } from 'react-bootstrap';
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

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className={clsx("header-nav fixed-top ", { 'hide-navbar': !showNavbar })}>
      <Container>
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
              <Nav.Link href="/">Accueil</Nav.Link>
              <Nav.Link href="/lambrequin-lumineux">Lambrequin lumineux</Nav.Link>

              <NavDropdown
                title="Nos Services"
                id="basic-nav-dropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                >
                <NavDropdown.Item href="/stores">Stores Exterieurs</NavDropdown.Item>
                <NavDropdown.Item href="/pergolas">Pergolas</NavDropdown.Item>
                <NavDropdown.Item href="/enseignes">Enseignes</NavDropdown.Item>
                <NavDropdown.Item href="/claustra">Claustras</NavDropdown.Item>
                <NavDropdown.Item href="/radiants">Radiants</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/nos-realisations">Realisations</Nav.Link>
              <Nav.Link href="/nos-references">References</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav className="header__button">
              <Button variant="outline-light" size="lg" block>Demsande de devis</Button>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>

  );
};
