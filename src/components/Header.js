import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "../App.css";

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/">
          <img src="/image/logo.png" alt="FPT Aptech" height="60" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#booking">Booking</Nav.Link>
            <Nav.Link href="#locations">Locations</Nav.Link>
          </Nav>
          <div>
            <Button variant="outline-warning" className="me-2">Sign In</Button>
            <Button variant="warning">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
