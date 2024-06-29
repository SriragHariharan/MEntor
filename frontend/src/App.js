import {GoogleOAuthProvider} from '@react-oauth/google';
import { ToastContainer } from "react-toastify";
import useRoutes from './helpers/useRoutes';
import { RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
	const router = useRoutes();
	const isDarkTheme = useSelector((store) => store?.isDark?.isThemeDark);
  return (
		<GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}>
			<ToastContainer />
			<div className={isDarkTheme && "dark"}>
				<RouterProvider router={router} />
				{/* <MentorNavbar />
				<div class="pt-16 sm:ml-64">
					<Notifications />
				</div> */}
			</div>
		</GoogleOAuthProvider>
  );
}

export default App;
