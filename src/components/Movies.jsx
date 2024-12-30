import React, { useState } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import axios from "axios";
function Movies() {

    const [movies, setMovies] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [pageNo, setPageNo] = useState(1);

    useEffect(() => {
        const movies = JSON.parse(localStorage.getItem('movies'));
        if (movies) {
            setWatchList(movies);
        }
    }, []);

    useEffect(() => {
        async function getMovies() {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=4d5faadd2245e5595c32f0c35d14f975&language=en-US&page=${pageNo}`);
                const movies = response.data.results;
                setMovies(movies);
                console.log(movies)
            }
            catch (e) {
                console.error(e);
            }
        }
        getMovies();

    }, [pageNo]);

    const handleNext = () => {
        if (pageNo < movies.length - 1) setPageNo(pageNo + 1)
    }

    const handlePrevious = () => {
        if (pageNo > 1) setPageNo(pageNo - 1);
    }

    const addToWatchList = (movie) => {
        const updateList = [...watchList, movie];
        setWatchList(updateList);
        localStorage.setItem('movies', JSON.stringify(updateList))
    }

    const removeFromWatchList = (movieId) => {
        const updateList = watchList.filter((mv) => mv.id !== movieId);
        localStorage.setItem('movies', JSON.stringify(updateList));
        setWatchList(updateList);
    }



    return (
        <div className="text-2xl font-bold text-center m-5">
            <h1 className="p-2 mb-2">Tranding Movies</h1>
            <div className="flex justify-evenly flex-wrap gap-8">

                {movies.map((movie, index) => {
                    return (
                        <MovieCard key={movie.id} movie={movie} addToWatchList={addToWatchList} watchList={watchList} removeFromWatchList={removeFromWatchList} />
                    )
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