import React from 'react'
import github from "../static/images/Icon.png"
import slack from "../static/images/slack.png"

function Body() {
  return (
    <div>
      <div>
        <a href='https://twitter.com/ByeNari'>Twitter</a>
      </div>
      <div>
        <a href='https://training.zuri.team/' id='btn__zuri' >Zuri Team</a>
      </div>
      <div>
        <a href='http://books.zuri.team/' id='books' >Zuri Books</a>
      </div>
      <div>
        <a href='http://books.zuri.team/' id='book__python'>Python Books</a>
      </div>
      <div>
        <a href='https://background.zuri.team/' id='pitch' >Background Check for Coders</a>
      </div>
      <div>
        <a href='https://books.zuri.team/design-rules'>Design Books</a>
      </div>
      <div>
        <img src={slack} alt="slack" />
        <img src={github} alt="github" />
      </div>
    </div>
  )
}

export default Body