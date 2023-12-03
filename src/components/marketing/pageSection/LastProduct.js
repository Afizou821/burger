import React from 'react'
import Container from '../../elements/Container'
import Image1 from '../../../medias/images/products/LastProducts-1.jpg'
import Image2 from '../../../medias/images/products/LastProducts-2.jpg'
import Image3 from '../../../medias/images/products/LastProducts-3.jpg'


export default function LastProduct() {
  return (
    <div>
      <Container>
        <div className=' w-full h-96 my-20 px-10 grid grid-cols-2 grid-rows-2 gap-x-9 gap-y-9 text-white uppercase'>
            <div className='row-span-2 bg-yellow-400 h-full rounded-md p-7'>
                <div className=''>
                    <span className='block font-bold text-lg'> Killer Burger</span>
                    <span className=' text-2xl font-black'> Burger le plus poplaire</span>
                </div>
            </div>
            <div className='row-span-1 bg-yellow-500 h-full  rounded-md p-7'>
               <div className=''>
                    <span className='block font-bold text-lg'>Island Burger</span>
                    <span className='block text-2xl font-black'> Plus de plaisir </span>
                    <span className=' text-2xl font-black'> plus de gout</span>
               </div>
            </div>
            <div className='bg-yellow-600 row-span-1  p-7 Killer Burger00 h-full rounded-md '>
                <div className=''>
                    <span className='block font-bold  text-lg'>Orlandos Burger</span>
                    <span className=' text-2xl font-black'> Frias & pimenté</span>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}
