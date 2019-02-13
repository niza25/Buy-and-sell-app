import { ADS_FETCHED } from '../actions/ads'

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADS_FETCHED:
      return action.ads;
    default:
      return state
  }
}