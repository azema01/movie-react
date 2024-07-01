import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import movieApi from "../../api/movieApi";


export const fetchMovieCategories = createAsyncThunk(
    "movie/fetchMovieCategories",
    async () => {
        console.log("dsd");
        const { data } = await movieApi.getMovieCategories();
        console.log(data, ' data ')

        return data
    }
);

const categorySlise = createSlice({
    name: 'category',
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovieCategories.pending, () => { })
        builder.addCase(fetchMovieCategories.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(fetchMovieCategories.rejected, () => { })
    }
})

export const categoryReducer = categorySlise.reducer;