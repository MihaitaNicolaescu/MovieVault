/* eslint-disable react/prop-types */
function Card({children}) {
    return (
        <div id="card" className="bg-[#212429] m-2 rounded-md w-1/2 h-full overflow-y-auto hide-scrollbar">
            {children}
        </div>
    )
}

export default Card;