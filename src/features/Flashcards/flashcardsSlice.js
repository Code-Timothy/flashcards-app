import { createSlice } from "@reduxjs/toolkit";

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: {
        cards: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchDictionaryApiRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDictionaryApiSuccess: (state, action) => {
            state.loading = false;
            state.cards = action.payload;
        },
        fetchDictionaryApiFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchDictionaryApiRequest, fetchDictionaryApiSuccess, fetchDictionaryApiFailure } = flashcardsSlice.actions;
export const flashcardsReducer = flashcardsSlice.reducer;