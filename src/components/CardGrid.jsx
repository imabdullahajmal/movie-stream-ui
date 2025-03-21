import React from 'react'
import Card from './Card'

const CardGrid = () => {
  return (
    <div className='bg-green-300'>
      <div className="flex justify-center mx-auto p-10 w-[80%]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default CardGrid