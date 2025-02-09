import { createSlice } from "@reduxjs/toolkit";
import { getFlashcardsFromLocalStorage } from "./flashcardsLocalStorage";

const initializeState = () => {
    try {
        const savedData = getFlashcardsFromLocalStorage("flashcards");
        return {
            flashcardsByCategory: savedData.flashcardsByCategory || {},
            globalCategories: savedData.globalCategories || [],
            currentCategory: null,
            loading: false,
            error: null,
            currentIndex: 0,
        };
    } catch (error) {
        console.error("Error loading flashcards from localStorage:", error);
        return {
            flashcardsByCategory: {},
            globalCategories: [],
            currentCategory: null,
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
        setCurrentCategory: (state, { payload }) => {
            state.currentCategory = payload;
        },
        removeFlashcard: ({ flashcardsByCategory }, { payload: { flashcardId, category } }) => {
            if (category && flashcardsByCategory[category]) {
                const flashcardIndex = (
                    flashcardsByCategory[category].findIndex(flashcard => flashcard.id === flashcardId)
                );
                flashcardsByCategory[category].splice(flashcardIndex, 1);
            }
        },
        editWord: ({ flashcardsByCategory }, { payload: { flashcardId, category, newWord } }) => {
            const flashcard = flashcardsByCategory[category]?.find(flashcard => flashcard.id === flashcardId);
            if (flashcard) {
                flashcard.word = newWord;
            }
        },
        editMeaning: ({ flashcardsByCategory }, { payload: { flashcardId, category, newMeaning } }) => {
            const flashcard = flashcardsByCategory[category]?.find(flashcard => flashcard.id === flashcardId);
            if (flashcard) {
                flashcard.meaning = newMeaning;
            }
        },
    },
});

export const {
    addFlashcard,
    addCategory,
    nextFlashcard,
    setCurrentCategory,
    removeFlashcard,
    editWord,
    editMeaning,
} = flashcardsSlice.actions;

export const selectFlashcardsState = (state) => state.flashcards;
export const selectGlobalCategories = (state) => selectFlashcardsState(state).globalCategories;
export const selectCurrentIndex = (state) => selectFlashcardsState(state).currentIndex;
export const selectCurrentCategory = (state) => selectFlashcardsState(state).currentCategory;

export const selectFlashcardsByCategory = (state) =>
    selectFlashcardsState(state).flashcardsByCategory;

export const selectFlashcardsBySpecificCategory = (state, category) =>
    selectFlashcardsState(state).flashcardsByCategory[category] || {};

export const flashcardsReducer = flashcardsSlice.reducer;