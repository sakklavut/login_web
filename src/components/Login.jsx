import React from 'react'
import loginImg from '../assets/login.jpg'
export default function Login() {
  return (
     <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
          <div className='hiden sm:block'>
               <img className='w-full h-full object-cover' src={loginImg} alt="" />
          </div>
          <div className='bg-gray-100 flex flex-col justify-center'>
               <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <h1 className='text-4xl font-bold text-center'>BRAND</h1>
                    <div className='flex flex-col py-2 '>
                         <label>Username</label>
                         <input className='border p-2 ' type="text" />
                    </div>
                    <div className='flex flex-col py-2 '>
                         <label>Password</label>
                         <input className='border p-2' type="password" />
                    </div>
                    <button className='border w-full my-s py-2 bg-indigo-600 hover:bg-inherit-500 text-white'>Sing in</button>
                    <div className='flex justify-between'>
                         <p className='flex items-center'><input className='mr-2' type="checkbox"/> Remember ME</p>
                         <p>Create an account</p>
                    </div>
               </form>
           </div>
     </div>     
  )
}
