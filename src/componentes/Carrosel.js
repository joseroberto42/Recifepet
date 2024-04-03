import Carousel from 'react-bootstrap/Carousel';
import exampleImage1 from './img/caramelo001.jpeg';
import exampleImage2 from './img/caramelo0002.jpg';
import exampleImage3 from './img/trescao.jpg';

function IndividualIntervalsExample() {
  return (
    <div className="d-flex justify-content-center">
        <Carousel style={{ maxWidth: '1200px', width: '100%' }}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={exampleImage1}
          alt="First slide"
          style={{ objectFit: 'cover', maxHeight: '400px' }}
        />
        <Carousel.Caption>
          <h3>tire os animais da Rua</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={exampleImage2}
          alt="Second slide"
          style={{ objectFit: 'cover', maxHeight: '400px' }}
        />
        <Carousel.Caption>
          <h3>Ajude centros de apoios a animais de rua</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={exampleImage3}
          alt="Third slide"
          style={{ objectFit: 'cover', maxHeight: '400px' }}
        />
        <Carousel.Caption>
          <h3>Eles so precisam de um lar</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default IndividualIntervalsExample;
