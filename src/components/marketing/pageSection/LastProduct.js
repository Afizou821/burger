import React from 'react'
import Container from '../../elements/Container'
import Image1 from '../../../medias/images/products/LastProducts-1.jpg'
import Image2 from '../../../medias/images/products/LastProducts-2.jpg'
import Image3 from '../../../medias/images/products/LastProducts-3.jpg'


export default function LastProduct() {
  return (
    <div>
      <Container>
        <div className='  w-full h-96 md:h-full lg:h-96 my-20 lg:px-10 grid-rows-3 grid lg:grid-cols-2 lg:grid-rows-2 gap-3 lg:gap-9  text-white uppercase'>

            <div className='relative lg:row-span-2 bg-primary h-full rounded-md lg:p-7  md:p-10 p-5'> 
                <img src={Image1} className="object-cover rounded-md  z-0 absolute  w-full h-full top-0 left-0 " alt="Un delicieux Hamburger exposé sur une piece de boit" />
                <div className='z-10  relative'>
                    <span className='block font-bold text-lg'> Killer Burger</span>
                    <span className=' text-xl lg:text-2xl font-black'> Burger le plus poplaire</span>
                </div>
            </div>

            <div className='relative row-span-1 bg-primary h-full  rounded-md lg:p-7   md:p-10 p-5'>
            <img src={Image2}  className='object-cover rounded-md z-0 absolute top-0 w-full h-full  left-0' alt="Deux delicieux Hamburger exposé sur une piece de boit"/>
               <div className='z-10 relative '>
                    <span className='block font-bold text-lg'>Island Burger</span>
                    <span className='block text-xl lg:text-2xl font-black'> Plus de plaisir </span>
                    <span className=' text-xl lg:text-2xl font-black'> plus de gout</span>
               </div>
            </div>

            <div className='relative bg-primary  row-span-1    md:p-10 p-5 lg:p-7 Killer Burger00 h-full rounded-md '>
            <img src={Image3} className='object-cover rounded-md  z-0 absolute w-full h-full  top-0 left-0' alt="un delicieux Hamburger exposé sur une piece de boit" />
                <div className='z-10  relative'>
                    <span className='block font-bold  text-lg'>Orlandos Burger</span>
                    <span className=' text-xl lg:text-2xl font-black'> Frias & pimenté</span>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}
