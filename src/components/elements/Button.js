import React from 'react'

export default function Button({children,className,color ,theme}) {
    let background
    switch (color) {
        case "secondary":
            background="bg-secondary hover:bg-secondary-hover"
            break;
        case "danger":
            background="bg-red-primary hover:bg-red-primary-hover"
            break;
        default:
            background="bg-primary hover:bg-primary-hover"
            break;
    }

    
    switch (theme) {
        case 'small':
            return(
                <div>
                    <button className={`${className} ${background} animate px-4 py-2 uppercase shadow-xl text-xs font-medium text-white `}>{children}</button>
                </div>
            )
            
        case 'big':
            return(
                <div>
                    <button className={`${className} ${background} animate px-4 py-4 md:px-8 md:py-4 uppercase shadow-xl text-sm md:text-base font-medium text-white `}>{children}</button>
                </div>
            )

        default:
            return(
                <div>
                    <button className={`${className} ${background} animate px-4 py-3 uppercase shadow-xl text-xsmd: md:text-sm font-medium text-white `}>{children}</button>
                </div>
            )
    }
  
}
