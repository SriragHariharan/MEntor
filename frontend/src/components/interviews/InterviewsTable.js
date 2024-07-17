import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

function InterviewsTable({ interview }) {
  return (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {moment(interview?.date).format('MMMM Do, YYYY')}
                </th>
                <td class="px-6 py-4font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {interview?.time}
                </td>
                <Link to={`/mentee/${interview?.mentorID}/profile`} class="px-6 py-4 text-blue-500">View Profile</Link>
                <td class="px-6 py-4">$ {interview?.amount}</td>
                <td class="px-6 py-4 text-dark font-bold">
                    {interview?.status}
                </td>
                <td class="px-6 py-4 text-pink-500 font-bold">
                    {interview?.feedback ?? "--"}
                </td>
                <td class="px-6 py-4 flex gap-6">
                    <div class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Join
                    </div>
                    {/* <div class="font-medium text-red-600 hover:underline">
                        Cancel
                    </div> */}
                </td>
            </tr>
  )
}

export default InterviewsTable