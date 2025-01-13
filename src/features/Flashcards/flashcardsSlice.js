import { createSlice } from "@reduxjs/toolkit";

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: {
        flashcards: [],
        globalCategory: null,
        loading: false,
        error: null,
    },
    reducers: {
        addFlashcard: (state, action) => {
            state.flashcards.push(action.payload);
        },
        addCategory: (state, action) => {
            state.globalCategory = action.payload;
        },
    },
});

export const { addFlashcard, addCategory } = flashcardsSlice.actions;

export const selectFlashcardsState = (state) => state.flashcards;
export const selectFlashcards = (state) => selectFlashcardsState(state).flashcards;
export const selectGlobalCategory = (state) => selectFlashcardsState(state).globalCategory;

export const flashcardsReducer = flashcardsSlice.reducer;