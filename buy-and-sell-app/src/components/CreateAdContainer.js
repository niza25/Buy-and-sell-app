import React from 'react'
import { connect } from 'react-redux'
import CreateAdForm from './CreateAdForm'
import { createAd } from '../actions/ads'


class CreateAdContainer extends React.Component {
  state = {
    title: '',
    price: '',
    description: '',
    photoUrl: '',
    email: '',
    phone: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createAd(this.state)
    this.setState({
      title: '',
      price: '',
      description: '',
      photoUrl: '',
      email: '',
      phone: ''
    })
    this.props.history.push('/ads')
  }

  render() {
    return (
      <CreateAdForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        info={this.state}
      />
    )


  }
}

export default connect(null, { createAd })(CreateAdContainer)