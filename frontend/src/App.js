import MentorNavbar from "./components/mentor/MentorNavbar";
import AddSlotsPage from "./pages/AddSlotsPage";

function App() {
  return (
		<div className="dark">
			<MentorNavbar />
			<div class="pt-16 sm:ml-64">
           		<AddSlotsPage />
			</div>
		</div>
  );
}

export default App;
