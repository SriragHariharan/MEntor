import React from 'react'
import SuccessNotification from '../components/notification/SuccessNotification'
import NormalNotification from '../components/notification/NormalNotification'

function Notifications() {
  return (
		<div className="md:px-48 py-10 dark:bg-gray-800 px-4">
			<div className="flex justify-between items-center mb-12">
				<div>
					<div className="text-3xl font-semibold dark:text-gray-500">
						Notifications
					</div>
					<div className="text-sm font-semibold text-gray-300 dark:text-gray-600 hidden lg:block">
						You've 3 unread notifications
					</div>
				</div>
				<button
					type="button"
					class="text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700"
				>
					Mark all as read
				</button>
			</div>
			<SuccessNotification />
			<NormalNotification />

			<div class="flex items-center justiyf-between">
				<hr class="w-full" />
				<p tabindex="0" class="focus:outline-none text-md flex flex-shrink-0 leading-normal px-3 py-16 text-gray-400">Thats it for now : )</p>
				<hr class="w-full" />
			</div>
		</div>
  );
}

export default Notifications