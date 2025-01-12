import { configureStore } from "@reduxjs/toolkit";
import { flashcardsReducer } from "../features/Flashcards/flashcardsSlice";

const store = configureStore({
    reducer: {
        flashcards: flashcardsReducer,
    },
});

export default store;