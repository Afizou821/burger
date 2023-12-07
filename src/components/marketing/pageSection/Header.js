import React from 'react'
import Logo from '../../../medias/svg/Logo-burger-house.svg'
import Icone from '../../../medias/svg/ico-bag-clickAndCollect.svg'
import Button from '../../elements/Button'
import Picto from '../../../medias/svg/picto-burger-house.svg'
export default function Header() {
  return (
    <div className='relative z-10 flex items-center justify-between py-10 '>
        <div className='w-full'>
            <img src={Logo} alt="Burger" className='w-64 hidden md:block'></img>
            <img src={Picto} alt="Burger" className='w-10 md:hidden'></img>
        </div>
        <div className='w-full  text-secondary  items-center'>
            <div className=' justify-end hidden md:flex'>
                <img src={Icone}  alt='' className='w-5 h-5 mr-1'/>
                <span>Commandez votre repas en ligne</span> 
            </div>
            <div className='flex justify-end items-center md:mt-5  '>
                <Button className="mr-3 tracking-widest"> Inscription</Button>
                <Button className=" tracking-widest" color="secondary">Connexion</Button>
            </div>    
        </div>
    </div>
  )
}
