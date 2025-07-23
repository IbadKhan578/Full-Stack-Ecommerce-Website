import React, { useContext } from 'react'
import { shopContext } from '../context/ShopContext'
import SectionTitle from '../components/SectionTitle';

const Orders = () => {
  let {currency,products} = useContext(shopContext);
  
  return (
    <div className='border-t border-gray-300 pt-14'>
      <div className='text-2xl'>
        <SectionTitle text1={'MY'} text2={'ORDERS'} />
      </div>
      <div>
        {
          products.slice(0,4).map((item,index)=>(
            <div key={index} className=' py-4 border-t border-b border-gray-200 text-gray-700 flex flex-col sm:flex-row  md:items-center md:justify-between gap-4 '>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                  <div>
                <p className='sm:text-base font-medium'>{item.name}</p>
                <div className='flex items-center text-gray-700 gap-3 mt-2 text-base '>
                   <p className='text-lg'>{currency} {item.price}</p>
                   <p>Quantity: 1</p>
                   <p>Size: M</p>
                   </div>
             
              <p className='mt-2'>Date: <span className='text-gray-400'>23-july-2025</span>  </p>
               </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                <p className='text-sm md:text-base'>Ready to Ship</p>
              </div>
              <button className='border text-sm font-medium rounded-sm border-gray-200 px-4 py-2'>Track Order</button>


              </div>

             
            
            </div>
          ))
        }
      </div>


    </div>
  )
}

export default Orders