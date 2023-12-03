import React from 'react'

export default function Button({children,className}) {
  return (
    <div>
      <button className={`${className} animate px-4 py-3 uppercase shadow-xl tracking-widest text-sm font-medium text-white `}>{children}</button>
    </div>
  )
}
