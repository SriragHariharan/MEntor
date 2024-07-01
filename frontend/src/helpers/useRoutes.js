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
import VerifyOtp from '../pages/authentication/VerifyOtp';
import ForgotPassword from '../pages/authentication/ForgotPassword';
import ResetPassword from '../pages/authentication/ResetPassword';
import VerifyEmail from '../pages/authentication/VerifyEmail';
import SelectRole from '../pages/authentication/SelectRole';
import { useSelector } from 'react-redux';
import VerifyPwdOtp from "../pages/authentication/VerifyPwdOtp";


function useRoutes() {
	const USER = useSelector(store => store?.user);
	console.log("AT : ",USER);
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<LandingPage />} />

				{/* mentee routes */}
				<Route path="/mentee" element={<MenteeRootLayout />}>
                    <Route path='/mentee' element={<MenteeAuthRoutes user={USER?.token} role={USER?.role} />}>
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
						<Route path="verifyOTP" element={<VerifyOtp />} />
						<Route path="verify-email" element={<VerifyEmail />} />
						<Route path="forgot-password" element={<ForgotPassword />} />
						<Route path="reset-password" element={<ResetPassword />} />
						<Route path="select-role" element={<SelectRole />} />
						<Route path="verify-password-otp" element={<VerifyPwdOtp />} />
                    </Route>
					{/* Mentee Protected Routes */}
					<Route path='/mentee' element={<MenteeProtectedRoutes user={USER?.token} role={USER?.role}  />}>
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