import request from 'superagent';

export const ADS_FETCHED = 'ADS_FETCHED'

const baseUrl = 'http://localhost:4000'

// get all ads
const adsFetched = ads => ({
  type: ADS_FETCHED,
  ads
})
// fetch ads
export const loadAds = () => (dispatch, getState) => {
  if (getState().ads.length) return
  request(`${baseUrl}/ads`)
    .then(response => {
      dispatch(adsFetched(response.body))
    })
    .catch(console.error)
}