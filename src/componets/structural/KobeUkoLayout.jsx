import { Container, Nav, Navbar} from "react-bootstrap";
import { Link, Outlet } from "react-router";

export default function KobeUkoLayout(){
return(
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="about-me">About Us</Nav.Link>
                    <Nav.Link as={Link} to="experience">Experience</Nav.Link>
                    <Nav.Link as={Link} to="my-work">My Work</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <div style={{ margin: "1rem" }}>
        <Outlet/>
        </div>
    </div>
)
}