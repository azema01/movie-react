// import { Container, } from '@mui/material'
// import './Hero2.css'
// import hero2card from '../../assets/png/hero2-card.png'
// import Slider from 'react-slick'
// import New from '../films/New'


// const Hero2 = () => {
//     return (
//         <div>
//             <Container maxWidth={'lg'} sx={{ background: '#000000', height: '70vh' }}>
//                 <div className='hero2-block'>
//                     <a href="../films/New.jsx">Новинки</a>
//                     <a href="../films/Popular.jsx">Популярное</a>
//                     <a href="../films/Watching.jsx">Смотрят сейчас</a>
//                     <a href="../films/Recom.jsx">Рекомендации</a>
//                     <a href="../films/Top.jsx">Топ 10</a>
//                     <a href="../films/Soon.jsx">Скоро на Illuminous</a>
//                 </div>
//                 <Slider className='hero2-sl'>
//                     <div className='hero2-card'>
//                         <div className='reiting'>
//                             <p className='reiting-p'>7.8</p>
//                         </div>
//                         <img src={hero2card} alt="hero2-card" />
//                         <h5 className='hero2-h5'>Джон Уик 4</h5>
//                         <p className='hero2-p'>2023</p>
//                     </div>
//                 </Slider>
//                 <New/>
                
//             </Container>
//         </div>
//     )
// }

// export default Hero2



// import React, { useState, useEffect } from 'react';
// import { Container } from '@mui/material';
// import Slider from 'react-slick';
// import './Hero2.css';
// // import hero2card from '../../assets/png/hero2-card.png';

// const Hero2 = () => {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=YOUR_API_KEY')
//             .then(response => response.json())
//             .then(data => {
//                 setMovies(data.results);  // Assuming results is an array of movie objects
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     return (
//         <div>
//             <Container maxWidth={'lg'} sx={{ background: '#000000', height: '70vh' }}>
//                 <Slider className='hero2-sl'>
//                     {movies.map(movie => (
//                         <div key={movie.id} className='hero2-card'>
//                             <div className='reiting'>
//                                 <p className='reiting-p'>{movie.vote_average}</p>
//                             </div>
//                             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//                             <h5 className='hero2-h5'>{movie.title}</h5>
//                             <p className='hero2-p'>{movie.release_date}</p>
//                         </div>
//                     ))}
//                 </Slider>
//             </Container>
//         </div>
//     );
// }

// export default Hero2;



import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Slider from 'react-slick';
import './Hero2.css';
import hero2card from '../../assets/png/hero2-card.png';

const Hero2 = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const apiKey = 'YOUR_API_KEY'; // Replace with your actual TMDb API key
                const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ru-RU&page=1`;

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

        fetchMovies();
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
            <Container maxWidth={'lg'} sx={{ background: '#000000', height: '70vh' }}>
                <div className='hero2-block'>
                    <a href="../films/New.jsx">Новинки</a>
                    <a href="../films/Popular.jsx">Популярное</a>
                    <a href="../films/Watching.jsx">Смотрят сейчас</a>
                    <a href="../films/Recom.jsx">Рекомендации</a>
                    <a href="../films/Top.jsx">Топ 10</a>
                    <a href="../films/Soon.jsx">Скоро на Illuminous</a>
                </div>
                <Slider {...settings} className='hero2-sl'>
                    {movies.map(movie => (
                        <div key={movie.id} className='hero2-card'>
                            <div className='reiting'>
                                <p className='reiting-p'>{movie.vote_average}</p>
                            </div>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <h5 className='hero2-h5'>{movie.title}</h5>
                            <p className='hero2-p'>{movie.release_date}</p>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    );
}

export default Hero2;
