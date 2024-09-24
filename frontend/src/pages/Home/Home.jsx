import React from 'react'
import Header from '../../Components/Header/Header'
import Features from '../../Components/Features/Features'
import Testimonials from '../../Components/Testimonials/testimonials'



const Home = () => {
  return (
    <div className='home' id='home'>
      <Header/>
      <Features/>
      <Testimonials/>
    </div>
  )
}

export default Home