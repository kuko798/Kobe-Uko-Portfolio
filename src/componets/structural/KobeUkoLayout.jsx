import { Container, Nav, Navbar} from "react-bootstrap";
import { Link, Outlet } from "react-router";
import { HashLink } from 'react-router-hash-link';

export default function KobeUkoLayout(){
return(
    <div>
        <Navbar bg="dark" variant="dark"  expand="lg">
            <Container>
        <Navbar.Toggle aria-controls="cool-navbar-nav" />
        <Navbar.Collapse id="cool-navbar-nav">
                <div style={{ color: "white", fontWeight: '600', letterSpacing: '-1px' }}>
                 Kobe Uko
                </div>
                <Nav className="me-auto">
                    <Nav.Link as={HashLink} smooth to="#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} smooth to="#about-me">About Me</Nav.Link>
                    <Nav.Link as={HashLink} smooth to="#experience">Experience</Nav.Link>
                    <Nav.Link as={HashLink} smooth to="#my-work">My Work</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div>
        <Outlet/>
        </div>
    </div>
)
}