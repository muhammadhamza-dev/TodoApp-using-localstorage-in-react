import React from 'react'
import SiteLogo from "../assets/HeaderImages/logo_210x@2x.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
function HeaderMiddle() {
  return (
    <div className='border-b-[0.5px] border-[#2e3a48]'>
      <div className='h-[85px] flex items-center justify-between'>
        <div className='px-3'>
          <img src={SiteLogo} alt="morata logo" />
        </div>


        <div className='flex items-center'>
        <div>
          <div className='bg-white rounded-full h-[50px] flex items-center '>
            <div className='flex items-center gap-5 border-r-2 px-[30px]'>
              <p>All Categories</p>
              <FontAwesomeIcon className='ml-2' icon={faCaretDown} />
            </div>
            <div className='px-[20px]'>
              <input className=' focus:outline-none ' type="text" name="" id="" placeholder='Search for products ...'/>
            </div>
            <div>
              <button className='px-[16px] m-[2px] bg-[#ff7e00] text-white rounded-full h-[46px] min-w-[125px]'>Search</button>
            </div>
          </div>
        </div>
        <div className='flex gap-[15px] p-3'>
          <div className='flex gap-2 items-center'>
              <FontAwesomeIcon className='w-[30px] h-[30px]'  icon={faUser} style={{color : 'white'}} />
              <div className='flex flex-col  justify-center text-white'>
                <p className='text-[13px] text-[#91979F]'>Login</p>
                <p className='text-[14px] font-semibold'>Account</p>
              </div>
          </div>
          <div className='flex gap-2 items-center'>
              <FontAwesomeIcon className='w-[30px] h-[30px]'  icon={faHeart} style={{color: "#ffffff",}} />
              <div className='flex flex-col  justify-center text-white'>
              <p className='text-[13px] text-[#91979F]'>Favorite</p>
              <p className='text-[14px] font-semibold'>My Wishlist</p>
              </div>
          </div>
          <div className='flex gap-2 items-center'>
              <FontAwesomeIcon className='w-[30px] h-[30px]'  icon={faCartShopping} style={{color: "#ffffff",}} />
              <div className='flex flex-col  justify-center text-white'>
              <p className='text-[13px] text-[#91979F]'>Your Cart</p>
              <p className='text-[14px] font-semibold'>$0.00</p>
              </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HeaderMiddle