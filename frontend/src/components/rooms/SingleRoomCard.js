import { FaArrowRightLong } from "react-icons/fa6";
import { GiPublicSpeaker } from "react-icons/gi";

function SingleRoomCard() {
  return (
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="text-center text-4xl text-gray-400">
                <GiPublicSpeaker />
            </div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                CSR and SSR. Which is better for current situation ?
            </h5>
            <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 cursor-pointer">
                Join now &nbsp;&nbsp; <FaArrowRightLong />
            </div>
        </div>
  )
}

export default SingleRoomCard