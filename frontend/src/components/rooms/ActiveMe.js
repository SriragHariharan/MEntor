import React from 'react'
import { DEFAULT_USER_IMG } from '../../helpers/CONSTANTS'
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";
import { MdCallEnd } from "react-icons/md";

function ActiveMe() {
  return (
    <div>
        <img src={DEFAULT_USER_IMG} alt="user logo" className='rounded-xl w-36 h-36 my-4 ' />
        <div className="flex gap-3">
            <div className="bg-green-500 p-2 text-center rounded-xl text-white cursor-pointer"><GoUnmute /></div>
            <div className="bg-red-500 p-2 rounded-xl text-white cursor-pointer"><GoMute /></div>
            <div className="bg-red-500 p-2 rounded-xl text-white cursor-pointer"><MdCallEnd /></div>
        </div>
    </div>
  )
}

export default ActiveMe