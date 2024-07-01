import { Box, Button, Container, Typography } from "@mui/material"
//slick slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState, useRef } from "react"
import movieApi from "../../api/movieApi";
import './Hero.css'
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { IoChevronBackSharp } from "react-icons/io5";
import btn from "../../assets/svg/btn-play.png"

const img_url = "https://image.tmdb.org/t/p/original";

const Hero = () => {
    const [films, setFilims] = useState([])
    const [filmIndex, setFilmsIndex] = useState(0)
    const ref = useRef()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        afterChange: (index) => {
            console.log(index);
            setFilmsIndex(index)
        }
    };

    useEffect(() => {
        const getMovie = async () => {
            const { data } = await movieApi.getPopularMovie()
            console.log(data, ' data ----------------');
            setFilims(data.results.slice(0, 4))
        }
        getMovie()
    }, [])

    const handleNext = () => {
        if (ref.current) {
            ref.current.slickNext()
        }
    }
    const handlePrev = () => {
        if (ref.current) {
            ref.current.slickPrev()
        }
    }
    return (
        <div className="container">
            <button onClick={handlePrev} className="nav-button left">
                <IoChevronBackSharp />
            </button>
            <button onClick={handleNext} className="nav-button right">
                <MdNavigateNext />
            </button>
            <Slider {...settings} ref={ref}>
                {films.map(({ id, title, overview, backdrop_path }) => {
                    return (<div key={id}>
                        <div style={{
                            background: `green url(${img_url}${backdrop_path}) center/cover`, height: '620px'
                        }}>
                            <Container maxWidth="lg" sx={{ bgcolor: '#00000090', height: '100%', width: '100%', p: "0px" }} >
                                <Box sx={{ pl: "120px", pt: "100px", width: '100%' }}>
                                    <Typography component={"p"} mb="26px" color={"#979797"}
                                        sx={{
                                            '&::before': {
                                                content: '""',
                                                height: 2,
                                                width: 53,
                                                background: "#979797",
                                                display: 'inline-block',
                                                mr: "14px"
                                            }
                                        }}
                                    >Выбор Illuminous</Typography>
                                    <Typography
                                        component={"h1"}
                                        mb="15px"
                                        color={"#fff"}
                                        fontSize={"40px"}>
                                        {title}
                                    </Typography>
                                    <Typography component={"p"} color={"#fff"} maxWidth={"502px"} fontSize={"18px"} mb="30px">
                                        {overview.substring(0, 250) + " [...] "}
                                        {/* qwerty123 */}
                                    </Typography>
                                    <Button variant="container"
                                        component={Link}
                                        to={`/movie/${id}`}
                                        sx={{
                                            background: "#EF4234",
                                            color: "#fff",
                                            borderRadius: "36px",
                                            mb: '123px'
                                        }}
                                    >Смотреть<img onClick={handleNext} className="play-button" src={btn} alt="btn" /></Button>

                                    <div className="dods">
                                        {films.map((d, index) => <div key={d.id} className={filmIndex == index ? "active" : ""}></div>)}
                                    </div>
                                </Box>
                            </Container>
                        </div>
                    </div>)
                })}

            </Slider>
            {/* <div style={{
                background: 'green',
                position: "absolute",
                top: 0,
                left: 0,
                width: '100%',
                height: 800,
                paddingTop: 240

            }}>

                <Container maxWidth="lg" >
                    <Box sx={{ pl: '120px' }}>
                        <Typography component={"p"} mb="26px" color={"#979797"}
                            sx={{
                                '&::before': {
                                    content: '""',
                                    height: 2,
                                    width: 53,
                                    background: "#979797",
                                    display: "inline-block",
                                    mr: "14px"
                                }
                            }}
                        >Выбор Illuminous</Typography>
                        <Typography component={"h1"} mb="15px"
                            color={'#fff'}
                            fontSize={"40px"}>
                            Джокер</Typography>
                        <Typography component={"p"} color={"#fff"}
                            maxWidth={"502px"}
                            fontSize={"18px"}
                            mb="30px">

                            Готэм. Комик Артур Флек живет с больной матерью,
                            которая с детства учит его «ходить с улыбкой» </Typography>
                        <Button variant="contained"
                            sx={{
                                background: "#EF4232",
                                color: "#fff",
                                borderRadius: "36px"
                            }}
                        >Смотреть</Button>
                    </Box>

                </Container>
            </div> */}
        </div>
    )
}
export default Hero
