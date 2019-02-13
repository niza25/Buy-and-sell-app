import * as React from 'react'


export default function AdsDisplay(props) {
  return (
    <div>
      <h1>Current Advertisements:</h1>

      <ul>
        {props.ads.map(adv => {
          return <li key={adv.id}>{adv.title} - {adv.price} Euro</li>
        })}

      </ul>

    </div>
  )
}


// <Link to={`/ads/${ad.id}`}>{ad.title} {ad.price}</Link>




