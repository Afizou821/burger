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
        <div className='bg-red-500 sm:bg-blue-500 md:bg-yellow-600 lg:bg-indigo-500 xl:bg-green-500 2xl:bg-pink-600 w-full h-20'></div>
        <HeroTop />
        <LastProduct></LastProduct>
        <Product></Product>
        <Event></Event>
        <Booking></Booking>
        <Footer></Footer>
    </>
  )
}
