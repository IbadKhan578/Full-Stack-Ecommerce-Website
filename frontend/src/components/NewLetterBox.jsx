import React from 'react'

function NewLetterBox() {
  return (
    <div data-aos="fade-up-right"  className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <form className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full  sm:flex-1 outline-none' type="text"  placeholder='Enter your email' required/>
            <button className='bg-black cursor-pointer text-white text-xs px-10  py-4'type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewLetterBox