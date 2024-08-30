import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars  } from '@fortawesome/free-solid-svg-icons'
import {  faBell  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function HeaderBottom() {
  return (

    <div className='flex justify-between items-center'>
      
      <div className='flex items-center'>

      <div class="relative group w-[300px]">
        <button class="bg-[#FF7E00] flex gap-[106px] text-white px-5 font-medium py-4">
          Sop By Deoartment
          <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
        </button>
        
        <div class="absolute hidden group-hover:block bg-white border border-gray-200 rounded mt-1 min-w-max">
          <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
          <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
          <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 3</a>
        </div>
      </div>
      
      <div>
      <div className='capitalize text-white px-[10px]'>
              <ul className=' flex gap-2 uppercase font-bold  text-[13px]'>
                <li className=' hover:text-[#ff7e00] px-[15px] '><Link to={"#"}>home</Link></li>
                <li className=' hover:text-[#ff7e00] px-[15px]  '><Link to={"#"}>shop</Link></li>
                <li className=' hover:text-[#ff7e00] px-[15px]  '><Link to={"#"}>products</Link></li>
                <li className=' hover:text-[#ff7e00] px-[15px]  '><Link to={"#"}>blog</Link></li>
                <li className=' hover:text-[#ff7e00] px-[15px]  '><Link to={"#"}>contact us</Link></li>
              </ul>               
            </div>
      </div>

      </div>
      
      <div className='flex items-center gap-3 text-white p-3'>
        <FontAwesomeIcon icon={faBell} style={{color: "#ffffff",}} />
        <p>Hotline: (+100) 123 456 7890</p>
      </div>
    </div>
  )
}

export default HeaderBottom