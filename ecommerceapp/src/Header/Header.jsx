import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMiddle from './HeaderMiddle'
import HeaderBottom from './HeaderBottom'

function Header() {
  return (
    <div>
      <div className='bg-[#232F3F]'>
        <HeaderTop/>
        <HeaderMiddle/>
        <HeaderBottom/>
      </div>     
    </div>
  )
}

export default Header