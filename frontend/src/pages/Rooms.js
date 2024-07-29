import CreateRoomForm from "../components/rooms/CreateRoomForm";
import SingleRoomCard from "../components/rooms/SingleRoomCard";

//the page showing the rooms in the application
function Rooms(){
    return(
        <div className="grid grid-cols-4 gap-4 py-12 dark:bg-gray-800">
            <div className="col-span-4 md:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <SingleRoomCard /><SingleRoomCard />
                    <SingleRoomCard /><SingleRoomCard />
                    <SingleRoomCard /><SingleRoomCard />
                    <SingleRoomCard /><SingleRoomCard />
                    <SingleRoomCard /><SingleRoomCard />
                    <SingleRoomCard /><SingleRoomCard />
                    <SingleRoomCard /><SingleRoomCard />
                    <SingleRoomCard /><SingleRoomCard />
                    <SingleRoomCard /><SingleRoomCard />
                    <SingleRoomCard /><SingleRoomCard />
                    <SingleRoomCard /><SingleRoomCard />
                    <SingleRoomCard /><SingleRoomCard />
                    <SingleRoomCard /><SingleRoomCard />
                    <SingleRoomCard /><SingleRoomCard />
                    <SingleRoomCard /><SingleRoomCard />
                </div>
            </div>
            <div className="col-span-4 md:col-span-1 md:me-2 fixed right-0">
                <CreateRoomForm />
            </div>
        </div>
    )
}

export default Rooms;