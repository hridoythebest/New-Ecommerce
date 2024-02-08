import React from 'react'
import { Hero,Categories,Products,TopProducts } from '../components'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Categories/>
      <Products/>
      <TopProducts/>
    </div>
  )
}

export default Home