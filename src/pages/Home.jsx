import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import FeatureProducts from '../components/FeatureProducts'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='heroBoxes'>
        <div className='left-column'>
          <p>Welcome To</p>
          <h2>Name</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veniam architecto deserunt vero sed asperiores doloribus eius omnis fugit nostrum? Aperiam, nihil autem in neque odio officiis dolores pariatur voluptatum. Tempora corrupti nihil tenetur.</p>
          <NavLink>
            <button>Show More</button>
          </NavLink>
        </div>
        <div className='right-column'>
          <figure className='tayyabPic'>
            <img src='/public/hero.jpg' alt="Photo" />
          </figure>
        </div>
      </div>
      <FeatureProducts/>
    </div>
  )
}

export default Home
