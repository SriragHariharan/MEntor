import React from 'react'

//mentor card listed here
const Card =  ({img}) => {
    return(
        <div
            class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto my-8 bg-white dark:bg-gray-900 shadow-xl rounded-lg hover:shadow-3xl hover:shadow-gray-500">
            <div class="rounded-t-lg h-32 overflow-hidden">
                <img class="object-cover object-top w-full" src={img} alt='Mountain' />
            </div>
            <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img class="object-cover object-center h-32" src={img} alt='Woman looking front' />
            </div>
            <div class="text-center mt-2">
                <h2 class="font-semibold dark:text-slate-300">Sarah Smith</h2>
                <p class="text-gray-500">Freelance Web Designer</p>
            </div>
            <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">
                <li class="flex flex-col items-center justify-around">
                    <svg class="w-4 fill-current text-blue-900 dark:text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <div className='dark:text-blue-300'>2k</div>
                </li>
                <li class="flex flex-col items-center justify-between">
                    <svg class="w-4 fill-current text-blue-900 dark:text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                    </svg>
                    <div  className='dark:text-blue-300'>10k</div>
                </li>
                <li class="flex flex-col items-center justify-around">
                    <svg class="w-4 fill-current text-blue-900 dark:text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                    </svg>
                    <div className='dark:text-blue-300'>15</div>
                </li>
            </ul>
            <div class="p-4 border-t mx-8 mt-2">
                <button class="w-1/2 block mx-auto rounded-full bg-gray-900 dark:bg-gray-600 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
            </div>
        </div>
    )
}


function Mentors() {
  return (
		<div className="dark:bg-gray-800 pt-4">

            {/* search section */}
			<div className="grid grid-cols-2 lg:flex lg:justify-between">
				<div className="flex ps-4 gap-4">
                <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">All</span>
                </label>

					{/* mentor sort form */}
					<form class="max-w-sm mx-auto">
						<select
							id="mentor-sort"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						>
							<option selected>Sort mentors</option>
							<option value="default">Default</option>
							<option value="top_rated">Top rated</option>
							<option value="newest">Newest</option>
							<option value="oldest">Oldest</option>
							<option value="atz">Name: A to Z</option>
							<option value="zta">Name: Z- A</option>
						</select>
					</form>
				</div>

				<div className="flex">
					{/* mentor search form */}
					<form class="items-center max-w-md mx-auto flex">
						<label for="simple-search" class="sr-only">
							Search
						</label>
						<div class="relative w-full">
							<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
								<svg
									class="w-4 h-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 18 20"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
									/>
								</svg>
							</div>
							<input
								type="text"
								id="simple-search"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Search branch name..."
								required
							/>
						</div>
						<button
							type="submit"
							class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							<svg
								class="w-4 h-4"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
							<span class="sr-only">Search</span>
						</button>
					</form>
				</div>
			</div>

            {/* cards section */}
			<div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-5 lg:px-4 ">
				<Card
					img={
						"https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHx1c2VyfGVufDB8MHx8fDE2OTQwOTU5Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080"
					}
				/>
				<Card
					img={
						"https://th.bing.com/th/id/OIP._IuQ_gyTEh4OsB4TxqSHywHaEz?rs=1&pid=ImgDetMain"
					}
				/>
				<Card
					img={
						"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
					}
				/>
				<Card
					img={
						"https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
					}
				/>
				<Card
					img={
						"https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHx1c2VyfGVufDB8MHx8fDE2OTQwOTU5Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080"
					}
				/>
				<Card
					img={
						"https://th.bing.com/th/id/OIP._IuQ_gyTEh4OsB4TxqSHywHaEz?rs=1&pid=ImgDetMain"
					}
				/>
				<Card
					img={
						"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
					}
				/>
				<Card
					img={
						"https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
					}
				/>
			</div>
            
		</div>
  );
}

export default Mentors