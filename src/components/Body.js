import React from 'react'
import github from "../static/images/Icon.png"
import slack from "../static/images/slack.png"

function Body() {
  return (
  <>
    <div className='flex flex-col items-center gap-4 basis-1/4 grow-0'>
      <a href='https://twitter.com/ByeNari' id='twitter' className=' bg-secondary-color py-6 px-8 rounded w-4/5 text-center font-medium hover:bg-gray-300'>Twitter</a>
      <a href='https://training.zuri.team/' id='btn__zuri' className=' bg-secondary-color py-6 px-8 rounded w-4/5 text-center font-medium hover:bg-gray-300'>Zuri Team</a>
      <a href='http://books.zuri.team/' id='books' className=' bg-secondary-color py-6 px-8 rounded w-4/5 text-center font-medium hover:bg-gray-300'>Zuri Books</a>
      <a href='http://books.zuri.team/' id='book__python' className=' bg-secondary-color py-6 px-8 rounded w-4/5 text-center font-medium hover:bg-gray-300'>Python Books</a>
      <a href='https://background.zuri.team/' id='pitch' className=' bg-secondary-color py-6 px-8 rounded w-4/5 text-center font-medium hover:bg-gray-300'>Background Check for Coders</a>
      <a href='https://books.zuri.team/design-rules' id='book__design' className=' bg-secondary-color py-6 px-8 rounded w-4/5 text-center font-medium hover:bg-gray-300'>Design Books</a>
    </div>
    <div className='flex justify-center gap-6 mt-4 py-8'>
      <img src={slack} alt="slack" />
      <img src={github} alt="github" />
    </div>
  </>  
  )
}

export default Body