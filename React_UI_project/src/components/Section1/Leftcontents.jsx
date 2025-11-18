import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Hero_text from './Hero_text.jsx'
import Arrow from './Arrow.jsx'

const leftcontent = () => {
  return (
    <div className = 'h-full flex flex-col justify-between w-1/3'>
    <Hero_text/>
    <Arrow/>
    </div>
  )
}

export default leftcontent
