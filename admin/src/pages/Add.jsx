import React from 'react'
import { assets } from '../assets/assets'

function Add() {
  return (
    <form className='flex flex-col gap-3 w-full items-start' >
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" id='image1' hidden />
          </label>
          <label htmlFor="image2">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" id='image2' hidden />
          </label> 
          <label htmlFor="image3">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" id='image3' hidden />
          </label>
          <label htmlFor="image4">
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" id='image4' hidden />
          </label>   

        </div>
      </div>

      <div className='w-full' >
        <p className='mb-2'>Product Name</p>
        <input className=' w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product description</p>
        <textarea className='w-full max-w-[500px] px-3 py-2' placeholder='Write content here' type='text' required></textarea>
      </div>

      <div className='flex flex-col sm:flex-row gap-2 sm:gap-8' >

        <div  >
          <p className='mb-2'>Product Category</p>
          <select className='w-full px-3 py-2' > 
            <option  value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

          <div>
          <p className='mb-2'>Product Category</p>
          <select className='w-full px-3 py-2' > 
            <option  value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

          <div>
          <p className='mb-2'>Product Price</p>
          <input className='w-full sm:w-[120px] px-3 py-2 ' placeholder='25' type="number" />
         
        </div>

      </div>

      <div>
        <p className='mb-2'>Product Sizes</p>
        <div  className='flex gap-3'>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>S</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>M</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>L</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XL</p>
          </div>
          <div>
            <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XXL</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input type="checkbox" id='bestSeller' />
        <label className='cursor-pointer' htmlFor="bestSeller">Add to bestseller</label>
      </div>
      <button className='bg-black w-28 mt-4 py-3 text-white cursor-pointer' type='submit'>Add</button>



    </form>
  )
}

export default Add