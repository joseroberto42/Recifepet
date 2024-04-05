import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footeer.module.css'


function Footer() {

  const footerStyle = {
    backgroundColor: 'rgb(174, 124, 64)',
    color: 'white' // Alterando a cor do texto para branco para melhor contraste
  };

  return (
    <div  className="cor-footer">
        <footer  style={footerStyle} className="cor-footer py-4">
        <Container>
          <Row>
            <Col md={4}>
              <h5>Contato</h5>
              <p>E-mail: exemplo@recipet.com</p>
              <p>Telefone: (XX) XXXX-XXXX</p>
              <p>Endereço: Rua Exemplo, Número, Bairro</p>
            </Col>
            <Col md={4}>
              <h5>Links Úteis</h5>
              <ul className="list-unstyled">
                <li><a href="/">Perguntas Frequentes</a></li>
                <li><a href="/">Termos de Uso</a></li>
                <li><a href="/">Política de Privacidade</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Redes Sociais</h5>
              <ul className="list-unstyled">
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Twitter</a></li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <p className="text-center">&copy; {new Date().getFullYear()} ReciPet</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
    
  );
}

export default Footer;
