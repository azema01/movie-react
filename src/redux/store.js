


import { configureStore } from "@reduxjs/toolkit"
import { movieReducer } from "./slice/movieSlice";
import { categoryReducer } from "./slice/categorySlice";

const store = configureStore({
    reducer: {
        movie: movieReducer,
        category: categoryReducer,
    }
});


export default store;