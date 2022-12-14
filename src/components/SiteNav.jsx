import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/set.png";
import cart from "../images/cart.jpg";
//import NavDropdown from "react-bootstrap/NavDropdown";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import { Badge } from "react-bootstrap";
import StateContext from "../store";
import { useContext } from "react";

const SiteNav = () => {
  const state = useContext(StateContext);
  return (
    <Navbar bg="dark" fixed="top" expand="lg" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src={logo}
              width="30"
              height="30"
              alt="Logo for Undercity Cards"
              className="d-inline-block align-top"
            />{" "}
            Undercity Cards
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/shop">
              <Nav.Link>Explore</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/cart">
              <Nav.Link>
                <img
                  src={cart}
                  width="25"
                  height="25"
                  alt="Shopping Cart"
                  className="d-inline-block align-mid"
                />{" "}
                <Badge bg="secondary">
                  {state.userCart
                    .map((item) => item.in_cart)
                    .reduce((sum, curr) => sum + curr, 0)}
                </Badge>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNav;
