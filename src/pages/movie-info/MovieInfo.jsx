import React, { useEffect } from 'react';
import './MovieInfo.css';
import Fon from "../../assets/png/fon.png";
import Block from "../../assets/png/block-1.png";
import MoviePoster from '../../components/movie-poster/MoviePoster';
import MovieTrailers from '../../components/movie-trailers/MovieTrailers';
import { useDispatch, useSelector } from "react-redux"
import { fetchMovieById } from "../../redux/slice/movieSlice"
import { useParams } from 'react-router-dom';

const MovieInfo = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovieById(id))
    }, [])

    return (

        <div className='container-movie'>
               
            <MoviePoster Fon={Fon} Block={Block} />
            <MovieTrailers />
        </div>
    );
}

export default MovieInfo;

