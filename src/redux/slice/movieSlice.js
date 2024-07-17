import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import movieApi from "../../api/movieApi";


export const fetchMovieById = createAsyncThunk(
    "movie/fetchMovieById",
    async (id) => {
        console.log("dsd");
        const { data } = await movieApi.getMovieById(id);
        console.log(data, ' data ')
        const {data: trailerData} = await movieApi.getMovieTrailer(data.id)
        const keys = trailerData.results.map( film => film.key)
        console.log(keys);
        return {
            data,
            keys
        }
    }
);

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        data: [],
        keys: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovieById.fulfilled, (state, {payload}) =>{
            state.data = payload.data
            state.keys = payload.keys
        })
     }
})

export const movieReducer = movieSlice.reducer;