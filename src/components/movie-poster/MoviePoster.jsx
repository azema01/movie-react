import React from 'react';
import { IMG_URL } from '../../constants'; // Assuming IMG_URL is imported correctly
import './MoviePoster.css'; // Corrected CSS import
import { Container } from '@mui/material';

const MoviePoster = ({ data, overview, release_date }) => {
    return (
        <div className='movie-poster'>
            <Container maxWidth='lg'>
            <div className='background-image' style={{ backgroundImage: `url(${IMG_URL + data.backdrop_path})` }}>
                <div className='content'>
                    <img className='block-1' src={IMG_URL + data.poster_path} alt={`${data.title} постер`} />
                    <div className='text-content'>
                        <h2 className='text-h2'>{data.title}</h2>
                        <div className='text-info'>
                            <p className='text-p'>{release_date}</p>
                            <p className='text-p'>18+</p>
                            <p className='text-p'>США</p>
                            <p className='text-p'>Драма</p>
                            <p className='text-p'>Фантастика</p>
                            <p className='text-p'>Приключения</p>
                        </div>
                        <p className='block-p'>{overview}</p>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
}

export default MoviePoster;
