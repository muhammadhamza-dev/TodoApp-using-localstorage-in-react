import React from 'react';
import Banner_2 from "../assets/HomeImages/banner_2.png";
import Banner_2_1 from "../assets/HomeImages/2_1.png"
import Banner_2_2 from "../assets/HomeImages/2_2.png"
import Banner_2_3 from "../assets/HomeImages/2_3.png"

function HomeBanner() {
  return (
    <>
      <div>
        <div className='flex flex-row gap-5 m-auto  px-3 pt-[30px] pb-[60px] '>

          <div className='w-3/4 ' style={{ backgroundImage: `url(${Banner_2})`, backgroundSize: "cover", backgroundPosition: "center" }} >
            <div className='w-[50%] p-10 '>
              <p className=' capitalize text-5xl font-medium mb-6'>Samsung Wireless speakers multi-Room audio</p>
              <p className='mb-6'>From the backyard to the beach, stream audio wirelessly
                from any Bluetooth device with the speaker that
                packs big sound into a slim, portable package.</p>
                <button className=' bg-[#333E48] hover:bg-[#FFB800] px-8 py-4 text-white   '>Get It Now</button>
            </div>

          </div>

          <div className='flex w-[25%] flex-col gap-5'>

            <div className='w-full' style={{ backgroundImage: `url(${Banner_2_1})`, backgroundSize: "cover", backgroundPosition: "center" }}>
              <div className='text-white px-8 py-9'>
              <p className='text-lg'>Featured Products </p>
              <p className='text-[20px]'>Big Sale Up To 40% Off,</p>
              <p>Laptop, Tablet & Accessories</p>
              </div>
              
            </div>




            <div className='' style={{ backgroundImage: `url(${Banner_2_2})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className='text-white px-8 py-9 '>
              <p className='text-lg'>Featured Products </p>
              <p className='text-[20px]'>Big Sale Up To 40% Off,</p>
              <p>Laptop, Tablet & Accessories</p>
              </div>
            </div>


            <div className='' style={{ backgroundImage: `url(${Banner_2_3})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className='text-white px-8 py-9'>
              <p className='text-lg'>Featured Products </p>
              <p className='text-[20px]'>Big Sale Up To 40% Off,</p>
              <p>Laptop, Tablet & Accessories</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>

  );
}

export default HomeBanner