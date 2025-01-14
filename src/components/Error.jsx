function Error({message}){
    const data = {
        "no-movies": "No movies searched yet! Start exploring some cinematic wonders! 🍿",
        "loading-movies": "Hang tight, we're finding your movies! 🚀",
        "invalid-movie": "Oops! The movie you’re looking for doesn’t exist. Try another title! 🤔",
    }
    return (
        <>
            <p className="text-[16px] text-white font-bold mt-20 text-center align-middle font-mono">{data[message]}</p>
        </>
    )
}

export default Error;