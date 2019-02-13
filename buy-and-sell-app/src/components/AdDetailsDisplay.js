import * as React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function AdDetailsDisplay(props) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <div className='centered'>
            <h1>Buy {props.title}</h1>
            <p>Price: {props.price} Euro</p>
            <p>Description: {props.description}</p>
            <Image src={props.photo} alt='product' rounded />
            <p>Contact the seller:</p>
            <p>{props.email}</p>
            <p>{props.phone}</p>
          </div>
          <Button variant="info" size="lg" block>
            <Link to='/ads'
              style={{ color: 'white' }}>
              Back
            </Link>
          </Button>
        </Col>
      </Row>
    </Container >
  )
}