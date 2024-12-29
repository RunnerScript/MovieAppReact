import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import WatchList from "../pages/WatchList";
function MovieRouter() {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="watchlist" element={<WatchList />} />
        </Routes>

    )
}
export default MovieRouter;