import React from 'react'
import { FaGraduationCap } from 'react-icons/fa6';
import { GiBrain } from "react-icons/gi";

function ExperienceCard() {
  return (
		<div class="flex flex-wrap">
			<div class="w-full">
				<div class="bg-white dark:bg-gray-900 rounded shadow-md p-4">
					<div class="flex items-center justify-between">
						<h2 class="text-lg font-bold dark:text-gray-400">
							Experience
						</h2>
						<button
							data-modal-target="experience-modal"
							data-modal-toggle="experience-modal"
							class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							Add Experience
						</button>
					</div>
					<ul class="list-none mb-4">
						<li class="py-4 border-b border-gray-200">
							<div class="flex items-center">
								<div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
									<span class="font-medium text-gray-600 dark:text-gray-300">
										<GiBrain className="text-xl" />
									</span>
								</div>
								<div>
									<h3 class="text-sm font-bold dark:text-gray-500">
										Software Engineer at ABC Company
									</h3>
									<p class="text-sm text-gray-600">
										Jan 2020 - Present
									</p>
								</div>
							</div>
						</li>
						<li class="py-4 border-b border-gray-200">
							<div class="flex items-center">
								<img
									src="https://via.placeholder.com/40"
									alt="Company Logo"
									class="w-10 h-10 rounded-full mr-4"
								/>
								<div>
									<h3 class="text-sm font-bold dark:text-gray-500">
										Intern at DEF Company
									</h3>
									<p class="text-sm text-gray-600">
										Jun 2019 - Aug 2019
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			{/* add experience modal */}
			<div
				id="experience-modal"
				tabindex="-1"
				aria-hidden="true"
				class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
			>
				<div class="relative p-4 w-full max-w-md max-h-full">
					{/* Modal content */}
					<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
						{/* Modal header */}
						<div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
								Add new Experience
							</h3>
							<button
								type="button"
								class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
								data-modal-toggle="experience-modal"
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
						{/* Modal body */}
						<form class="p-4 md:p-5">
							<div class="grid gap-4 mb-4 grid-cols-2">
								<div class="col-span-2">
									<label
										for="name"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Role <span className="text-lg">*</span>
									</label>
									<input
										type="text"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Type your role"
										required=""
									/>
								</div>
								<div class="col-span-2">
									<label
										for="name"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Company{" "}
										<span className="text-lg">*</span>
									</label>
									<input
										type="text"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Type company name"
										required=""
									/>
								</div>
								<div class="col-span-2">
									<label
										for="name"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Timespan{" "}
										<span className="text-lg">*</span>
									</label>
									<input
										type="text"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Type timespan"
										required=""
									/>
								</div>
							</div>
							<button
								type="submit"
								class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								<FaGraduationCap className="text-2xl" /> &nbsp;
								Add experience
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
  );
}

export default ExperienceCard



