import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import movieApi from "../../api/movieApi";


export const fetchMovieById = createAsyncThunk(
    "movie/fetchMovieById",
    async (id) => {
        console.log("dsd");
        const { data } = await movieApi.getMovieById(id);
        console.log(data, ' data ')
    }
);

const movieSlise = createSlice({
    name: 'movie',
    initialState: {
        date: []
    },
    reducers: {},
    extraReducers: (builder) => { }
})

export const movieReducer = movieSlise.reducer;