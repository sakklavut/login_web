 import React from 'react'
 
 import loginImg from '../assets/login.jpg'
 import logo from '../assets/logo.png'
 import {FcGoogle} from 'react-icons/fc'
 import {AiFillFacebook} from 'react-icons/ai'

 export default function Login2() {
   return (
     <div className='relative w-full h-screen bg-zinc-900/10'>
          <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="" />
          <div className='flex justify-center items-center h-full'>
               <form className='max-w-[500px]   w-full mx-auto bg-white p-8'>
                    <div className='flex justify-center'>
                         <img src={logo} alt="" />
                    </div>
                    <h2 className='text-4xl text-2sm font-black text-center py-4'>ระบบจัดเก็บเอกสารอิเล็กทรอนิกส์</h2>
                    
                    {/* <div className='flex justify-between py-8'>
                         <p className='bordar shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' />icon face</p>
                         <p className='bordar shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle  className='mr-2'  />icon google</p>
                    </div> */}
                    <div className='flex flex-col md-4 my-2'>
                        {/* <labe>ชื่อผู้เข้าใช้งาน</labe> */}
                        <input className='broder relative bg-gray-100 p-2' type="text" placeholder="ชื่อผู้เข้าใช้งาน"  />
                    </div>
                    <div className='flex flex-col md-4 my-2'>
                         {/* <label>Password</label> */}
                         <input className='broder relative bg-gray-100 p-2' type="password"  placeholder="รหัสผ่าน" />
                    </div>
                    <button className='w-full py-3 mt-8 bg-green-600 hover:bg-green-500 relative text-white'>เข้าสู่ระบบ</button>
                    <p className='flex text-center mt-2'><input className='mr-3' type="checkbox" /> Remembar ME</p>
                    <p className='text-center mt-8'>สงวนลิขสิทธิ์กรุงเทพมหานคร</p>
               </form>
          </div>
     </div>
   )
 }
 