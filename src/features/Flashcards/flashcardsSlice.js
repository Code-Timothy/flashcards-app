import { createSlice } from "@reduxjs/toolkit";

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: {
        flashcards: [],
        globalCategory: null,
        loading: false,
        error: null,
        currentIndex: 0,
    },
    reducers: {
        addFlashcard: (state, action) => {
            state.flashcards.push(action.payload);
        },
        addCategory: (state, action) => {
            state.globalCategory = action.payload;
        },
        nextFlashcard: (state) => {
            const nextIndex = state.currentIndex + 1;

            if (nextIndex < state.flashcards.length) {
                state.currentIndex = nextIndex;
            } else {
                state.currentIndex = 0;
            }
        },
    },
});

export const { addFlashcard, addCategory, nextFlashcard } = flashcardsSlice.actions;

export const selectFlashcardsState = (state) => state.flashcards;
export const selectFlashcards = (state) => selectFlashcardsState(state).flashcards;
export const selectGlobalCategory = (state) => selectFlashcardsState(state).globalCategory;
export const selectCurrentIndex = (state) => selectFlashcardsState(state).currentIndex;

export const flashcardsReducer = flashcardsSlice.reducer;