import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header className="header mb-5">
      <Navbar
        fixed="top"
        variant="light"
        expand="lg"
        className="bg-primary"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="text-white">STORE LIST</Navbar.Brand>
          </LinkContainer>
          <span className="bg-secondary mr-2">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </span>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
