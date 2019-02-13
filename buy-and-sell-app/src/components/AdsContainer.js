import React from 'react'
import { loadAds } from '../actions/ads'
import { connect } from 'react-redux'
import AdsDisplay from './AdsDisplay'
import CreateAdContainer from './CreateAdContainer';

class AdsContainer extends React.Component {

  componentDidMount() {
    this.props.loadAds()
  }


  render() {

    if (!this.props.ads.ads) return null

    return (
      <div>
        <AdsDisplay ads={this.props.ads.ads}/>
        <CreateAdContainer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ads: state.ads
})

export default connect(mapStateToProps, { loadAds })(AdsContainer)