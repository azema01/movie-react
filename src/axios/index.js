import axios from "axios";
//1 https://api.themoviedb.org/3/
//2 /movie/popular?api_key=2fa8f297328a4293f06805fe0c1b915d&language=en
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Content-Type": "application/json",
        //"api_key": "2fa8f297328a4293f06805fe0c1b915d"
    }
})
export default instance;