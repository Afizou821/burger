import React from 'react'
import Container from '../../elements/Container'
import BackgroundImage from '../../../medias/images/background/bg-footer.jpg'
import {  EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import Logo from '../../../medias/svg/Logo-burger-house-white.svg'
import Insta from '../../../medias/svg/instagram-brands.svg'
import Facebook from '../../../medias/svg/facebook-f-brands.svg'
import Twitter from '../../../medias/svg/twitter-brands.svg'
import Whatsapp from '../../../medias/svg/whatsapp-brands.svg'
export default function Footer() {
  return (
    <Container>
        <div className=' text-white mb-20 p-5 relative '>
            <img src={BackgroundImage} alt="un plan de travail de cuisine" className='bg-black absolute top-0 left-0 w-full h-full object-cover z-0'/>
            <div  className='relative z-10   grid grid-cols-2  '>
               
                <div className='  w-full p-5 mt-20 mb-28'>
                    <img src={Logo} alt="logo" className=' w-2/3' />
                    <p className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>


                <div className=' w-full h-full flex flex-col items-center justify-center '>
                    <div className='flex items-center '>
                        <MapPinIcon className='h-10 w-10 mr-5'></MapPinIcon>
                        <span className='uppercase font-extrabold text-lg tracking-thighter'>15 place bellecous ,1000 rabat</span>
                    </div>
                    <div className='flex items-center justify-center mt-5'>
                        <EnvelopeIcon className='h-10 w-10 mr-5'></EnvelopeIcon>
                        <span className='uppercase font-extrabold text-lg tracking-thighter'>info@Burge-house.com</span>
                    </div>
                    
                </div>
            </div>
            <div  className='relative z-10  flex items-center justify-between '>
                <div className='uppercase font-extrabold text-sm tracking-tighter'>
                    burger house 2023. All rights reserved
                </div>
                <div className='flex'>
                    
                        <a href='/#' target='_blank' rel='noreferrer' className='group'>
                            <img src={Insta} alt="instagram" className='w-7 h-7 mr-2 group-hover:bg-primary animate bg-white rounded-full p-1'/>
                        </a>
                        
                    
                    <div>
                        <img src={Facebook} alt="instagram" className='w-7 h-7 mr-2bg-white rounded-full p-1'/>
                    </div>
                    <div>
                        <img src={Twitter} alt="instagram" className='w-7 h-7 mr-2bg-white rounded-full p-1'/>
                    </div>
                    <div>
                        <img src={Whatsapp} alt="instagram" className='w-7 h-7 bg-white rounded-full p-1'/>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}
