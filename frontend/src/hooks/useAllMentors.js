import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../helpers/axios';

function useAllMentors() {
    //set mentors
	const[mentorsList, setMentorsList] = useState([]);
    const [error, setError] = useState(null);

	//fetch mentor list from server
	useEffect(() =>{
		axiosInstance.get(process.env.REACT_APP_PROFILE_SVC_ENDPOINT + "users/mentors")
		.then(resp => setMentorsList(resp?.data?.data?.mentors))
		.catch(err => setError(err.message))
	},[])

  return {mentorsList, error}
}

export default useAllMentors