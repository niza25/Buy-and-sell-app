import request from 'superagent';

export const ADS_FETCHED = 'ADS_FETCHED'
export const AD_FETCHED = 'AD_FETCHED'

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

// get one add - display details
const adFetched = ad => ({
  type: AD_FETCHED,
  ad
})

export const loadAd = (id) => (dispatch) => {
  request(`${baseUrl}/ads/${id}`)
    .then(response => {
      dispatch(adFetched(response.body))
    })
    .catch(console.error)
}