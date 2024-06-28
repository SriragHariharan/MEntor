import React from 'react'
import { FaHeart, FaLaptopCode, FaRegComment } from "react-icons/fa";

function NormalNotification() {
  return (
    <div class="w-full p-3 mt-1 bg-gray-200 flex flex-shrink-0">
        <div tabindex="0" aria-label="group icon" role="img" class="focus:outline-none w-10 h-10 border rounded-full border-gray-200 flex flex-shrink-0 items-center justify-center">
            {/* <FaHeart className='text-red-500' /> */}
            <FaRegComment className='text-dark' />
            {/* <FaLaptopCode className='text-dark' /> */}
        </div>
        <div class="pl-3 w-full">
            <div class="flex items-center justify-between w-full">
                <p tabindex="0" class="focus:outline-none text-sm leading-none"><span class="text-indigo-700">Sash</span> Liked your post</p>
            </div>
            <p tabindex="0" class="focus:outline-none text-xs leading-3 pt-1 text-gray-500">2 hours ago</p>
        </div>
    </div>
  )
}

export default NormalNotification