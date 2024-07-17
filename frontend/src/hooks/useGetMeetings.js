import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../helpers/axios';

function useGetMeetings() {
    const [meetings, setMeetings] = useState([]);
    const [error, setError] = useState([]);
    
    useEffect(() =>{
        axiosInstance.get(process.env.REACT_APP_INTERVIEW_SVC_ENDPOINT + "/meetings")
        .then(resp => setMeetings(resp.data?.data?.meetings))
        .catch(err => setError(err.message))
    },[])


  return {meetings, error}
}

export default useGetMeetings