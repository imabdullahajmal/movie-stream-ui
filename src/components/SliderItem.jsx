import React from 'react'

const SliderItem = ({image_url, rank}) => {
  return (
    <div className='h-[35vh] m-3 w-45 rounded-4xl relative shrink-0 hover:scale-105 transition-all duration-100'>
      <img src={image_url} alt="" className='h-full w-auto object-cover rounded-4xl hover:scale-[101%]' />
      <span className='absolute bottom-5 left-[-12px] text-8xl outlined-text z-[40]'>{rank}</span>
    </div>
  )
}

export default SliderItem
// 