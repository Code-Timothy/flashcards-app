import { createSlice } from "@reduxjs/toolkit";

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: {
        flashcards: [],
        loading: false,
        error: null,
    },
    reducers: {},
});

export const { } = flashcardsSlice.actions;

export const selectCardsState = (state) => state.flashcards;
export const selectCards = (state) => selectCardsState(state).flashcards;

export const flashcardsReducer = flashcardsSlice.reducer;