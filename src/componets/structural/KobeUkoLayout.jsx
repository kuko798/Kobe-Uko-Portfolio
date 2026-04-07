import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router";
import { HashLink } from "react-router-hash-link";

export default function KobeUkoLayout() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        className="site-navbar border-bottom border-secondary border-opacity-25"
      >
        <Container>
          <Navbar.Brand as={HashLink} smooth to="#home" className="site-brand">
            Kobe Uko
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="site-navbar-nav" />
          <Navbar.Collapse id="site-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} smooth to="#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} smooth to="#about-me">
                About Me
              </Nav.Link>
              <Nav.Link as={HashLink} smooth to="#experience">
                Experience
              </Nav.Link>
              <Nav.Link as={HashLink} smooth to="#my-work">
                My Work
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
