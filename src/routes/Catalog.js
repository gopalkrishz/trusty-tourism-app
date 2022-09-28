import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Pricing'
import HeroImage from '../components/HeroImage'

const catalog = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='Catalog' text='See The Catalog of the trips we offered' />
            <PricingCards />
            <Footer />
        </div>
    )
}

export default catalog
