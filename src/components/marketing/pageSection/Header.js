import React from 'react'
import Logo from '../../../medias/svg/Logo-burger-house.svg'
export default function Header() {
  return (
    <div className='flex items-center justify-between py-10 bg-gray-500'>
        <div>
        <img src={Logo} alt="Burger" className='w-64'></img>
        </div>
    </div>
  )
}
