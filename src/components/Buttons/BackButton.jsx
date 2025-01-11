import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BackButton({icon, action}) {
    return(
        <div className="relative">
            <button className="z-10 absolute left-2 top-2 w-6 h-6 flex items-center justify-center text-gray-800 hover:text-gray-50 text-[10px] bg-white hover:bg-gray-600 rounded-full shadow-md focus:outline-none"
                onClick={action}><FontAwesomeIcon icon={icon} /></button>
        </div>
    )
}

export default BackButton;