import Navbar from "./components/mentee/Navbar";
import LandingPage from "./pages/LandingPage"
import Mentors from "./pages/Mentors";
import ProfilePage from "./pages/ProfilePage";
function App() {
  return (
		<div className="dar">
			<Navbar />
			<div class="pt-16 sm:ml-64">
           		<Mentors />
			</div>
		</div>
  );
}

export default App;
