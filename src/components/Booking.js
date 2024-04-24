import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';


function Booking() {
  return (
    <div>
      <Container className='mt-5'>
        <h1 className='text-start' style={{ fontFamily: "Monotype Corsiva" }}>Book A Table</h1>
        <Row>
          <Col>
            <Form className='mt-4'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                <Form.Control type="text" placeholder="Your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">

                <Form.Control type="text" placeholder="Phone " />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">

                <Form.Control type="email" placeholder="Your Email" />


              </Form.Group>


              <Form.Group className="mb-4" controlId="exampleForm.ControlSelect4">

                <Form.Control as="select" >
                  <option>How Many Persons?</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-4" controlId="exampleForm.ControlInput4">
                <Form.Control type="date" />
              </Form.Group>

              <Button variant="warning" className='text-white fs-5 px-4 rounded-pill  mt-4 mb-5 float-start'>Order Now </Button>{' '}

            </Form>
          </Col>
          <Col>
            <iframe title='MAP' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96778.50500203906!2d-74.09214169063338!3d40.71078920476701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1f65ac64bb%3A0xe3a321b218831eae!2sDomino&#39;s%20Pizza!5e0!3m2!1sen!2sus!4v1711084754149!5m2!1sen!2sus" width="600" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='rounded'></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Booking
