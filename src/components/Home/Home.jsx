import React from 'react';
import './Home.css';
import animales from '../assets/Animales.jpg'


import { Container, Row, Col, Carousel, Button, Card} from 'react-bootstrap';


// import 'bootstrap/dist/css/bootstrap.min.css'
const Home = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img src={animales} alt="" className='w-100 d-flex' />
        </Carousel.Item>
        <Carousel.Item>
          <img src={animales} alt="" className='w-100 d-flex' />
        </Carousel.Item>
        <Carousel.Item>
          <img src={animales} alt="" className='w-100 d-flex' />
        </Carousel.Item>
      </Carousel>

      <Row className='d-flex pd-'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={animales} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={animales} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={animales} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Row>
      


      {/* <CardGroup>
<Card>
  <Card.Img src={animales} />
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>
<Card>
  <Card.Img src={animales} />
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This card has supporting text below as a natural lead-in to
      additional content.{' '}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>
<Card>
  <Card.Img src={animales} />
  <Card.Body>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This card has even longer content than the
      first to show that equal height action.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
</Card>
</CardGroup> */}
    </Container>
  )
}

export { Home }