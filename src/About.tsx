import React from 'react'
import { Link } from 'react-router-dom'

import Card from './components/Card'

function About(): React.ReactNode {
  return (
    <Card>
      <div className="text-center">
        <h1 className="text-xl">About</h1>
        <div>
          <Link to="/" className="text-purple-400 underline">
            Home
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default About
