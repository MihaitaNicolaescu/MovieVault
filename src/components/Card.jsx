import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */
function Card({children}) {
    return (
        <div id="card" className="bg-[#212429] m-2 rounded-md w-1/2 h-full overflow-y-auto hide-scrollbar">
            <div className="relative">
                <button className="z-10 absolute right-2 top-2 w-4 h-4 flex items-center justify-center text-white text-[10px] bg-gray-500 hover:bg-gray-600 rounded-full shadow-md focus:outline-none"><FontAwesomeIcon icon={faMinus} /></button>
            </div>
            {children}
        </div>
    )
}

export default Card;