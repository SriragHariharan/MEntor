import React from 'react'
import { GoBlocked } from "react-icons/go";
import moment from 'moment';

function UsersTableRow({user}) {
    const {username, email, mobile, createdAt, accountBlocked } = user;
  return (
        <>
        <tr class="border-b dark:border-gray-700">
            <th scope="row" class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt={username + "profile pic"} class="w-auto h-16 mr-3" />
                {username}
            </th>
            <td class="px-4 py-3">{email}</td>
            <td class="px-4 py-3">{mobile}</td>
            <td class="px-4 py-3">{moment(createdAt).format('MMMM Do, YYYY ◾ h:mm A')}</td>
            <th class="px-4 py-3">{accountBlocked ? "Blocked" : "Active"}</th>
            <GoBlocked className='text-red-500 text-4xl cursor-pointer' />
        </tr>
        </>
  )
}

export default UsersTableRow