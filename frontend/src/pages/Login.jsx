import React, { useState } from 'react'
import { Form,Link } from 'react-router-dom'

const Login = () => {
  let [currentState,setCurrentState] = useState('Login')
  let onSubmitHandler= async(Event)=>{
    Event.preventDefault()

  }
return    (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center  w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-hray-800' >
      <div className='inline-flex items-center gap-2 mt-10 mb-2'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className=' border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      <input className='border w-full px-3 py-2 border-gray-800' type="email" required placeholder='Email'/>
      <input className='border w-full px-3 py-2 border-gray-800'  type="password"  required placeholder='Password'/>
      {currentState==='Sign Up'? (
              <input className='border w-full px-3 py-2 border-gray-800'  type="password"  required placeholder='Password'/>

      ): null }
<div className=' text-sm flex justify-between w-full mt-[-8px]'>
  <p className='cursor-pointer'>Forget your Password</p>
  {
    currentState==='Login'? (  <p onClick={()=>setCurrentState('Sign Up')}  className='cursor-pointer'>Create Account</p> 
): (
    <p onClick={()=>setCurrentState('Login')}  className='cursor-pointer'>Login Here</p> 

)

  }
</div>
{
  currentState==='Sign Up' ? (
    <button className='border bg-black cursor-pointer text-white font-light px-8 py-2 mt-4'>Sign Up</button>

  ) : (
    <button className='border bg-black cursor-pointer text-white font-light px-8 py-2 mt-4'>Sign In</button>

  )
}

    </form>
  ) 
}

export default Login