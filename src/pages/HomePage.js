import React from 'react'
import HeroTop from '../components/marketing/pageSection/HeroTop'
import LastProduct from '../components/marketing/pageSection/LastProduct'
import Product from '../components/marketing/Product'

export default function HomePage() {
  return (
    <>
        <HeroTop />
        <LastProduct></LastProduct>
        <Product></Product>
    </>
  )
}
