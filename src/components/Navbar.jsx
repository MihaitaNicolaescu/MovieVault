function Navbar() {
    return (
        <div id="navbar" className="grid grid-cols-3 bg-purple-800 h-16 content-center rounded-md w-1/2">
            <div>
                <p className="block mb-2 text-2xl content-center font-extrabold text-white p-1 font-sans">movieVault🗄️</p>
            </div>
            <div className="flex items-center justify-center">
                <input type="text" id="search" className="rounded-lg w-full py-2 px-3 text-white bg-purple-600 placeholder:text-gray-300" placeholder="Search movie" required />
            </div>
            <div className="flex items-center justify-center">
                <p className="text-white">Found <strong>99</strong> results</p>
            </div>
        </div>
    )
}

export default Navbar;