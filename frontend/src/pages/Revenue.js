import React, { useState } from 'react'
import BankACForm from '../components/revenue/BankACForm';
import RevenueTable from '../components/revenue/RevenueTable';

function Revenue() {
    const [showModal, setShowModal] = useState(false);

    const toggleAccountModal = () => {
        setShowModal(!showModal);
    }

  return (
    <div className='pt-8 px-2 dark:bg-gray-800'>
        <div className="flex justify-between">
            {/* <div className="bg-orange-200 px-4 py-2 rounded-xl text-red-500">
                Hi, You haven't added your bank account yet. Please add bank account details to recieve payments.
            </div> */}
            <div className="bg-green-200 px-4 py-4 rounded-xl text-gray-500">
                Total revenue generated: <span className="text-xl font-extrabold text-black">$197</span> 
            </div>
            <div onClick={toggleAccountModal}>
                <div className="bg-green-500 text-center text-white rounded-xl py-2 px-4 cursor-pointer">A/C details</div>
            </div>
        </div>
        <small className='dark:text-white'>
            <sup>*</sup>
            Amount will be transfered in 7 business days
        </small>
        {
            showModal && <BankACForm setShowModal={setShowModal} />
        }
        <div className='my-8'>
            <RevenueTable />
        </div>
    </div>
  )
}

export default Revenue