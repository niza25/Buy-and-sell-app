import * as React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';

export default function Welcome(props) {
  return (
    <Container>
    <div className='container'>
      <h1>Welcome to Mini Buy-and-sell Platform</h1>
      <p>We the best Buy-And-Sell platform! </p>
      <p>We make your dreams come true!</p>
      <Button variant="primary" size="lg">
        <Link to={`/ads`}>Click and explore</Link>
      </Button>
    </div>
    </Container>
  )
}