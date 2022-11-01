import React from 'react'
import github from "../static/images/Icon.png"
import slack from "../static/images/slack.png"

function Body() {
  return (
  <>
    <div className='flex flex-col items-center gap-4 basis-1/4 grow-0'>
      <a href='https://twitter.com/ByeNari' id='twitter' target="_blank" rel="noopener noreferrer" className=' bg-secondary-color py-6 px-8 rounded w-4/5 text-center font-medium hover:bg-gray-300'>Twitter</a>
      <a href='https://training.zuri.team/' id='btn__zuri' target="_blank" rel="noopener noreferrer" className=' bg-secondary-color py-6 px-8 rounded w-4/5 text-center font-medium hover:bg-gray-300'>Zuri Team</a>
      <a href='http://books.zuri.team/' id='books' target="_blank" rel="noopener noreferrer" title='This is where you find books about design and coding' className=' bg-secondary-color py-6 px-8 rounded w-4/5 text-center font-medium hover:bg-gray-300'>Zuri Books</a>
      <a href='http://books.zuri.team/python-for-beginners?ref_id=Onan-Thairu' id='book__python' title='Learn Python and Learn it right!' target="_blank" rel="noopener noreferrer" className=' bg-secondary-color py-6 px-8 rounded w-4/5 text-center font-medium hover:bg-gray-300'>Python Books</a>
      <a href='https://background.zuri.team/' id='pitch' target="_blank" rel="noopener noreferrer" title='Let us ensure you get qualified developers working for you.' className=' bg-secondary-color py-6 px-8 rounded w-4/5 text-center font-medium hover:bg-gray-300'>Background Check for Coders</a>
      <a href='https://books.zuri.team/design-rules' id='book__design' target="_blank" rel="noopener noreferrer" title='All the design basics you need to get hired as a designer.' className=' bg-secondary-color py-6 px-8 rounded w-4/5 text-center font-medium hover:bg-gray-300'>Design Books</a>
    </div>
    <div className='flex justify-center gap-6 mt-4 py-8'>
      <img src={slack} alt="slack" />
      <img src={github} alt="github" />
    </div>
  </>  
  )
}

export default Body