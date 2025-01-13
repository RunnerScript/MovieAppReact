import React, { useState } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import { useContext, useRef } from "react";
import { useFetchData } from "../hooks/useFetchData";
import WatchListContextWrapper, { WatchListContext } from "../contexts/WatchListContext";
function Movies() {
    const [pageNo, setPageNo] = useState(1);
    const { movies, error, isLoading } = useFetchData(pageNo);
    const observer = useRef(null);

    // const handleNext = () => {
    //     if (pageNo < movies.length - 1) setPageNo(pageNo + 1)
    // }

    // const handlePrevious = () => {
    //     if (pageNo > 1) setPageNo(pageNo - 1);
    // }

    const getLastElementRef = (elem) => {
        if (!elem || isLoading) return;
        const callback = (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setPageNo(prevPage => prevPage + 1);
            }
        }
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(callback, {
            threshold: 1
        });
        observer.current.observe(elem);
    }

    return error ? 'Error Fetching Data' : isLoading ? "Loading..." : (
        <div className="text-2xl font-bold text-center m-5">
            <h1 className="p-2 mb-2">Tranding Movies</h1>
            <div className="flex justify-evenly flex-wrap gap-8">

                {movies.map((movie, index) => {
                    return (
                        <MovieCard isLast={index === movies.length - 1 ? true : false} key={movie.id} movie={movie} getLastElementRef={getLastElementRef} />
                    )

                })}
            </div>
            {/* <Pagination
                pageNo={pageNo}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
            /> */}
        </div>
    )

}
export default Movies;