import React from 'react'
import { connect } from 'react-redux'
import AdDetailsDisplay from './AdDetailsDisplay'
import { loadAd } from '../actions/ads'

class AdDetailsContainer extends React.Component {

  componentDidMount() {
    this.props.loadAd(Number(this.props.match.params.id))
  }

  render() {
    if (!this.props.ad) return <h1>Loading...</h1>
    return <AdDetailsDisplay
      title={this.props.ad.title}
      price={this.props.ad.price}
      description={this.props.ad.description}
      photo={this.props.ad.photoUrl}
      email={this.props.ad.email}
      phone={this.props.ad.phone}
    />
  }

}

const mapStateToProps = state => ({
  ad: state.ad
})

export default connect(mapStateToProps, { loadAd })(AdDetailsContainer)