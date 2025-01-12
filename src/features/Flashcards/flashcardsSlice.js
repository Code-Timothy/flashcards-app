import { createSlice } from "@reduxjs/toolkit";

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: {
        cards: [],
        loading: false,
        error: null,
    },
    reducers: {},
});

export const { } = flashcardsSlice.actions;

export const selectCardsState = (state) => state.cards;
export const selectCards = (state) => selectCardsState(state).cards

export const flashcardsReducer = flashcardsSlice.reducer;