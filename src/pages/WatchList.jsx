import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import genreids from "../constants";
function WatchList() {
    const [watchList, setWatchList] = useState([])
    useEffect(() => {
        const movies = JSON.parse(localStorage.getItem('movies'));
        setWatchList(movies);
    }, []);
    console.log(watchList);
    return (
        <div className="p-4 mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-s-orange-600">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                    <tr>
                        <th className="table-cell">Name</th>
                        <th className="table-cell px-6 py-3 ">Rattings</th>
                        <th className="table-cell px-6 py-3">Popularity</th>
                        <th className="table-cell px-6 py-3">Genre</th>
                    </tr>
                </thead>
                <tbody>


                    {watchList.map(movie => (
                        <tr key={movie.id}>
                            <td className="flex font-bold gap-4 items-center">
                                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}
                                    className='object-fit object-cover h-[6rem] w-[10rem]'
                                />
                                {movie.title}</td>
                            <td className="table-cell px-6 py-3 ">{movie.vote_average}</td>
                            <td className="table-cell px-6 py-3">{movie.popularity}</td>
                            <td className="table-cell px-6 py-3">{genreids[movie.genre_ids[0]]}</td>
                        </tr>
                    ))}



                </tbody>
            </table>
        </div>
    )
}

export default WatchList; 