import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Features from './Components/Features/Features'
import Marketplace from './Components/Marketplace/Marketplace'
import Review from './Components/Review/Review'
import Ratings from './Components/Ratings/Ratings'
import Checkout from './Components/Checkout/Checkout'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Marketplace />
      <Review />
      <Ratings />
      <Checkout />
      <Footer />
    </div>
  )
}

export default App