import { Nav, Navbar, Container, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import scrollTo from "../helper/scroll-to";

export default function AppNavbar() {
  return (
    <>
      <Navbar
        expand="lg"
        id="navigasi-bar"
        className="navigasi fixed-top"
        style={{ backgroundColor: "white" }}>
        <Container>
          <Navbar.Brand>
            <Image src="public/logo.png" style={{ maxWidth: "4rem" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skill">Skill</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
            </Nav>
            <Nav>
              <Button
                className="rounded-pill px-4"
                onClick={function () {
                  scrollTo("contact");
                }}>
                Contact Us
              </Button>
              {""}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
