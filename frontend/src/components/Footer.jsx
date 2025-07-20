import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className=' flex flex-col sm:flex-row justify-between gap-14 my-20 sm:my-30'>
        <div className=' '>
            <img className='w-36 cursor-pointer' src={assets.logo} alt="" />
            <p className=' max-w-md flex-1  text-xs  mt-4 text-gray-600'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>

        <div>
            <p className='text-gray-900 font-medium  text-[20px]'>COMPANY</p>
            <div className='mt-4 '>
                <p className='text-gray-500 text-[14px] cursor-pointer  sm:text-base'>Home</p>
                <p className='text-gray-500 text-[14px] cursor-pointer sm:text-base'>About us</p>
                <p className='text-gray-500 text-[14px] cursor-pointer sm:text-base'>Delivery </p>
                <p className='text-gray-500 text-[14px] cursor-pointer sm:text-base'>Privacy</p>
            </div>

        </div>
        <div>
            <p className='text-gray-900 font-medium  text-[20px]'>GET IN TOUCH</p>
            <div className='flex flex-col mt-4 text-gray-500'>
            <a className='text-[14px]' href="#">+92 3136370 275</a>
            <a className='text-[14px]' href="#">ibadkhansherani@gmail.com</a>
            <a className='text-[14px]' href="#">Instagram</a>
            </div>
        </div>


    </div>
  )
}

export default Footer