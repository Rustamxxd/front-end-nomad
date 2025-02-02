import React from 'react'
import Prev from '../Prev/Prev'
import Spec from '../Spec/Spec'
import Price from '../Price/Price'
import Entrance from '../Entrance/Entrance'
import Swiper from "../Swiper/Swiper";
import About from '../About/About'

const Home = () => {
  return (
    <>
      <Prev/>
      <About/>
      <Swiper/>
    <Spec/>
    <Price/>
    <Entrance/>
    </>
  )
}

export default Home