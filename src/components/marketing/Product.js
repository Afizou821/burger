import React from 'react'
import Container from '../elements/Container'
import HeadingTitles from '../elements/DisplayTitle/HeadingTitles'
import Heading from '../elements/DisplayTitle/Heading'

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
    </Container>
  )
}
