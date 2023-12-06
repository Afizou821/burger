import React from 'react'
import Container from '../../elements/Container'
import BackgroundImage from '../../../medias/images/background/bg-footer.jpg'
export default function Footer() {
  return (
    <Container>
        <div className='h-96 text-white mb-20 p-5 relative '>
            <img src={BackgroundImage} alt="un plan de travail de cuisine" className='bg-black absolute top-0 left-0 w-full h-full object-cover z-0'/>
            <div  className='relative z-10 bg-yellow-200 '></div>
        </div>
    </Container>
  )
}
