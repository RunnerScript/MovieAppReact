function Pagination({ pageNo, handleNext, handlePrevious }) {
    return (
        <div className="w-full h-[50px] bg-gray-400 mt-8 p-4  flex justify-center gap-2">
            <div onClick={handlePrevious}>
                <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="font-bold text-2xl">
                {pageNo}
            </div>

            <div onClick={handleNext}>
                <i className="fa-solid fa-arrow-right"></i>
            </div>

        </div>
    )
}
export default Pagination;