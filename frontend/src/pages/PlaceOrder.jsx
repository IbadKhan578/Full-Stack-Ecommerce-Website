import React, { useEffect, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets';

const PlaceOrder = () => {
  const [method,setMethod] = useState('cod');

  useEffect(()=>{
    console.log(method);

  },[method])



  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-15 min-h-[80vh] border-t border-gray-200  ">
      {/* left side  */}
      <div className="flex flex-col w-full gap-4 sm:w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <SectionTitle text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3 ">
          <input
            className="border border-gray-300 px-3.5 rounded py-1.5 w-full "
            type="text"
            placeholder="First name"
          />
          <input
            className="border border-gray-300 px-3.5 rounded py-1.5 w-full "
            type="text"
            placeholder="Last name"
          />
        </div>

        <input
          className="border border-gray-300 px-3.5 rounded py-1.5 w-full "
          type="text"
          placeholder="Email address"
        />
        <input
          className="border border-gray-300 px-3.5 rounded py-1.5 w-full "
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3 ">
          <input
            className="border border-gray-300 px-3.5 rounded py-1.5 w-full "
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 px-3.5 rounded py-1.5 w-full "
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3 ">
          <input
            className="border border-gray-300 px-3.5 rounded py-1.5 w-full "
            type="text"
            placeholder="Zipcode"
          />
          <input
            className="border border-gray-300 px-3.5 rounded py-1.5 w-full "
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 px-3.5 rounded py-1.5 w-full "
          type="text"
          placeholder="Phone"
        />
      </div>
      {/* right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <SectionTitle text1={"PAYMENT"} text2={"METHOD"} />
          {/* payment method selection */}
          <div className="flex flex-col gap-3 lg:flex-row">

            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 p-2 px-3 border border-gray-300'>
            <p className={`min-w-3.5 h-3.5 border rounded-full  ${method==='stripe'? `bg-green-600`:"" } `}></p>
            <img className='h-5 mx-4'src={assets.stripe_logo} alt="" />  </div>
            
             <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 p-2 px-3 border border-gray-300'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay'? `bg-green-600`:"" } `}></p>
            <img className='h-5 mx-4'src={assets.razorpay_logo} alt="" />  </div>

             <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 p-2 px-3 border border-gray-300'>
            <p className={`min-w-3.5 h-3.5  border rounded-full ${method==='cod'? `bg-green-600`:"" }  `}></p>
            <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
        </div>
          </div>
          <div className='mt-8 text-end'>
            <button className='bg-black text-sm text-white py-3 px-16'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder