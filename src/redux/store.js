
import { configureStore } from "@reduxjs/toolkit"
import { movieReducer } from "./slice/movieSlice";
import { categoryReducer } from "./slice/categorySlice";
import { searchReducer } from "./slice/searchSlice";

const store = configureStore({
    reducer: {
        movie: movieReducer,
        category: categoryReducer,
        search: searchReducer
    }
});


export default store;