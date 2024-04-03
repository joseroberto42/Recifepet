
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './Style.css';

// import { Link, NavLink } from 'react-router-dom';
// function NavScrollExample() {
//   return (
//     <Navbar expand="lg" className=" cor-navbar bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand >ReciPet</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Link to='/'>home</Link>
//             <Link to='/cadastrar'>Cadastrar</Link>
//             <Link>Anunciar Doação</Link>
//             <Link>Centros de Apoio</Link>
//             <Link>Como Ajudar</Link>
//             <Link>configurações</Link>
           
//           </Nav>
          
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Style.css';

import { Link, NavLink } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="cor-navbar bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>ReciPet</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cadastrar">Cadastrar</Nav.Link>
            <Nav.Link as={Link}>Anunciar Doação</Nav.Link>
            <Nav.Link as={Link}>  ONGs</Nav.Link>
            <Nav.Link as={Link}>Como Ajudar</Nav.Link>
            <Nav.Link as={Link}>Adotados</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
