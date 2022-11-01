import React from 'react'
import share from '../static/images/Avatar_share_button.png'
import profile from '../static/images/profile__img.png'

function Header() {
  return (
    <div>
      <div className='flex justify-end mr-[10%] mt-[10%]'>
        <img src={share} alt="Share" />
      </div>
      <div className='flex justify-center mb-[5%]'>
        <img src={profile} alt="Profile" id='profile__img' />
      </div>
      <div className='flex justify-center font-bold'>
        <p id='twitter'>OnesNZeros</p>
      </div>
      <div className='flex justify-center'>
        <p id='slack' hidden >Onan Thairu</p>
      </div>
    </div>
  )
}

export default Header