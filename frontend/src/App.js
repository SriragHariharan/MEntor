import Navbar from "./components/mentee/Navbar";
import LandingPage from "./pages/LandingPage"
function App() {
  return (
		<div className="dark">
			<Navbar />
			<div class="pt-20 sm:ml-64">
           <LandingPage /> 
			</div>
		</div>
  );
}

export default App;
