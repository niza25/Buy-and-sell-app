import * as React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome(props) {
  return (
    <div>
      <h1>Welcome to Mini Buy-and-sell Platform</h1>
      <p>We the best Buy-And-Sell platform, make your dreams come true!</p>
      <Link to={`/ads`}>Click and explore</Link>
    </div>
  )
}