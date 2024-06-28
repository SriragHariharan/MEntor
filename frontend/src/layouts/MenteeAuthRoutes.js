import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function MenteeAuthRoutes() {
    let mentee = true;
    return !mentee ? <Outlet /> : <Navigate to={"/mentee/profile"} />  
}

export default MenteeAuthRoutes
