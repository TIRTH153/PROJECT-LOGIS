import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <Navbar expand="lg" data-bs-theme="dark">
      <Container className="d-flex py-1">
        <Navbar.Brand href="#home" className="fs-2 fw-bold text-white">
          Logis
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5 mb-2 mb-lg-0">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#home" className="text-white">About</Nav.Link>
            <Nav.Link href="#home" className="text-white">Services</Nav.Link>
            <Nav.Link href="#home" className="text-white">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="w-100">
              <NavDropdown.Item href="#action/3.1 ">Dropdown-1 </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dropdown-2 </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dropdown-3 </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                get register
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" className="text-white">Contact</Nav.Link>
          </Nav>
            <Button variant="primary" size="lg">
              Get a Quote
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
