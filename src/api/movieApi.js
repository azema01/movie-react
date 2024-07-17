import axios from "../axios";
//movie/popular?api_key=2fa8f297328a4293f06805fe0c1b915d   &language=en
class MovieApi {
    #api_key = "?api_key=2fa8f297328a4293f06805fe0c1b915d"

    getPopularMovie() {
        return axios.get("/movie/popular" + this.#api_key + "&language=ru")
    }
    getMovieById(id) {
        return axios.get(`/movie/${id}` + this.#api_key + "&language=ru")
    }
    getTop10Movie() { }
    getLastMovie() { }
    getMovieNowPlaying() { }
    getMovieCategories() {
        return axios.get("/genre/movie/list" + this.#api_key + "&language=ru")
    }
    getSearchMovie(name) {
        return axios.get("/search/movie" + this.#api_key + `&query=${name}&language=ru`)
    }
    getMovieTrailer(id){
        return axios.get(`movie/${id}/videos${this.#api_key}&language=en`)
    }
}
export default new MovieApi();