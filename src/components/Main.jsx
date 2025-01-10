function Main({children}) {

    return(
        <div className='place-items-center'>
            <div className='flex h-[500px] w-1/2 m-1 items-center gap-0'>
                {children}
            </div>
        </div>
    )
}

export default Main;