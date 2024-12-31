import { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();
export default function WatchListContextWrapper({ children }) {

    const [watchList, setWatchList] = useState([]);

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
        <WatchListContext.Provider value={{ watchList, setWatchList, addToWatchList, removeFromWatchList }}>
            {children}
        </WatchListContext.Provider>
    );

}