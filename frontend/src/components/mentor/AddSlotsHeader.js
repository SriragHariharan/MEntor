import React, { useState } from 'react'

function AddSlotsHeader() {
	const [dateTime, setDateTime] = useState("");

	const handleInputChange = (event) => {
		setDateTime(event.target.value);
	};
  return (
		<div>
			<div className="flex justify-between">
				<div className="">
					<div className="text-3xl font-semibold dark:text-gray-500">
						Slots: {dateTime.replace("T", " @ ")}
					</div>
					<div className="text-sm font-semibold text-gray-300 dark:text-gray-600 hidden lg:block">
						You can add slots to support Mentees
					</div>
				</div>
				<button
					data-modal-target="add-slots-modal"
					data-modal-toggle="add-slots-modal"
					type="button"
					class=" text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
				>
					Slots +
				</button>
			</div>
			
			<div
				id="add-slots-modal"
				tabindex="-1"
				aria-hidden="true"
				class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
			>
				<div class="relative p-4 w-full max-w-md max-h-full">
					{/* <!-- Modal content --> */}
					<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
						{/* <!-- Modal header --> */}
						<div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
								Add slots
							</h3>
							<button
								type="button"
								class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
								data-modal-toggle="add-slots-modal"
							>
								<svg
									class="w-3 h-3"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 14"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
									/>
								</svg>
								<span class="sr-only">Close modal</span>
							</button>
						</div>
						{/* <!-- Modal body --> */}
						<form class="p-4 md:p-5">
							<div class="grid gap-4 mb-4 grid-cols-2">
								<div class="col-span-2">
									<label
										for="name"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Date
									</label>
									<input
										type="date"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Type product name"
										required=""
									/>
								</div>
								<div class="col-span-2">
									<label
										for="name"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Time
									</label>
									<input
										type="time"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Type product name"
										required=""
									/>
								</div>
                                <div class="col-span-2">
									<label
										for="name"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Amount in ₹
									</label>
									<input
										type="number"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Type product name"
										required=""
									/>
								</div>
							</div>
							<label class="inline-flex items-center cursor-pointer">
								<input
									type="checkbox"
									value=""
									class="sr-only peer"
								/>
								<div class="relative w-11 h-6 bg-gray-200 outline-blue-500 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
								<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
									Add same slot for consecutive 7 days
								</span>
							</label>
							<button
								type="submit"
								class="mt-4 text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Add slots
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
  );
}

export default AddSlotsHeader