import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <Navbar b style={{backgroundColor:"#032541"}} data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Movie App</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">Add</Nav.Link>
          <Nav.Link as={Link} to="/watched">Watched</Nav.Link>
          <Nav.Link as={Link} to="/watchlist">Watchlist</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
