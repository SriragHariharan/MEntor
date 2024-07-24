import React, { useState } from 'react'
import WebinarCard from '../components/webinars/WebinarCard'
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import AddWebinarModal from '../components/webinars/AddWebinarModal';

function Webinars() {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleToggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    
  return (
    <div>
        <div className="md:px-36 py-4 dark:bg-gray-800 px-4">
            <div className="flex justify-between">
                {/* dropdown */}
                <div class="w-[150px] text-gray-900 dark:text-gray-100">
                    <div class="relative w-full group">
                        {/* <label class="text-xs text-gray-400">Select Category</label> */}
                        <button class="py-2.5 px-3 w-full md:text-sm text-site      bg-transparent border border-dimmed  focus:border-brand     focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold text-gray-500">
                            Select
                        </button>
                        <div
                            class="absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-gray-100 dark:bg-gray-800  border border-dimmed text-xs md:text-sm">
                            <div
                                class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
                                All (9)</div>
                            <div
                                class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
                                Free
                            </div>
                            <div
                                class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
                                Paid
                            </div>
                            <div
                                class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
                                My webinars
                            </div>
                        </div>
                    </div>
                </div>
                {/* search bar */}
                <div class="flex items-center max-w-sm">   
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                            </svg>
                        </div>
                        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a webinar title" required />
                    </div>
                    <button class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-80 dark:bg-blue-600 dark:hover:bg-blue-700">
                        <FaSearch/>
                    </button>

                    {/* show button if only mentor */}
                    <button onClick={handleToggleModal} class="p-2 ms-2 text-xl font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-80 dark:bg-green-600 dark:hover:bg-green-700">
                        <IoMdAdd/>
                    </button>
                </div>
            </div>
            <WebinarCard />
        </div>

        {/* modal to add webinar */}
        {isModalOpen && <AddWebinarModal handleToggleModal={handleToggleModal} /> }

    </div>
  )
}

export default Webinars