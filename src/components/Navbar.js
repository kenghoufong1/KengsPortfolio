import React from "react";
import '../navbar.css';
import { Navbar, Nav } from "react-bootstrap";

function MyNavbar() {
    return (
      <Navbar bg="light" className="navbar">
        <Navbar.Brand>Hi , I am Keng</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#aboutme">About me</Nav.Link>
            <Nav.Link href="#myprojects">Portfolio</Nav.Link>
            <Nav.Link href="#">Resume</Nav.Link>
            <Nav.Link href="#contactme">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

export default MyNavbar;