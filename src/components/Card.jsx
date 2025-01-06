/* eslint-disable react/prop-types */
function Card({children}) {
    return (
        <div id="card" className="bg-[#212429] m-2 rounded-md w-1/2 h-full overflow-y-auto hide-scrollbar">
            <div className="relative">
                <button className="z-10 absolute right-4 top-4 w-5 h-5 flex items-center justify-center text-white bg-gray-500 hover:bg-gray-600 rounded-full shadow-md focus:outline-none">-</button>
            </div>
            {children}
        </div>
    )
}

export default Card;