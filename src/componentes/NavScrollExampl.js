
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Style.css';

import { Link, NavLink } from 'react-router-dom';

function NavScrollExample() {
  // Array contendo os links
  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/cadastrar', text: 'Cadastrar' },
    { to: '/anunciar-doação', text: 'Anunciar Doação' },
    { to: '/ongs', text: 'ONGs' },
    { to: '/como-ajudar', text: 'Como Ajudar' },
    { to: '/adotados', text: 'Adotados' }
  ];

  return (
    <Navbar expand="lg" className="cor-navbar bg-body-tertiary">
      <Container fluid>
        {/* <Navbar.Brand >ReciPet</Navbar.Brand> */}
        <Link to="/" className="navbar-brand">ReciPet</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            {navLinks.map((link, index) => (
              <Nav.Link as={Link} to={link.to} key={index}>{link.text}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
