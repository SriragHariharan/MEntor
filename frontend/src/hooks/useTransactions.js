import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../helpers/axios';

function useTransactions() {
    const[transactions, setTransactions] = useState([]);

    useEffect(() => {
        axiosInstance.get(process.env.REACT_APP_PAYMENT_SVC_ENDPOINT + "/transactions")
        .then(resp => setTransactions(resp.data.data.transactions))
        .catch(err => console.log(err?.response?.data?.message));
    },[])

    return transactions;
}

export default useTransactions