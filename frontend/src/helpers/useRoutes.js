import React from 'react'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

//layouts
import MenteeRootLayout from '../layouts/MenteeRootLayout';

//pages
import LandingPage from '../pages/LandingPage';
import Login from "../pages/authentication/Login";
import Signup from "../pages/authentication/Signup";
import MenteeProtectedRoutes from '../layouts/MenteeProtectedRoutes';
import ProfilePage from '../pages/ProfilePage';
import Mentors from '../pages/Mentors';
import Notifications from '../pages/Notifications';
import InterviewsPage from '../pages/InterviewsPage';
import MenteeAuthRoutes from '../layouts/MenteeAuthRoutes';


function useRoutes() {
    const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<LandingPage />} />

				{/* mentee routes */}
				<Route path="/mentee" element={<MenteeRootLayout />}>
                    <Route path='/mentee' element={<MenteeAuthRoutes />}>
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </Route>
					{/* Mentee Protected Routes */}
					<Route path='/mentee' element={<MenteeProtectedRoutes />}>
						<Route path="/mentee/profile" element={<ProfilePage />} />
						<Route path="/mentee/mentors" element={<Mentors />} />
						<Route path="/mentee/notifications" element={<Notifications />} />
						<Route path="/mentee/interviews" element={<InterviewsPage />} />
					</Route>
				</Route>
                
				{/* mentor routes */}

			</>
		)
	);
  
  
    return router;
}

export default useRoutes