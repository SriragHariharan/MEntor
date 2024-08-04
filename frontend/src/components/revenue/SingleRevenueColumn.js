import React from 'react'

function SingleRevenueColumn() {
  return (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                123456kldfjsdklfj
            </th>
            <td class="px-6 py-4">
                Webinar
            </td>
            <td class="px-6 py-4">
                30
            </td>
            <td class="px-6 py-4">
                $2999
            </td>
            <td class="px-6 py-4">
                10/10/2024 &nbsp; &nbsp; 10:00
            </td>
            <td class="px-6 py-4">
                {/* <div className="bg-green-400 py-1 rounded-full text-center text-white font-bold">
                    Transfered
                </div> */}
                {/* <div className="bg-red-400 py-1 rounded-full text-center text-white font-bold">
                    Cancelled
                </div> */}
                <div className="bg-gray-200 dark:bg-gray-400 py-1 rounded-full text-center text-black font-semibold">
                    Pending
                </div>

            </td>
        </tr>
  )
}

export default SingleRevenueColumn