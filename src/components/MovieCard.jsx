import { useContext } from "react";

import { WatchListContext } from "../contexts/WatchListContext";

const MovieCard = ({ movie, isLast, getLastElementRef }) => {
    const { watchList, removeFromWatchList, addToWatchList } = useContext(WatchListContext);

    const doesContain = (movie) => {
        return watchList.some((mv) => mv.id === movie.id);
    }
    return (
        <div ref={isLast ? (node) => getLastElementRef(node) : null} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }} className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col relative">
            <>
                <div className="text-white w-full text-center p-2 rounded-lg bg-gray-900">{movie.title}</div>
                {doesContain(movie) ? (<div onClick={() => { removeFromWatchList(movie.id) }} className="m-4 flex justify-center h-4 w-4 absolute left-0 bottom-0 text-red-700">X</div>) : (<div onClick={() => { addToWatchList(movie) }} className="m-4 flex justify-center h-4 w-4 absolute left-0 bottom-0">&#128578;</div>)}
            </>
        </div>
    )
}
export default MovieCard;