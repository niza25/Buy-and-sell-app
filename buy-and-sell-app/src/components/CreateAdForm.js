import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function CreateAdForm(props) {
  return (
    <Container style={{ width: '100vw' }}>
      <Row className="justify-content-center">
        <Col>
        <h3>Add Your ad!</h3>
          <form>
            <label>Title of Your ad:
        <input type="text" name="title" value={props.info.title} onChange={props.onChange} />
            </label>
            <label>Price:
        <input type="number" name="price" value={props.info.price} onChange={props.onChange} />
            </label>
            <label>Describe it:
        <input type="text" name="description" value={props.info.description} onChange={props.onChange} />
            </label>
            <label>Photo Url:
        <input type="text" name="photoUrl" value={props.info.photoUrl} onChange={props.onChange} />
            </label>
            <label>Contact email:
        <input type="email" name="email" value={props.info.email} onChange={props.onChange} />
            </label>
            <label>Contact phone:
        <input type="number" name="phone" value={props.info.phone} onChange={props.onChange} />
            </label>
            <button onClick={props.onSubmit}>Submit</button>
          </form>
        </Col>
      </Row>
    </Container >
  )
}