function InfoTile() {
    return (
        <div className="info-tile">
            <div className="grid grid-flow-row border-b-2 w-full h-20 border-gray-500 bg-gray-600">
                <div className="m-3">
                    <div className="flex ml-12 text-white text-[18px] font-semibold">
                        <p>Your Movie Journey</p>
                    </div>
                    <div className="grid grid-flow-col text-white text-[13px]">
                        <p className="font-bold">🍿 3 movies</p>
                        <p className="font-bold">🌟 9.99</p>
                        <p className="font-bold">⌛ 245 min</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoTile;