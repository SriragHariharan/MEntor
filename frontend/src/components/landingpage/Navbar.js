import React from 'react'
import logo from '../../assets/images/landingpage/mentor logo.jpg'

function Navbar() {
  return (
    <div className='flex justify-between items-center p-4'>
        {/* logo */}
        <div className="">
            <img src={logo} alt="app logo" className='w-24 md:w-36' />
        </div>
        <div className="">
            <span className='border-2 border-green-600 px-2 font-semibold md:px-8 py-2 rounded-full text-green-500 hover:bg-green-100 cursor-pointer m-2'>
                Login <i class="fa-solid fa-arrow-right"></i>
            </span>
            <span className='border-2 border-green-600 px-2 font-semibold md:px-8 py-2 rounded-full text-green-500 hover:bg-green-100 cursor-pointer m-2'> 
                Signup <i class="fa-solid fa-arrow-right"></i>
            </span>
        </div>
    </div>
  )
}

export default Navbar