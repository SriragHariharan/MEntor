import {GoogleOAuthProvider} from '@react-oauth/google';

import MentorNavbar from "./components/mentor/MentorNavbar";
import Notifications from './pages/Notifications';

function App() {
  return (
		<GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}>
			<div className="dark">
				<MentorNavbar />
				<div class="pt-16 sm:ml-64">
					<Notifications />
				</div>
			</div>
		</GoogleOAuthProvider>
  );
}

export default App;
