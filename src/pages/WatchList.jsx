import React, { useEffect, useState, useContext } from "react";
import genreids from "../constants";
import { WatchListContext } from "../contexts/WatchListContext";
function WatchList() {
    // const [watchList, setWatchList] = useState([]);
    const { watchList, setWatchList } = useContext(WatchListContext);
    const [search, setSearch] = useState('');
    const [geners, setGeners] = useState(['All Geners']);
    const [currentGenre, setCurrentGenre] = useState('All Geners');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleGenreClick = (genre) => {
        setCurrentGenre(genre);
    }

    useEffect(() => {
        const movies = JSON.parse(localStorage.getItem('movies'));
        setWatchList(movies);
    }, []);

    useEffect(() => {
        let temp = watchList.map((movie) => {
            return genreids[movie.genre_ids[0]];
        })
        temp = new Set(temp);
        setGeners(["All Geners", ...temp]);
    }, [watchList])

    const handleAscendingOrder = () => {
        const sortAsceding = watchList.sort((mvA, mvB) => {
            return mvA.vote_average - mvB.vote_average;
        })
        setWatchList([...sortAsceding])
    }

    const handleDecendingOrder = () => {
        const sortDeceding = watchList.sort((mvA, mvB) => {
            return mvB.vote_average - mvA.vote_average;
        })
        setWatchList([...sortDeceding])
    }


    return (
        <>
            <div className="flex justify-center p-4 mt-4">
                {geners.map((genre, index) => {
                    const baseStyle = "cursor-pointer  flex m-4 h-[3rem] w-[8rem] justify-center items-center rounded-lg font-bold text-white mx-4";
                    const isActive = currentGenre === genre;
                    const bgColor = isActive ? 'bg-blue-400' : 'bg-gray-400/50';
                    return (
                        <div key={index} onClick={() => handleGenreClick(genre)} className={`${baseStyle} ${bgColor}`}>
                            {genre}
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center py-10">
                <input
                    onChange={(e) => handleSearch(e)}
                    type='text'
                    value={search}
                    placeholder="Search Movie"
                    className="h-[3rem] w-[18rem] px-4 bg-gray-200 outline-none border border-gray-300 rounded-lg"
                />
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-s-orange-600">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                    <tr>
                        <th className="table-cell">Name</th>
                        <th className="table-cell px-6 py-3 "><i className="mr-2 fas fa-long-arrow-up cursor-pointer" onClick={handleDecendingOrder}></i>Rattings<i onClick={handleAscendingOrder} className="fas fa-long-arrow-down ml-2 cursor-pointer"></i></th>
                        <th className="table-cell px-6 py-3">Popularity</th>
                        <th className="table-cell px-6 py-3">Genre</th>
                    </tr>
                </thead>
                <tbody>


                    {watchList.filter((movie) => {
                        if (currentGenre === 'All Geners') {
                            return true;
                        } else {

                            return genreids[movie.genre_ids[0]] === currentGenre;
                        }
                    }).filter((movie) => {
                        //console.log(movie.title.toLowerCase().includes('The'));
                        return movie.title.toLowerCase().includes(search.toLowerCase());
                    }).map(movie => (
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
        </>
    )
}

export default WatchList; 