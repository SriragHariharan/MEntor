import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function MenteeAuthRoutes({user}) {
    console.log("user :::::", user);
    return !user ? <Outlet /> : <Navigate to={"/mentee/profile"} />  
}

export default MenteeAuthRoutes
