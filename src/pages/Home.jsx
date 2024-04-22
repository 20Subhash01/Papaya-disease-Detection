import React from 'react'
import Hero from '../Hero/Hero'
import Card from '../Card/Card'
import Predico from '../predico/Predico'
import { CarouselWithContent } from '../Carousel/Carousel'
import BlogCarousel from '../Card/BlogCarousel'
import Footer from '../Footer/Footer'
function Home() {
  return (
    <div>
        <Hero />
        <Card />
        <Predico />
        <Footer />
    </div>
  )
}

export default Home