import React from 'react'
 
 function WebinarCard() {

    return (
	    <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto bg-white dark:bg-gray-600 my-4">
            <div className="w-full md:w-1/3 grid place-items-center">
                <img src="https://c4.wallpaperflare.com/wallpaper/240/140/931/docker-animals-happy-whale-turtle-hd-wallpaper-preview.jpg" alt="tailwind logo" className="rounded-xl" />
            </div>
			<div className="w-full md:w-2/3 bg-white dark:bg-gray-600 flex flex-col space-y-2 p-3">
				<div className="flex justify-between item-center">
					<p className="text-gray-500 font-medium hidden md:block">Vacations</p>
                    <p className="text-gray-300 font-bold text-sm ml-1">
                        4 registered
                    </p>
					
					<div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
						@srirag hariharan
                    </div>
				</div>
				<div className="font-black text-gray-800 md:text-2xl text-md">The Majestic and Wonderful Bahamas</div>
				<p className="md:text-sm text-gray-500 text-xs">The best kept secret of The Bahamas is the country’s sheer
					size and diversity. With 16 major islands, The Bahamas is an unmatched destination</p>
				<p className="text-base font-black text-gray-800">
					$110
					<span className="font-normal text-gray-600 text-base">/night</span>
				</p>
			</div>
		</div>
    )
}

export default WebinarCard