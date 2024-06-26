import Navbar from "./components/mentee/Navbar";
import LandingPage from "./pages/LandingPage"
import ProfilePage from "./pages/ProfilePage";
function App() {
  return (
		<div className="dark">
			<Navbar />
			<div class="md:pt-16 sm:ml-64">
           		<ProfilePage /> 
			</div>
		</div>
  );
}

export default App;
