import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import MegaShop from '../assets/MegaShop.png';

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-dark" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img src={MegaShop} alt="logo" />
            Megashop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart />
                Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser />
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
