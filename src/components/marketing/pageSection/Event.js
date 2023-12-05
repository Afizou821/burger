import React from 'react'
import Container from '../../elements/Container'
import AliceCarousel from 'react-alice-carousel';
import  '../../../css/caroussel.css'
import Image from '../../../medias/images/photo/dorian-hurst-d-igN2ptyC8-unsplash.jpg'
import Image2 from '../../../medias/images/products/Product-2.jpg'
import Image3 from '../../../medias/images/products/Product-3.jpg'
import Heading from '../../elements/DisplayTitle/Heading';

const Slide =({children ,category,Title,Image})=>{
    return(
        <div className='grid  grid-cols-2 p-6'>
                <div className='p-10 mb-10 '>
                    <Heading variant="h4">
                        {category}
                    </Heading>
                    <Heading theme="secondary" variant="h3" className="mb-5">
                        {Title}
                    </Heading>
                    <p className='tracking-wide text-lg leading-relaxed font-light text-gray-800'>{children}</p>
                </div>
                <div className='relative w-full h-full'>
                    <img src={Image} alt='burger' className='bg-primary absolute top-0 left-0  w-full h-full object-cover object-bottom z-0'/>
                </div>
            </div>
    )
}

export default function Event() {
            

        const items = [
           <Slide Image={Image} category="évenement a venir" Title="Vicez la demi finale">
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
           </Slide> ,
           <Slide Image={Image2} category="Nouveau Burger" Title="Decouvrez le killer Burger">
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
            </Slide> ,
            <Slide Image={Image3} category="Nouvelle recette " Title="Le VégéBurger Arrive">
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
            </Slide> 
            
        ];
  return (
    <div>
        <Container>
            <div className='   shadow-2xl mb-20'>
                <AliceCarousel mouseTracking items={items} infinite disableButtonsControls autoPlay autoPlayInterval={4000}  animationType='fadeout'>
                
                </AliceCarousel>
            </div>
        </Container>
      
    </div>
  )
}
