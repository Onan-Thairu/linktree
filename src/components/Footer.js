import React from 'react'
import zuri from '../static/images/Vector.png'
import ingressive from '../static/images/I4G.png'

function Footer() {
  return (
    <div className='border-t-2 border-secondary-color mt-20 mx-16'>
      <div className='flex flex-col items-start gap-6 basis-1/4 grow-0 ml-6 my-10'>
        <img src={zuri} alt="zuri" />
        <p className='text-dark-gray text-sm'>HNG Internship 9 Frontend Task</p>
        <img src={ingressive} alt="Ingressive" />
      </div>
    </div>
  )
}

export default Footer