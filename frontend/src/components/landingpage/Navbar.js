import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/landingpage/mentor logo.jpg'
import { Link } from 'react-router-dom'

function Navbar() {
    //get loggedin user details
    const [username, setUsername] = useState(null)
    useEffect(() =>{
        setUsername(localStorage.getItem("MEntor_username"))
    },[])

  return (
    <div className='flex justify-between items-center p-4'>
        {/* logo */}
        <div className="">
            <img src={logo} alt="app logo" className='w-24 md:w-36' />
        </div>
        <div className="">
            {
                username ? (
                    <Link to={"/mentee/profile"} className='border-2 border-green-600 px-2 font-semibold md:px-8 py-2 rounded-full text-green-500 hover:bg-green-100 cursor-pointer m-2'>
                        Continue as {username} <i class="fa-solid fa-arrow-right"></i>
                    </Link>
                ):(
                    <>
                        <Link to="/mentee/login" className='border-2 border-green-600 px-2 font-semibold md:px-8 py-2 rounded-full text-green-500 hover:bg-green-100 cursor-pointer m-2'>
                            Login <i class="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link to="/mentee/signup" className='border-2 border-green-600 px-2 font-semibold md:px-8 py-2 rounded-full text-green-500 hover:bg-green-100 cursor-pointer m-2'> 
                            Signup <i class="fa-solid fa-arrow-right"></i>
                        </Link>
                    </>

                )
            }
        </div>
    </div>
  )
}

export default Navbar