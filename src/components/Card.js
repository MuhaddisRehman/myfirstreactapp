import Cards from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import team1 from '../Assets/aboutImages/team1.jpg';
import team2 from '../Assets/aboutImages/team2.jpg';
import team3 from '../Assets/aboutImages/team3.jpg';
import team4 from '../Assets/aboutImages/team4.jpg';


import React from 'react'

export default function Card(props) {
  return (
    <div><Cards className="d-flex pe-1 ps-1 border-round justify-content-center text-center col-lg-3 col-md-6 col-sm-12 card-effects ">
    <Cards.Img className="pt-1 cardImage" variant="top" src={props.Img} />
    <Cards.Body>
      <Cards.Title>{props.title}</Cards.Title>
      <Cards.Text>
        {props.description}
      </Cards.Text>
      <Button href="#"className='contactBtn' >Contact</Button>
    </Cards.Body>
  </Cards></div>
  )
}
Card.defaultProps ={
    title: 'Set name here'
}