import React from 'react'
import { Link } from 'react-router-dom'
import Enflag from "../assets/HeaderImages/flag_en.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'



function HeaderTop() {
  return (
    <div className='border-b-[0.5px] border-[#2e3a48] text-sm line-height: 15px;'>
        <div className='text-[#93969d]  flex justify-between p-3'>
            <div className='capitalize'>
              <ul className=' flex gap-[30px]'>
                <li className=' hover:text-[#ff7e00] '><Link to={"#"}>about us</Link></li>
                <li className=' hover:text-[#ff7e00] '><Link to={"#"}>order tracking</Link></li>
                <li className=' hover:text-[#ff7e00] '><Link to={"#"}>conatct us</Link></li>
                <li className=' hover:text-[#ff7e00] '><Link to={"#"}>FAQs</Link></li>
              </ul>               
            </div>
            <div>
                  <p>Sign up for 10% off your first order: <Link to={"#"} className='text-white  hover:text-[#ff7e00] '>Sign Up</Link></p>
            </div>
            <div className='flex gap-[30px] '> 
                <Link to={"#"}>
                  <div className='flex  justify-center items-center'>
                    
                    <img className=' w-4' src={Enflag} alt="en" />
                    <p className='ml-1'>English</p>
                    <FontAwesomeIcon className='ml-2' icon={faCaretDown} />
                    
                  </div>
                </Link>

                <Link to={"#"}>
                  <div className='flex  justify-center items-center'>
                    
                    <img className=' w-4' src={Enflag} alt="en" />
                    <p className='ml-1'>English</p>
                    <FontAwesomeIcon className='ml-2' icon={faCaretDown} />
                    
                  </div>
                </Link>
            </div>
                  
        </div>
    </div>
  )
}

export default HeaderTop