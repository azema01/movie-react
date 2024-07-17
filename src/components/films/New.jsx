import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import hero2card from '../../assets/png/hero2-card.png';

const New = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNewMovies = async () => {
            try {
                const apiKey = 'YOUR_API_KEY'; // Replace with your actual TMDb API key
                const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ru-RU&page=2`;

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const data = await response.json();
                setMovies(data.results);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchNewMovies();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings} className='hero2-sl'>
                {movies.map(movie => (
                    <div key={movie.id} className='hero2-card'>
                        <div className='reiting'>
                            <p className='reiting-p'>{movie.vote_average}</p>
                        </div>
                        <img src={hero2card} alt="hero2-card" />
                        <h5 className='hero2-h5'>{movie.title}</h5>
                        <p className='hero2-p'>{movie.release_date}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default New;

