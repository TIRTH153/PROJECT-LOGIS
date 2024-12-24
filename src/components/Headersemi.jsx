import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
const Headersemi = ({text , line}) => {
  return (

    <Nav className="ms-auto me-5 mb-2 mb-lg-0">
    <Nav.Link href="#home" className="text-white d-flex">{text}</Nav.Link>
    
    <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="w-100">
      <NavDropdown.Item href="#action/3.1 ">{line} </NavDropdown.Item>
     
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">
        get register
      </NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#home" className="text-white">Contact</Nav.Link>
  </Nav>
  );
};
export default Headersemi;
