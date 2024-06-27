import AddSlotsHeader from "../components/mentor/AddSlotsHeader";
import SlotsTable from "../components/mentor/SlotsTable";

function AddSlotsPage() {

  return (
		<div className="py-10 dark:bg-gray-800 h-screen px-4 lg:px-12">
			<AddSlotsHeader />
			<SlotsTable />
		</div>
  );
}

export default AddSlotsPage