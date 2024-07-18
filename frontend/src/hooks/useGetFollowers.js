import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../helpers/axios';

function useGetFollowers() {
    const [followers, setFollowers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axiosInstance.get(process.env.REACT_APP_PROFILE_SVC_ENDPOINT + "/followers")
        .then(resp => setFollowers(resp.data.data.followers))
        .catch(err => setError(err?.message));
    },[])

    return {followers, error}
}

export default useGetFollowers