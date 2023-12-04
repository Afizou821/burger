import React from 'react'
import Container from '../../elements/Container'
import HeadingTitles from '../../elements/DisplayTitle/HeadingTitles'
import Heading from '../../elements/DisplayTitle/Heading'
import  Produit1 from '../../../medias/images/products/Product-1.jpg'
import  Produit2 from '../../../medias/images/products/Product-2.jpg'
import  Produit3 from '../../../medias/images/products/Product-3.jpg'
import Button from '../../elements/Button'

export default function Product() {
  return (
    <Container>
        <HeadingTitles >
            Toujours plus de burgers
        </HeadingTitles>
        <Heading  theme="secondary" >
            Choississez et Savourez
        </Heading>
        <p className='text-center'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </p>
        <div className='  grid grid-cols-3  gap-x-1 mb-20 mt-10'>
          <div className='h-full w-full col-span-1 '>
            <div className='relative w-full h-72'>
              <img src={Produit1} alt='burger' className='bg-primary absolute top-0 left-0  w-full h-full object-cover z-0'/>
            </div>
            <div className='flex items-center justify-center flex-col px-5 pb-5'>
              <Heading variant="h3"  >
                Lorem Ipsum Dolor
              </Heading>
              <p className='text-center'>
                Le lorem ipsum is design for developper and designer,for developper and designer
              </p>
              <Button color="danger" className="font-secondary">
                Commandez
              </Button>
            </div>
          </div>
          <div className='h-full w-full col-span-1 '>
            <div className='relative w-full h-72'>
              <img src={Produit2} alt='burger' className='bg-primary absolute top-0 left-0  w-full h-full object-cover z-0'/>
            </div>
            <div className='flex items-center justify-center flex-col px-5 pb-5'>
              <Heading variant="h3"  >
                Lorem Ipsum Dolor
              </Heading>
              <p className='text-center'>
                Le lorem ipsum is design for developper and designer,for developper and designer
              </p>
              <Button color="danger" className="font-secondary">
                Commandez
              </Button>
            </div>
          </div>
         
          <div className='h-full w-full col-span-1 '>
            <div className='relative w-full h-72'>
              <img src={Produit3} alt='burger' className='bg-primary absolute top-0 left-0  w-full h-full object-cover z-0'/>
            </div>
            <div className='flex items-center justify-center flex-col px-5 pb-5'>
              <Heading variant="h3"  >
                Lorem Ipsum Dolor
              </Heading>
              <p className='text-center'>
                Le lorem ipsum is design for developper and designer,for developper and designer
              </p>
              <Button color="danger" className="font-secondary">
                Commandez
              </Button>
            </div>
          </div>
        </div>
    </Container>
  )
}
