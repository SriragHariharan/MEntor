import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import { RiUserFollowFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function ProfileDetailsCard() {
  return (
		<>
			<div class="w-full bg-gray-50 dark:bg-gray-800 overflow-hidden">
				<div class="relative">
					<img
						class="w-full h-64 md:h-64 object-cover"
						src="https://i.ytimg.com/vi/-tI2TkdhRLg/maxresdefault.jpg"
						alt="Cover Picture"
					/>
					<div class="absolute top-full left-1/4 transform -translate-x-1/2 -translate-y-1/2">
						<img
							class="h-36 w-36 lg:h-64 lg:w-64 lg:rounded-full border-4 border-white object-cover"
							src="https://www.cricketlab.co/wp-content/uploads/2015/03/ricky-ponting-portrait.jpg"
							alt="Profile Picture"
						/>
					</div>
				</div>
				<div class="md:flex mt-32">
					<div class="p-8 w-full">
						<div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
							Web Developer and Digital UI/UX Designer
						</div>
						<a
							href="#"
							class="block mt-1 text-xl leading-tight font-medium text-black dark:text-gray-200"
						>
							Ricky Ponting AO
						</a>
						<p class="mt-2 text-gray-600 dark:text-slate-300">
							Overlanding at Media Growth Inc.
						</p>
						<p class="mt-2 flex items-center text-gray-600 dark:text-slate-300">
							Australia &nbsp;&nbsp;&nbsp;
							<div className="flex gap-4 text-blue-400 cursor-pointer text-2xl">
								<FaLinkedin />
								<FaGithub />
							</div>
						</p>
						<div class="mt-4 flex items-center">
							<FaUserFriends className="text-xl text-gray-600 dark:text-gray-400" />
							<span class="ml-2 text-gray-700 dark:text-gray-400">
								500+ connections
							</span>
						</div>
						<p class="mt-4 text-gray-600  dark:text-gray-400">
							Pizza ipsum dolor meat lovers buffalo. Crust tomato
							Aussie green roll beef mozzarella green pie.
							Hawaiian beef mozzarella crust Hawaiian Hawaiian.
							Bianca deep pesto personal mayo garlic. Mayo mayo
							stuffed...
						</p>
						<div class="mt-4">
							<h4 class="text-sm font-semibold text-gray-900 dark:text-gray-300">
								Top skills
							</h4>
							<ul class="list-disc list-inside text-gray-700  dark:text-gray-400">
								<li>Wordpress Development</li>
								<li>Digital Designs</li>
								<li>UI/UX</li>
								<li>
									Web Content Accessibility Guidelines (WCAG)
								</li>
								<li>Search Engine Optimization (SEO)</li>
							</ul>
						</div>
						<div class="mt-4 flex space-x-3">
							<button
								data-modal-target="profile-modal"
								data-modal-toggle="profile-modal"
								class="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
							>
								Edit
							</button>
							<button class="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
								More
							</button>
							<button class="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-300">
								<RiUserFollowFill className="text-3xl" />
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* modal starts here */}
			<div
				id="profile-modal"
				tabindex="-1"
				aria-hidden="true"
				class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
			>
				<div class="relative p-4 w-full max-w-2xl max-h-full">
					<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
						<div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
							<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
								Update profile
							</h3>
							<button
								type="button"
								class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
								data-modal-toggle="profile-modal"
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
						<form class="p-4 md:p-5">
							<div class="grid gap-4 mb-4 grid-cols-2">
								<div class="col-span-2">
									<label
										for="name"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Name
									</label>
									<input
										type="text"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Enter your name"
										required=""
									/>
								</div>
								<div class="col-span-2 sm:col-span-1">
									<label
										for="name"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Title
									</label>
									<input
										type="text"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Enter your title"
										required=""
									/>
								</div>
								<div class="col-span-2 sm:col-span-1">
									<label
										for="name"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Job with position
									</label>
									<input
										type="text"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Enter your job with position"
										required=""
									/>
								</div>
								<div class="col-span-2 sm:col-span-1">
									<label
										for="name"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										github link
									</label>
									<input
										type="text"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Enter github link"
										required=""
									/>
								</div>
								<div class="col-span-2 sm:col-span-1">
									<label
										for="name"
										class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										LinkedIn Profile
									</label>
									<input
										type="text"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										placeholder="Enter your linkedIn profile"
										required=""
									/>
								</div>
								<div class="col-span-2">
									<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Product Description
									</label>
									<textarea
										id="description"
										rows="4"
										class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Write product description here"
									></textarea>
								</div>
								<div class="col-span-2">
									<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Top skills(As comma seprated values)
									</label>
									<textarea
										id="description"
										rows="4"
										class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Javascript, react, docker, kubernetes, node.js, expresss.js, nest.js, gRPC..."
									></textarea>
								</div>
							</div>
							<button
								type="submit"
								class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Update profile
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
  );
}

export default ProfileDetailsCard