import React from 'react'
import { DEFAULT_USER_IMG } from '../../helpers/CONSTANTS'

function FollowersCard({ follower }) {
  return (
    <div class="w-full dark:bg-gray-800 bg-white border-b p-4">
        <div class="flex items-start mb-4">
            <img class="w-16 h-16 rounded-xl mr-4" src={follower?.profilePic ?? DEFAULT_USER_IMG } alt="Profile Image" />
            <div class="flex-grow">
                <div class="flex items-center justify-between">
                    <div class="font-bold dark:text-white">{ follower?.username }</div>
                    {/* <button class="text-red-500 border border-red-500 hover:bg-red-100 rounded-full px-3 py-1">Block</button> */}
                </div>
                <p className='dark:text-slate-400'>{follower?.bio}</p>
                <div class="hidden md:block mt-2">
                    {follower?.jobDescription}
                </div>
            </div>
        </div>
    </div>
  )
}

export default FollowersCard