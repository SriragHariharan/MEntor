import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/mentee/Navbar';

function MenteeProtectedRoutes() {
    let mentee = null;
    return mentee ? 
        <>
            <Navbar />
            <div class="pt-16 sm:ml-64">
                <Outlet />
            </div>
        </>
        : <Navigate to={"/mentee/login"} />
}

export default MenteeProtectedRoutes;
