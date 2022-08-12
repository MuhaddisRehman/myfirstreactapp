import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./ContactUs.css";
import Header from './Header';

import React from 'react'

export default function ContactUs() {
  return (
    <div>
      <Header/>
      <div className="container mt-5 pt-5">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group><Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Comment</Form.Label>
            <Form.Control type="text" placeholder="Enter Comment" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className='contactBtn' variant="primary" type="submit">
              Send Message
            </Button>
        </Form>
      </div>
  </div>
  )
}
