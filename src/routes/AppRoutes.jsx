import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";
import MovieInfo from "../pages/movie-info/MovieInfo";
import MovieTrailers from "../components/movie-trailers/MovieTrailers";
import Horror from "../components/horror/Horror";
import MoviePoster from "../components/movie-poster/MoviePoster";
import MovieCabinet from "../pages/MovieCabinet/MovieCabinet";
import MovieRegistration from "../components/movieRegistration/MovieRegistration";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movie/:id" element={<MovieInfo />} />
                <Route path="/trailers/:id" element={<MovieTrailers />} />
                <Route path="/horror" element={<Horror />} />
                <Route path="/moviePoster" element={<MoviePoster />} />
                <Route path="/movieCabine" element={<MovieCabinet />} />
                <Route path="/movieRegistration" element={<MovieRegistration/>} />
          
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes