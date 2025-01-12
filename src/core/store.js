import { configureStore } from "@reduxjs/toolkit";
import { flashcardsReducer } from "../features/Flashcards/flashcardsSlice";

const store = configureStore({
    reducer: {
        cards: flashcardsReducer,
    },
});

export default store;