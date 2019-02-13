import * as React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Welcome(props) {
  return (
    <Container style={{ width: '55rem' }}>
      <Row className="justify-content-center">
        <Col>
        <div className='centered'>
          <h1>Welcome to Mini Buy-and-sell Platform</h1>
          <p>We the best Buy-And-Sell platform! </p>
          <p>We make your dreams come true!</p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          <Button variant="primary" size="lg" className="mx-auto">
            <Link to={`/ads`}
              style={{ color: 'white' }}>
              Click and explore</Link>
          </Button>
        </Col>
      </Row>
    </Container >
  )
}