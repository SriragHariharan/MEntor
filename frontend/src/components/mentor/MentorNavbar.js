import React from "react";
import logo from "../../assets/images/landingpage/mentor logo.jpg";

//react icons
import { MdDashboardCustomize } from "react-icons/md";
import { BsFilePost } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
import { BsChatSquareText } from "react-icons/bs";
import { GiPublicSpeaker } from "react-icons/gi";
import { FaGear } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { PiStudentBold } from "react-icons/pi";
import { FaCheckToSlot } from "react-icons/fa6";
import { TbPigMoney } from "react-icons/tb";

import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logoutUserAction } from "../../redux toolkit/userSlice";

function MentorNavbar() {
	const dispatch = useDispatch();
	const logoutMentor = () => {
		dispatch(logoutUserAction())
	}

	return (
		<div className="">
			<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
				<div className="px-3 py-3 lg:px-5 lg:pl-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center justify-start rtl:justify-end">
							<button
								data-drawer-target="separator-sidebar"
								data-drawer-toggle="separator-sidebar"
								aria-controls="separator-sidebar"
								type="button"
								className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							>
								<span className="sr-only">Open sidebar</span>
								<i className="fa-solid fa-bars"></i>
							</button>
							<div className="flex ms-2 md:me-24">
								<img
									src={logo}
									className="h-12 me-3"
									alt="MEntor Logo"
								/>
							</div>
						</div>
						<div className="flex items-center">
							<div className="flex items-center ms-3">
								<div className="flex items-center gap-4">
									<MdDarkMode className="cursor-pointer w-8 h-8 text-gray-500" />
									<IoMdSunny className="cursor-pointer w-8 h-8 text-yellow-300" />
									<img
										className="w-10 h-10 rounded-full cursor-pointer"
										src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
										alt="user photo"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>

			<aside
				id="separator-sidebar"
				className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
				aria-label="Sidebar"
			>
				<div className="h-full px-3 py-4 overflow-y-auto no-scrollbar bg-gray-50 dark:bg-gray-800">
					<div className="space-y-2 font-medium  mt-16">
						<div className="flex items-center p-2 text-green-500">
							<MdDashboardCustomize className="text-2xl" />
							<span className="ms-3">Dashboard</span>
						</div>
						<div className="flex items-center p-2 text-green-500">
							<BsFilePost className="text-2xl" />
							<span className="ms-3">Feed</span>
						</div>
						<div className="flex items-center p-2 text-green-500">
							<FaPeopleGroup className="text-2xl" />
							<span className="ms-3">Mentors</span>
						</div>
						<div className="flex items-center p-2 text-green-500">
							<PiStudentBold className="text-2xl" />
							<span className="ms-3">Mentees</span>
						</div>
						<div className="flex items-center p-2 text-green-500">
							<FaLaptopCode className="text-2xl" />
							<span className="ms-3">Webinars</span>
						</div>
						<div className="flex items-center p-2 text-green-500">
							<BsChatSquareText className="text-2xl" />
							<span className="ms-3">Chats</span>
							<span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
								3
							</span>
						</div>
						<div className="flex items-center p-2 text-green-500">
							<GiPublicSpeaker className="text-2xl" />
							<span className="ms-3">Rooms</span>
						</div>
						<div className="flex items-center p-2 text-green-500">
							<MdWork className="text-2xl" />
							<span className="ms-3">Interviews</span>
						</div>
						<div className="flex items-center p-2 text-green-500">
							<FaCheckToSlot className="text-2xl" />
							<span className="ms-3">Slots</span>
						</div>
						<div className="flex items-center p-2 text-green-500">
							<TbPigMoney className="text-2xl" />
							<span className="ms-3">Revenue</span>
						</div>
						<div className="flex items-center p-2 text-green-500">
							<AiOutlineBell className="text-2xl" />
							<span className="ms-3">Notifications</span>
							<span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
								3
							</span>
						</div>
						<div className="flex items-center p-2 text-green-500">
							<FaGear className="text-2xl" />
							<span className="ms-3">Profile</span>
						</div>
					</div>
					<div className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
						<div className="flex items-center p-2 text-gray-500">
							<IoIosHelpCircleOutline className="text-2xl" />
							<span className="ms-3">Help</span>
						</div>
						<div onClick={logoutMentor} className="flex items-center p-2 text-red-500">
							<AiOutlineLogout className="text-2xl" />
							<span className="ms-3">Logout</span>
						</div>
					</div>
				</div>
			</aside>
		</div>
	);
}

export default MentorNavbar;
