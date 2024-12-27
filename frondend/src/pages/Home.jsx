import React from 'react'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import HeroCTA from '../components/HeroCTA'
import FitnessInAction from '../components/FitnessInAction'
import ProductGrid from '../components/ProductGrid'
import BlogSection from '../components/BlogSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <ProductGrid />
      <FitnessInAction />
      <HeroCTA />
      <BlogSection />
    </div>
  )
}

export default Home
