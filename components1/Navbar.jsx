import React from "react";
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from "react-bootstrap";
import "./style.css";

import { Button } from "react-bootstrap";
import { LuAlignJustify } from "react-icons/lu";

const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" className="px-2">
      <Button variant="dark" className="sidebar-button p-2 me-3 text-light">
        <LuAlignJustify />
      </Button>
      <BootstrapNavbar.Brand href="# ">Mint District</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="navbar-collapse" />
      <BootstrapNavbar.Collapse id="navbar-collapse">
        <Nav className="me-auto">
          <NavDropdown title="UserManagement" id="user-management-dropdown">
            <NavDropdown.Item href="/">Customer</NavDropdown.Item>
            <NavDropdown.Item href="/society">Society</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title="ServiceManagement"
            id="service-management-dropdown"
          >
            <NavDropdown.Item href="/">Car Brand</NavDropdown.Item>
            <NavDropdown.Item href="/society">Car Model</NavDropdown.Item>
            <NavDropdown.Item href="/society">Car Color</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
