import React from 'react'
import HeroSection from '../../components/HeroSection'
import About from '../../components/About'
import WhoAreWe from "../../components/WhoAreWe.jsx"
import Reservation from "../../components/Reservation.jsx" 
import Footer from '../../components/Footer'
import Qualities from "../../components/Qualities.jsx"
import Menu from "../../components/Menu.jsx"

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      <Reservation/>
      <Footer/>
    </>
  )
}

export default Home
