import React, { useEffect, useState } from 'react'
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    Navigate,
} from "react-router-dom";
import RootLayout from '../layouts/RootLayout';
import Login from '../components/Login';
import ENDPOINTS from '../configs/endpoints';
import useAxios from '../hooks/useAxios';
import ProtectedRoutes from '../layouts/ProtectedRoutes';
import Mentors from '../pages/Mentors';
import Mentees from '../pages/Mentees';
import Transactions from '../components/Transactions';
import Approvals from '../pages/Approvals';


function useRoutes() {
    const [adminAuthenticated, setAdminAuthenticated] = useState(true);
    const axiosInstance =useAxios();
    
    // useEffect(() => {
    //     axiosInstance.post(ENDPOINTS.ADMIN_SESSION)
    //     .then(resp => {
    //         setAdminAuthenticated(resp.data.success)
    //         console.log("success :::",resp.data.success)
    //     }).catch(err => console.log("error :::",err?.resp?.data?.message));
    // },[])


    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<RootLayout/>}>
                    <Route path="/" element={<ProtectedRoutes adminAuthenticated={adminAuthenticated} />}>
                        <Route path="/mentors" element={ <Mentors /> } />                    
                        <Route path="/mentees" element={ <Mentees /> } />
                        <Route path="/transactions" element={ <Transactions /> } />
                        <Route path="/approvals" element={ <Approvals /> } />
                    </Route>
                    <Route path="login" element={<Login />} />
                </Route>
            </>
        )
    );
    return router;
}

export default useRoutes