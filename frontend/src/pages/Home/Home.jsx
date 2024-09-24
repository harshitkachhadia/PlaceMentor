import React from 'react'
import Header from '../../Components/Header/Header'
import Features from '../../Components/Features/Features'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Footer from '../../Components/Footer/Footer'



const Home = () => {
  return (
    <div className='home' id='home'>
      <Header/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home