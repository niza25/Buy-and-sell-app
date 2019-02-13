import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default class CreateAdContainer extends React.Component {
  render() {
    return (
      <Container style={{ width: '18rem' }}>
      <Row  className="justify-content-center">
        <Col>
        <Button variant="success" block disabled>Add an ad</Button>
        </Col>
      </Row>
    </Container >
    )
  }
}