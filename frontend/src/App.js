import MentorNavbar from "./components/mentor/MentorNavbar";
import Mentees from "./pages/Mentees";
import Mentors from "./pages/Mentors";

function App() {
  return (
		<div className="dak">
			<MentorNavbar />
			<div class="pt-16 sm:ml-64">
           		<Mentees />
			</div>
		</div>
  );
}

export default App;
