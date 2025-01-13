/***
 Creating Custom Hook for fetching the posts
 - can reuse the logic
 - it should be a pure js function and should not return any jsx Element 
 - it should always start with use keyword. 
 */
import axios from "axios";
import { useEffect, useState } from "react";
export const useFetchData = (pageNo) => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getMovies() {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=apikey&language=en-US&page=${pageNo}`);
                const movies = response.data.results;
                setMovies(movies);
                console.log(movies)
            }
            catch (e) {
                console.error(e);
            }
        }
        try {
            getMovies();
        } catch (err) {
            setError(err);
        }


    }, [pageNo]);
    return {
        movies, error, isLoading
    }
}