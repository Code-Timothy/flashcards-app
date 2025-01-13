import { createSlice } from "@reduxjs/toolkit";

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: {
        flashcards: [],
        globalCategories: [],
        loading: false,
        error: null,
        currentIndex: 0,
    },
    reducers: {
        addFlashcard: (state, action) => {
            const category = action.payload.globalCategories;

            state.flashcards.push({
                ...action.payload,
                globalCategories: [category],
            });
        },
        addCategory: (state, action) => {
            if (!state.globalCategories.includes(action.payload)) {
                state.globalCategories.push(action.payload);
            }
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
export const selectGlobalCategories = (state) => selectFlashcardsState(state).globalCategories;
export const selectCurrentIndex = (state) => selectFlashcardsState(state).currentIndex;

export const flashcardsReducer = flashcardsSlice.reducer;