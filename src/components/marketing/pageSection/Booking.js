import React from 'react'
import Container from '../../elements/Container'
import  Assiete from '../../../medias/images/background/Assiette-burger-frites.png'
import Burger from '../../../medias/images/background/Burger.png'
import  Sauce from '../../../medias/images/background/Sauce-pimente.png'
import Heading from '../../elements/DisplayTitle/Heading'
export default function Booking() {
  return (
    <Container>
        <div className=' w-full relative '>
            <img src={Burger} alt=" Un hambrger " className='absolute -top-20 -left-36 z-10'/>
            <img src={Sauce} alt=" Une sauce " className='absolute  bottom-0 left-0'/>
            <img src={Assiete} alt=" Un assiete " className='absolute -right-96 -bottom-37'/>
            <div className='max-w-3xl mx-auto px-10 py-20 '>
                <Heading variant="h3"  alignement="center">
                    Réservation
                </Heading>
                <Heading alignement="center" theme="secondary" classNam="mt-5" >
                    Reservez votre table
                </Heading>
                <form className='grid grid-cols-2 gap-x-7 gap-y-6 mt-20'>
                    <div>
                        <label htmlFor="Nom" className='block text-sm font-medium text-gray-700'>Nom</label>
                        <input  type="text" name='name' id="name" autoComplete='off' className='focus:ring-primary focus:border-primary focus:border w-full border-gray-400 rounded-md p-5' placeholder='Jhon doe'/>
                    </div>
                    <div>
                        <label htmlFor="Email" className='block text-sm font-medium text-gray-700'>Email</label>
                        <input  type="email" name='email' id="email" autoComplete='off' className='focus:ring-primary focus:border-primary focus:border w-full border-gray-400 rounded-md p-5' placeholder='Jhondoe@gmail.com'/>
                    </div>
                    <div>
                        <label htmlFor="Date" className='block text-sm font-medium text-gray-700'>Date</label>
                        <input  type="date" name='date' id="date" autoComplete='off' className='focus:ring-primary focus:border-primary focus:border w-full border-gray-400 rounded-md p-5' />
                    </div>
                    <div>
                        <label htmlFor="Heure" className='block text-sm font-medium text-gray-700'>Heure</label>
                        <input  type="time" name='time' id="time" autoComplete='off' className='focus:ring-primary focus:border-primary focus:border w-full border-gray-400 rounded-md p-5' required />
                    </div>
                    <div>
                        <label htmlFor="custormer" className='block text-sm font-medium text-gray-700'>Nombre de personne</label>
                        <input  type="number" name='number' id="number" autoComplete='off' className='focus:ring-primary focus:border-primary focus:border w-full border-gray-400 rounded-md p-5' placeholder='5'/>
                    </div>
                    <div>
                        <label htmlFor="SendBooking" className='invisible'>Trouvez votre table</label>
                        <input  type="button" name='sendBooking' id="sendBooking" autoComplete='off' className='bg-red-primary hover:bg-red-primary-hover w-full text-white font-secondary tracking-widest uppercase py-5 rounded-md animate cursor-pointer ' value="Trouvez une table"/>
                    </div>
                </form>
            </div>
        </div>
    </Container>
  )
}
