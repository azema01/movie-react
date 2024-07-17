import { useEffect } from 'react';
import './MovieInfo.css';
import MovieTrailers from '../../components/movie-trailers/MovieTrailers';
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieById } from "../../redux/slice/movieSlice";
import { useParams } from 'react-router-dom';
import MoviePoster from '../../components/movie-poster/MoviePoster';


const MovieInfo = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.movie);

    useEffect(() => {
        dispatch(fetchMovieById(id));
    }, [dispatch, id]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка при загрузке данных фильма</div>;
    }

    return (
        <div className='container-movie'>
            {data && (
                <MoviePoster 
                    data={data} 
                    overview={data.overview} 
                    release_date={data.release_date}
                    year={data.year}
                    origin_country={data.origin_country}
                    genres={data.genres}
                    />
                
            )}
            <MovieTrailers />
        </div>
    );
}

export default MovieInfo;
