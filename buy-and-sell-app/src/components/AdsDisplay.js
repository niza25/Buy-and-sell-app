import * as React from 'react'
import { Link } from 'react-router-dom'

export default function AdsDisplay(props) {
  return (
    <div>
      <h1>Current Advertisements:</h1>

      <ul>
        {props.ads.map(adv => {
          return <li key={adv.id}>
            <Link to={`/ads/${adv.id}`}>{adv.title} - {adv.price} Euro</Link>
          </li>
        })}

      </ul>

    </div>
  )
}




