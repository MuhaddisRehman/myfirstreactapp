import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import team1 from './images/team1.jpg';

export default function Cards(props) {
  return (
    <div className='container mt-5 pt-5 '>
        <div className='row col-lg-12  '   >
        <Card className="d-flex justify-content-center text-center col-lg-3 col-md-6 col-sm-12  ">
      <Card.Img variant="top" src={team1} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
        </Card.Text>
        <Button variant="primary">Contact</Button>
      </Card.Body>
    </Card>
    <Card className="d-flex justify-content-center text-center  col-lg-3 col-md-6 col-sm-12 " >
    <Card.Img variant="top" src={team1} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
      Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
      </Card.Text>
      <Button variant="primary">Contact</Button>
    </Card.Body>
  </Card>
  <Card className="d-flex justify-content-center text-center col-lg-3 col-md-6 col-sm-12 " >
    <Card.Img variant="top" src={team1} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
      Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
      </Card.Text>
      <Button variant="primary">Contact</Button>
    </Card.Body>
  </Card>
  <Card className="d-flex justify-content-center text-center col-lg-3  " >
    <Card.Img variant="top" src={team1} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
      Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
      </Card.Text>
      <Button variant="primary">Contact</Button>
    </Card.Body>
  </Card>
  
        </div>
    
  </div>
  )
}
