import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/mentee/Navbar';
import MentorNavbar from '../components/mentor/MentorNavbar';

function MenteeProtectedRoutes({user, role}) {
    return user ? 
        <>
        {
            (role==="mentor") ? <MentorNavbar /> : <Navbar />
        }
            
            <div class="pt-16 sm:ml-64">
                <Outlet />
            </div>
        </>
        : <Navigate to={"/mentee/login"} />
}

export default MenteeProtectedRoutes;
