import React from 'react'
import Button from 'react-bootstrap/Button';


export default class CreateAdContainer extends React.Component {
  render() {
    return (
      <div>
        <Button variant="success" block disabled>Add an ad</Button>
      </div>
    )
  }
}