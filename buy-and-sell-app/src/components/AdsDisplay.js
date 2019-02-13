import * as React from 'react'
import { Link } from 'react-router-dom'
import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export default function AdsDisplay(props) {
  return (
    <div>
      <h1>Current Advertisements:</h1>

      <ul>
        {props.ads.map(adv => {
          return (<Card style={{ width: '8rem' }}>
            <Card.Img variant="top" src={adv.photoUrl} />
            <Card.Body>
              <Card.Title>{adv.title}</Card.Title>
              <Card.Text>
                {adv.price} Euro
            </Card.Text>
              <Button variant="primary"><Link to={`/ads/${adv.id}`}>More</Link></Button>
            </Card.Body>
          </Card>)
        })}

      </ul>

    </div>
  )
}

/* return <li key={adv.id}>
            <Link to={`/ads/${adv.id}`}>{adv.title} - {adv.price} Euro</Link>
          </li> */
