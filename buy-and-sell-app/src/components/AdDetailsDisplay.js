import * as React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export default function AdDetailsDisplay(props) {
  return (
    <div>
      <h1>Details of one product</h1>
      <p>Name: {props.title}</p>
      <p>Price: {props.price} Euro</p>
      <p>Description: {props.description}</p>
      <img src={props.photo} alt='product' />
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
      <Button variant="info" size="lg" block>
      <Link to='/ads'>Back</Link>
      </Button>
    </div>
  )
}