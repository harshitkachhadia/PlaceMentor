import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Container } from '@mui/material'
import Home from './pages/Home/Home'

const App = () => {
  return (
   <Container>
    <Navbar/>
    <Home/>
   </Container>
   
  )
}

export default App