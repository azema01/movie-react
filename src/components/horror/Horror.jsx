// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Container } from '@mui/material';
// import { MdNavigateNext } from "react-icons/md";
// import './Horror.css';

// const Horror = () => {
//     const [genres, setGenres] = useState([]);
//     const [currentSlide, setCurrentSlide] = useState(0);

//     useEffect(() => {
//         const fetchGenres = async () => {
//             try {
//                 const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=2fa8f297328a4293f06805fe0c1b915d&language=ru-RU');
//                 const genresWithImages = await Promise.all(response.data.genres.map(async genre => {
//                     const moviesResponse = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2fa8f297328a4293f06805fe0c1b915d&language=ru-RU&with_genres=${genre.id}`);
//                     const movie = moviesResponse.data.results[0];
//                     const imageUrl = movie ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ''; 
//                     return { ...genre, imageUrl };
//                 }));
//                 setGenres(genresWithImages);
//             } catch (error) {
//                 console.error("Error fetching genres:", error);
//             }
//         };
//         fetchGenres();
//     }, []);

//     const handleNextSlide = () => {
//         setCurrentSlide((prev) => (prev + 3) % genres.length);
//     };

//     const displayedGenres = genres.slice(currentSlide, currentSlide + 3);

//     return (
//         <Container maxWidth="lg">
//             <div className='c-horror'>
//                 <div className='horror-div'>
//                     <h1 className='horror-h1'>Смотрите фильмы, которые вам нравятся</h1>
//                     <p className='horror-p1'>На нашем сайте собрано огромное количество <br />
//                         фильмов и сериалов на любой вкус</p>
//                 </div>
//                 <div className='horror-slider'>
//                     {displayedGenres.map((genre, index) => (
//                         <div className='horror-block1' key={index}>
//                             {genre.imageUrl ? (
//                                 <img className='horror-img' src={genre.imageUrl} alt={genre.name} />
//                             ) : (
//                                 <div className='horror-img-placeholder'></div>
//                             )}
//                             <h2 className='horror-h2'>{genre.name}</h2>
//                             <p className='horror-p'>{Math.floor(Math.random() * 100) + 'k+ фильмов'}</p>
//                         </div>
//                     ))}
//                     <button className="horror-button" onClick={handleNextSlide}>
//                         <MdNavigateNext />
//                     </button>
//                 </div>
//             </div>
//         </Container>
//     );
// }

// export default Horror;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';
import { MdNavigateNext } from "react-icons/md";
import './Horror.css';


const Horror = () => {
    const [genres, setGenres] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=2fa8f297328a4293f06805fe0c1b915d&language=ru-RU');
                const genresWithImages = await Promise.all(response.data.genres.map(async genre => {
                    const moviesResponse = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2fa8f297328a4293f06805fe0c1b915d&language=ru-RU&with_genres=${genre.id}`);
                    const movie = moviesResponse.data.results[0];
                    const imageUrl = movie ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ''; 
                    return { ...genre, imageUrl };
                }));
                setGenres(genresWithImages);
            } catch (error) {
                console.error("Error fetching genres:", error);
            }
        };
        fetchGenres();
    }, []);

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 3) % genres.length);
    };

    const displayedGenres = genres.slice(currentSlide, currentSlide + 3);

    return (
        <Container maxWidth="lg">
            <div className='c-horror horror-background'>
                <div className='horror-div'>
                    <h1 className='horror-h1'>Смотрите фильмы, которые вам нравятся</h1>
                    <p className='horror-p1'>На нашем сайте собрано огромное количество <br />
                        фильмов и сериалов на любой вкус</p>
                </div>
                <div className='horror-slider'>
                    {displayedGenres.map((genre, index) => (
                        <div className='horror-block1' key={index}>
                            {genre.imageUrl ? (
                                <img className='horror-img' src={genre.imageUrl} alt={genre.name} />
                            ) : (
                                <div className='horror-img-placeholder'></div>
                            )}
                            <h2 className='horror-h2'>{genre.name}</h2>
                            <p className='horror-p'>{Math.floor(Math.random() * 100) + 'k+ фильмов'}</p>
                        </div>
                    ))}
                    <button className="horror-button" onClick={handleNextSlide}>
                        <MdNavigateNext />
                    </button>
                </div>
            </div>
        </Container>
    );
}

export default Horror;
