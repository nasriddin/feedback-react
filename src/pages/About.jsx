import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function About() {
  return (
    <Card>
        <div className='about'>
            <h1>About thi project</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iure, beatae, error sit voluptas totam repellat culpa facilis doloribus ab harum sed sint voluptates dolores itaque numquam. Suscipit, voluptas fuga!</p>
            <p>Version: 1.0.0</p>
            <p>
                <Link to="/">Last page</Link>
            </p>
        </div>

    </Card>
  )
}

export default About