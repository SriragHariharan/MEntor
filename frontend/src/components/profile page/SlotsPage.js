import React, { useState } from 'react'

function SlotsPage() {
    const [date, setDate] = useState(null);

  return (
		<div class="w-full">
			<div class="bg-white dark:bg-gray-900 rounded shadow-md p-4">
				<div className="grid grid-cols-1 lg:flex lg:justify-between lg:items-center">
					<div className="">
						<h2 class="text-lg font-bold dark:text-gray-400 ">
							Slots:
						</h2>
						<p className="text-orange-300 font-bold">₹ 500 per slot</p>
						<small className="mb-4 text-gray-400">
							** The slots have a validation of one hour
						</small>
					</div>
					<input
						value={date}
						onChange={(e) => setDate(e.target.value)}
						datepicker
						type="date"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-48 ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Select date"
					/>
				</div>
				{/* slots listing section */}
				<div className="mt-12">
					<button
						type="button"
						class="text-dark bg-green-300 hover:bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
					>
						07:00
					</button>
					<button
						type="button"
						class="text-dark bg-green-300 hover:bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
					>
						08:00
					</button>
					<button
						type="button"
						class="text-dark bg-green-300 hover:bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
					>
						10:00
					</button>
					<button
						type="button"
						class="text-dark bg-green-300 hover:bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
					>
						11:00
					</button>
					<button
						type="button"
						class="text-dark bg-red-300 hover:bg-red-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
					>
						12:00
					</button>
					<button
						type="button"
						class="text-dark bg-red-300 hover:bg-red-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
					>
						14:00
					</button>
					<button
						type="button"
						class="text-dark bg-green-300 hover:bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
					>
						16:00
					</button>
					<button
						type="button"
						class="text-dark bg-green-300 hover:bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
					>
						17:30
					</button>
					<button
						type="button"
						class="text-dark bg-green-300 hover:bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
					>
						19:45
					</button>
				</div>
                <div className="text-slate-400 dark:text-slate-700  text-5xl">No slots available on the selected date : (</div>
			</div>
		</div>
  );
}

export default SlotsPage