import React, { useEffect, useState } from "react"
import Cards from "../card/Cards"
import "./movieList.css"

import { useParams } from "react-router-dom"


const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    const { type } = useParams()
    // console.log(type);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then((response) => {
            // console.log(response);
            response.json().then((data) => {
                // console.log(data);
                setMovieList(data.results)
            })
        })
    },[])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${type 
        ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then((response) => {
            console.log(response);
            response.json().then((data) => {
                console.log(data);
                setMovieList(data.results)
            })
        })
    },[type])
    return (
        <>
            <div className="movie__list">
                <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
                <div className="list__cards">
                    {
                        movieList.map((movie,i) => {
                            return <Cards movie={movie} key={i} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default MovieList;