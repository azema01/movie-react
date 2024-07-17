import { Box, Container, IconButton, InputBase, Paper, Typography } from '@mui/material';
import './SearchMovie.css';
import { LuSearch } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchSearch } from '../../redux/slice/searchSlice';
import Slider from 'react-slick';
import MovieCard from '../../components/movie-card/MovieCard'

const SearchMovie = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [showSlider, setShowSlider] = useState(false);
    const { data } = useSelector(state => state.search);

    const handleSearch = () => {
        setShowSlider(true);
        dispatch(fetchSearch(name));
    };

    let text;
    if (data.length === 0) {
        text = <Typography variant='h3' className='text-center'>Loading...</Typography>;
    }

    return (
        <div className='search-bg'>
            <Container maxWidth="lg" className='block-slider'>
                <Box sx={{ paddingLeft: "120px" }}>
                    <Typography variant='h3' mb='15px' fontSize={"24px"} color={"#fff"}>
                        Поиск по сайту
                    </Typography>
                    <Typography mb={"60px"} maxWidth={"420px"} component='p' fontSize={"18px"} color={"#979797"}>
                        На нашем сайте вы найдете подходящие вам фильмы и сериалы
                    </Typography>
                    <Box>
                        <Paper
                            component="form"
                            sx={{
                                borderRadius: "10px",
                                background: '#1A1A1A',
                                p: '2px 4px',
                                display: 'flex',
                                alignItems: 'center',
                                width: "98%",
                            }}
                        >
                            <InputBase
                                onChange={(evt) => setName(evt.target.value)}
                                sx={{ ml: 1, flex: 1, color: "#979797" }}
                                placeholder="Поиск..."
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <IconButton onClick={handleSearch} type="button" sx={{ p: '10px', color: '#EF4234' }} aria-label="search">
                                <LuSearch />
                            </IconButton>
                        </Paper>
                    </Box>
                </Box>

                {showSlider && (
                    <Box sx={{ paddingLeft: "120px", paddingTop: "20px" }}>
                        {data.length === 0 ? (
                            text
                        ) : (
                            <Slider
                                dots={true}
                                infinite={true}
                                speed={500}
                                slidesToShow={4}
                                slidesToScroll={1}
                            >
                                {data.map(movie => (
                                    <div key={movie.id}>
                                        <MovieCard movie={movie} />
                                    </div>
                                ))}
                            </Slider>
                        )}
                    </Box>
                )}
            </Container>
        </div>
    );
};

export default SearchMovie;
