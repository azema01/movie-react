
// import { useSelector } from 'react-redux';
// import './MovieTrailers.css';
// import { Container } from '@mui/material';

// const MovieTrailers = () => {
//     const { keys } = useSelector(state => state.movie)
//     const url = "https://www.youtube.com/embed/"
//     return (
//         <div className='container-trailers'>
//             <Container maxWidth="lg" 
//             sx={{background: "#black" }}>
//                 <div className='trailers-cl'>
//                     <h2 className='trailers'>Трейлеры</h2>
//                     <div className='cocmos'>
//                     {keys.map((key, i) => (
//                      <iframe key={i} width="560" height="315" src={url+key} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                          
//                     ))}
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     );
// }
// export default MovieTrailers;




import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MovieTrailers.css';
import { Container } from '@mui/material';

const MovieTrailers = () => {
    const { keys } = useSelector(state => state.movie);
    const url = "https://www.youtube.com/embed/";

    // Slick slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='container-trailers'>
            <Container maxWidth="lg">
                <div className='trailers-cl'>
                    <h2 className='trailers'>Трейлеры</h2>
                    <Slider {...sliderSettings} className='Slider'>
                        {keys.map((key, i) => (
                            <div key={i} >
                                <iframe
                                
                                    width="100%"
                                    height="315"
                                    src={url + key}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    
                                ></iframe>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* <div className='trailers-block'>
                    <h2 className='films-trailers'>Похожие фильмы</h2>

                </div> */}
            </Container>

        </div>
    );
};

export default MovieTrailers;
