import axios from './axios';
import React, { useEffect, useState } from 'react';
import requests from './Request';
import './Banner.css'
import Play from './play.png';
import Info from './info.png'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginlas)
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        };
        fetchData();
    }, []);

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1>{movie?.name || movie?.original_name}</h1>

                <h1 className="title">
                    {movie?.title}
                </h1>

                {/* <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button1">My List</button>
                </div> */}

                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>

                <div className="banner_buttons">
                    <button className="banner_button">
                        <img src={Play}/>
                        Play</button>
                    <button className="banner_button1">
                    <img src={Info}/>
                    My List</button>
                </div>
            </div>

            <div className="banner--fadebottom" />
        </header>
    )
}

export default Banner
