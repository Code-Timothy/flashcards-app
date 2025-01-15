import { createSlice } from "@reduxjs/toolkit";
import { getFlashcardsFromLocalStorage } from "./flashcardsLocalStorage";

const initializeState = () => {
    try {
        const savedData = getFlashcardsFromLocalStorage("flashcards");
        return {
            flashcardsByCategory: savedData.flashcardsByCategory || {},
            globalCategories: savedData.globalCategories || [],
            loading: false,
            error: null,
            currentIndex: 0,
        };
    } catch (error) {
        console.error("Error loading flashcards from localStorage:", error);
        return {
            flashcardsByCategory: {},
            globalCategories: [],
            loading: false,
            error: null,
            currentIndex: 0,
        };
    };
};

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: initializeState(),
    reducers: {
        addFlashcard: (state, action) => {
            const { category, word, meaning, id } = action.payload;

            if (!state.flashcardsByCategory[category]) {
                state.flashcardsByCategory[category] = [];
            };

            state.flashcardsByCategory[category].push({
                id,
                word,
                meaning,
            });
        },
        addCategory: (state, action) => {
            const category = action.payload;

            if (!state.globalCategories.includes(category)) {
                state.globalCategories.push(category);
            };

            if (!state.flashcardsByCategory[category]) {
                state.flashcardsByCategory[category] = [];
            };
        },
        nextFlashcard: (state, action) => {
            const category = action.payload;

            if (!state.flashcardsByCategory[category] || state.flashcardsByCategory[category].length === 0) {
                state.currentIndex = 0;
            };

            const nextIndex = state.currentIndex + 1;

            if (nextIndex < state.flashcardsByCategory[category].length) {
                state.currentIndex = nextIndex;
            } else {
                state.currentIndex = 0;
            }
        },
    },
});

export const { addFlashcard, addCategory, nextFlashcard } = flashcardsSlice.actions;

export const selectFlashcardsState = (state) => state.flashcards;
export const selectFlashcardsByCategory = (state, category) =>
    selectFlashcardsState(state).flashcardsByCategory[category] || [];
export const selectGlobalCategories = (state) => selectFlashcardsState(state).globalCategories;
export const selectCurrentIndex = (state) => selectFlashcardsState(state).currentIndex;

export const flashcardsReducer = flashcardsSlice.reducer;