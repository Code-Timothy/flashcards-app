import { createSlice } from "@reduxjs/toolkit";

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: {
        cards: [],
    },
    reducers: {},
});

export const flashcardsReducer = flashcardsSlice.reducer;