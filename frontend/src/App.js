import {GoogleOAuthProvider} from '@react-oauth/google';

import MentorNavbar from "./components/mentor/MentorNavbar";
import Mentees from "./pages/Mentees";
import Login from './pages/authentication/Login';
import Signup from './pages/authentication/Signup';

function App() {
  return (
		<GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}>
			{/* <div className="dar">
				<MentorNavbar />
				<div class="pt-16 sm:ml-64">
					<Mentees />
				</div>
			</div> */}
			<Login />
			<Signup />
		</GoogleOAuthProvider>
  );
}

export default App;
