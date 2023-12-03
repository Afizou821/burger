import React from 'react'
import Logo from '../../../medias/svg/Logo-burger-house.svg'
import Icone from '../../../medias/svg/ico-bag-clickAndCollect.svg'
import Button from '../../elements/Button'

export default function Header() {
  return (
    <div className='flex items-center justify-between py-10 '>
        <div className='w-full'>
            <img src={Logo} alt="Burger" className='w-64'></img>
        </div>
        <div className='w-full  text-secondary  items-center'>
            <div className='flex justify-end'>
                <img src={Icone}  alt='' className='w-5 h-5 mr-1'/>
                <span>Commandez votre repas en ligne</span> 
            </div>
            <div className='flex justify-end items-center  '>
                <Button className={`bg-primary mr-4 hover:bg-secondary`}> Inscription</Button>
                <Button className={`bg-secondary hover:bg-primary`}>Connexion</Button>
            </div>    
        </div>
    </div>
  )
}
