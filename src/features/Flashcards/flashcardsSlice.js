import { createSlice } from "@reduxjs/toolkit";

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: {
        flashcards: [],
        loading: false,
        error: null,
    },
    reducers: {
        addFlashcard: (state, action) => {
            state.flashcards.push(action.payload);
        },
    },
});

export const { addFlashcard } = flashcardsSlice.actions;

export const selectFlashcardsState = (state) => state.flashcards;
export const selectFlashcards = (state) => selectFlashcardsState(state).flashcards;

export const flashcardsReducer = flashcardsSlice.reducer;