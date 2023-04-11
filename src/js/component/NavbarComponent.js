import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#">Start bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Dropdown" menuVariant="dark" id="navtitle">
            <NavDropdown.Item href="#" class="move">Option 1</NavDropdown.Item>
            <NavDropdown.Item href="#" class="move">Option 2</NavDropdown.Item>
            <NavDropdown.Item href="#" class="move">Option 3</NavDropdown.Item>
            <NavDropdown.Item href="#" class="move">Option 4</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
