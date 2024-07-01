import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";
import MovieInfo from "../pages/movie-info/MovieInfo";
import MovieTrailers from "../components/movie-trailers/MovieTrailers";
import Horror from "../components/horror/Horror";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movie/:id" element={<MovieInfo />} />
                <Route path="/trailers/:id" element={<MovieTrailers />} />
                <Route path="/horror" element={<Horror />} />
                <Route path="/registration" element={<h2>Registration page</h2>} />
                <Route path="/profile" element={<h2>Profile page</h2>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes