import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function Banner() {
    //https://miro.medium.com/v2/resize:fit:1400/1*XmyFdnMgLVp19B0xcWEucQ.jpeg
    const [bannerImage, setBannerImage] = useState('');
    const [bannerTitle, setBannerTitle] = useState('')
    useEffect(() => {
        async function getMovies() {
            try {
                const apiKey = import.meta.env.REACT_APP_API_URL;
                const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&language=en-US&page=1`);
                const firstMovie = response.data.results[0];
                const posterImage = firstMovie.backdrop_path;
                const posterTitle = firstMovie.title;
                setBannerImage(`https://image.tmdb.org/t/p/original/${posterImage}`);
                setBannerTitle(posterTitle);
            }
            catch (e) {
                console.error(e);
            }
        }
        getMovies();

    }, []);
    return (
        <div className="h-[20vh] md:h-[75vh] bg-cover bg-top flex items-end relative" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="w-full text-white text-center text-2xl">{bannerTitle}</div>
            {/* <div onClick={handleBanner} className="absolute top-1/4 left-0 text-3xl"><i className="text-black bg-white p-2 rounded-r-lg fa-solid fa-arrow-left"> </i></div>
            <div className="absolute top-1/4 right-0 text-3xl"><i className="text-black p-2 bg-white rounded-l-lg fa-solid fa-arrow-right"> </i></div> */}
        </div>
    )
}
export default Banner;