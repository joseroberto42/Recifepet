
import Card from 'react-bootstrap/Card';
import Caramelo from './img/th.jpeg';
import './Style.css'
function BasicExample() {
  return (
    <div className="d-flex justify-content-center my-4">
      <Card className='.margin-botao mx-auto' >
        <div className="d-flex">
          <Card.Img variant="top" src={Caramelo} className='tamanho-do-card' />
          <Card.Body>
            <Card.Title>Paçoca</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div><button className="Corbotao" >Go somewhere</button></div>
            
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default BasicExample;


