import React from 'react'
import moment from 'moment'

function WebinarDetailsSection({ details }) {

  return (
    <>
          <div className="text-5xl mb-8 text-gray-800 dark:text-slate-400 font-extrabold">
              {details?.title}
          </div>
          <div className="flex justify-between align-center my-2">
            <div className='flex justify-between gap-2'>
				{
					(details?.amount ===0) ? (
						<div className="bg-green-200 dark:bg-gray-600 dark:text-slate-300 rounded-3xl px-4 py-1.5">Free</div>
					):(
						<div className="bg-blue-200 dark:bg-gray-600 dark:text-slate-300 rounded-3xl px-4 py-1.5"> $ {details?.amount}</div>
					)
				}
                <div className="bg-green-50 dark:bg-gray-600 dark:text-slate-300 rounded-3xl px-4 py-1.5">{details?.topic}</div>
                <div className="bg-green-50 dark:bg-gray-600 dark:text-slate-300 rounded-3xl px-4 py-1.5">{details?.type}</div>
            </div>
            <div className='flex justify-between gap-2'>
                <div className="bg-green-50 dark:bg-gray-600 dark:text-slate-300 rounded-3xl px-4 py-1.5">
                    {details?.participants?.length} participants</div>
                <div className="bg-green-50 dark:bg-gray-600 dark:text-slate-300 rounded-3xl px-4 py-1.5">
                  {moment(details?.date).format('MMMM Do, YYYY ◾ h:mm A')}</div>
            </div>
          </div>
          <div>
              <img src="https://aster.cloud/wp-content/uploads/2020/11/dive-into-docker.jpg" className='w-full h-96 object-cover' alt="webinar banner" />
          </div>
          <p className="text-gray-700 dark:text-gray-300">
              	{details?.description}
          </p>
		  {
				(details?.amount ===0) ?(
					<div className="text-center bg-blue-500 px-4 py-4 rounded-lg text-white mt-4 cursor-pointer">Register for free</div>
				):(
					<div className="text-center bg-green-500 px-4 py-4 rounded-lg text-white mt-4 cursor-pointer">
						Register now <span className="font-bold">${details?.amount}</span>  only
					</div>
				)
		  }
    </>
  )
}

export default WebinarDetailsSection