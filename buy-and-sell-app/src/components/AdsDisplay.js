import * as React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function AdsDisplay(props) {
  return (
    <Container style={{ width: '55rem' }}>
      <h1>Current Advertisements:</h1>
      <Row className="justify-content-center">
        <ul>
          {props.ads.map(adv => {
            return (<Col>
              <Card style={{ width: '8rem', display: 'inline-block' }} className="mx-auto mt-2">
                <Card.Body>
                  <Card.Title>{adv.title}</Card.Title>
                  <Card.Text>
                    {adv.price} Euro
            </Card.Text>
                  <Button variant="primary">
                    <Link to={`/ads/${adv.id}`}
                      style={{ color: 'white' }}
                    >More</Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>)
          })}
        </ul>
      </Row>
    </Container >
  )
}
