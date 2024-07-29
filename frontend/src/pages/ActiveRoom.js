//show the details of the single room

import React from 'react'
import RoomUser from '../components/rooms/RoomUser'
import CreateRoomForm from '../components/rooms/CreateRoomForm'
import ActiveMe from '../components/rooms/ActiveMe'

function ActiveRoom() {
  return (
    <>
        <div className='text-4xl font-extrabold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, vel!</div>
        <div className="text-gray-500 font-semibold">n participants</div>
        <div className="grid grid-cols-4 gap-4 py-12 dark:bg-gray-800">
            <div className="col-span-4 md:col-span-3">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    <RoomUser /><RoomUser /><RoomUser /><RoomUser /><RoomUser /><RoomUser />
                    <RoomUser /><RoomUser /><RoomUser /><RoomUser /><RoomUser /><RoomUser />
                    <RoomUser /><RoomUser /><RoomUser /><RoomUser /><RoomUser /><RoomUser />
                    <RoomUser /><RoomUser /><RoomUser /><RoomUser /><RoomUser /><RoomUser />
                    <RoomUser /><RoomUser /><RoomUser /><RoomUser /><RoomUser /><RoomUser />
                </div>
            </div>
            <div className="col-span-4 md:col-span-1 md:me-2 fixed right-0">
                <ActiveMe />
            </div>
        </div>
    </>
  )
}

export default ActiveRoom