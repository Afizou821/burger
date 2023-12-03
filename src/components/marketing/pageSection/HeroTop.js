import React from 'react'
import Illustration from '../../../medias/images/background/bg-food.jpg'
import Container from '../../elements/Container'
import Header from './Header'
import  Product from '../../../medias/images/heroTop/burger-hero-top.png'
import Button from '../../elements/Button'

export default function HeroTop() {
  return (
    <div className="bg-primary w-full  ">
        <div className='bg-repeat w-full h-full pb-40' style={{backgroundImage:`url(${Illustration})`}}>

            <Container >
                <Header/>
                <div className='relative w-full mt-28'>
                    <img src={Product} className='absolute  z-0 -top-64 right-0 w-6/12' alt='un menu burger frite coca cola'/>
                    <div className='bg-red-primary top-40 right-80 absolute z-10 w-40 h-40 rounded-full p-3'>
                        <div className='w-full h-full rounded-full text-white border-2 border-dashed border-l-white flex justify-center items-center'>
                            <div className='text-center '>
                                <span className='block font-extrabold'> 
                                    <span className='text-5xl'>
                                        5
                                    </span>
                                        .49$
                                </span>

                                <span className='uppercase tracking-widest text-sm'>seulement</span>
                                 
                            </div>
                        </div>
                    </div>
                    <div className='text-secondary uppercase relative z-10 '>
                        <h1 className='mb-4 font-semibold'>C'est le  moment de gouter au bon gout des hamburgers.</h1>
                        <h2 className='font-secondary shadowTitlesecondary'> 
                            <span className='text-8xl block'>Burger </span> 
                            <span className='text-6xl'>House</span>
                             <span className='text-4xl ml-3'>Click<span className='text-red-primary'>&</span>Collect</span>  
                            </h2>
                    </div>                    
                </div>
                <Button className='mt-5' color="secondary"  theme="big">Creer mon compte</Button>
            </Container>
        </div>
         
    </div>
  )
}
