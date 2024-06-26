import React from 'react'

function SkillsCard() {
  return (
		<div class="w-full">
			<div class="bg-white dark:bg-gray-900 rounded shadow-md p-4">
				<div class="flex items-center justify-between">
					<h2 class="text-lg font-bold dark:text-gray-400">Skills</h2>
					<button
						data-modal-target="skills-modal"
						data-modal-toggle="skills-modal"
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					>
						Add Skill
					</button>
				</div>
				<ul class="list-none mb-4">
					<li class="py-4 border-b border-gray-200 ">
						<div class="flex justify-between items-center">
							<span class="text-sm font-bold dark:text-gray-500">
								JavaScript
							</span>
							<span class="text-sm text-gray-500 dark:text-gray-500">
								Advanced
							</span>
						</div>
					</li>
					<li class="py-4 border-b border-gray-200">
						<div class="flex justify-between  items-center">
							<span class="text-sm font-bold dark:text-gray-500">
								HTML/CSS
							</span>
							<span class="text-sm text-gray-600 dark:text-gray-500">
								Intermediate
							</span>
						</div>
					</li>
				</ul>
			</div>

			{/* modal starts here */}
			<div id="skills-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
				<div class="relative p-4 w-full max-w-md max-h-full">
					{/* <!-- Modal content --> */}
					<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
						{/* <!-- Modal header --> */}
						<div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
								Add skills you hold
							</h3>
							<button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="skills-modal">
								<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
								</svg>
								<span class="sr-only">Close modal</span>
							</button>
						</div>
						{/* <!-- Modal body --> */}
						<form class="p-4 md:p-5">
							<div class="grid gap-4 mb-4 grid-cols-2">
								<div class="col-span-2">
									<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skill</label>
									<input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white " placeholder="Type your skill" required="true" />
								</div>

								<div class="col-span-2">
									<label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
									<select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
										<option selected="">Select category</option>
										<option value="TV">Beginner</option>
										<option value="PC">Intermediate</option>
										<option value="GA">Advanced</option>
										<option value="PH">Pro</option>
									</select>
								</div>
							</div>
							<button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
								Add skill
							</button>
						</form>
					</div>
				</div>
			</div> 
		</div>
  );
}

export default SkillsCard