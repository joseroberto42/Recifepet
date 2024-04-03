import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Caramelo from './img/th.jpeg';
import './Style.css';

function CarrosselDeCards() {
  return (
    <Carousel style={{ maxWidth: '800px', margin: 'auto' }} fade>
      <Carousel.Item>
        <Card className="margin-botao mx-auto">
          <div className="d-flex">
            <Card.Img variant="top" src={Caramelo} className="tamanho-do-card" />
            <Card.Body>
              <Card.Title>Paçoca</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <div className="mt-auto"><button className="Corbotao">Go somewhere</button></div>
            </Card.Body>
          </div>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <Card className="margin-botao mx-auto">
          <div className="d-flex">
            <Card.Img variant="top" src={Caramelo} className="tamanho-do-card" />
            <Card.Body>
              <Card.Title>Paçoca</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <div className="mt-auto"><button className="Corbotao">Go somewhere</button></div>
            </Card.Body>
          </div>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <Card className="margin-botao mx-auto">
          <div className="d-flex">
            <Card.Img variant="top" src={Caramelo} className="tamanho-do-card" />
            <Card.Body>
              <Card.Title>Paçoca</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <div className="mt-auto"><button className="Corbotao">Go somewhere</button></div>
            </Card.Body>
          </div>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <Card className="margin-botao mx-auto">
          <div className="d-flex">
            <Card.Img variant="top" src={Caramelo} className="tamanho-do-card" />
            <Card.Body>
              <Card.Title>Paçoca</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <div className="mt-auto"><button className="Corbotao">Go somewhere</button></div>
            </Card.Body>
          </div>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <Card className="margin-botao mx-auto">
          <div className="d-flex">
            <Card.Img variant="top" src={Caramelo} className="tamanho-do-card" />
            <Card.Body>
              <Card.Title>Paçoca</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <div className="mt-auto"><button className="Corbotao">Go somewhere</button></div>
            </Card.Body>
          </div>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <Card className="margin-botao mx-auto">
          <div className="d-flex">
            <Card.Img variant="top" src={Caramelo} className="tamanho-do-card" />
            <Card.Body>
              <Card.Title>Paçoca</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <button className="Corbotao">Go somewhere</button>
            </Card.Body>
          </div>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <Card className="margin-botao mx-auto">
          <div className="d-flex">
            <Card.Img variant="top" src={Caramelo} className="tamanho-do-card" />
            <Card.Body>
              <Card.Title>Paçoca</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <button className="Corbotao">Go somewhere</button>
            </Card.Body>
          </div>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <Card className="margin-botao mx-auto">
          <div className="d-flex">
            <Card.Img variant="top" src={Caramelo} className="tamanho-do-card" />
            <Card.Body>
              <Card.Title>Paçoca</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <button className="Corbotao">Go somewhere</button>
            </Card.Body>
          </div>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <Card className="margin-botao mx-auto">
          <div className="d-flex">
            <Card.Img variant="top" src={Caramelo} className="tamanho-do-card" />
            <Card.Body>
              <Card.Title>Paçoca</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <button className="Corbotao">Go somewhere</button>
            </Card.Body>
          </div>
        </Card>
      </Carousel.Item>
    <Carousel.Item className="d-flex justify-content-center align-items-center">
  <Card className="margin-botao mx-auto">
    <div className="d-flex">
      <Card.Img variant="top" src={Caramelo} className="tamanho-do-card" />
      <div className="flex-fill d-flex flex-column">
        <Card.Body>
          <Card.Title>Paçoca</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        
           <button className="Corbotao">Go somewhere</button>
        
      </div>
    </div>
  </Card> 
  
</Carousel.Item> 




</Carousel>
  );
}

export default CarrosselDeCards;
