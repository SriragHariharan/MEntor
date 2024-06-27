import MentorNavbar from "./components/mentor/MentorNavbar";
import AddSlotsPage from "./pages/AddSlotsPage";
import InterviewsPage from "./pages/InterviewsPage";
import Mentees from "./pages/Mentees";

function App() {
  return (
		<div className="dar">
			<MentorNavbar />
			<div class="pt-16 sm:ml-64">
           		<Mentees />
			</div>
		</div>
  );
}

export default App;
