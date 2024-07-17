
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import movieApi from "../../api/movieApi";
export const fetchSearch = createAsyncThunk(
    "search/fetchSearch",
    async (name) => {
        const { data } = await movieApi.getSearchMovie(name);
        console.log(data);
        return data.results;
    }
)

const searchSlice = createSlice({
    name: "search",
    initialState: {
        data: []
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSearch.fulfilled, (state, { payload }) => {
            state.data = payload;
        })
    }
})

export const searchReducer = searchSlice.reducer;