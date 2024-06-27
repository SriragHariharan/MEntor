import React from 'react'

function SlotsTable() {
  return (
    

<div class="relative overflow-x-auto shadow-md sm:rounded-lg pt-12">
    <input type="date" className='dark:bg-gray-700 mb-2 placeholder:text-white' />
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Time
                </th>
                <th scope="col" class="px-6 py-3">
                    Price (₹)
                </th>
                <th scope="col" class="px-6 py-3">
                    Available
                </th>
                <th scope="col" class="px-6 py-3">
                    Desc
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    10:00
                </th>
                <td class="px-6 py-4 font-bold">
                    500
                </td>
                <td class="px-6 py-4 text-red-500">
                    No
                </td>
                <td class="px-6 py-4 text-green-400 font-semibold">
                    Booked by Srirag Hariharan
                </td>
                <td class="flex items-center px-6 py-4">
                    <div class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</div>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    11:00
                </th>
                <td class="px-6 py-4 font-bold">
                    500
                </td>
                <td class="px-6 py-4 text-green-500">
                    Yes
                </td>
                <td class="px-6 py-4 text-green-400 font-semibold">
                    Bookable
                </td>
                <td class="flex items-center px-6 py-4">
                    <div class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</div>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    13:00
                </th>
                <td class="px-6 py-4 font-bold">
                    400
                </td>
                <td class="px-6 py-4 text-green-500">
                    Yes
                </td>
                <td class="px-6 py-4px-6 py-4 text-green-400 font-semibold">
                    Bookable
                </td>
                <td class="flex items-center px-6 py-4">
                    <div class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</div>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    14:00
                </th>
                <td class="px-6 py-4 font-bold">
                    450
                </td>
                <td class="px-6 py-4 text-green-500">
                    Yes
                </td>
                <td class="px-6 py-4 text-green-400 font-semibold">
                    Bookable
                </td>
                <td class="flex items-center px-6 py-4">
                    <div class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</div>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

  )
}

export default SlotsTable