import React from 'react'
import HeroTop from '../components/marketing/pageSection/HeroTop'
import LastProduct from '../components/marketing/pageSection/LastProduct'
import Product from '../components/marketing/pageSection/Product'
import Event from '../components/marketing/pageSection/Event'
import Booking from '../components/marketing/pageSection/Booking'
import Footer from '../components/marketing/pageSection/Footer'


export default function HomePage() {
  return (
    <>
        <HeroTop />
        <LastProduct></LastProduct>
        <Product></Product>
        <Event></Event>
        <Booking></Booking>
        <Footer></Footer>
    </>
  )
}
