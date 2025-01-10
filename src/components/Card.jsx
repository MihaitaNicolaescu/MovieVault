import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

/* eslint-disable react/prop-types */
function Card({children}) {
    const [show, setShow] = useState(true);
    return (
        <div id="card" className="bg-[#212429] m-2 rounded-md w-1/2 h-full overflow-y-auto hide-scrollbar">
            <div className="relative">
                <button className="z-10 absolute right-2 top-2 w-5 h-5 flex items-center justify-center text-white text-[10px] bg-gray-500 hover:bg-gray-600 rounded-full shadow-md focus:outline-none"
                onClick={() => {setShow(!show)}}>{show ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}</button>
            </div>

            {show && <>{children}</>}
        </div>
    )
}

export default Card;