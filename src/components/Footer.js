import React from 'react'
import zuri from '../static/images/Vector.png'
import ingressive from '../static/images/I4G.png'

function Footer() {
  return (
    <div>
      <div>
        <img src={zuri} alt="zuri" />
      </div>
      <div>
        <p>HNG Internship 9 Frontend Task</p>
      </div>
      <div>
        <img src={ingressive} alt="Ingressive" />
      </div>
    </div>
  )
}

export default Footer