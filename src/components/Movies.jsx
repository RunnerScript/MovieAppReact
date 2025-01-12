import React, { useState } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import { useContext } from "react";
import { useFetchData } from "../hooks/useFetchData";
import WatchListContextWrapper, { WatchListContext } from "../contexts/WatchListContext";
function Movies() {

    const [pageNo, setPageNo] = useState(1);
    const { watchList, setWatchList, addToWatchList, removeFromWatchList } = useContext(WatchListContext)
    const { movies, error, isLoading } = useFetchData(pageNo);


    const handleNext = () => {
        if (pageNo < movies.length - 1) setPageNo(pageNo + 1)
    }

    const handlePrevious = () => {
        if (pageNo > 1) setPageNo(pageNo - 1);
    }


    return error ? 'Error Fetching Data' : isLoading ? "Loading..." : (
        <div className="text-2xl font-bold text-center m-5">
            <h1 className="p-2 mb-2">Tranding Movies</h1>
            <div className="flex justify-evenly flex-wrap gap-8">

                {movies.map((movie, index) => {
                    if (index + 1 === movies.length) {
                        return (
                            <MovieCard key={movie.id} movie={movie} addToWatchList={addToWatchList} watchList={watchList} removeFromWatchList={removeFromWatchList} />
                        )
                    } else {
                        return (
                            <MovieCard key={movie.id} movie={movie} addToWatchList={addToWatchList} watchList={watchList} removeFromWatchList={removeFromWatchList} />
                        )
                    }

                })}
            </div>
            <Pagination
                pageNo={pageNo}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
            />
        </div>
    )

}
export default Movies;